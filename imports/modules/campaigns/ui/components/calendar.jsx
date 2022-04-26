import React from 'react';
import { Translate } from 'react-redux-i18n';
import Calendar from '../../../agenda/ui/components/calendar';
import CalendarFilter from './calendar/filters';

class CampaignCalendar extends React.Component {
  render() {
    let { events, filters, update, controls, refetch } = this.props;
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.calendar.' + key;
    };

    return (
      <div>
        <div>

          {controls && false && (
            <div>
              <div className="row">
                <div className="col-md-12">
                  <a className="btn btn-primary pull-right">
                    <Translate value={getTranslation('button')}/>
                  </a>
                </div>
              </div>
              <div className="spacer-30"></div>
            </div>
          )}

          <div className="row">
            {controls && (
              <div className="col-md-4">
                <CalendarFilter filters={filters} update={update}/>
              </div>
            )}
            <div className={controls !== false ? 'col-md-8' : 'col-md-12'}>
              <Calendar events={events} refetch={refetch}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//TODO: ADD SCHEDULE POST

export default CampaignCalendar;
