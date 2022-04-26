import React from 'react';
import AppSettings from '../../../../../settings';

class NavBarHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imagePath = '';
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
                data-toggle="menubar">
          <span className="sr-only">Toggle navigation</span>
          <span className="hamburger-bar"/>
        </button>

        <button type="button"
                className="navbar-toggler collapsed"
                onClick={this.props.NavCollapse}>
          <i className="icon wb-more-horizontal" aria-hidden="true"/>
        </button>

        <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
          <img className="navbar-brand-logo" src={AppSettings.logo} title={AppSettings.name}/></div>

        <button type="button" className="navbar-toggler collapsed"
                onClick={this.props.SearchCollapse}>
          <span className="sr-only">Toggle Search</span>
          <i className="icon wb-search" aria-hidden="true"/>
        </button>
      </div>
    );
  }
}

export default NavBarHeader;
