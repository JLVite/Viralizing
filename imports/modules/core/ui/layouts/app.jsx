import React from 'react';
import LocalStorage from '../../client/LocalStorage';
import Modal from 'react-modal';
import { CookieName } from '../../settings';
import { withRouter } from 'react-router';
import NavBar from '../components/nav-bar/nav-bar';
import MenuBar from '../components/menu-bar';
import ProfileData from '../components/profile-information/layout';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

browserHistory.listen(location => {
  const path = location.pathname;
  if (path !== '/auth/login' && path !== '/auth/restore' && path !== '/auth/register' && path !== '/auth/recover') {
    localStorage.setItem('redirect-to', window.location.pathname + window.location.search);
  }
});

const COOKIE_NAME = CookieName + '_USER_DATA';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modals: {
        profileData: false
      },
      initialized: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.checkFlags = this.checkFlags.bind(this);
  }

  openModal(modal) {
    let component = this;
    return function () {
      let newState = { ...component.state };
      newState.modals[modal] = true;
      component.setState(newState);
    };
  }

  closeModal(modal) {
    let component = this;
    return function () {
      let newState = { ...component.state };
      newState.modals[modal] = false;
      component.setState(newState);
    };
  }

  isLoggedIn() {
    return Meteor.user() || false;
  }

  isSanctioned() {
    const history = this.props.router;

    let isSanctioned = false;
    if (!isSanctioned) {
      isSanctioned = history.isActive('/auth/login') || history.isActive('/auth/recover') || history.isActive('/auth/register') || history.isActive('/auth/restore');
    }

    return isSanctioned;
  }

  redirectToAuth() {
    let redirect = '/auth/login';
    if (this.isSanctioned()) {
      return;
    }
    if (LocalStorage.getItem(COOKIE_NAME)) {
      redirect = '/auth/restore';
    }
    this.props.router.push(redirect);
  }

  componentWillMount() {
    let component = this;
    let checkAuth = function () {
      if (!Meteor.user()) {
        component.redirectToAuth();
      } else {
        if (window.localStorage.getItem(CookieName + '_USER_DATA')) {
          let user = Meteor.user();
          if (user.emails && user.emails[0]) {
            let userData = {
              _id: user._id,
              email: user.emails[0].address,
              name: user.profile.name,
              avatar: user.profile.avatar
            };
            window.localStorage.setItem(CookieName + '_USER_DATA', JSON.stringify(userData));
          }
        }
        if (!component.state.initialized) {
          component.checkFlags();
          component.setState({ initialized: true });
        }
      }
    };
    checkAuth();
    this.userCheck = setInterval(checkAuth, 5000);
  }

  checkFlags() {
    let component = this;
    Meteor.call('users-get-flags', function (err, res) {
      if (res) {
        if (!res.askedProfileData) {
          component.openModal('profileData')();
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.userCheck) {
      clearInterval(this.userCheck);
    }
  }

  render() {
    let filter = (obj) => {
      let newProps = {};
      let key;
      for (key in obj) {
        if (key !== 'children') {
          newProps[key] = obj[key];
        }
      }
      return newProps;
    };

    return (
      <div>
        {this.isLoggedIn() ? <NavBar/> : <div/>}
        {this.isLoggedIn() ? <MenuBar path={this.props.location.query.path}/> : <div/>}

        <div id="container" className={this.isLoggedIn() ? 'page' : 'auth'}>
          {React.cloneElement(this.props.children, filter(this.props))}
        </div>

        <Modal
          isOpen={this.state.modals.profileData}
          onRequestClose={this.closeModal('profileData')}
          className="full-app-modal"
          shouldCloseOnEsc={false}
          contentLabel="User Profile"
        >
          <ProfileData close={this.closeModal('profileData')}/>
        </Modal>
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(App);
