import React from 'react';
import { Translate } from 'react-redux-i18n';

let Loader = require('halogen/PulseLoader');

class Loading extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.loading.' + key;
    };
    return (
      <div className="loading-screen">
        <div className="content">
          <Loader color="#444" size="16px" margin="4px"/>
          <h3><Translate value={getTranslation('title')}/></h3>
        </div>
      </div>
    );
  }
}

export default Loading;

