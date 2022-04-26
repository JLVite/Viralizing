import React from 'react';
import { graphql } from 'react-apollo';
import { Field } from 'redux-form';
import Loading from '../../../core/ui/components/loading';
import InviteStatus from '../components/invite/status';
import AccountShares from '../components/invite/share';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

import notie from 'notie';

class AccountInviteContainer extends React.Component {
  render() {
    let { manager, userId, account } = this.props;
    let managerInvite = null;
    let shareInvites = [];
    if (this.props.accountInvites) {
      managerInvite = this.props.accountInvites.filter((i) => i.type === 'manager')[0];
      shareInvites = this.props.accountInvites.filter((i) => i.type === 'share');
    }
    let isManager = false;
    let isOwner = false;
    let userID = Meteor.userId();
    if (account) {
      if (account.owner._id === userID) {
        isOwner = true;
      }
      if (account.manager._id === userID) {
        isManager = true;
      }
    }

    return (
      <div>
        {this.props.loading ? <Loading/> :
          <div>
            <InviteStatus invite={managerInvite}
                          refetch={this.props.refetch}
                          manager={manager}
                          userId={userId}
                          isOwner={isOwner}
                          isManager={isManager}
                          account={account}/>
            <Field component={AccountShares}
                   name="shares"
                   invites={shareInvites}
                   refetch={this.props.refetch}
                   manager={manager}
                   userId={userId}
                   isOwner={isOwner}
                   isManager={isManager}
                   account={account}/>
          </div>}
      </div>
    );
  }
}

const QUERY = gql`
query($accountID:String!){
  accountInvites(accountID:$accountID){
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
  props: ({ data: { error, loading, accountInvites, refetch } }) => {
    if (loading) return { loading: true };

    if (error) {
      console.log('ERROR', error);
      return { hasErrors: true };
    }
    return {
      loading,
      accountInvites,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000,
      variables: {
        'accountID': ownProps.account._id
      }
    }
  ),
});

const AccountInviteContainerWithData = withData(AccountInviteContainer);

export default AccountInviteContainerWithData;
