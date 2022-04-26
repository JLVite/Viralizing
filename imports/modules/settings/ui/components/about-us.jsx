import React from 'react';
import AppSettings from '../../../../settings';
import { Translate } from 'react-redux-i18n';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let getTranslation = (key) => {
      return 'Settings.tabs.about.' + key;
    };
    const currentYear = moment().get('year');
    return (
      <div className="content-padding-30">
        <h1><Translate value={getTranslation('title')}/></h1>
        <p><a href="http://viralizing.me/terms-conditions/" target="_blank"><Translate
          value={getTranslation('labels.terms')}/></a></p>
        <p><a href="http://viralizing.me/privacy-policy/" target="_blank"><Translate
          value={getTranslation('labels.privacy')}/></a></p>
        <footer className="page-copyright">
          <p>{AppSettings.name}</p>
          <p>© {currentYear}. <Translate value={getTranslation('labels.rightsReserved')}/></p>
        </footer>
      </div>
    );
  }
}

export default AboutUs;
