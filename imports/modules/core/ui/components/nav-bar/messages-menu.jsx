import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';

class MessagesMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let getTranslation = (key) => {
      return 'Core.navBar.notificationsMenu.' + key;
    };
    return (
      <NavDropdown eventKey={3} title={<div><i className="icon wb-envelope" aria-hidden="true"/> <span
        className="label label-pill label-info up">5</span></div>} id="messages-menu-dropdown"
                   className="nav-item no-caret">
        <div className="dropdown-menu-media">
          <div className="dropdown-menu-header" role="presentation">
            <h5><Translate value={getTranslation('title')}/></h5>
          </div>
          <div className="dropdown-menu-body list-group">
            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
              <div className="media">
                <div className="media-left padding-right-10">
                                                      <span className="avatar avatar-sm avatar-online">
                                                        <img
                                                          src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021"
                                                          alt="..."/>
                                                        <i/>
                                                      </span>
                </div>
                <div className="media-body">
                  <h6 className="media-heading">Mary Adams</h6>
                  <div className="media-meta">
                    <time dateTime="2016-06-17T20:22:05+08:00">30 minutes ago</time>
                  </div>
                  <div className="media-detail">Anyways, i would like just do it</div>
                </div>
              </div>
            </a>
          </div>
          <div className="dropdown-menu-footer" role="presentation">
            <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
              <i className="icon wb-settings" aria-hidden="true"/>
            </a>
            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
              <Translate value={getTranslation('all')}/>
            </a>
          </div>
        </div>
      </NavDropdown>
    );
  }
}

export default MessagesMenu;
