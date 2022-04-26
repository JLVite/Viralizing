import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import AccountSearch from '../../../../../../../core/ui/components/forms/account-search';
import InputTeamAttack from '../../../form/input-teamAttack';

class ActionTeamAttack extends React.Component {
  constructor() {
    super();

    this.state = {
      teamAttack: {
        members: [],
      },
    };

    this.updateTeamAttack = this.updateTeamAttack.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  updateTeamAttack(e) {
    const { updateInviteValue } = this.props;
    const { options } = e.target;
    let selected = [];
	    for (let i = 0, l = options.length; i < l; i++) {
		    if (options[i].selected) {
			    selected.push(options[i].value);
		    }
	    }

	    selected = selected.map(s => JSON.parse(s));

    // let teamAttack = JSON.parse(val);
    console.log('TEAM_ATTACK_SELECTED', selected);

    updateInviteValue('teamAttacks')({
      target: { value: selected },
    });

    // this.setState({teamAttack: selected});
  }

  searchChange(value) {
    // console.log("TA_SEARCH_CHANGE", value);
    this.props.updateInviteValue('teamAttackMembers')({
      target: { value },
    });
  }


  render() {
    const { teamAttacks, updateInviteValue, currentInvite } = this.props;
    const getTranslation = key => `Campaigns.edit.tabs.invites.edit.form.${key}`;
    return (
      <div>
        <div className="form-group no-margin">
          <label htmlFor="informationName">
            <Translate value={getTranslation('teamAttack.select')} />
          </label>
          <select multiple className="form-control" onChange={this.updateTeamAttack}>
            {teamAttacks.map((t, i) => <option value={JSON.stringify(t)} key={i}>{t.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          {/*
                    <InputTeamAttack input={{value:currentInvite.teamAttackMembers, onChange:this.searchChange}} label={<Translate value={getTranslation("teamAttack.members")}/>}/>
                    */}
        </div>
      </div>
    );
  }
}

export default ActionTeamAttack;
