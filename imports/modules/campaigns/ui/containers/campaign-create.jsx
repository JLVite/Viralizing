import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import Loading from '../../../core/ui/components/loading';
import CampaignCreate from '../components/campaign-create';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import PropTypes from 'prop-types';

class CampaignCreateContainer extends React.Component {
  constructor() {
    super();

    this.saveCampaign = this.saveCampaign.bind(this);
  }

  saveCampaign(data) {
    //console.log("SAVE_CAMPAIGN",data);
    //TODO: Validate Data
    let component = this;
    data = { ...data };
    //data.dateStart=data.dateStart.toDate();
    //data.dateEnd=data.dateEnd.toDate();
    Meteor.call('campaigns-crate', data, function (err, res) {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create post.';
        }
        //console.log("ERROR",err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      component.props.close();
      component.props.reloadCampaigns().then(function () {
        //console.log("SERVER_SAVE_CAMPAIGN_RESPONSE",res,component);
        component.props.router.push('/campaigns/edit/' + res);
      });
    });
  }

  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <CampaignCreate accounts={this.props.accounts}
                          refetch={this.props.refetch}
                          onSubmit={this.saveCampaign}
                          loading={this.props.loading}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query {
      accounts{
        _id,
        network,
        groups,     
       information{
          name,
          lastName,
          avatar
        }
      }
    }
`;

let CampaignCreateContainerWithRouter = withRouter(CampaignCreateContainer);

CampaignCreateContainer.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, accounts, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      accounts,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000,
      variables: { query: '' }
    }
  ),
});

const CampaignCreateContainerWithData = withData(CampaignCreateContainerWithRouter);

export default CampaignCreateContainerWithData;
