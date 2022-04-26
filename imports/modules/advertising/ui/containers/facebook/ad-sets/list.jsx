import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import AdSetsList from '../../../components/facebook/ad-sets/list';
import gql from 'graphql-tag';

class AdSetsListContainer extends React.Component {
  render() {
    let { accountID, adAccountID, campaignID, facebookAdsCampaignsAdSets, active, refetch, history, setAdSet } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <AdSetsList setAdSet={setAdSet}
                      active={active}
                      adSets={facebookAdsCampaignsAdSets}
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
        facebookAdsCampaignsAdSets(socialAccountID:$socialAccountID, adAccountID: $adAccountID, campaignID:$campaignID){
            _id,
            name,
            created,
            updated,
            status {
                configured
                effective
                status
            },
            money {
                autoBid
                avgPrizePaceing
                budget{
                    daily,
                    lifetime,
                    remaining
                }
            },
            billingEvent,
            goal,
            startDate,
            endDate,
            recommendations {
                field
                code
                confidence
                importance
                message
                title
            },
            impressions,
            promotedObject {
                type
                data
            },
            targeting {
                user_os
                user_device
                facebook_positions
                age_max
                age_min
                geo_locations {
                    countries
                }
                publisher_platforms
            }
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaignsAdSets, refetch } }) => {
    console.log('Campaign_ADSETS', error, loading, facebookAdsCampaignsAdSets);
    if (loading) {
      setTimeout(function () {
        refetch({ time: Number(new Date()) });
        console.log('REFETCH TIMEOUT');
      }, 1500);
      return { loading: true, refetch };
    }
    if (error) return { hasErrors: true };
    return {
      loading,
      facebookAdsCampaignsAdSets,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        socialAccountID: ownProps.accountID,
        adAccountID: ownProps.adAccountID,
        campaignID: ownProps.campaignID
      }
    }
  ),
});

export default withData(AdSetsListContainer);


