import React from 'react';
import { Translate } from 'react-redux-i18n';
import ContentSoon from '../../../core/ui/components/content-soon';

class Status extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.status.soon.' + key;
    };
    return (
      <div className="content-padding-30">
        <ContentSoon content={<Translate value={getTranslation('title')}/>}/>
      </div>
    );
  }
}

export default Status;
