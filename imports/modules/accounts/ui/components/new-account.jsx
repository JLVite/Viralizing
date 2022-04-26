import React from 'react';
import notie from 'notie';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import AccountPagesModal from './account-pages/modal';
import { Translate, I18n } from 'react-redux-i18n';

class NewAccount extends React.Component {
  constructor() {
    super();

    this.state = {
      pagesView: false
    };

    this.connectNetwork = this.connectNetwork.bind(this);
    this.openPagesView = this.openPagesView.bind(this);
  }

  openPagesView() {
    this.setState({
      pagesView: true,
    });
  }

  connectNetwork(network) {
    let getTranslation = (key) => {
      return 'Accounts.connect.' + key;
    };
    let component = this;
    return function () {
      let options = {};
      switch (network) {
        case 'facebook':
          options.requestPermissions = ['user_posts', 'user_friends', 'manage_pages', 'publish_pages', 'pages_show_list', 'ads_management', 'business_management'];
          break;
        case 'twitter':
          options = {};
          break;
        case 'google':
          options.requestPermissions = [
            'https://www.googleapis.com/auth/adsense',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/plus.stream.write',
            'https://www.googleapis.com/auth/adexchange.buyer',
            'https://www.googleapis.com/auth/adsense',
            'https://www.googleapis.com/auth/adwords'
          ];
          options.requestOfflineToken = true;
          // options.forceApprovalPrompt= true;
          break;
        case 'instagram':
          options.requestPermissions = ['public_content'];
          break;
        default:
          options = {};
      }
      Meteor.connectWith(network, options, function (err, res) {
        //console.log('CONNECT_WITH_CALLBACK', arguments);
        if (err) {
          if (err.error === 500) {
            err.error = I18n.t(getTranslation('notie.error'))
          }
          err.error = I18n.t(getTranslation('notie.connected'))
          notie.alert(3, err.error, 3);
          return;
        }
        console.log("CONNECTION_SUCCESFUL", res);
        let msj = I18n.t(getTranslation('account_added'))
        notie.alert(1,msj,3)
        component.props.refetch().then(function () {
          component.props.close();
          component.props.history.push('/accounts/edit/' + res);
        });
      });
    };
  }

  render() {
    if (this.state.pagesView) {
      return <AccountPagesModal accounts={this.props.accounts} close={this.props.close} history={this.props.history}/>;
    }
    let FBListItem = <li className="social-icon-fb" onClick={this.connectNetwork('facebook')}><i className="social-icon facebook"/></li>;
    let FBDropdown = (
      <DropdownButton bsStyle="default" title={<li className="social-icon-fb"><i className="social-icon facebook"/></li>} id={`dropdown-basic-${123}`}>
        <MenuItem eventKey="1" onClick={this.openPagesView}>Connect Fan Page</MenuItem>
        <MenuItem eventKey="2" onClick={this.connectNetwork('facebook')}>Connect New Account</MenuItem>
      </DropdownButton>
    );
    let { accounts } = this.props;
    let hasFB = accounts.filter((a) => a.network === 'facebook').length === 0 ? false : true;
    let getTranslation = (key) => {
      return 'Accounts.connect.' + key;
    };
    return (
      <div style={{ 'height': '100%' }}>
        <h2><Translate value={getTranslation('question')}/></h2>
        <ul className="profile-list">
          {hasFB ? FBDropdown : FBListItem}
          <li onClick={this.connectNetwork('twitter')}><i className="social-icon twitter"/></li>
          <li onClick={this.connectNetwork('instagram')}><i className="social-icon instagram"/></li>
          <li onClick={this.connectNetwork('google')}><i className="social-icon google"/></li>
        </ul>
        {hasFB ? <Translate value={getTranslation('message')}/> : ''}
      </div>
    );
  }
}

export default NewAccount;
