import React from 'react';
import { Translate } from 'react-redux-i18n';
import InputSocialNetwork from '../../../core/ui/components/forms/input-social-network';
import AccountSearch from '../../../core/ui/components/forms/account-search';

class CalendarFilter extends React.Component {
  constructor() {
    super();

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(key) {
    return this.props.update(key);
  }

  updateInput(key) {
    let { update } = this.props;
    return function (value) {
      console.log('NETWORKS',value)
      update(key)(value, true);
    };
  }

  render() {
    let getTranslation = (key) => {
      return 'Agenda.campaigns.' + key;
    };
    let accountData = this.props.accounts;
    accountData = accountData || [];
    let { all, created, paused, active, drafts, posts, networks, accounts } = this.props.filters;
    return (
      <div className="calendar-filter">
        <div className="panel white ">
          <div className="panel-body ultra-slim container-fluid">
            <InputSocialNetwork input={{
              value: networks,
              onChange: this.updateInput('networks')
            }}/>
            <AccountSearch input={{
              value: accounts,
              onChange: this.updateInput('accounts')
            }} data={accountData} multi={true}/>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body slim container-fluid">
            <ul className="list-group list-group-full">
              <li className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={posts}
                         onChange={this.toggleState('posts')}/>
                  <label><Translate value={getTranslation('posts')}/></label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={all}
                         onChange={this.toggleState('all')}/>
                  <label><Translate value={getTranslation('all')}/></label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={created}
                         onChange={this.toggleState('created')}/>
                  <label><Translate value={getTranslation('created')}/></label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={paused}
                         onChange={this.toggleState('paused')}/>
                  <label><Translate value={getTranslation('paused')}/></label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={active}
                         onChange={this.toggleState('active')}/>
                  <label><Translate value={getTranslation('active')}/></label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={drafts}
                         onChange={this.toggleState('drafts')}/>
                  <label><Translate value={getTranslation('drafts')}/></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default CalendarFilter;
