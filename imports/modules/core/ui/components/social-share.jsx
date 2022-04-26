import React from 'react';

import { AssetsSocial } from '../icons';

class SocialShare extends React.Component {
  render() {
    let { loginWith, styles, message } = this.props;

    return (
      <div className="socialShare" style={styles ? styles : {}}>
        {message ? <p>{message}</p> : ''}
        <ul>
          <li onClick={loginWith('facebook')}>
            <img src={AssetsSocial.facebook} alt="Facebook"/>
          </li>
          <li onClick={loginWith('twitter')}>
            <img src={AssetsSocial.twitter} alt="Twitter"/>
          </li>
          <li onClick={loginWith('google')}>
            <img src={AssetsSocial.google} alt="Google"/>
          </li>
          <li onClick={loginWith('instagram')}>
            <img src={AssetsSocial.instagram} alt="Instagram"/>
          </li>
        </ul>
      </div>
    );
  }
}

export { SocialShare } ;

