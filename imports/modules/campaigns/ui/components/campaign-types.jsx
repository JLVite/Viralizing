import React from 'react';
import { Translate } from 'react-redux-i18n';
import ContentSoon from '../../../core/ui/components/content-soon';
import { Link } from 'react-router';

class CampaignTypes extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.list.types.' + key;
    };
    return (
      <div className="row campaign-types">
        <div className="col-md-12">
          <div className="pull-right">
            <Link to="/campaigns/own" activeClassName="active"><Translate value={getTranslation('created')}/></Link>
            <Link to="/campaigns/part-of" activeClassName="active"><Translate value={getTranslation('partOf')}/></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignTypes;
