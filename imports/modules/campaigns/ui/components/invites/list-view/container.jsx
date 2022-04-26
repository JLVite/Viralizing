import React from 'react';
import Aside from './aside/container';
import Action from './action/container';

const getTranslation = key => `Campaigns.edit.tabs.invites.${key}`;

class CampaignListView extends React.Component {
  render() {
    const {
      invites, tabIndex, accounts, teamAttacks, currentInvite, actionIndex, toggleNetwork, updateInviteValue, addInviteOption, goToAction,
      sendInvites, createInvite, saveInvites, deleteInviteOption, refetch
    } = this.props;

    return (
      <div className="row">
        <Aside
          accounts={accounts}
          teamAttacks={teamAttacks}
          currentInvite={currentInvite}
          toggleNetwork={toggleNetwork}
          updateInviteValue={updateInviteValue}
        />

        <Action
            refetch={refetch}
          tabIndex={tabIndex}
          invites={invites}
          currentInvite={currentInvite}
          actionIndex={actionIndex}
          updateInviteValue={updateInviteValue}
          addInviteOption={addInviteOption}
          deleteInviteOption={deleteInviteOption}
          goToAction={goToAction}
          createInvite={createInvite}
          sendInvites={sendInvites}
        />
      </div>
    );
  }
}

export default CampaignListView;
