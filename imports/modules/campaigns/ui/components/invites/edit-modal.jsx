import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Translate } from 'react-redux-i18n';
import TeamAttackMembers from '../../../../teamattack/ui/components/edit/members-input';

let getTranslation = (key) => {
  return 'Campaigns.edit.tabs.messages.invites.edit.' + key;
};

class CampaignInvitesEdit extends React.Component {
  render() {
    let { input } = this.props;
    return (
      <form className="campaign-edit-invite">
        <TeamAttackMembers input={input}/>
      </form>
    );
  }
}

export default CampaignInvitesEdit;
