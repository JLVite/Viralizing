import React from 'react';
import { Translate } from 'react-redux-i18n';

class Analytics extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.status.soon.' + key;
    };
    return (
      <div className="content-padding-30">
        Analytics
      </div>
    );
  }
}

export default Analytics;
