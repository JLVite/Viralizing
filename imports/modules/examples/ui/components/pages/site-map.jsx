import React from 'react';

class SiteMapExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Pages</li>
          </ol>
          <h1 className="page-title">Site Map</h1>
        </div>
        {/* End Page Header */}
        {/* Page Content */}
        <div className="page-content container-fluid">
          <div className="panel">
            <div className="panel-body">
              <div className="row">
                <div className="col-xxl-3 col-lg-6 col-md-6">
                  {/* Sitemap List */}
                  <h4>General</h4>
                  <ul className="sitemap-list">
                    <li>
                      <a href="#">
                        <i className="wb-dashboard mr-10"/>
                        <span>Dashboard</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../index.html">
                            <i className="icon wb-link float-right"/>
                            <span>Dashboard v1</span>
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/v2.html">
                            <i className="icon wb-link float-right"/>
                            <span>Dashboard v2</span>
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/ecommerce.html">
                            <i className="icon wb-link float-right"/>
                            <span>Ecommerce</span>
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/analytics.html">
                            <i className="icon wb-link float-right"/>
                            <span>Analytics</span>
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/team.html">
                            <i className="icon wb-link float-right"/>
                            <span>Team</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-layout mr-10"/>
                        <span>Layouts</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../layouts/menu-collapsed.html">
                            <i className="icon wb-link float-right"/>
                            <span>Menu Collapsed</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/menu-collapsed-alt.html">
                            <i className="icon wb-link float-right"/>
                            <span>Menu Collapsed Alt</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/menu-expended.html">
                            <i className="icon wb-link float-right"/>
                            <span>Menu Expended</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/grids.html">
                            <i className="icon wb-link float-right"/>
                            <span>Grid Scaffolding</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/layout-grid.html">
                            <i className="icon wb-link float-right"/>
                            <span>Layout Grid</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/headers.html">
                            <i className="icon wb-link float-right"/>
                            <span>Different Headers</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/panel-transition.html">
                            <i className="icon wb-link float-right"/>
                            <span>Panel Transition</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/boxed.html">
                            <i className="icon wb-link float-right"/>
                            <span>Boxed Layout</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/two-columns.html">
                            <i className="icon wb-link float-right"/>
                            <span>Two Columns</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/menubar-flipped.html">
                            <i className="icon wb-link float-right"/>
                            <span>Menubar Flipped</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/menubar-native-scrolling.html">
                            <i className="icon wb-link float-right"/>
                            <span>Menubar Native Scrolling</span>
                          </a>
                        </li>
                        <li>
                          <a href="../layouts/bordered-header.html">
                            <i className="icon wb-link float-right"/>
                            <span>Bordered Header</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Page Aside</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../layouts/aside-left-static.html">
                              Left Static
                            </a>
                          </li>
                          <li>
                            <a href="../layouts/aside-right-static.html">
                              Right Static
                            </a>
                          </li>
                          <li>
                            <a href="../layouts/aside-left-fixed.html">
                              Left Fixed
                            </a>
                          </li>
                          <li>
                            <a href="../layouts/aside-right-fixed.html">
                              Right Fixed
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-file mr-10"/>
                        <span>Pages</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Errors</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../pages/error-400.html">
                              400 Bad Request
                            </a>
                          </li>
                          <li>
                            <a href="../pages/error-403.html">
                              403 Forbidden
                            </a>
                          </li>
                          <li>
                            <a href="../pages/error-404.html">
                              404 Not Found
                            </a>
                          </li>
                          <li>
                            <a href="../pages/error-500.html">
                              500 Internal Server Error
                            </a>
                          </li>
                          <li>
                            <a href="../pages/error-503.html">
                              503 Service Unavailable
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                        <li>
                          <a href="../pages/faq.html">
                            <i className="icon wb-link float-right"/>
                            <span>FAQ</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/gallery.html">
                            <i className="icon wb-link float-right"/>
                            <span>Gallery</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/gallery-grid.html">
                            <i className="icon wb-link float-right"/>
                            <span>Gallery Grid</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/search-result.html">
                            <i className="icon wb-link float-right"/>
                            <span>Search Result</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Maps</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../pages/map-google.html">
                              Google Maps
                            </a>
                          </li>
                          <li>
                            <a href="../pages/map-vector.html">
                              Vector Maps
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                        <li>
                          <a href="../pages/maintenance.html">
                            <i className="icon wb-link float-right"/>
                            <span>Maintenance</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/forgot-password.html">
                            <i className="icon wb-link float-right"/>
                            <span>Forgot Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/lockscreen.html">
                            <i className="icon wb-link float-right"/>
                            <span>Lockscreen</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/login.html">
                            <i className="icon wb-link float-right"/>
                            <span>Login</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/register.html">
                            <i className="icon wb-link float-right"/>
                            <span>Register</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/login-v2.html">
                            <i className="icon wb-link float-right"/>
                            <span>Login V2</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/register-v2.html">
                            <i className="icon wb-link float-right"/>
                            <span>Register V2</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/login-v3.html">
                            <i className="icon wb-link float-right"/>
                            <span>Login V3</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/register-v3.html">
                            <i className="icon wb-link float-right"/>
                            <span>Register V3</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/user.html">
                            <i className="icon wb-link float-right"/>
                            <span>User List</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/invoice.html">
                            <i className="icon wb-link float-right"/>
                            <span>Invoice</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/blank.html">
                            <i className="icon wb-link float-right"/>
                            <span>Blank Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Email</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../pages/email-articles.html">
                              Articles
                            </a>
                          </li>
                          <li>
                            <a href="../pages/email-welcome.html">
                              Welcome
                            </a>
                          </li>
                          <li>
                            <a href="../pages/email-post.html">
                              Post
                            </a>
                          </li>
                          <li>
                            <a href="../pages/email-thumbnail.html">
                              Thumbnail
                            </a>
                          </li>
                          <li>
                            <a href="../pages/email-news.html">
                              News
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                        <li>
                          <a href="../pages/code-editor.html">
                            <i className="icon wb-link float-right"/>
                            <span>Code Editor</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/profile.html">
                            <i className="icon wb-link float-right"/>
                            <span>Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/profile-v2.html">
                            <i className="icon wb-link float-right"/>
                            <span>Profile V2</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/profile-v3.html">
                            <i className="icon wb-link float-right"/>
                            <span>Profile V3</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/site-map.html">
                            <i className="icon wb-link float-right"/>
                            <span>Sitemap</span>
                          </a>
                        </li>
                        <li>
                          <a href="../pages/project.html">
                            <i className="icon wb-link float-right"/>
                            <span>Project</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                  </ul>
                  {/* End Sitemap List */}
                </div>
                <div className="col-xxl-3 col-lg-6 col-md-6">
                  {/* Sitemap List */}
                  <h4>Elements</h4>
                  <ul className="sitemap-list">
                    <li>
                      <a href="#">
                        <i className="wb-bookmark mr-10"/>
                        <span>Basic UI</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Panel</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../uikit/panel-structure.html">
                              Panel Structure
                            </a>
                          </li>
                          <li>
                            <a href="../uikit/panel-actions.html">
                              Panel Actions
                            </a>
                          </li>
                          <li>
                            <a href="../uikit/panel-portlets.html">
                              Panel Portlets
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                        <li>
                          <a href="../uikit/buttons.html">
                            <i className="icon wb-link float-right"/>
                            <span>Buttons</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/cards.html">
                            <i className="icon wb-link float-right"/>
                            <span>Cards</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/dropdowns.html">
                            <i className="icon wb-link float-right"/>
                            <span>Dropdowns</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/icons.html">
                            <i className="icon wb-link float-right"/>
                            <span>Icons</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/list.html">
                            <i className="icon wb-link float-right"/>
                            <span>List</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/tooltip-popover.html">
                            <i className="icon wb-link float-right"/>
                            <span>Tooltip &amp; Popover</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/modals.html">
                            <i className="icon wb-link float-right"/>
                            <span>Modals</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/tabs-accordions.html">
                            <i className="icon wb-link float-right"/>
                            <span>Tabs &amp; Accordions</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/images.html">
                            <i className="icon wb-link float-right"/>
                            <span>Images</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/badges.html">
                            <i className="icon wb-link float-right"/>
                            <span>Badges</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/progress-bars.html">
                            <i className="icon wb-link float-right"/>
                            <span>Progress Bars</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/carousel.html">
                            <i className="icon wb-link float-right"/>
                            <span>Carousel</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/typography.html">
                            <i className="icon wb-link float-right"/>
                            <span>Typography</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/colors.html">
                            <i className="icon wb-link float-right"/>
                            <span>Colors</span>
                          </a>
                        </li>
                        <li>
                          <a href="../uikit/utilities.html">
                            <i className="icon wb-link float-right"/>
                            <span>Utilties</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-hammer mr-10"/>
                        <span>Advanced UI</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Tour</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/animation.html">
                            <i className="icon wb-link float-right"/>
                            <span>Animation</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/highlight.html">
                            <i className="icon wb-link float-right"/>
                            <span>Highlight</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/lightbox.html">
                            <i className="icon wb-link float-right"/>
                            <span>Lightbox</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/scrollable.html">
                            <i className="icon wb-link float-right"/>
                            <span>Scrollable</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/rating.html">
                            <i className="icon wb-link float-right"/>
                            <span>Rating</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/context-menu.html">
                            <i className="icon wb-link float-right"/>
                            <span>Context Menu</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/alertify.html">
                            <i className="icon wb-link float-right"/>
                            <span>Alertify</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/masonry.html">
                            <i className="icon wb-link float-right"/>
                            <span>Masonry</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/treeview.html">
                            <i className="icon wb-link float-right"/>
                            <span>Treeview</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/toastr.html">
                            <i className="icon wb-link float-right"/>
                            <span>Toastr</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/maps-vector.html">
                            <i className="icon wb-link float-right"/>
                            <span>Vector Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/maps-google.html">
                            <i className="icon wb-link float-right"/>
                            <span>Google Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/sortable-nestable.html">
                            <i className="icon wb-link float-right"/>
                            <span>Sortable &amp; Nestable</span>
                          </a>
                        </li>
                        <li>
                          <a href="../advanced/bootbox-sweetalert.html">
                            <i className="icon wb-link float-right"/>
                            <span>Bootbox &amp; Sweetalert</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-plugin mr-10"/>
                        <span>Structure</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../structure/alerts.html">
                            <i className="icon wb-link float-right"/>
                            <span>Alerts</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/ribbon.html">
                            <i className="icon wb-link float-right"/>
                            <span>Ribbon</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/pricing-tables.html">
                            <i className="icon wb-link float-right"/>
                            <span>Pricing Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/overlay.html">
                            <i className="icon wb-link float-right"/>
                            <span>Overlay</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/cover.html">
                            <i className="icon wb-link float-right"/>
                            <span>Cover</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/timeline-simple.html">
                            <i className="icon wb-link float-right"/>
                            <span>Simple Timeline</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/timeline.html">
                            <i className="icon wb-link float-right"/>
                            <span>Timeline</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/step.html">
                            <i className="icon wb-link float-right"/>
                            <span>Step</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/comments.html">
                            <i className="icon wb-link float-right"/>
                            <span>Comments</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/media.html">
                            <i className="icon wb-link float-right"/>
                            <span>Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/chat.html">
                            <i className="icon wb-link float-right"/>
                            <span>Chat</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/testimonials.html">
                            <i className="icon wb-link float-right"/>
                            <span>Testimonials</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/nav.html">
                            <i className="icon wb-link float-right"/>
                            <span>Nav</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/navbars.html">
                            <i className="icon wb-link float-right"/>
                            <span>Navbars</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/blockquotes.html">
                            <i className="icon wb-link float-right"/>
                            <span>Blockquotes</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/pagination.html">
                            <i className="icon wb-link float-right"/>
                            <span>Pagination</span>
                          </a>
                        </li>
                        <li>
                          <a href="../structure/breadcrumbs.html">
                            <i className="icon wb-link float-right"/>
                            <span>Breadcrumbs</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-extension mr-10"/>
                        <span>Widgets</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../widgets/statistics.html">
                            <i className="icon wb-link float-right"/>
                            <span>Statistics Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="../widgets/data.html">
                            <i className="icon wb-link float-right"/>
                            <span>Data Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="../widgets/blog.html">
                            <i className="icon wb-link float-right"/>
                            <span>Blog Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="../widgets/chart.html">
                            <i className="icon wb-link float-right"/>
                            <span>Chart Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="../widgets/social.html">
                            <i className="icon wb-link float-right"/>
                            <span>Social Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="../widgets/weather.html">
                            <i className="icon wb-link float-right"/>
                            <span>Weather Widgets</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-library mr-10"/>
                        <span>Forms</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../forms/general.html">
                            <i className="icon wb-link float-right"/>
                            <span>General Elements</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/material.html">
                            <i className="icon wb-link float-right"/>
                            <span>Material Elements</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/advanced.html">
                            <i className="icon wb-link float-right"/>
                            <span>Advanced Elements</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/layouts.html">
                            <i className="icon wb-link float-right"/>
                            <span>Form Layouts</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/wizard.html">
                            <i className="icon wb-link float-right"/>
                            <span>Form Wizard</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/validation.html">
                            <i className="icon wb-link float-right"/>
                            <span>Form Validation</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/masks.html">
                            <i className="icon wb-link float-right"/>
                            <span>Form Masks</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Editors</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../forms/editor-summernote.html">
                              Summernote
                            </a>
                          </li>
                          <li>
                            <a href="../forms/editor-markdown.html">
                              Markdown
                            </a>
                          </li>
                          <li>
                            <a href="../forms/editor-ace.html">
                              Ace Editor
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                        <li>
                          <a href="../forms/image-cropping.html">
                            <i className="icon wb-link float-right"/>
                            <span>Image Cropping</span>
                          </a>
                        </li>
                        <li>
                          <a href="../forms/file-uploads.html">
                            <i className="icon wb-link float-right"/>
                            <span>File Uploads</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-table mr-10"/>
                        <span>Tables</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../tables/basic.html">
                            <i className="icon wb-link float-right"/>
                            <span>Basic Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/bootstrap.html">
                            <i className="icon wb-link float-right"/>
                            <span>Bootstrap Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/floatthead.html">
                            <i className="icon wb-link float-right"/>
                            <span>floatThead</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/responsive.html">
                            <i className="icon wb-link float-right"/>
                            <span>Responsive Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/editable.html">
                            <i className="icon wb-link float-right"/>
                            <span>Editable Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/jsgrid.html">
                            <i className="icon wb-link float-right"/>
                            <span>jsGrid</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/footable.html">
                            <i className="icon wb-link float-right"/>
                            <span>FooTable</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/datatable.html">
                            <i className="icon wb-link float-right"/>
                            <span>DataTables</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/jqtabledit.html">
                            <i className="icon wb-link float-right"/>
                            <span>Jquery Tabledit</span>
                          </a>
                        </li>
                        <li>
                          <a href="../tables/table-dragger.html">
                            <i className="icon wb-link float-right"/>
                            <span>Table Dragger</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                    <li>
                      <a href="#">
                        <i className="wb-pie-chart mr-10"/>
                        <span>Chart</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../charts/chartjs.html">
                            <i className="icon wb-link float-right"/>
                            <span>Chart.js</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/gauges.html">
                            <i className="icon wb-link float-right"/>
                            <span>Gauges</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/flot.html">
                            <i className="icon wb-link float-right"/>
                            <span>Flot</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/peity.html">
                            <i className="icon wb-link float-right"/>
                            <span>Peity</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/sparkline.html">
                            <i className="icon wb-link float-right"/>
                            <span>Sparkline</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/morris.html">
                            <i className="icon wb-link float-right"/>
                            <span>Morris</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/chartist.html">
                            <i className="icon wb-link float-right"/>
                            <span>Chartist.js</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/rickshaw.html">
                            <i className="icon wb-link float-right"/>
                            <span>Rickshaw</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/pie-progress.html">
                            <i className="icon wb-link float-right"/>
                            <span>Pie Progress</span>
                          </a>
                        </li>
                        <li>
                          <a href="../charts/c3.html">
                            <i className="icon wb-link float-right"/>
                            <span>C3</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                  </ul>
                  {/* End Sitemap List */}
                </div>
                <div className="col-xxl-3 col-lg-6 col-md-6">
                  {/* Sitemap List */}
                  <h4>Apps</h4>
                  <ul className="sitemap-list">
                    <li>
                      <a href="#">
                        <i className="wb-grid-4 mr-10"/>
                        <span>Apps</span>
                      </a>
                      {/* Sitemap Children */}
                      <ul>
                        <li>
                          <a href="../apps/contacts/contacts.html">
                            <i className="icon wb-link float-right"/>
                            <span>Contacts</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/calendar/calendar.html">
                            <i className="icon wb-link float-right"/>
                            <span>Calendar</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/notebook/notebook.html">
                            <i className="icon wb-link float-right"/>
                            <span>Notebook</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/taskboard/taskboard.html">
                            <i className="icon wb-link float-right"/>
                            <span>Taskboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="icon wb-link float-right"/>
                            <span>Documents</span>
                          </a>
                        </li>
                        {/* Sitemap List Sub */}
                        <ul className="sitemap-list-sub">
                          <li>
                            <a href="../apps/documents/articles.html">
                              Articles
                            </a>
                          </li>
                          <li>
                            <a href="../apps/documents/categories.html">
                              Categories
                            </a>
                          </li>
                          <li>
                            <a href="../apps/documents/article.html">
                              Article
                            </a>
                          </li>
                        </ul>
                        {/* End Sitemap List Sub */}
                        <li>
                          <a href="../apps/forum/forum.html">
                            <i className="icon wb-link float-right"/>
                            <span>Forum</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/message/message.html">
                            <i className="icon wb-link float-right"/>
                            <span>Message</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/projects/projects.html">
                            <i className="icon wb-link float-right"/>
                            <span>Projects</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/mailbox/mailbox.html">
                            <i className="icon wb-link float-right"/>
                            <span>Mailbox</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/media/overview.html">
                            <i className="icon wb-link float-right"/>
                            <span>Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/work/work.html">
                            <i className="icon wb-link float-right"/>
                            <span>Work</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/location/location.html">
                            <i className="icon wb-link float-right"/>
                            <span>Location</span>
                          </a>
                        </li>
                        <li>
                          <a href="../apps/travel/travel.html">
                            <i className="icon wb-link float-right"/>
                            <span>Travel</span>
                          </a>
                        </li>
                      </ul>
                      {/* End Sitemap Children */}
                    </li>
                  </ul>
                  {/* End Sitemap List */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SiteMapExample;
