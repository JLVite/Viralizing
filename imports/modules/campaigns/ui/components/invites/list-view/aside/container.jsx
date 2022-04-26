import React from 'react';
import ActionControls from './action-controls';
import InviteTotal from './invite-total';


class CampaignListViewAside extends React.Component {
  render() {
    const {
      accounts, teamAttacks, currentInvite, toggleNetwork, updateInviteValue,
    } = this.props;

    return (
      <div className="col-md-3">
        <ActionControls
          toggleNetwork={toggleNetwork}
          collaborators={accounts}
          teamAttacks={teamAttacks}
          currentInvite={currentInvite}
          updateInviteValue={updateInviteValue}
        />
        <InviteTotal currentInvite={currentInvite} />
      </div>
    );
  }
}


export default CampaignListViewAside;
