import React from 'react';
import EditContainer from '../../components/facebook/edit/container';
import FacebookHeader from '../../components/facebook/header';

class CampaignEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      active: {
        ad: null,
        adSet: null
      }
    };

    this.setAdSet = this.setAdSet.bind(this);
    this.setAd = this.setAd.bind(this);
  }

  setAd(ad) {
    let component = this;
    return function () {
      let newState = { ...component.state };
      newState.active.ad = ad;
      component.setState(newState);
    };
  }

  setAdSet(adSet) {
    let component = this;
    return function () {
      let newState = { ...component.state };
      newState.active.adSet = adSet;
      component.setState(newState);
    };
  }

  render() {
    let { active } = this.state;
    let { campaign, socialAccount, refetch, history, params, accountID, adAccountID, campaignID } = this.props;
    return (
      <EditContainer socialAccount={socialAccount}
                     active={active}
                     setAdSet={this.setAdSet}
                     setAd={this.setAd}
                     campaign={campaign}
                     accountID={accountID}
                     adAccountID={adAccountID}
                     campaignID={campaignID}/>
    );
  }
}

export default CampaignEdit;
