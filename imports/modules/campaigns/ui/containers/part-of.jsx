import React from 'react';
import { graphql } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import Loading from '../../../core/ui/components/loading';
import List from '../layouts/part-of';

class ListContainer extends React.Component {
  render() {
    console.log('CONTAINRT_this.props.campaignsOwn', this.props.campaignsOwn);
    return (
      <div>
        {this.props.loading ? <Loading />
          : <List data={this.props.campaignsOwn} refetch={this.props.refetch} history={this.props.history} />}
      </div>
    );
  }
}

const QUERY = gql`
    query{
        campaignsOwn{
            _id,
            status,
            manager{
                _id,
                profile{
                    name,
                    lastName,
                    avatar
                }
            }
            owner{
                _id,
                profile{
                    name,
                    lastName,
                    avatar
                }
            }
            information{
                name,
                dateStart,
                dateEnd,
                brands{
                    _id,
                    network,
                    information{
                        name,
                        lastName,
                        avatar
                    }
                }
            }
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, campaignsOwn, refetch,
    },
  }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      campaignsOwn,
      refetch,
    };
  },
  options: ownProps => (
    { pollInterval: 150000 }
  ),
});

const ListContainerWithData = withData(ListContainer);

// This container brings in Tracker-enabled Meteor data
const ListContainerWithUserId = createContainer(() => ({
  userId: Meteor.userId() || '',
}), ListContainerWithData);

export default ListContainerWithUserId;
