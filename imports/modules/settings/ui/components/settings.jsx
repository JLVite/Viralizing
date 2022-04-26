import React from 'react';
import Switch from 'react-switchery';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-padding-30">
        <h5>General Settings</h5>
        <div>
          <div className="pull-xs-left margin-right-20">
            <Switch
              className="switch-class"
              onChange={this.onChange}
              options={
                {
                  size: 'small'
                }
              }
              checked
            />
          </div>
          <label className="padding-top-3" htmlFor="inputBasicOff">Browser Notifications</label>
        </div>
        <div>
          <div className="pull-xs-left margin-right-20">
            <Switch
              className="switch-class"
              onChange={this.onChange}
              options={
                {
                  size: 'small'
                }
              }
              checked
            />
          </div>
          <label className="padding-top-3" htmlFor="inputBasicOff">Email Notifications</label>
        </div>

      </div>
    );
  }
}

export default Settings;
