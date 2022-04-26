import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { CookieName } from '../../../settings';
import PropTypes from 'prop-types';

class AvatarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  logout() {
    Meteor.logout(() => {
      let path = '/auth/login';
      if (window.localStorage.getItem(CookieName + '_USER_DATA')) {
        path = '/auth/restore';
      }
      this.props.router.push(path);
    });

  }

  goTo() {
    this.props.router.push('/settings/profile');
  }

  render() {
    let Avatar = (
      <span className="avatar avatar-online">
                <img src={this.props.user.profile.avatar} alt="..."/>
                <i/>
            </span>
    );
    let getTranslation = (key) => {
      return 'Core.navBar.avatarMenu.' + key;
    };
    return (
      <NavDropdown eventKey={3} title={Avatar} id="avatar-menu-dropdown"
                   className="nav-item no-caret navbar-avatar ">
        <MenuItem eventKey={3.1} className="dropdown-item" onClick={this.goTo}>
          <i className="icon wb-user" aria-hidden="true"/> <Translate value={getTranslation('profile')}/>
        </MenuItem>
        <MenuItem eventKey={3.2} className="dropdown-item">
          <i className="icon wb-payment" aria-hidden="true"/> <Translate value={getTranslation('billing')}/>
        </MenuItem>
        <MenuItem eventKey={3.3} className="dropdown-item">
          <i className="icon wb-settings" aria-hidden="true"/> <Translate value={getTranslation('settings')}/>
        </MenuItem>
        <MenuItem divider/>
        <MenuItem eventKey={3.3} className="dropdown-item" onClick={this.logout}>
          <i className="icon wb-power" aria-hidden="true"/> <Translate value={getTranslation('logout')}/>
        </MenuItem>
      </NavDropdown>
    );
  }
}

AvatarMenu.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const AvatarMenuWithUserId = createContainer(() => {
  return {
    user: Meteor.user() || '',
  };
}, withRouter(AvatarMenu));

export default AvatarMenuWithUserId;
