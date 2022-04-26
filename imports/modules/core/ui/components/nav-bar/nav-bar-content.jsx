import React from 'react';
import { withRouter } from 'react-router';
import IntMenu from './int-menu';
import AvatarMenuExtended from './avatar-menu-extended';
import NotificationsMenu from './notifications-menu';
import SearchOverlap from './search-overlap';
import NotificationSystem from 'react-notification-system';
import PropTypes from 'prop-types';
import $ from 'jquery';

class NavBarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
    this.ready = false;
    this._notificationSystem = null;
    this._addNotification = this._addNotification.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    this.openNotification = this.openNotification.bind(this);
    this.toggleFoldedMenu = this.toggleFoldedMenu.bind(this);
  }

  openNotification(notification) {
    Herald.collection.update(notification._id, { $set: { read: true } });
    if (notification.url) {
      let path = notification.url;
      let match = path.split(window.location.origin);
      if (match) {
        path = match[1].substring(1, match[1].length);
      }
      this.props.router.push(path);
    }
  }

  _addNotification(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      level: 'info',
      position: 'br',
      autoDismiss: 0,
      children: (
        <div onClick={() => console.log('Clicked')}>
          <div className="title">Property Taxes</div>
          <div className="description">Invoice 101 is overdue</div>
          <div className="time">
            {moment().subtract(15, 'minutes').fromNow()}
          </div>
        </div>
      )
    });
  }

  getNotifications() {
    let component = this;
    setTimeout(function () {
      Tracker.autorun(function () {
        if (!Meteor.user()) return;
        let notifications = Herald.getNotifications({ medium: 'onsite' }, { sort: { timestamp: -1 } }).fetch();
        let lastNotification = notifications[0];
        if (component.state.lastNotification !== lastNotification) {
          component.showNotification(lastNotification);
        }
        component.setState({
          notifications,
          lastNotification
        });

        component.ready = true;
      });
    }, 1000);
  }

  showNotification(notification) {
    if (this.ready && notification) {
      this._notificationSystem.addNotification({
        level: notification.data.type,
        position: 'br',
        autoDismiss: 6,
        children: (
          <div onClick={() => {
            this.openNotification(notification);
          }}>
            <div className="title">{notification.data.title}</div>
            <div className="description">{notification.data.description}</div>
            <div className="time">
              {moment(notification.timestamp).fromNow()}
            </div>
          </div>
        )
      });
    }
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    this.getNotifications();
  }

  toggleFoldedMenu() {
    $('body').toggleClass('site-menubar-fold').toggleClass('site-menubar-unfold');
  }

  render() {
    return (
      <div className="navbar-container container-fluid" style={{marginLeft:"200px !important"}}>
        <div className={'collapse navbar-collapse navbar-collapse-toolbar ' + (this.props.NavOpen ? 'in' : '')}>
          {/*
                    <ul className="nav navbar-toolbar">

                        <li className="nav-item hidden-float" id="toggleMenubar" onClick={this.toggleFoldedMenu}>
                            <a className="nav-link" data-toggle="menubar" href="#" role="button">
                                <i className="icon hamburger hamburger-arrow-left">
                                    <span className="sr-only">Toggle menubar</span>
                                    <span className="hamburger-bar"/>
                                </i>
                            </a>
                        </li>
                    </ul>
                    */}

          <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
            <IntMenu/>
            <NotificationsMenu notifications={this.state.notifications}
                               openNotification={this.openNotification}/>
            <AvatarMenuExtended/>

            {/*

                         <MessagesMenu/>
                         <SidebarMenu/>
                        */}
          </ul>
        </div>

        <SearchOverlap open={this.props.SearchOpen} toggle={this.props.SearchCollapse}/>
        <NotificationSystem ref="notificationSystem"/>
      </div>
    );
  }
}

NavBarContent.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(NavBarContent);
