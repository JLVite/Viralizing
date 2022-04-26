import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import List from '../layouts/list';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class ListContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <List data={this.props.reportsOwn} refetch={this.props.refetch} history={this.props.history}/>}
      </div>
    );
  }
}

const QUERY = gql`
 query {
      reportsOwn{
        _id,
        name,
        owner {
          _id
        },
        items {
          name
          Description
          type,
          source {
            type,
            campaign {
              _id
              status
            },
            account {
              _id
              suspended
              type
              active
              delete
              network
              groups
              campaignsCount
            }
          }
        }
      }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, reportsOwn, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      reportsOwn,
      refetch,
    };
  },
  options: (ownProps) => (
    { pollInterval: 3000 }
  ),
});

const ListContainerWithData = withData(ListContainer);

// This container brings in Tracker-enabled Meteor data
const ListContainerWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId() || '',
  };
}, ListContainerWithData);

export default ListContainerWithUserId;
