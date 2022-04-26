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
          <List data={this.props.campaignsOwn} refetch={this.props.refetch} history={this.props.history}/>}
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
                profile,
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
  props: ({ data: { error, loading, campaignsOwn, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    //console.log("CAMPAIGN_WITH_DATA_UPDATE", refetch);
    return {
      loading,
      campaignsOwn,
      refetch,
    };
  },
  options: (ownProps) => (
    { pollInterval: 150000 }
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
