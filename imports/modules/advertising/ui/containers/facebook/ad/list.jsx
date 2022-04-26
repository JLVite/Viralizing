import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import AdList from '../../../components/facebook/ad/list';
import gql from 'graphql-tag';

class AdSetsListContainer extends React.Component {
  render() {
    let { facebookAdsCampaignsAdSetAds, active, refetch, history, setAd, adAccountID, accountID, adSetID, campaignID } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AdList setAd={setAd}
                  active={active}
                  adAccountID={adAccountID}
                  accountID={accountID}
                  campaignID={campaignID}
                  adSetID={adSetID}
                  ads={facebookAdsCampaignsAdSetAds}
                  refetch={refetch}
                  history={history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query($socialAccountID: String, $adAccountID: String, $campaignID: String, $adSetID: String){
        facebookAdsCampaignsAdSetAds(socialAccountID:$socialAccountID, adAccountID: $adAccountID, campaignID:$campaignID, adSetID:$adSetID){
            _id,
            name,
            status{
                configured,
                effective,
                status
            },
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaignsAdSetAds, refetch } }) => {
    console.log('Campaign_ERROR', error, facebookAdsCampaignsAdSetAds);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      facebookAdsCampaignsAdSetAds,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        socialAccountID: ownProps.accountID,
        adAccountID: ownProps.adAccountID,
        campaignID: ownProps.campaignID,
        adSetID: ownProps.adSetID
      }
    }
  ),
});

export default withData(AdSetsListContainer);


