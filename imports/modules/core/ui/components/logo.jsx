import React from 'react';

import { AssetsApp } from '../icons';
import AppSettings from '../../../../settings';

class AppLogo extends React.Component {
  render() {
    return (
      <div className="appLogo">
        <img src={this.props.alt ? AppSettings.altLogo : AppSettings.logo} alt={AppSettings.name}/>
      </div>
    );
  }
}

export default AppLogo;

