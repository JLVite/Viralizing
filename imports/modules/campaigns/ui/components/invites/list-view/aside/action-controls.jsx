import React from 'react';
import Budget from './action-controls/budget';
import Influencers from './action-controls/influencers';
import Invited from './action-controls/invited';
import Networks from './action-controls/networks';
import TeamAttack from './action-controls/team-attack';
import Deadline from './action-controls/deadline';


class ActionControls extends React.Component {
  render() {
    const {
      collaborators, teamAttacks, updateInviteValue, networks, toggleNetwork, currentInvite,
    } = this.props;
    return (
      <div className="panel">
        <div className="panel-body container-fluid">
          <Networks
            currentInvite={currentInvite}
            toggleNetwork={toggleNetwork}
          />

          <TeamAttack
            currentInvite={currentInvite}
            teamAttacks={teamAttacks}
            updateInviteValue={updateInviteValue}
          />

          <Influencers
            currentInvite={currentInvite}
            collaborators={collaborators}
            updateInviteValue={updateInviteValue}
          />

          <Invited
            updateInviteValue={updateInviteValue}
            currentInvite={currentInvite}
          />

          <Budget
            currentInvite={currentInvite}
            updateInviteValue={updateInviteValue}
          />

          <Deadline
            currentInvite={currentInvite}
            updateInviteValue={updateInviteValue}
          />
        </div>
      </div>
    );
  }
}

export default ActionControls;
