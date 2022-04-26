import React from 'react';
import { Translate } from 'react-redux-i18n';

class Loading extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.saving.' + key;
    };
    return (
      <div id="saving" className={this.props.state}>
        <Translate value={getTranslation(this.props.state)}/>
      </div>
    );
  }
}

export default Loading;

