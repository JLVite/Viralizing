import React from 'react';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="nav-item" id="toggleChat">
        <a className="nav-link" data-toggle="site-sidebar" href="javascript:void(0)"
           title="Chat" data-url="{dest 'site-sidebar.tpl'}">
          <i className="icon wb-chat" aria-hidden="true"></i>
        </a>
      </li>
    );
  }
}

export default SidebarMenu;
