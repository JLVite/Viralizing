import React from 'react';
import { Translate } from 'react-redux-i18n';

class CampaignInvitesPending extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.invites.view.pending.' + key;
    };
    return (
      <div className="invite-scheduled">
        <div className="content">
          <i className="icon wb-time" aria-hidden="true"/>
          <h1><Translate value={getTranslation('title')}/></h1>
          <p><Translate value={getTranslation('description')}/></p>
        </div>
      </div>
    );
  }
}

export default CampaignInvitesPending;
