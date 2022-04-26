import React from 'react';
import { graphql } from 'react-apollo';
import { Field } from 'redux-form';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import Loading from '../../../core/ui/components/loading';
import InviteStatus from '../components/invite/status';
import AccountShares from '../components/invite/share';


class AccountInviteContainer extends React.Component {
  render() {
    const { manager, userId, campaign } = this.props;
    let managerInvite = null;
    let shareInvites = [];
    if (this.props.campaignInvites) {
      managerInvite = this.props.campaignInvites.filter(i => i.type === 'manager')[0];
      shareInvites = this.props.campaignInvites.filter(i => i.type === 'share');
    }
    let isManager = false;
    let isOwner = false;
    const userID = Meteor.userId();
    if (campaign) {
      if (campaign.owner._id === userID) {
        isOwner = true;
      }
      if (campaign.manager._id === userID) {
        isManager = true;
      }
    }

    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <div>
              <InviteStatus
                invite={managerInvite}
                refetch={this.props.refetch}
                manager={manager}
                userId={userId}
                isOwner={isOwner}
                isManager={isManager}
                campaign={campaign}
              />
              <Field
                component={AccountShares}
                name="shares"
                invites={shareInvites}
                refetch={this.props.refetch}
                manager={manager}
                userId={userId}
                isOwner={isOwner}
                isManager={isManager}
                campaign={campaign}
              />
            </div>
          )}
      </div>
    );
  }
}

const QUERY = gql`
    query($campaignID:String!){
        campaignInvites(campaignID:$campaignID){
            _id,
            email,
            sent,
            status,
            type,
            owner {
                _id,
                profile{
                    avatar,
                    name,
                    lastName
                },
                emails {
                    address
                }
            },
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, campaignInvites, refetch,
    },
  }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      campaignInvites,
      refetch,
    };
  },
  options: ownProps => (
    {
      pollInterval: 150000,
      variables: {
        campaignID: ownProps.campaign._id,
      },
    }
  ),
});

const AccountInviteContainerWithData = withData(AccountInviteContainer);

export default AccountInviteContainerWithData;
