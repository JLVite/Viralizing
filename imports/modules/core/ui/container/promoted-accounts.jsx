import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import Content from '../components/home/promoted-accounts/container';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class NewsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <Content data={this.props.accounts} refetch={this.props.refetch} history={this.props.history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query{
        accounts{
            _id,
            network,
            information{
                name,
                lastName,
                avatar
            },
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, accounts, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      accounts,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000,
      variables: {}
    }
  ),
});

const NewsContainerWithData = withData(NewsContainer);

export default NewsContainerWithData;
