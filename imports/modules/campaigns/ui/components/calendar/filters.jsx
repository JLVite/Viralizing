import React from 'react';
import { Translate } from 'react-redux-i18n';

class CalendarFilter extends React.Component {
  constructor() {
    super();

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(key) {
    return this.props.update(key);
  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.calendar.filters.' + key;
    };
    let { filters } = this.props;
    return (
      <div className="panel">
        <div className="panel-body container-fluid">
          <ul className="list-group list-group-full">
            {Object.keys(filters).map((key, i) => (
              <li key={i} className="list-group-item">
                <div className="checkbox-custom">
                  <input type="checkbox" name="inputCheckboxes" checked={filters[key]}
                         onChange={this.toggleState(key)}/>
                  <label><Translate value={getTranslation(key)}/></label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CalendarFilter;
