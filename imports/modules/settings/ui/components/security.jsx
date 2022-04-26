import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import notie from 'notie';
import ProfilePassword from './profile/password';

class Security extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      email: 'test@test.com',
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
  }

  componentDidMount() {
    const user = Meteor.user();
    this.setState({ email: user.emails[0].address });
  }

  updateEmail(event) {
    event.preventDefault();
    const getTranslation = key => `Settings.tabs.profile.form.${key}`;
    const email = this.email.value;
    if (email) {
      Meteor.call('update-email-profile', Meteor.userId(), email);
      this.setState({ email, toggle: !this.state.toggle });
      notie.alert(1, I18n.t(getTranslation('saved')), 3);
    } else {
      this.setState({ toggle: !this.state.toggle });
    }
  }

  updateToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const getTranslation = key => `Settings.tabs.profile.password.${key}`;

    return (
      <div>
        <div className="row">
          <div className="col-md-3 col-md-offset-9" style={{ margin: '40px' }}>
            <ProfilePassword />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" style={{ margin: '0 40px 0' }}>
            <p><Translate value={getTranslation('form.email')} /></p>
            <div className="panel" style={{ padding: '10px' }}>
              <p style={{ margin: '0', paddingLeft: '19px' }}>{this.state.email}</p>
              <button className="edit-toggle" onClick={this.updateToggle}>
                <i className="icon wb-edit" />
              </button>
              {
                this.state.toggle
                  ? (
                    <div style={{ margin: '10px' }}>
                      <Translate value={getTranslation('form.add_email')} />
                      <div className="row">
                        <Field
                          name="email"
                          ref={(node) => { this.email = node; }}
                          style={{ width: '88%', marginLeft: '15px' }}
                          className="form-control col-md-6"
                          component="input"
                        />
                        <button
                          type="button"
                          onClick={this.updateEmail}
                          className="email-accept btn btn-primary col-md-4"
                        >
                          <Translate value={getTranslation('form.accept')} />
                        </button>
                      </div>
                    </div>
                  ) : null
              }

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Security;
