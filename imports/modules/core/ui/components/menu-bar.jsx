import React from 'react';
import Menu from './menu';
import MenuBarFooter from './menu-bar-footer';

class MenuBar extends React.Component {
  render() {
    return (
      <div className="site-menubar">
        <div className="site-menubar-body">
          <div>
            <div>
              <Menu path={this.props.path}/>

            </div>
          </div>
        </div>

        <MenuBarFooter/>
      </div>

    );
  }
}

export default MenuBar;
