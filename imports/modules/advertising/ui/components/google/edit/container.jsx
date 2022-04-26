import React from 'react';
import CampaignHeader from './header';
import CampaignColumns from './columns';
import { Translate } from 'react-redux-i18n';

class EditContainer extends React.Component {
  render() {
    let settings = {
      columns: {
        groups: 3,
        ad: 3,
        preview: 6
      }
    };
    let { active, socialAccount, campaign, setAdSet, setAd, accountID, adAccountID, campaignID } = this.props;
    return (
      <div>
        <CampaignHeader campaign={campaign}
                        socialAccount={socialAccount}/>
        <CampaignColumns active={active}
                         setAdSet={setAdSet}
                         setAd={setAd}
                         columns={settings.columns}
                         socialAccount={socialAccount}
                         accountID={accountID}
                         adAccountID={adAccountID}
                         campaignID={campaignID}/>
      </div>
    );
  }
}

export default EditContainer;
