import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import AccountsList from '../../../components/google/accounts/list';
import gql from 'graphql-tag';

class AccountsListContainer extends React.Component {
  render() {
    let { facebookAdAccounts, refetch, adAccountID, socialAccountID } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AccountsList accounts={[
            {
              _id: '856-177-2452',
              name: 'Test Account'
            }
          ]}
                        adAccountID={adAccountID}
                        socialAccountID={socialAccountID}
                        refetch={refetch}
                        history={history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query($socialAccountID: String){
        facebookAdAccounts(socialAccountID:$socialAccountID){
            _id,
            name,
            business{
                _id,
                name
            },
            endAdvertiser{
                _id,
                name
            }
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdAccounts, refetch } }) => {
    console.log('Campaign_ERROR', error, facebookAdAccounts);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      facebookAdAccounts,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        test: console.log('AD_ACCOUNTS_LIST', ownProps),
        socialAccountID: ownProps.socialAccountID
      }
    }
  ),
});

export default withData(AccountsListContainer);


