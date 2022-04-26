import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import CampaignInvitesPosts from '../components/invites/view/post-list';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class InvitePostsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <CampaignInvitesPosts posts={this.props.postsInvite} refetch={this.props.refetch}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($campaignID:String!, $inviteID:String!){
  postsInvite(campaignID:$campaignID, inviteID: $inviteID){
    _id,
    status,
    account {
      _id
      name
      lastName
      avatar
      network
    }
  }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, postsInvite, refetch } }) => {
    //console.log("ERROR_INVITE_POSTS",error);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      postsInvite,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000,
      variables: {
        'campaignID': ownProps.campaignID,
        'inviteID': ownProps.inviteID
      }
    }
  ),
});

const InvitePostsContainerWithData = withData(InvitePostsContainer);

export default InvitePostsContainerWithData;
