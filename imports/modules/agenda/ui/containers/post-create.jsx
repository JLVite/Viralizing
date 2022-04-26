import React from 'react';
import { graphql } from 'react-apollo';
import { I18n } from 'react-redux-i18n';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import PostCreate from '../components/post-create';
import Loading from '../../../core/ui/components/loading';

class PostCreateContainer extends React.Component {
  constructor() {
    super();

    this.savePosts = this.savePosts.bind(this);
  }

  savePosts(data, from) {
    const getTranslation = key => `Agenda.publish.modal.messages.${key}`;
    const getErrorTranslation = key => `Agenda.methods.error.${key}`;
    const component = this;

    switch (from) {
      case 'draft':
        data.status = 'draft';
        break;
      default:
        data.status = 'scheduled';
    }

    Meteor.call('posts-scheduler', data, (err, res) => {
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
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <PostCreate
              tabIndex={this.props.tabIndex}
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

const PostCreateContainerWithData = withData(PostCreateContainer);

export default PostCreateContainerWithData;
