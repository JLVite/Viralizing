import React from 'react';
import { graphql } from 'react-apollo';
import { I18n } from 'react-redux-i18n';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import PostAccount from '../components/account-post-create';
import Loading from '../../../core/ui/components/loading';

class PostAccountContainer extends React.Component {
  constructor() {
    super();

    this.savePosts = this.savePosts.bind(this);
  }

  savePosts(data, from) {
    console.log('DATA', data);
    data.account = this.props.account;
    const getTranslation = key => `Agenda.publish.modal.messages.${key}`;
    const getErrorTranslation = key => `Agenda.methods.error.${key}`;
    const component = this;

    // TODO: Validate Data
    switch (from) {
      case 'draft':
        data.status = 'draft';
        break;
      default:
        data.status = 'scheduled';
    }
    Meteor.call('posts-scheduler-account', data, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create post.';
        }
        notie.alert(3, I18n.t(getErrorTranslation(err.reason)), 3);
        return;
      }
      notie.alert(1, I18n.t(getTranslation('saved')), 3);
      component.props.close();
      component.props.refetch();
    });
    this.props.refetch();
  }

  render() {
    const { tabIndex } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <PostAccount
              tabIndex={tabIndex}
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
      avatar
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

const PostUpdateContainerWithData = withData(PostAccountContainer);

export default PostUpdateContainerWithData;
