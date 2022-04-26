import React from 'react';
import NavBarHeader from './nav-bar-header';
import NavBarContent from './nav-bar-content';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      navCollapse: false
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleNavCollapse = this.toggleNavCollapse.bind(this);
  }

  toggleSearch() {
    this.setState({
      search: !this.state.search
    });
  }

  toggleNavCollapse() {
    this.setState({
      navCollapse: !this.state.navCollapse
    });
  }

  render() {
    return (
      <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega">
        <NavBarHeader NavCollapse={this.toggleNavCollapse} SearchCollapse={this.toggleSearch}/>
        <NavBarContent NavOpen={this.state.navCollapse} SearchOpen={this.state.search}
                       SearchCollapse={this.toggleSearch}/>
      </nav>
    );
  }
}

export default NavBar;




