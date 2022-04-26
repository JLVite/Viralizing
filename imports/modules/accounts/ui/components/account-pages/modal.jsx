import React from 'react';
import { Translate } from 'react-redux-i18n';
import AccountPagesContainer from '../../containers/account-pages';
import AccountSearch from '../../../../core/ui/components/forms/account-search';
import NoPages from './no-account';

class AccountPagesModal extends React.Component {
  constructor() {
    super();

    this.state = {
      accounts: [],
      account: null
    };

    this.updateAccount = this.updateAccount.bind(this);
  }

  updateAccount(account) {
    this.setState({ account });
  }

  componentWillMount() {
    let { accounts } = this.props;
    accounts = accounts.filter((a) => a.network === 'facebook' && a.type === 'account');
    this.setState({
      account: accounts[0],
      accounts: accounts
    });
  }

  render() {
    return (
      <div className="account-pages">
        <div className="controls">
          <div className="row">
            <div className="col-md-4">
              <AccountSearch input={{ value: this.state.account, onChange: this.updateAccount }}
                             data={this.state.accounts} multi={false}/>
            </div>
          </div>
        </div>
        {(this.state.account && this.state.account._id) && (
          <AccountPagesContainer accountID={this.state.account._id} close={this.props.close}
                                 history={this.props.history}/>
        )}
        {!this.state.account && <NoPages/>}
      </div>
    );
  }
}

export default AccountPagesModal;
