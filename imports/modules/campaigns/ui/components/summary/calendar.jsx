import React from 'react';
import { Translate } from 'react-redux-i18n';
import CalendarContainer from '../../containers/campaign-calendar';

class Calendar extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.summary.' + key;
    };
    let { campaignID } = this.props;
    return (
      <div>
        <CalendarContainer campaignID={campaignID} controls={false}/>
      </div>
    );
  }
}

export default Calendar;
