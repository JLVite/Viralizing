import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import CampaignsList from '../../../layouts/facebook/campaigns';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class CampaignsView extends React.Component {
  render() {
    let { facebookAdsCampaigns, refetch, history, router } = this.props;
    let { accountID, adAccountID, campaignID } = this.props.params;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <CampaignsList data={[]}
                         refetch={refetch}
                         router={router}
                         history={history}
                         accountID={accountID}
                         adAccountID={adAccountID}
                         campaignID={campaignID}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query($socialAccountID: String, $adAccountID: String){
        facebookAdsCampaigns(socialAccountID: $socialAccountID, adAccountID: $adAccountID){
            _id,
            name,
            buyingType,
            objective,
            status {
                configured
                effective
                status
            },
            created,
            updated,
            spendCap,
            startDate,
            endDate
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaigns, refetch } }) => {
    //console.log("Campaign_ERROR",error,facebookAdsCampaign);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      facebookAdsCampaigns,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        socialAccountID: ownProps.params.accountID,
        adAccountID: ownProps.params.adAccountID
      }
    }
  ),
});

const CampaignsViewWithData = withData(CampaignsView);

export default CampaignsViewWithData;

