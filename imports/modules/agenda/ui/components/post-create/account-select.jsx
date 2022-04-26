import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

class AccountSelect extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };

    //this.searchAccounts = _.debounce(this.searchAccounts, 600).bind(this);
    this.searchAccounts = this.searchAccounts.bind(this);
    this.accountClick = this.accountClick.bind(this);
  }

  searchAccounts(e) {
    let value = e.target.value;
    this.setState({ value });
  }

  accountClick(account) {
    let component = this;
    return function () {
      let accounts = component.props.input.value || [];

      if (accounts.indexOf(account) === -1) {
        accounts.push(account);
      } else {
        accounts.splice(accounts.indexOf(account), 1);
      }
      component.props.input.onChange(accounts);
      component.forceUpdate();
    };
  }

  render() {
    let getTranslation = (key) => {
      return 'Agenda.publish.modal.' + key;
    };

    return (
      <div className="panel">
        <div className="panel-body container-fluid padding-20">
          <div className="post-account">
            <div className="search">
              <i className="icon wb-search" aria-hidden="true"/>
              <input type="text" placeholder={this.props.placeholder || 'Search'} onChange={this.searchAccounts}
                     ref="accountsSearch"/>
            </div>
            <ul className="list-group list-group-full selected">
              {(this.props.input.value && this.props.input.value.length) ? this.props.input.value.map((account, i) => {
                return <li className="list-group-item" key={i}
                           onClick={this.accountClick(account)}><SocialAvatar
                  avatar={account.information.avatar}
                  name={account.information.name + ' ' + account.information.lastName}
                  network={account.network}
                  size="50"/>{account.information.name + ' ' + account.information.lastName}
                </li>;
              }) : ''}
            </ul>
            {(this.props.input.value && this.props.input.value.length) ? <hr/> : ''}
            <ul className="list-group list-group-full">
              {(this.props.data && this.props.data.length) ? _.difference(this.props.data, this.props.input.value || []).filter((o) => {
                if (!this.state.value) {
                  return true;
                }
                let { name, lastName } = o.information;
                let regEx = new RegExp(this.state.value || '');
                return name.toLowerCase().match(regEx) || lastName.toLowerCase().match(regEx) || o.network.toLowerCase().match(regEx);
              }).map((account, i) => {
                return <li className="list-group-item" key={i}
                           onClick={this.accountClick(account)}><SocialAvatar
                  avatar={account.information.avatar}
                  name={account.information.name + ' ' + account.information.lastName}
                  network={account.network}
                  size="50"/>{account.information.name + ' ' + account.information.lastName}
                </li>;
              }) : 'No Results'}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSelect;
