import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import CampaignCalendar from '../components/calendar';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';

class CampaignCalendarContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      'all': true,
      'draft': true,
      'pending': true,
      'sent': true,
      'accepted': true,
      'rejected': true,
      'scheduled': true,
      'published': true,
      'completed': true,
      'cancelled': true,
      'suspended': true
    };

    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(key) {
    let component = this;
    return function (e) {
      let newState = component.state;
      if (key === 'all' && !newState[key] === true) {
        if (!newState[key]) {
          Object.keys(newState).forEach((oKey) => {
            newState[oKey] = true;
          });
        }
      } else {
        newState[key] = !newState[key];
      }

      component.setState(newState);
      component.props.refetch(newState);
    };
  }

  render() {
    return (
      <div className="content-padding-30">
        {this.props.loading ? <Loading/> :
          <CampaignCalendar events={this.props.eventsCampaign} refetch={this.props.refetch}
                            filters={this.state} update={this.filterUpdate} controls={this.props.controls}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($campaignID: String, $all: Boolean, $draft: Boolean, $pending: Boolean, $sent: Boolean, $accepted: Boolean,  $rejected: Boolean, $scheduled: Boolean, $published: Boolean, $completed: Boolean, $cancelled: Boolean, $suspended: Boolean){
  eventsCampaign(campaignID: $campaignID, all: $all, draft: $draft, pending: $pending, sent: $sent, accepted: $accepted,  rejected: $rejected, scheduled: $scheduled, published: $published, completed: $completed, cancelled: $cancelled, suspended: $suspended){
    _id,
    type,
    start,
    end,
    title,
    allDay,
    preview,
    network
  }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, eventsCampaign, refetch, postsOwn } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      eventsCampaign,
      postsOwn,
      refetch,
    };
  },
  options: (ownProps) => {
    return (
    {
      pollInterval: 150000,
      variables: {
        'campaignID': ownProps.campaignID,
        'all': true,
        'draft': true,
        'pending': true,
        'sent': true,
        'accepted': true,
        'rejected': true,
        'scheduled': true,
        'published': true,
        'completed': true,
        'cancelled': true,
        'suspended': true
      }
    }
  )}
});

const CampaignCalendarContainerWithData = withData(CampaignCalendarContainer);

export default CampaignCalendarContainerWithData;
