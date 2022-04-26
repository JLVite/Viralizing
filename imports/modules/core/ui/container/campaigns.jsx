import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import Content from '../components/home/available-campaigns/container';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class CampaignsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <Content data={this.props.campaignsOwn} refetch={this.props.refetch} history={this.props.history}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query{
        campaignsOwn{
            _id,
            information {
            profile
            cover
            name
            conquer
            dateStart
            dateEnd
            description
            url
            },
        }        
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, campaignsOwn, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      campaignsOwn,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000,
      variables: {}
    }
  ),
});

const CampaignsContainerWithData = withData(CampaignsContainer);

export default CampaignsContainerWithData;
