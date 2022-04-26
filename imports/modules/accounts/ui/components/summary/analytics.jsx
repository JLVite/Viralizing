import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import ContentSoon from '../../../../core/ui/components/content-soon';

class SummaryAnalytics extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'TeamAttack.new.search.results.empty.' + key;
    };
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body">
              <ContentSoon/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryAnalytics;
