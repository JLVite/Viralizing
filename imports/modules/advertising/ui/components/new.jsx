import React from 'react';
import { Translate } from 'react-redux-i18n';
import notie from 'notie';

class CampaignAdvertisingNew extends React.Component {
  constructor() {
    super();
  }

  selectNetwork(network) {
    return function () {
      let message = '';
      if (network === 'facebook' || network === 'instagram') {
        message = 'Su cuenta de Facebook/Instagram no cuenta con acceso al Business Manager';
      }
      if (network === 'google') {
        message = 'Necesita habilitar AdWords manager en su cuenta para continuar';
      }
      if (network === 'twitter') {
        message = 'No se encontraron cuentas de Twitter Ads.';
      }
      setTimeout(() => {
        notie.alert(3, message, 3);
      }, Math.random() * 1000);
    };
  }

  render() {
    let getTranslation = (key) => {
      return 'Advertising.new.' + key;
    };
    return (
      <div>
        <h2><Translate value={getTranslation('form.title')}/></h2>
        <ul className="profile-list">
          <li onClick={this.selectNetwork('facebook')}><i className="social-icon facebook"/></li>
          <li onClick={this.selectNetwork('twitter')}><i className="social-icon twitter"/></li>
          <li onClick={this.selectNetwork('instagram')}><i className="social-icon instagram"/></li>
          <li onClick={this.selectNetwork('google')}><i className="social-icon google"/></li>
        </ul>
      </div>
    );
  }
}

export default CampaignAdvertisingNew;
