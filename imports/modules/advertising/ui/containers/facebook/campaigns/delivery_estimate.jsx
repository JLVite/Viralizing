import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import FacebookGraphDelivery from '../../../components/facebook/graphDeliveryEstimate';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class DelEstimateView extends React.Component {
  render() {
    let { refetch, delivery_es } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <FacebookGraphDelivery data={delivery_es}
                                 refetch={refetch}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query($socialAccountID: String, $adID: String, $data: FacebookAdsCampaignsDeliveryEstimate){
    facebookAdsCampaignsDeliveryEstimate(socialAccountID: $socialAccountID, adID: $adID, data: $data){
      bid_estimate {
            min_bid
            median_bid
            max_bid
            }
            estimate_dau
            estimate_mau
            estimate_ready
            daily_outcomes_curve {
              spend
              reach
              impressions
              actions
            }
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaignsDeliveryEstimate, refetch } }) => {
    /*console.log("facebookAdsCampaignsDeliveryEstimate",error,facebookAdsCampaignsDeliveryEstimate);*/
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      refetch,
      delivery_es: facebookAdsCampaignsDeliveryEstimate
    };
  },
  options: (ownProps) => (
    {
      variables: {
        adID: ownProps.adID,
        socialAccountID: ownProps.socialAccountID,
        data: ownProps.data
      }
    }
  ),
});

const DelEstimateSizeWithData = withData(DelEstimateView);

export default DelEstimateSizeWithData;

