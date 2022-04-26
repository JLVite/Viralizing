import React from 'react';
import AdSetsList from '../../../containers/facebook/ad-sets/list';
import AdList from '../../../containers/facebook/ad/list';
import AdView from '../../../containers/facebook/ad/view';
import EmptyColumn from '../../empty-column';

class CampaignColumns extends React.Component {
  render() {
    let { active, columns, setAdSet, setAd, socialAccount, accountID, adAccountID, campaignID } = this.props;

    return (
      <div className="row campaign-columns">
        <div className={`col-md-${columns.groups}`}>
          <AdSetsList active={active.adSet}
                      setAdSet={setAdSet}
                      accountID={accountID}
                      adAccountID={adAccountID}
                      campaignID={campaignID}/>
        </div>
        <div className={`col-md-${columns.ad}`}>
          {active.adSet ? (
            <AdList active={active.ad}
                    setAd={setAd}
                    adSetID={active.adSet}
                    accountID={accountID}
                    adAccountID={adAccountID}
                    campaignID={campaignID}/>
          ) : (
            <EmptyColumn item="Ad Set"/>
          )}
        </div>
        <div className={`col-md-${columns.preview}`}>
          {active.ad ? (
            <AdView adID={active.ad}
                    socialAccount={socialAccount}
                    accountID={accountID}
                    adAccountID={adAccountID}
                    campaignID={campaignID}/>
          ) : (
            <EmptyColumn item="Ad"/>
          )}
        </div>
      </div>
    );
  }
}

export default CampaignColumns;
