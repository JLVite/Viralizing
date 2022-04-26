import React from 'react';
import { reduxForm } from 'redux-form';
import { Translate } from 'react-redux-i18n';
import Tabs from '../components/part-of/tabs';

class ViewCampaign extends React.Component {
  render() {
    const { campaign, invitesCampaign, campaignInviteSentOwn, refetch } = this.props;
    return (
      <div>
        <Tabs campaign={campaign} invites={invitesCampaign} campaignInviteSentOwn={campaignInviteSentOwn} refetch={refetch} />
      </div>
    );
  }
}

export default ViewCampaign;
