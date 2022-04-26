import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import Calendar from '../../containers/account-calendar';

class SummaryCalendar extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'TeamAttack.new.search.results.empty.' + key;
    };
    let { accountID } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body slim">
              <Calendar accountID={accountID} controls={false}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryCalendar;
