import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Accounts } from 'meteor/accounts-base';
import { Field, reduxForm, change } from 'redux-form';
import notie from 'notie';

const getTranslation = key => `Settings.tabs.profile.password.${key}`;

class ProfilePassword extends React.Component {
  constructor() {
    super();
  }

  changePassword(data) {
    console.log('Target', data);
    if (data.newPass === data.repeat) {
      Accounts.changePassword(data.oldPass, data.newPass, (err) => {
        if (err) {
          notie.alert(3, I18n.t(getTranslation('errors.fail')), 3);
          return;
        }
        notie.alert(1, I18n.t(getTranslation('success')), 3);
        this.props.dispatch(change('changePass-form', 'oldPass', ''));
        this.props.dispatch(change('changePass-form', 'newPass', ''));
        this.props.dispatch(change('changePass-form', 'repeat', ''));
      });
    } else {
      notie.alert(1, I18n.t(getTranslation('errors.noMatch')), 3);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(data => this.changePassword(data))}>
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">
              <Translate value={getTranslation('title')} />
            </h3>
          </div>
          <div className="panel-body container" style={{ padding: '0px 30px' }}>
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.current')} />
              </label>
              <Field component="input" name="oldPass" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.new')} />
              </label>
              <Field component="input" name="newPass" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.repeat')} />
              </label>
              <Field component="input" name="repeat" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ marginBottom: '15px' }}>
              <Translate value={getTranslation('form.button')} />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const reduxProfilePassword = reduxForm({
  form: 'changePass-form',
})(ProfilePassword);

export default reduxProfilePassword;
