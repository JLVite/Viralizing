import React from 'react';
import Switch from 'react-switchery';
import { Translate } from 'react-redux-i18n';

class ActionInvited extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'limited',
      confirmed: 'X',
    };

    this.selectAll = this.selectAll.bind(this);
  }

  selectAll(val) {
    if (val.target) {
      val = val.target.checked;
    }

    // console.log("SELECT_ALL", val);
    let type = 'limited';
    if (val) {
      type = 'all';
      const { currentInvite, updateInviteValue } = this.props;
      const invited = this.getInvited(currentInvite);
      updateInviteValue('invitesAvailable')({
        target: { value: Number(invited) },
      });
    }
    this.setState({ type });
  }

  getInvited(currentInvite) {
	    const teamAttackMembers = [].concat.apply([], currentInvite.teamAttacks.map(t => t.members));
    const list = [...currentInvite.influencers, ...teamAttackMembers];
    const invited = list.filter((a) => {
      const { network } = a;
      return currentInvite.networks[network];
    }).length;
    return invited;
  }

  componentWillReceiveProps() {
    const { currentInvite } = this.props;
    if (currentInvite) {
      const invited = this.getInvited(currentInvite);
      if (Number(currentInvite.invitesAvailable) === invited && Number(currentInvite.invitesAvailable) !== 0) {
        this.setState({ type: 'all' });
      } else {
        this.setState({ type: 'limited' });
      }
    }
  }

  render() {
    const getTranslation = key => `Campaigns.edit.tabs.invites.edit.form.invited.${key}`;
    const { currentInvite, updateInviteValue } = this.props;
    const invited = this.getInvited(currentInvite);
    return (
      <div>
        <div className="form-group">
          <label htmlFor="informationName">
            <Translate
              value={getTranslation('invited')}
            />
          </label>
          <input
            type="number"
            className="form-control"
            value={invited}
            onChange={() => {}}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="informationName">
            <Translate
              value={getTranslation('available')}
            />
          </label>
          <input
            type="number"
            disabled={this.state.type !== 'limited'}
            className="form-control"
            value={currentInvite.invitesAvailable}
            onChange={updateInviteValue('invitesAvailable')}
          />
        </div>

        <div className="checkbox-custom checkbox-primary">
          <input
            type="checkbox"
            id="inviteAll"
            onChange={this.selectAll}
            checked={this.state.type === 'all'}
          />
          <label htmlFor="inviteAll"><Translate value={getTranslation('all')} /></label>
        </div>

        <div className="form-group">
          <label htmlFor="informationName">
            <Translate value={getTranslation('confirmed')} />
          </label>
          <input type="number" className="form-control" defaultValue={this.state.confirmed} disabled />
        </div>
      </div>
    );
  }
}

export default ActionInvited;
