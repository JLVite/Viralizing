import React from 'react';

class InputSocialNetwork extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(network) {
    let { input: { onChange, value } } = this.props;
    return function () {
      let newVal = [...value];
      let indexOf = value.indexOf(network);
      //console.log("SOCIAL_NETWORK_CHANGE", value, newVal);
      if (indexOf === -1) {
        newVal.push(network);
      } else {
        newVal.splice(indexOf, 1);
      }
      onChange(newVal);
    };
  }

  render() {
    const { input: { value } } = this.props;
    return (
      <div className="social-networks-input">
        <ul className="profile-list">
          <li onClick={this.change('facebook')} className={(value.indexOf('facebook') !== -1) ? 'active' : ''}>
            <div className="selected">
              <i className="icon wb-check"/>
            </div>
            <i className="social-icon facebook"/>
          </li>
          <li onClick={this.change('twitter')} className={(value.indexOf('twitter') !== -1) ? 'active' : ''}>
            <div className="selected">
              <i className="icon wb-check"/>
            </div>
            <i className="social-icon twitter"/>
          </li>
          <li onClick={this.change('instagram')} className={(value.indexOf('instagram') !== -1) ? 'active' : ''}>
            <div className="selected">
              <i className="icon wb-check"/>
            </div>
            <i className="social-icon instagram"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default InputSocialNetwork;
