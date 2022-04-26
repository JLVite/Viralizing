import React from 'react';
import { Translate, Localize } from 'react-redux-i18n';

class AnalyticsEngagement extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.status.engagement.' + key;
    };
    return (
      <div className="col-lg-3 col-md-6">
        <div className="widget">
          <div className="widget-content padding-30 bg-white">
            <div className="counter counter-lg">
              <div className="counter-label text-uppercase"><Translate value={getTranslation('label')}/></div>
              <div className="counter-number-group">
                <span className="counter-number"><Localize value={Number(this.props.data)} options={{
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 5
                }}/></span>
                <span className="counter-number-related">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnalyticsEngagement;
