import React from 'react';
import { Link } from 'react-router';
import { Translate } from 'react-redux-i18n';

class CalendarMenu extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Agenda.nav.' + key;
    };
    return (
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><a href="#" onClick={() => {return false;}}><Translate
          value={getTranslation('calendar')}/></a></li>
        <li role="presentation"><Link to="reporter"><Translate value={getTranslation('reporter')}/></Link></li>
      </ul>
    );
  }
}

export default CalendarMenu;
