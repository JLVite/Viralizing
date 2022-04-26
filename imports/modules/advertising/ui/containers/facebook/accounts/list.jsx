import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import AccountsList from '../../../components/facebook/accounts/list';
import gql from 'graphql-tag';

class AccountsListContainer extends React.Component {
  render() {
    let { facebookAdAccounts, refetch, adAccountID, socialAccountID } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AccountsList accounts={facebookAdAccounts}
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
    //console.log("Campaign_ERROR",error,facebookAdAccounts);
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
        socialAccountID: ownProps.socialAccountID
      }
    }
  ),
});

export default withData(AccountsListContainer);


