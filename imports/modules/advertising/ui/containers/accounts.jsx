import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import List from '../layouts/facebook/accounts';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class ListContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <List data={this.props.accounts} refetch={this.props.refetch} history={this.props.history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query {
        accounts{
            _id,
            network,
            type,
            groups,
            owner {
                _id,
                profile{
                    name,
                    lastName,
                    avatar
                }
            },
            manager {
                _id,
                profile{
                    name,
                    lastName,
                    avatar
                }
            },
            information{
                name,
                lastName,
                avatar
            }
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
    { pollInterval: 3000 }
  ),
});

const ListContainerWithData = withData(ListContainer);

export default ListContainerWithData;
