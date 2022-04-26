import React from 'react';
import { Translate } from 'react-redux-i18n';
import notie from 'notie';
import FacebookAccountsListContainer from '../containers/facebook/accounts/list';
import GoogleAccountsListContainer from '../containers/google/accounts/list';
import TwitterAccountsListContainer from '../containers/twitter/accounts/list';

class CampaignAdvertisingNewRouter extends React.Component {
  constructor() {
    super();
    this.getContainer = this.getContainer.bind(this);
  }

  getContainer() {
    let { socialAccount } = this.props;
    switch (socialAccount.network) {
      case 'facebook':
        return <FacebookAccountsListContainer socialAccountID={socialAccount._id}/>;
      case 'twitter':
        return <TwitterAccountsListContainer socialAccountID={socialAccount._id}/>;
      case 'google':
        return <GoogleAccountsListContainer socialAccountID={socialAccount._id}/>;
      case 'instagram':
        return <FacebookAccountsListContainer socialAccountID={socialAccount._id}/>;
      default:
        return <FacebookAccountsListContainer socialAccountID={socialAccount._id}/>;
    }
  }

  render() {
    let getTranslation = (key) => {
      return 'Advertising.new.' + key;
    };
    let { socialAccount } = this.props;
    return (
      <div>
        {this.getContainer()}
      </div>
    );
  }
}

export default CampaignAdvertisingNewRouter;
