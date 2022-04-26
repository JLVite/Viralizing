import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { Translate } from 'react-redux-i18n';
// import { url } from 'inspector';

let linktoStatement = <Link to="/statement">Estado de Cuenta</Link>;

class MenuItem extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return;
  }
}

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          'title': 'App',
          'items': [
            {
              'translation': 'Core.menu.home',
              'link': '/',
              'icon': 'fa-home'
            },
            {
              'translation': 'Accounts.menu',
              'link': '/accounts',
              'icon': 'fa-users'
            },
            {
              'translation': 'Agenda.menu',
              'link': '/agenda',
              'icon': 'fa-calendar-o'
            },
            {
              'translation': 'Campaigns.menu',
              'link': '/campaigns/own',
              'svg': '/images/v_logo.png'
            },
            {
              'translation': 'TeamAttack.menu',
              'link': '/team-attack',
              'svg': 'https://s3.amazonaws.com/ibol-app-media/icons/team-attack.svg'
            },
            {
              'translation': 'Advertising.menu',
              'link': '/advertising',
              'icon': 'fa-globe'
            },
            {
              'translation': 'Reporter.menu',
              'link': '/reporter',
              'icon': 'fa-file-text-o'
            },
            {
              'translation': 'Search.menu',
              'link': '/search',
              'icon': 'fa-search'
            },
            {
              'translation': 'Pricing.menu',
              'link': '/pricing',
              'icon': 'fa-tag',
              'styles': { marginTop: '60px' }
            },
            {
              'translation': 'Statement.menu',
              'link': '/statement',
              'icon': 'fa-credit-card-alt'
            },
            {
              'translation': 'Code.menu',
              'link': '/code',
              'icon': 'fa-barcode'
            },
            {
              'translation': 'Core.menu.help',
              'link': 'http://viralizing.me/help',
              'icon': 'fa-question',
              'external': true,
              'styles': { marginTop: '60px' }
            },
            {
              'translation': 'Settings.menu',
              'link': '/settings/profile',
              'icon': 'fa-cog'
            },
            {
              'translation': 'Core.menu.logout',
              'link': '/auth/logout',
              'icon': 'fa-power-off'
            }
          ]
        },
      ]

    };

    this.toggleFoldedMenu = this.toggleFoldedMenu.bind(this);
  }

  componentDidMount() {
    /*
     $.get(this.getLevel(window.location.pathname, "base") + "src/data/site_menu.json", (data) => {
     if (this.isMounted()) {
     this.setState({
     data: data
     });

     this.init=false;
     }
     });*/
  }

  subMenu(item) {
    return item.children ? (<ul className="site-menu-sub"> {this.items(item.children)} </ul>) : '';
  }

  itemContent(item) {
    let icon = item.icon ? <i className={'site-menu-icon ' + item.icon} aria-hidden="true"></i> : '',
      title = <span className="site-menu-title">{item.title ? item.title :
        <Translate value={item.translation}/>}</span>,
      badge = item.badge ?
        <div className="site-menu-badge"><span
          className={'label label-pill ' + item.badge.modifier}>{item.badge.text}</span></div> :
        (
          item.label ?
            <div className="site-menu-label"><span
              className={'label ' + item.label.modifier}>{item.label.text}</span></div> :
            (item.children ? <span className="site-menu-arrow"></span> : '')
        );
    if (item.svg) {
      icon = <div className="item-svg" style={{backgroundImage:`url(${item.svg})`,height:"20px",width:"20px", backgroundSize:"cover",display:"inline-block"}} />
      // <img src={item.svg} alt={item.title} className="site-menu-icon"/>;
    }
    return (
      item.external ? (
        <a className="animsition-link" href={item.link} target="_blank">{icon}{title}{badge}</a>
      ) : (
        item.link ?
          <Link className="animsition-link" to={item.link}
                activeClassName={item.link === '/' ? '' : 'active'}>{icon}{title}{badge}</Link> :
          <a href="javascript:void(0)">{icon}{title}{badge}</a>
      )
    );

  }

  items(data) {
    let menu = [];
    let subMenuOpen = (e) => {
      //console.log("SUB_MENU_OPEN", e.target);
      $(e.target).closest('li').toggleClass('open');
    };
    data.forEach((item) => {
      if (item.children) {
        menu.push(
          <li key={item.title || item.translation}
              className={'site-menu-item has-sub ' + (this.class ? this.class : '')} onClick={subMenuOpen}>
            {this.itemContent(item)}
            {this.subMenu(item)}
          </li>
        );
      } else {
        menu.push(
          <li key={item.title || item.translation}
              className={'site-menu-item ' + (this.class ? this.class : '')} style={item.styles || {}}>
            {this.itemContent(item)}
          </li>
        );
      }
    });

    return menu;
  }

  componentDidUpdate() {
    if (!this.init) {
      let $item = $(`[href*="path=${encodeURIComponent(this.props.path)}"]`);

      if ($item.length === 1) {
        $item.trigger('click.site.menu');
        $item.parents('.has-sub').trigger('open.site.menu');
        this.init = true;
      }
    }
  }

  toggleFoldedMenu() {
    $('body').toggleClass('site-menubar-fold').toggleClass('site-menubar-unfold');
  }

  render() {
    let menu = [];

    this.state.data.forEach((item) => {
      menu.push(
        <li key={item.title || item.translation} className="site-menu-category">
          {/*item.title?item.title:<Translate value={item.translation}/>*/}
        </li>
      );
      menu.push(
        <li className="site-menu-item " key="menu-toggle" onClick={this.toggleFoldedMenu}>
          <a className="animsition-link" href="#">
            <i className="site-menu-icon fa-bars" aria-hidden="true"/>
          </a>
        </li>
      );

      if (item.items) {
        menu.push(this.items(item.items));
      }
    });

    return (
      <ul className="site-menu" data-plugin="menu">
        {menu}
      </ul>
    );
  }
}

export default Menu;
