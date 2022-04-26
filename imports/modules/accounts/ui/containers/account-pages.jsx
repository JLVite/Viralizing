import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import AccountPagesLayout from '../components/account-pages/layout';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class AccountPagesContainer extends React.Component {
  render() {
    let { refetch, accountFBPages, accountFBGroups, accountID, close, history } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AccountPagesLayout accountID={accountID}
                              pages={accountFBPages}
                              close={close}
                              history={history}
                              refetch={refetch}
                              groups={accountFBGroups}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($accountID: String!){
  accountFBPages(accountID:$accountID){
    id,
    name,
    perms,
    category,
    picture
  }
  accountFBGroups(accountID:$accountID){
    id,
    name,
    email,
    perms,
    icon
  }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, accountFBPages, accountFBGroups, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      accountFBPages,
      accountFBGroups,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        accountID: ownProps.accountID
      }
    }
  ),
});

const AccountPagesContainerWithData = withData(AccountPagesContainer);

export default AccountPagesContainerWithData;
