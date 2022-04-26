import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-router-bootstrap';
import notie from 'notie';
import { Translate, I18n } from 'react-redux-i18n';
import { CookieName } from '../../settings';
import { IconFacebook, IconTwitter, IconGoogle } from './social-icons';
import AppSettings from '../../../../settings';
import { SocialShare } from './social-share';
import AppLogo from './logo';
import IntMenu from './nav-bar/int-menu';

const getTranslation = key => `Core.auth.${key}`;

class AuthForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
      password: null,
      rememberMe: false,
    };

    this.getButtonText = this.getButtonText.bind(this);
    this.getSocialLogin = this.getSocialLogin.bind(this);
    this.accountsRegister = this.accountsRegister.bind(this);
    this.accountsLogin = this.accountsLogin.bind(this);
    this.accountsRestore = this.accountsRestore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginWith = this.loginWith.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(key) {
    const component = this;
    return function (e) {
      let val = e.target.value;
      const newState = Object.assign({}, component.state);
      if (typeof (val) === 'string') val = val.trim();
      newState[key] = val;
      component.setState(newState);
    };
  }

  getButtonText(action) {
    let value = '';
    switch (action) {
      case 'login':
        value = <Translate value={getTranslation(`${action}.button`)} />;
        break;
      case 'restore':
        value = <Translate value={getTranslation(`${action}.button`)} />;
        break;
      case 'register':
        value = <Translate value={getTranslation(`${action}.button`)} />;
        break;
      case 'recover':
        value = <Translate value={getTranslation(`${action}.button`)} />;
        break;
      default:
        value = <Translate value={getTranslation('login.button')} />;
    }

    return value;
  }

  loginWith(service) {
    return function () {
      // console.log("Login with,",service);
      switch (service) {
        case 'facebook':
          Meteor.loginWithFacebook({
            requestPermissions: ['public_profile', 'email'],
          }, (err, res) => {
            // console.log(service+" Login",arguments);
            if (err && err.reason && err.reason === 'Email already exists.') {
              notie.alert(3, 'Account already exists with Email credentials', 5);
              return;
            }

            console.debug('Social Login Res:', res);
            location.reload();
          });
          break;
        case 'twitter':
          Meteor.loginWithTwitter({}, (err, res) => {
            // console.log(service+" Login",arguments);
            if (err && err.reason && err.reason === 'Email already exists.') {
              notie.alert(3, 'Account already exists with Email credentials', 5);
              return;
            }

            console.debug('Social Login Res:', res);
            location.reload();
          });
          break;
        case 'google':
          Meteor.loginWithGoogle({}, (err, res) => {
            // console.log(service+" Login",arguments);
            if (err && err.reason && err.reason === 'Email already exists.') {
              notie.alert(3, 'Account already exists with Email credentials', 5);
              return;
            }

            console.debug('Social Login Res:', res);
            location.reload();
          });
          break;
        case 'instagram':
          Meteor.loginWithInstagram({}, (err, res) => {
            // console.log(service+" Login",arguments);
            if (err && err.reason && err.reason === 'Email already exists.') {
              notie.alert(3, 'Account already exists with Email credentials', 5);
              return;
            }

            console.debug('Social Login Res:', res);
            location.reload();
          });
          break;

        default:
          console.error(`Login with ${service} is not available`);
      }
    };
  }

  getSocialLogin(action) {
    if (action === 'login') {
      // console.log("GET_SOCIAL_LOGIN", this.loginWith);
      return (
        <div className="social-login">
          <SocialShare loginWith={this.loginWith} message={<Translate value={getTranslation('labels.or')} />} />
        </div>
      );
    }
    return '';
  }

  accountsRegister(email, password) {
    // console.log("register");
    const self = this;
    Meteor.call('users_create_account', email, password, 'Plan', 'Source', (err, res) => {
      if (err && err.reason) {
        notie.alert(3, err.reason, 3);
        return;
      }
      self.accountsLogin(email, password);
    });
  }

  accountsLogin(email, password) {
    // console.log("ACCOUNTS_LOGIN", email, password);

    Meteor.loginWithPassword(email, password, (err, res) => {
      if (err && err.reason) {
        notie.alert(3, I18n.t(getTranslation('errors.login')), 3);
      }
      location.reload();
    });
  }

  accountsRestore(password) {
    if (window.localStorage.getItem(`${CookieName}_USER_DATA`)) {
      const data = JSON.parse(window.localStorage.getItem(`${CookieName}_USER_DATA`));

      // console.log("ACCOUNT_RESTORE", data.email, password);
      this.accountsLogin(data.email, password);
    }
  }

  handleSubmit(e) {
    const { action } = this.props;
    e.preventDefault();
    const form = this.state;

    if (action !== 'restore') {
      if (form.rememberMe) {
        window.localStorage.setItem(`${CookieName}_USER_DATA`, JSON.stringify({
          active: true,
          email: form.email,
        }));
      } else {
        window.localStorage.removeItem(`${CookieName}_USER_DATA`);
      }
    }

    // console.log("FORM_SUBMIT_DATA", form);

    switch (action) {
      case 'login':
        this.accountsLogin(form.email, form.password);
        break;
      case 'register':
        this.accountsRegister(form.email, form.password);
        break;
      case 'recover':
        this.accountsRecover(form.email);
        break;
      case 'restore':
        this.accountsRestore(form.password);
        break;
      default:
        throw new Error('Wrong Auth State');
    }
    return false;
  }

  render() {
    const { action } = this.props;
    let user = {
      avatar: null,
      name: null,
    };

    if (window.localStorage.getItem(`${CookieName}_USER_DATA`)) {
      user = JSON.parse(window.localStorage.getItem(`${CookieName}_USER_DATA`));
    }

    const emailInput = (
      <div className="form-group">
        <label className="sr-only" htmlFor="inputEmail">{I18n.t(getTranslation('labels.email'))}</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder={I18n.t(getTranslation('labels.email'))}
          onChange={this.updateValue('email')}
          name="Email"
        />
      </div>
    );

    let passwordInput = (
      <div className="form-group">
        <label className="sr-only" htmlFor="inputPassword">{I18n.t(getTranslation('labels.password'))}</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder={I18n.t(getTranslation('labels.password'))}
          onChange={this.updateValue('password')}
          name="Password"
        />
      </div>
    );

    const greetingMessage = <Translate value={getTranslation(`${action}.greeting`)} />;
    let extra;
    switch (action) {
      case 'login':
        extra = <Link to="/auth/register"><Translate value={getTranslation('register.button')} /></Link>;
        break;
      case 'restore':
        extra = <Link to="/auth/login"><Translate value={getTranslation('restore.footer2')} /></Link>;
        break;
      case 'register':
        extra = <Link to="/auth/login"><Translate value={getTranslation('login.button')} /></Link>;
        break;
      case 'recover':
        extra = <Link to="/auth/login"><Translate value={getTranslation('login.button')} /></Link>;
        break;
      default:
    }

    const footerMessage = (
      <div>
        <Translate value={getTranslation(`${action}.footer`)} />
        {extra}
      </div>
    );
    let headerImage = <AppLogo alt />;

    if (action === 'restore') {
      headerImage = <img src={user.avatar} alt={user.name | '...'} className="avatar" />;
      passwordInput = (
        <div className="input-group">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder={I18n.t(getTranslation('labels.password'))}
            onChange={this.updateValue('password')}
            name="password"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">
              <i className="icon wb-unlock" aria-hidden="true" />
              <span className="sr-only">unLock</span>
            </button>
          </span>
        </div>
      );
    }

    const loginHelpers = (
      <div className="form-group clearfix">
        <div className="checkbox-custom checkbox-inline checkbox-primary pull-left">
          <input
            type="checkbox"
            id="inputCheckbox"
            name="remember"
            onChange={this.updateValue('rememberMe')}
          />
          <label htmlFor="inputCheckbox"><Translate value={getTranslation('login.remember')} /></label>
        </div>
        <Link className="pull-right" to="/auth/recover">
          <Translate
            value={getTranslation('recover.link')}
          />
        </Link>
      </div>
    );

    return (
      <div className="page-content vertical-align-middle page-login">
        <div className="brand">
          {headerImage}
        </div>
        <p>{greetingMessage}</p>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          {action !== 'restore' ? emailInput : ''}

          {action !== 'recover' ? passwordInput : ''}

          {action === 'login' ? loginHelpers : ''}

          {action !== 'restore' ? (
            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              {this.getButtonText(action)}
            </button>
          ) : ''}

          {this.getSocialLogin(action)}

          <div className="footer">
            {footerMessage}
          </div>
          {/* <AccountsUIWrapper/> */}
          <div className="language">
            <IntMenu />
            <Translate value={getTranslation('labels.language')} />
          </div>
        </form>
      </div>
    );
  }
}

export default AuthForm;
