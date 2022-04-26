import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';

class Legends extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Pricing.table.' + key;
    };
    return (
      <div className="pricing-table">
        <div className="pricing-column-one">
          <div className="pricing-header">
            <div className="pricing-price">
              <div style={{ height: 84 }}/>
            </div>
          </div>
          <ul className="pricing-features">
            <li><Translate value={getTranslation('legends.advertisingPercentage')}/></li>
            <li><Translate value={getTranslation('legends.newsExposition')}/></li>
            <li><Translate value={getTranslation('legends.hashtagRemoval')}/></li>
            <li><Translate value={getTranslation('legends.profileAnalytics')}/></li>
            <li><Translate value={getTranslation('legends.campaignAnalytics')}/></li>
            <li><Translate value={getTranslation('legends.ibolAdvertising')}/></li>
            <li><Translate value={getTranslation('legends.teamAttack')}/></li>
            <li><Translate value={getTranslation('legends.photosAndVideo')}/></li>
            <li><Translate value={getTranslation('legends.addRemoveAccounts')}/></li>
            <li><Translate value={getTranslation('legends.referenceCostCount')}/></li>
            <li><Translate value={getTranslation('legends.accountObjectives')}/></li>
            <li><Translate value={getTranslation('legends.activityReport')}/></li>
            <li><Translate value={getTranslation('legends.searchLimit')}/></li>
            <li><Translate value={getTranslation('legends.annualDiscount')}/></li>
            <li><Translate value={getTranslation('legends.support')}/></li>
            <li><Translate value={getTranslation('legends.audioAdvertising')}/></li>
            <li><Translate value={getTranslation('legends.subManagers')}/></li>
            <li><Translate value={getTranslation('legends.inviteActions')}/></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Legends;
