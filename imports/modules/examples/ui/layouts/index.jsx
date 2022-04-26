import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          'title': 'General',
          'items': [
            {
              'icon': 'wb-dashboard',
              'title': 'Dashboard',
              'slug': 'dashboard',
              'children': [
                {
                  'title': 'Dashboard v1',
                  'link': '/examples/dashboard'
                },
                {
                  'title': 'Ecommerce',
                  'link': '/examples/ecommerce'
                },
                {
                  'title': 'Analytics',
                  'link': '/examples/analytics'
                },
                {
                  'title': 'Team',
                  'link': '/examples/team'
                }
              ],
              'badge': {
                'modifier': 'label-success',
                'text': '3'
              }
            },
            {
              'icon': 'wb-file',
              'title': 'Pages',
              'slug': 'pages',
              'children': [
                {
                  'title': 'FAQ',
                  'link': '/examples/pages/faq'
                },
                {
                  'title': 'Gallery Grid',
                  'link': '/examples/pages/gallery-grid'
                },
                {
                  'title': 'Gallery',
                  'link': '/examples/pages/gallery'
                },
                {
                  'title': 'Search Result',
                  'link': '/examples/pages/search-result',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'User List',
                  'link': '/examples/pages/user'
                },
                {
                  'title': 'Invoice',
                  'link': '/examples/pages/invoice'
                },
                {
                  'title': 'Email',
                  'link': '/examples/pages/email'
                },
                {
                  'title': 'Profile',
                  'link': '/examples/pages/profile'
                },
                {
                  'title': 'Sitemap',
                  'link': '/examples/pages/site-map'
                }
              ]
            }
          ]
        },
        {
          'title': 'Elements',
          'items': [
            {
              'icon': 'wb-bookmark',
              'title': 'Basic UI',
              'slug': 'uikit',
              'children': [
                {
                  'title': 'Panel',
                  'slug': 'uikit/panel',
                  'children': [
                    {
                      'title': 'Panel Structure',
                      'link': '/examples/uikit/panel-structure'
                    },
                    {
                      'title': 'Panel Actions',
                      'link': '/examples/uikit/panel-actions'
                    },
                    {
                      'title': 'Panel Portlets',
                      'link': '/examples/uikit/panel-portlets'
                    }
                  ]
                },
                {
                  'title': 'Buttons',
                  'link': '/examples/uikit/buttons'
                },
                {
                  'title': 'Cards',
                  'link': '/examples/uikit/cards',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Dropdowns',
                  'link': '/examples/uikit/dropdowns'
                },
                {
                  'title': 'Icons',
                  'link': '/examples/uikit/icons'
                },
                {
                  'title': 'List',
                  'link': '/examples/uikit/list',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Tooltip & Popover',
                  'link': '/examples/uikit/tooltip-popover'
                },
                {
                  'title': 'Modals',
                  'link': '/examples/uikit/modals'
                },
                {
                  'title': 'Tabs & Accordions',
                  'link': '/examples/uikit/tabs-accordions',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Images',
                  'link': '/examples/uikit/images'
                },
                {
                  'title': 'Labels',
                  'link': '/examples/uikit/labels',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Progress Bars',
                  'link': '/examples/uikit/progress-bars',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Carousel',
                  'link': '/examples/uikit/carousel'
                },
                {
                  'title': 'Typography',
                  'link': '/examples/uikit/typography',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Colors',
                  'link': '/examples/uikit/colors'
                },
                {
                  'title': 'Utilties',
                  'link': '/examples/uikit/utilities'
                }
              ]
            },
            {
              'icon': 'wb-hammer',
              'title': 'Advanced UI',
              'slug': 'advanced',
              'children': [
                {
                  'title': 'Animation',
                  'link': '/examples/advanced/animation'
                },
                {
                  'title': 'Highlight',
                  'link': 'examples/advanced/highlight'
                },
                {
                  'title': 'Lightbox',
                  'link': '/examples/advanced/lightbox'
                },
                {
                  'title': 'Scrollable',
                  'link': '/examples/advanced/scrollable'
                },
                {
                  'title': 'Rating',
                  'link': '/examples/advanced/rating'
                },
                {
                  'title': 'Context Menu',
                  'link': '/examples/advanced/context-menu'
                },
                {
                  'title': 'Alertify',
                  'link': '/examples/advanced/alertify'
                },
                {
                  'title': 'Masonry',
                  'link': '/examples/advanced/masonry'
                },
                {
                  'title': 'Treeview',
                  'link': '/examples/advanced/treeview'
                },
                {
                  'title': 'Toastr',
                  'link': 'examples/advanced/toastr'
                },
                {
                  'title': 'Vector Maps',
                  'link': '/examples/advanced/maps-vector'
                },
                {
                  'title': 'Sortable & Nestable',
                  'link': '/examples/advanced/sortable-nestable'
                },
                {
                  'title': 'Bootbox & Sweetalert',
                  'link': '/examples/advanced/bootbox-sweetalert'
                },
                {
                  'title': 'Chardin JS',
                  'link': '/examples/advanced/chardin'
                }
              ]
            },
            {
              'icon': 'wb-plugin',
              'title': 'Structure',
              'slug': 'structure',
              'children': [
                {
                  'title': 'Alerts',
                  'link': '/examples/structure/alerts'
                },
                {
                  'title': 'Ribbon',
                  'link': '/examples/structure/ribbon'
                },
                {
                  'title': 'Pricing Tables',
                  'link': '/examples/structure/pricing-tables',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Overlay',
                  'link': '/examples/structure/overlay',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Cover',
                  'link': '/examples/structure/cover'
                },
                {
                  'title': 'Simple Timeline',
                  'link': '/examples/structure/timeline-simple'
                },
                {
                  'title': 'Timeline',
                  'link': '/examples/structure/timeline'
                },
                {
                  'title': 'Step',
                  'link': '/examples/structure/step'
                },
                {
                  'title': 'Comments',
                  'link': '/examples/structure/comments'
                },
                {
                  'title': 'Media',
                  'link': '/examples/structure/media'
                },
                {
                  'title': 'Chat',
                  'link': '/examples/structure/chat'
                },
                {
                  'title': 'Testimonials',
                  'link': '/examples/structure/testimonials',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Nav',
                  'link': '/examples/structure/nav'
                },
                {
                  'title': 'Navbars',
                  'link': '/examples/structure/navbars'
                },
                {
                  'title': 'Blockquotes',
                  'link': '/examples/structure/blockquotes',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Pagination',
                  'link': '/examples/structure/pagination',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Breadcrumbs',
                  'link': '/examples/structure/breadcrumbs',
                  'icon': 'wb-check-circle'
                }
              ]
            },
            {
              'icon': 'wb-extension',
              'title': 'Widgets',
              'slug': 'widgets',
              'children': [
                {
                  'title': 'Statistics Widgets',
                  'link': '/examples/widgets/statistics'
                },
                {
                  'title': 'Data Widgets',
                  'link': '/examples/widgets/data'
                },
                {
                  'title': 'Blog Widgets',
                  'link': '/examples/widgets/blog'
                },
                {
                  'title': 'Chart Widgets',
                  'link': '/examples/widgets/chart'
                },
                {
                  'title': 'Social Widgets',
                  'link': '/examples/widgets/social'
                },
                {
                  'title': 'Weather Widgets',
                  'link': '/examples/widgets/weather'
                }
              ]
            },
            {
              'icon': 'wb-library',
              'title': 'Forms',
              'slug': 'forms',
              'children': [
                {
                  'title': 'General Elements',
                  'link': '/examples/forms/general',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Material Elements',
                  'link': '/examples/forms/material',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Advanced Elements',
                  'link': '/examples/forms/advanced'
                },
                {
                  'title': 'Form Layouts',
                  'link': '/examples/forms/layouts',
                  'icon': 'wb-check-circle'
                },
                {
                  'title': 'Form Wizard',
                  'link': '/examples/forms/wizard'
                },
                {
                  'title': 'Form Validation',
                  'link': '/examples/forms/validation'
                },
                {
                  'title': 'Form Masks',
                  'link': '/examples/forms/masks'
                },
                {
                  'title': 'Editors',
                  'slug': 'forms/editor',
                  'children': [
                    {
                      'title': 'Summernote',
                      'link': '/examples/forms/editor-summernote'
                    },
                    {
                      'title': 'Markdown',
                      'link': '/examples/forms/editor-markdown'
                    },
                    {
                      'title': 'Ace Editor',
                      'link': '/examples/forms/editor-ace'
                    }
                  ]
                },
                {
                  'title': 'Image Cropping',
                  'link': '/examples/forms/image-cropping'
                },
                {
                  'title': 'File Uploads',
                  'link': '/examples/forms/file-uploads'
                }
              ]
            },
            {
              'icon': 'wb-table',
              'title': 'Tables',
              'slug': 'tables',
              'children': [
                {
                  'title': 'Basic Tables',
                  'link': '/examples/tables/basic'
                },
                {
                  'title': 'Bootstrap Tables',
                  'link': '/examples/tables/bootstrap'
                },
                {
                  'title': 'floatThead',
                  'link': '/examples/tables/floatthead'
                },
                {
                  'title': 'Responsive Tables',
                  'link': '/examples/tables/responsive'
                },
                {
                  'title': 'Editable Tables',
                  'link': '/examples/tables/editable'
                },
                {
                  'title': 'jsGrid',
                  'link': '/examples/tables/jsgrid'
                },
                {
                  'title': 'FooTable',
                  'link': '/examples/tables/footable'
                },
                {
                  'title': 'DataTables',
                  'link': '/examples/tables/datatable'
                }
              ]
            },
            {
              'icon': 'wb-pie-chart',
              'title': 'Chart',
              'slug': 'charts',
              'children': [
                {
                  'title': 'Chart.js',
                  'link': '/examples/charts/chartjs'
                },
                {
                  'title': 'Gauges',
                  'link': '/examples/charts/gauges'
                },
                {
                  'title': 'Peity',
                  'link': '/examples/charts/peity'
                },
                {
                  'title': 'Sparkline',
                  'link': '/examples/charts/sparkline'
                },
                {
                  'title': 'Morris',
                  'link': '/examples/charts/morris'
                },
                {
                  'title': 'Chartist.js',
                  'link': '/examples/charts/chartist'
                },
                {
                  'title': 'Rickshaw',
                  'link': '/examples/charts/rickshaw'
                },
                {
                  'title': 'Pie Progress',
                  'link': '/examples/charts/pie-progress'
                },
                {
                  'title': 'C3',
                  'link': '/examples/charts/c3'
                },
                {
                  'title': 'Highcharts',
                  'link': '/examples/charts/highcharts'
                }
              ]
            }
          ]
        }
      ]
    };
  }

  items(data) {
    let menu = [];
    let subMenuOpen = (e) => {
      console.log('SUB_MENU_OPEN', e.target);
      $(e.target).closest('li').toggleClass('open');
    };
    data.forEach((item) => {
      if (item.children) {
        menu.push(
          <li key={item.title} className={'site-menu-item has-sub ' + (this.class ? this.class : '')}
              onClick={subMenuOpen}>
            {this.itemContent(item)}
            {this.subMenu(item)}
          </li>
        );
      } else {
        menu.push(
          <li key={item.title} className={'site-menu-item ' + (this.class ? this.class : '')}>
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

  render() {
    let menu = [];

    this.state.data.forEach((item, itemIndex) => {
      let items = [];
      if (item.items) {
        item.items.forEach((subItem) => {
          let links = [];
          subItem.children.forEach((link) => {
            if (link.children) {
              link.children.forEach((linkChildren) => {
                links.push(
                  <li className="list-group-item"><Link to={linkChildren.link}>{linkChildren.icon ? <i
                    className={'site-menu-icon ' + linkChildren.icon}
                    aria-hidden="true"/> : ''}{linkChildren.title}</Link></li>
                );
              });
            } else {
              links.push(
                <li className="list-group-item"><Link to={link.link}>{link.icon ? <i
                  className={'site-menu-icon ' + link.icon} aria-hidden="true"/> : ''}{link.title}</Link></li>
              );
            }
          });
          let itemClass = itemIndex === 0 ? 'col-md-12' : 'col-md-6 col-lg-4';
          items.push(
            <div className={itemClass}>
              <div className="example-wrap">
                <h4 className="example-title">{subItem.icon ? <i className={'site-menu-icon ' + subItem.icon}
                                                                 aria-hidden="true"/> : ''}{subItem.title}</h4>
                <ul className="list-group list-group-full">
                  {links}
                </ul>
              </div>
            </div>
          );
          if (subItem.chidlren) {

          } else {

          }
        });
      }
      let colClass = itemIndex === 0 ? 'col-md-4' : 'col-md-8';
      let cat = (
        <div className={colClass}>
          <div className="panel" key={item.title}>
            <div className="panel-heading">
              <h3 className="panel-title">{item.title}</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                {item.items ? items : ''}
              </div>
            </div>
          </div>
        </div>
      );
      menu.push(cat);

    });

    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li><a href="../index.html">Home</a></li>
            <li className="active">Examples</li>
          </ol>
          <h1 className="page-title">Example</h1>
        </div>
        <div className="page-content container-fluid">
          <div className="row">
            {menu}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
