import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import EditCampaign from '../../../layouts/facebook/edit';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class CampaignsView extends React.Component {
  render() {
    let { facebookAdsCampaign, account, refetch, history, params } = this.props;
    let { accountID, adAccountID, campaignID } = this.props.params;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <EditCampaign socialAccount={account}
                        campaign={facebookAdsCampaign}
                        refetch={refetch}
                        history={history}
                        accountID={accountID}
                        adAccountID={adAccountID}
                        campaignID={campaignID}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($socialAccountID: String, $adAccountID: String, $campaignID: String){
  facebookAdsCampaign(socialAccountID:$socialAccountID, adAccountID: $adAccountID, campaignID:$campaignID){
    _id,
    name,
    buyingType,
    objective,
    status{
      configured,
      effective,
      status
    },
    created,
    updated,
    spendCap,
    startDate,
    endDate
  }
    account(_id:$socialAccountID){
        _id,
        network,
        information {
            name
            lastName
            avatar
        }
    }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaign, account, refetch } }) => {
    //console.log("Campaign_ERROR",error,facebookAdsCampaign);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      facebookAdsCampaign,
      account,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        socialAccountID: ownProps.params.accountID,
        adAccountID: ownProps.params.adAccountID,
        campaignID: ownProps.params.campaignID
      }
    }
  ),
});

const CampaignsViewWithData = withData(CampaignsView);

export default CampaignsViewWithData;

