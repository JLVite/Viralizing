import React from 'react';
import { withRouter } from 'react-router';
import { Translate, I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { CookieName } from '../../settings';
import AuthForm from '../components/auth-form';
import LocalStorage from '../../client/LocalStorage';
import AppSettings from '../../../../settings';

class AuthComponent extends React.Component {
  constructor() {
    super();

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.redirectToApp = this.redirectToApp.bind(this);
    this.getAction = this.getAction.bind(this);
  }

  isLoggedIn() {
    return Meteor.user() || false;
  }

  redirectToApp() {
    const lsURL = LocalStorage.getItem('redirect-to', window.location.pathname);
    const redirectURL = lsURL || '/';
    if (lsURL) {
      LocalStorage.removeItem('redirect-to');
    }
    this.props.router.push(redirectURL);
  }

  componentWillMount() {
    this.userCheck = Tracker.autorun(() => {
      if (this.isLoggedIn()) {
        this.redirectToApp();
      }
    });

    if (window.location.pathname === '/auth/restore' && !window.localStorage.getItem(`${CookieName}_USER_DATA`)) {
      this.props.router.push('/auth/login');
    }

    if (this.props.params.action === 'logout') {
      const component = this;
      Meteor.logout(() => {
        component.props.router.push('/auth/restore');
        window.localStorage.removeItem('redirect-to');
      });
    }
  }

  componentWillUnmount() {
    if (this.userCheck) {
      this.userCheck.stop();
    }
  }

  getAction() {
    return this.props.params.action || 'register';
  }

  render() {
    const getTranslation = key => `Core.auth.${key}`;
    const currentYear = moment().get('year');

    return (
      <div id="auth">
        <div className="overlay">
          <AuthForm action={this.getAction()} />

          <footer className="page-copyright page-copyright-inverse">
            <p>{AppSettings.name}</p>
            <p>
©
              {currentYear}
.
              <Translate value={getTranslation('labels.rightsReserved')} />
            </p>
          </footer>

        </div>
      </div>
    );
  }
}

const Auth = withRouter(AuthComponent);

AuthComponent.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Auth;
