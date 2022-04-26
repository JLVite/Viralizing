import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import AccountInviteView from '../components/invite/view';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class InviteContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AccountInviteView invite={this.props.accountInvite}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($inviteID:String!){
  accountInvite(inviteID:$inviteID){
    _id,
    email,
    sent,
    status,
    type,
    account {
      _id,
      network,
      information{
        name,
        lastName,
        avatar,
        birthDate,
        country,
        gender
      }
    }
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
  props: ({ data: { error, loading, accountInvite, refetch } }) => {
    console.log('INVITE_ERROR', error);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      accountInvite,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        inviteID: ownProps.params.inviteID
      }
    }
  ),
});

const InviteContainerWithData = withData(InviteContainer);

export default InviteContainerWithData;
