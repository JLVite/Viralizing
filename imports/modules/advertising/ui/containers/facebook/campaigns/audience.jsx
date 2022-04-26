import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../../../core/ui/components/loading';
import FacebookGraphAudience from '../../../components/facebook/graphAudience';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class AudienceView extends React.Component {
  render() {
    let { refetch, estimate } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <FacebookGraphAudience data={estimate}
                                 refetch={refetch}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query($socialAccountID: String, $adID: String, $data: FacebookAdsCampaignsAudienceEstimate){
    facebookAdsCampaignsAudienceEstimate(socialAccountID: $socialAccountID, adID: $adID, data: $data){
  		users    
    }
  }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, facebookAdsCampaignsAudienceEstimate, refetch } }) => {
    /*console.log("facebookAdsCampaignsAudienceEstimate",error,facebookAdsCampaignsAudienceEstimate);*/
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      refetch,
      estimate: facebookAdsCampaignsAudienceEstimate
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

const AudienceSizeWithData = withData(AudienceView);

export default AudienceSizeWithData;

