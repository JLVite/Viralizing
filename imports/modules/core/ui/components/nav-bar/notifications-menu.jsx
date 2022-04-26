import React from 'react';
import { NavDropdown, NavItem } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';

const MenuContent = props => (
  <div className="dropdown-menu-media">
    <div className="dropdown-menu-header">
      <h5><Translate value={props.notifications.length ? props.getTranslation('title') : props.getTranslation('noNotifications')} /></h5>
    </div>
    <div className="dropdown-menu-body list-group">
      {props.notifications.map(notification => (
        <a
          className="list-group-item"
          key={notification._id}
          href="javascript:void(0)"
          role="menuitem"
          onClick={() => {
            props.open(notification);
          }}
        >
          <div className="media">
            <div className="media-left padding-right-10">
              <i className="icon wb-order bg-red-600 white icon-circle" aria-hidden="true" />
            </div>
            <div className="media-body">
              <h5>{notification.data.title}</h5>
              <h6 className="media-heading">{notification.data.description}</h6>
              <time
                className="media-meta"
                dateTime="2016-06-12T20:50:48+08:00"
              >
                {moment(notification.timestamp).fromNow()}
              </time>
            </div>
          </div>
        </a>
      ))}

    </div>
    {/*
            <div className="dropdown-menu-footer">
                <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                    <i className="icon md-settings" aria-hidden="true"></i>
                </a>
                <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                    <Translate value={props.getTranslation("all")}/>
                </a>
            </div>
            */}
  </div>
);

class NotificationsMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const getTranslation = key => `Core.navBar.notificationsMenu.${key}`;
    return (
      <NavDropdown
        eventKey={3}
        title={(
          <div>
            <i
              className="icon wb-bell"
              aria-hidden="true"
            />
            {' '}
            {this.props.notifications.length !== 0
              ? <span className="label label-pill label-ibol up">{this.props.notifications.length}</span> : ''}
          </div>
)}
        id="notifications-menu-dropdown"
        className="nav-item no-caret"
      >
        <MenuContent
          getTranslation={getTranslation}
          notifications={this.props.notifications}
          open={this.props.openNotification}
        />
      </NavDropdown>
    );
  }
}

NotificationsMenu.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NotificationsMenu);
