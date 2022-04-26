import React from 'react';
import { graphql } from 'react-apollo';
import { I18n } from 'react-redux-i18n';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import PostUpdate from '../components/post-update';
import Loading from '../../../core/ui/components/loading';

class PostUpdateContainer extends React.Component {
  constructor() {
    super();

    this.savePosts = this.savePosts.bind(this);
  }

  savePosts(data, from) {
    const getTranslation = key => `Agenda.publish.modal.messages.${key}`;
    const {
      close, event, account, refetchAgenda,
    } = this.props;
    data.account = account;
    data.accountId = event.accountId;

    // TODO: Validate Data
    switch (from) {
      case 'draft':
        data.status = 'draft';
        break;
      default:
        data.status = 'scheduled';
    }

    Meteor.call('edit-scheduler', data, event._id, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.reason = 'Failed to create post.';
        }
        console.error('ERROR_SAVING_POST', err);
        notie.alert(3, I18n.t(getTranslation('error')), 3);
        return;
      }
      notie.alert(1, I18n.t(getTranslation('saved')), 3);
      close();
      refetchAgenda();
    });
    refetchAgenda();
  }

  render() {
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <PostUpdate
              tabIndex={this.props.tabIndex}
              refetch={this.props.refetch}
              close={this.props.close}
              update
              event={this.props.event}
              data={this.props.accountsOwnSearch}
              refetch={this.props.refetch}
              savePosts={this.savePosts}
              controls={{
                media: true,
                date: true,
                location: true,
                preview: true,
                discard: true,
                draft: true,
                select: true,
              }}
            />
          )}
      </div>
    );
  }
}

const QUERY = gql`
    query($query: String!){
  accountsOwnSearch(query:$query){
    _id,
    network,
    information{
      name,
      lastName,
      avatar,
    }
  }
}
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, accountsOwnSearch, refetch,
    },
  }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      accountsOwnSearch,
      refetch,
    };
  },
  options: ownProps => (
    {
      pollInterval: 150000,
      variables: { query: '' },
    }
  ),
});

const PostUpdateContainerWithData = withData(PostUpdateContainer);

export default PostUpdateContainerWithData;
