import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { AppLogo } from '../../../core/ui/components/logo';

class NavBar extends React.Component {
  getLevel(url, tag) {
    let arr = url.split('/').reverse(),
      level, path = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === tag) {
        level = i;
      }
    }
    for (let m = 1; m < level; m++) {
      path += '../';
    }

    return path;
  }

  render() {
    let path = window.location.pathname,
      reactPath = this.getLevel(path, 'remark-react'),
      basePath = this.getLevel(path, 'base'),
      htmlPath = this.getLevel(path, 'html'),
      imagePath = reactPath + 'global/photos/',
      portraitPath = reactPath + 'global/portraits/';

    return (
      <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">

        <div className="navbar-header">
          <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
                  data-toggle="menubar">
            <span className="sr-only">Toggle navigation</span>
            <span className="hamburger-bar"></span>
          </button>

          <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse"
                  data-toggle="collapse">
            <i className="icon wb-more-horizontal" aria-hidden="true"></i>
          </button>

          <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
            <img className="navbar-brand-logo" src={basePath + 'assets/images/logo.png'} title="Remark"/><span
            className="navbar-brand-text hidden-xs-down"> Remark</span></div>
          <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search"
                  data-toggle="collapse">
            <span className="sr-only">Toggle Search</span>
            <i className="icon wb-search" aria-hidden="true"></i>
          </button>
        </div>

        <div className="navbar-container container-fluid">
          <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
            <ul className="nav navbar-toolbar">
              <li className="nav-item hidden-float" id="toggleMenubar">
                <a className="nav-link" data-toggle="menubar" href="#" role="button">
                  <i className="icon hamburger hamburger-arrow-left">
                    <span className="sr-only">Toggle menubar</span>
                    <span className="hamburger-bar"></span>
                  </i>
                </a>
              </li>
              <li className="nav-item hidden-sm-down" id="toggleFullscreen">
                <a className="nav-link icon icon-fullscreen" data-toggle="fullscreen" href="#"
                   role="button">
                  <span className="sr-only">Toggle fullscreen</span>
                </a>
              </li>
              <li className="nav-item hidden-float">
                <a className="nav-link icon wb-search" data-toggle="collapse" href="#"
                   data-target="#site-navbar-search" role="button">
                  <span className="sr-only">Toggle Search</span>
                </a>
              </li>
              <li className="nav-item dropdown dropdown-fw dropdown-mega">
                <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false"
                   data-animation="fade" role="button">Mega <i className="icon wb-chevron-down-mini"
                                                               aria-hidden="true"></i></a>
                <div className="dropdown-menu" role="menu">
                  <div className="mega-content">
                    <div className="row">
                      <div className="col-md-4">
                        <h5>UI Kit</h5>
                        <ul className="blocks-2">
                          <li className="mega-menu margin-0">
                            <ul className="list-icons">
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'advanced/animation.html'}>Animation</a>
                              </li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/buttons.html'}>Buttons</a></li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/colors.html'}>Colors</a></li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/dropdowns.html'}>Dropdowns</a>
                              </li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/icons.html'}>Icons</a></li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'advanced/lightbox.html'}>Lightbox</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu margin-0">
                            <ul className="list-icons">
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/modals.html'}>Modals</a></li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/panel-structure.html'}>Panels</a>
                              </li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'structure/overlay.html'}>Overlay</a>
                              </li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/tooltip-popover.html '}>Tooltips</a>
                              </li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'advanced/scrollable.html'}>Scrollable</a>
                              </li>
                              <li><i className="wb-chevron-right-mini"
                                     aria-hidden="true"></i><a
                                href={htmlPath + 'uikit/typography.html'}>Typography</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h5>Media<span className="label label-pill label-success">4</span></h5>
                        <ul className="blocks-3">
                          <li>
                            <a className="thumbnail margin-0" href="javascript:void(0)">
                              <img className="width-full"
                                   src={imagePath + 'view-1-150x100.jpg'} alt="..."/>
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail margin-0" href="javascript:void(0)">
                              <img className="width-full"
                                   src={imagePath + 'view-2-150x100.jpg'} alt="..."/>
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail margin-0" href="javascript:void(0)">
                              <img className="width-full"
                                   src={imagePath + 'view-3-150x100.jpg'} alt="..."/>
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail margin-0" href="javascript:void(0)">
                              <img className="width-full"
                                   src={imagePath + 'view-4-150x100.jpg'} alt="..."/>
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail margin-0" href="javascript:void(0)">
                              <img className="width-full"
                                   src={imagePath + 'view-5-150x100.jpg'} alt="..."/>
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail margin-0" href="javascript:void(0)">
                              <img className="width-full"
                                   src={imagePath + 'view-6-150x100.jpg'} alt="..."/>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h5 className="margin-bottom-0">Accordion</h5>
                        <div className="panel-group panel-group-simple" id="siteMegaAccordion"
                             aria-multiselectable="true" role="tablist">
                          <div className="panel">
                            <div className="panel-heading" id="siteMegaAccordionHeadingOne"
                                 role="tab">
                              <a className="panel-title" data-toggle="collapse"
                                 href="#siteMegaCollapseOne"
                                 data-parent="#siteMegaAccordion" aria-expanded="false"
                                 aria-controls="siteMegaCollapseOne">
                                Collapsible Group Item #1
                              </a>
                            </div>
                            <div className="panel-collapse collapse"
                                 id="siteMegaCollapseOne"
                                 aria-labelledby="siteMegaAccordionHeadingOne"
                                 role="tabpanel">
                              <div className="panel-body">
                                De moveat laudatur vestra parum doloribus labitur
                                sentire partes, eripuit praesenti congressus ostendit
                                alienae, voluptati ornateque accusamus clamat reperietur
                                convicia albucius.
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading" id="siteMegaAccordionHeadingTwo"
                                 role="tab">
                              <a className="panel-title collapsed" data-toggle="collapse"
                                 href="#siteMegaCollapseTwo"
                                 data-parent="#siteMegaAccordion" aria-expanded="false"
                                 aria-controls="siteMegaCollapseTwo">
                                Collapsible Group Item #2
                              </a>
                            </div>
                            <div className="panel-collapse collapse"
                                 id="siteMegaCollapseTwo"
                                 aria-labelledby="siteMegaAccordionHeadingTwo"
                                 role="tabpanel">
                              <div className="panel-body">
                                Praestabiliorem. Pellat excruciant legantur ullum
                                leniter vacare foris voluptate loco ignavi, credo
                                videretur multoque choro fatemur mortis animus
                                adoptionem, bello statuat expediunt naturales.
                              </div>
                            </div>
                          </div>

                          <div className="panel">
                            <div className="panel-heading"
                                 id="siteMegaAccordionHeadingThree" role="tab">
                              <a className="panel-title collapsed" data-toggle="collapse"
                                 href="#siteMegaCollapseThree"
                                 data-parent="#siteMegaAccordion" aria-expanded="false"
                                 aria-controls="siteMegaCollapseThree">
                                Collapsible Group Item #3
                              </a>
                            </div>
                            <div className="panel-collapse collapse"
                                 id="siteMegaCollapseThree"
                                 aria-labelledby="siteMegaAccordionHeadingThree"
                                 role="tabpanel">
                              <div className="panel-body">
                                Horum, antiquitate perciperet d conspectum locus
                                obruamus animumque perspici probabis suscipere.
                                Desiderat magnum, contenta poena desiderant concederetur
                                menandri damna disputandum corporum.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="javascript:void(0)"
                   data-animation="scale-up" aria-expanded="false" role="button"><span
                  className="flag-icon flag-icon-us"></span></a>
                <div className="dropdown-menu" role="menu">
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><span
                    className="flag-icon flag-icon-gb"></span> English</a>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><span
                    className="flag-icon flag-icon-fr"></span> French</a>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><span
                    className="flag-icon flag-icon-cn"></span> Chinese</a>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><span
                    className="flag-icon flag-icon-de"></span> German</a>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><span
                    className="flag-icon flag-icon-nl"></span> Dutch</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link navbar-avatar" data-toggle="dropdown" href="#"
                   aria-expanded="false" data-animation="scale-up" role="button">
                                  <span className="avatar avatar-online">
                                    <img src="https://www.gravatar.com/avatar/5850bfd5fbe405631ce4fb6fef3a5021"
                                         alt="..."/>
                                    <i></i>
                                  </span>
                </a>
                <div className="dropdown-menu" role="menu">
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i
                    className="icon wb-user" aria-hidden="true"></i> Profile</a>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i
                    className="icon wb-payment" aria-hidden="true"></i> Billing</a>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i
                    className="icon wb-settings" aria-hidden="true"></i> Settings</a>
                  <div className="dropdown-divider" role="presentation"></div>
                  <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i
                    className="icon wb-power" aria-hidden="true"></i> Logout</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="javascript:void(0)"
                   title="Notifications" aria-expanded="false" data-animation="scale-up" role="button">
                  <i className="icon wb-bell" aria-hidden="true"></i>
                  <span className="label label-pill label-danger up">5</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className="dropdown-menu-header">
                    <h5>NOTIFICATIONS</h5>
                    <span className="label label-round label-danger">New 5</span>
                  </div>

                  <div className="dropdown-menu-footer">
                    <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                      <i className="icon md-settings" aria-hidden="true"></i>
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                      All notifications
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="javascript:void(0)"
                   title="Messages" aria-expanded="false" data-animation="scale-up" role="button">
                  <i className="icon wb-envelope" aria-hidden="true"></i>
                  <span className="label label-pill label-info up">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className="dropdown-menu-header" role="presentation">
                    <h5>MESSAGES</h5>
                    <span className="label label-round label-info">New 3</span>
                  </div>

                  <div className="dropdown-menu-footer" role="presentation">
                    <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                      <i className="icon wb-settings" aria-hidden="true"></i>
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                      See all messages
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item" id="toggleChat">
                <a className="nav-link" data-toggle="site-sidebar" href="javascript:void(0)"
                   title="Chat" data-url="{dest 'site-sidebar.tpl'}">
                  <i className="icon wb-chat" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-search-overlap" id="site-navbar-search">
            <form role="search">
              <div className="form-group">
                <div className="input-search">
                  <i className="input-search-icon wb-search" aria-hidden="true"></i>
                  <input type="text" className="form-control" name="site-search"
                         placeholder="Search..."/>
                  <button type="button" className="input-search-close icon wb-close"
                          data-target="#site-navbar-search" data-toggle="collapse"
                          aria-label="Close"></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export { NavBar } ;




