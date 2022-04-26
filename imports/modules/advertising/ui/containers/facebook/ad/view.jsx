import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import AdView from '../../../components/facebook/ad/view';
import gql from 'graphql-tag';

class AdViewContainer extends React.Component {
  render() {
    let { facebookAdsCampaignsAdSetAd, refetch, history, socialAccount, } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AdView ad={facebookAdsCampaignsAdSetAd}
                  socialAccount={socialAccount}
                  refetch={refetch}
                  history={history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query($socialAccountID: String, $adAccountID: String, $campaignID: String, $adID: String){
        facebookAdsCampaignsAdSetAd(socialAccountID:$socialAccountID, adAccountID: $adAccountID, campaignID:$campaignID, adID:$adID){
            _id,
            name,
            status{
                configured,
                effective,
                status
            },
            created,
            updated,
            creative {
                _id
                body
                image
                link,
                ctaType,
                title
            },
            reviewFeedback
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaignsAdSetAd, refetch } }) => {
    console.log('Campaign_ERROR', error, facebookAdsCampaignsAdSetAd);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      facebookAdsCampaignsAdSetAd,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        socialAccountID: ownProps.accountID,
        adAccountID: ownProps.adAccountID,
        campaignID: ownProps.campaignID,
        adID: ownProps.adID
      }
    }
  ),
});

export default withData(AdViewContainer);


