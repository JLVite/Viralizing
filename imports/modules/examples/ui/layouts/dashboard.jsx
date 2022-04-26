import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        'title': 'General',
        'items': [
          {
            'icon': 'wb-dashboard',
            'title': 'Dashboard',
            'slug': 'dashboard',
            'children': [
              {
                'title': 'Home',
                'link': 'examples'
              },
              {
                'title': 'Dashboard v1',
                'link': 'examples/dashboard/v1'
              },
              {
                'title': 'Ecommerce',
                'link': 'examples/dashboard/ecommerce'
              },
              {
                'title': 'Analytics',
                'link': 'examples/dashboard/analytics'
              },
              {
                'title': 'Team',
                'link': 'examples/dashboard/team'
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
                'link': 'examples/pages/faq'
              },
              {
                'title': 'Gallery Grid',
                'link': 'examples/pages/gallery-grid'
              },
              {
                'title': 'Search Result',
                'link': 'examples/pages/search-result'
              },
              {
                'title': 'User List',
                'link': 'examples/pages/user'
              },
              {
                'title': 'Invoice',
                'link': 'examples/pages/invoice'
              },
              {
                'title': 'Email',
                'link': 'examples/pages/email'
              },
              {
                'title': 'Profile',
                'link': 'examples/pages/profile'
              },
              {
                'title': 'Sitemap',
                'link': 'examples/pages/site-map'
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
                    'link': 'examples/uikit/panel-structure'
                  },
                  {
                    'title': 'Panel Actions',
                    'link': 'examples/uikit/panel-actions'
                  },
                  {
                    'title': 'Panel Portlets',
                    'link': 'examples/uikit/panel-portlets'
                  }
                ]
              },
              {
                'title': 'Buttons',
                'link': 'examples/uikit/buttons'
              },
              {
                'title': 'Cards',
                'link': 'examples/uikit/cards'
              },
              {
                'title': 'Dropdowns',
                'link': 'examples/uikit/dropdowns'
              },
              {
                'title': 'List',
                'link': 'examples/uikit/list'
              },
              {
                'title': 'Tooltip & Popover',
                'link': 'examples/uikit/tooltip-popover'
              },
              {
                'title': 'Modals',
                'link': 'examples/uikit/modals'
              },
              {
                'title': 'Tabs & Accordions',
                'link': 'examples/uikit/tabs-accordions'
              },
              {
                'title': 'Images',
                'link': 'examples/uikit/images'
              },
              {
                'title': 'Labels',
                'link': 'examples/uikit/labels'
              },
              {
                'title': 'Progress Bars',
                'link': 'examples/uikit/progress-bars'
              },
              {
                'title': 'Carousel',
                'link': 'examples/uikit/carousel'
              },
              {
                'title': 'Typography',
                'link': 'examples/uikit/typography'
              },
              {
                'title': 'Colors',
                'link': 'examples/uikit/colors'
              },
              {
                'title': 'Utilties',
                'link': 'examples/uikit/utilities'
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
                'link': 'examples/advanced/animation'
              },
              {
                'title': 'Highlight',
                'link': 'examples/advanced/highlight'
              },
              {
                'title': 'Lightbox',
                'link': 'examples/advanced/lightbox'
              },
              {
                'title': 'Scrollable',
                'link': 'examples/advanced/scrollable'
              },
              {
                'title': 'Rating',
                'link': 'examples/advanced/rating'
              },
              {
                'title': 'Context Menu',
                'link': 'examples/advanced/context-menu'
              },
              {
                'title': 'Alertify',
                'link': 'examples/advanced/alertify'
              },
              {
                'title': 'Masonry',
                'link': 'examples/advanced/masonry'
              },
              {
                'title': 'Treeview',
                'link': 'examples/advanced/treeview'
              },
              {
                'title': 'Toastr',
                'link': 'examples/advanced/toastr'
              },
              {
                'title': 'Vector Maps',
                'link': 'examples/advanced/maps-vector'
              },
              {
                'title': 'Sortable & Nestable',
                'link': 'examples/advanced/sortable-nestable'
              },
              {
                'title': 'Bootbox & Sweetalert',
                'link': 'examples/advanced/bootbox-sweetalert'
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
                'link': 'examples/structure/alerts'
              },
              {
                'title': 'Ribbon',
                'link': 'examples/structure/ribbon'
              },
              {
                'title': 'Pricing Tables',
                'link': 'examples/structure/pricing-tables'
              },
              {
                'title': 'Overlay',
                'link': 'examples/structure/overlay'
              },
              {
                'title': 'Cover',
                'link': 'examples/structure/cover'
              },
              {
                'title': 'Simple Timeline',
                'link': 'examples/structure/timeline-simple'
              },
              {
                'title': 'Timeline',
                'link': 'examples/structure/timeline'
              },
              {
                'title': 'Step',
                'link': 'examples/structure/step'
              },
              {
                'title': 'Comments',
                'link': 'examples/structure/comments'
              },
              {
                'title': 'Media',
                'link': 'examples/structure/media'
              },
              {
                'title': 'Chat',
                'link': 'examples/structure/chat'
              },
              {
                'title': 'Testimonials',
                'link': 'examples/structure/testimonials'
              },
              {
                'title': 'Nav',
                'link': 'examples/structure/nav'
              },
              {
                'title': 'Navbars',
                'link': 'examples/structure/navbars'
              },
              {
                'title': 'Blockquotes',
                'link': 'examples/structure/blockquotes'
              },
              {
                'title': 'Pagination',
                'link': 'examples/structure/pagination'
              },
              {
                'title': 'Breadcrumbs',
                'link': 'examples/structure/breadcrumbs'
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
                'link': 'examples/widgets/statistics'
              },
              {
                'title': 'Data Widgets',
                'link': 'examples/widgets/data'
              },
              {
                'title': 'Blog Widgets',
                'link': 'examples/widgets/blog'
              },
              {
                'title': 'Chart Widgets',
                'link': 'examples/widgets/chart'
              },
              {
                'title': 'Social Widgets',
                'link': 'examples/widgets/social'
              },
              {
                'title': 'Weather Widgets',
                'link': 'examples/widgets/weather'
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
                'link': 'examples/forms/general'
              },
              {
                'title': 'Material Elements',
                'link': 'examples/forms/material'
              },
              {
                'title': 'Advanced Elements',
                'link': 'examples/forms/advanced'
              },
              {
                'title': 'Form Layouts',
                'link': 'examples/forms/layouts'
              },
              {
                'title': 'Form Wizard',
                'link': 'examples/forms/wizard'
              },
              {
                'title': 'Form Validation',
                'link': 'examples/forms/validation'
              },
              {
                'title': 'Form Masks',
                'link': 'examples/forms/masks'
              },
              {
                'title': 'Editors',
                'slug': 'forms/editor',
                'children': [
                  {
                    'title': 'Summernote',
                    'link': 'examples/forms/editor-summernote'
                  },
                  {
                    'title': 'Markdown',
                    'link': 'examples/forms/editor-markdown'
                  },
                  {
                    'title': 'Ace Editor',
                    'link': 'examples/forms/editor-ace'
                  }
                ]
              },
              {
                'title': 'Image Cropping',
                'link': 'examples/forms/image-cropping'
              },
              {
                'title': 'File Uploads',
                'link': 'examples/forms/file-uploads'
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
                'link': 'examples/tables/basic'
              },
              {
                'title': 'Bootstrap Tables',
                'link': 'examples/tables/bootstrap'
              },
              {
                'title': 'floatThead',
                'link': 'examples/tables/floatthead'
              },
              {
                'title': 'Responsive Tables',
                'link': 'examples/tables/responsive'
              },
              {
                'title': 'Editable Tables',
                'link': 'examples/tables/editable'
              },
              {
                'title': 'jsGrid',
                'link': 'examples/tables/jsgrid'
              },
              {
                'title': 'FooTable',
                'link': 'examples/tables/footable'
              },
              {
                'title': 'DataTables',
                'link': 'examples/tables/datatable'
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
                'link': 'examples/charts/chartjs'
              },
              {
                'title': 'Gauges',
                'link': 'examples/charts/gauges'
              },
              {
                'title': 'Peity',
                'link': 'examples/charts/peity'
              },
              {
                'title': 'Sparkline',
                'link': 'examples/charts/sparkline'
              },
              {
                'title': 'Morris',
                'link': 'examples/charts/morris'
              },
              {
                'title': 'Chartist.js',
                'link': 'examples/charts/chartist'
              },
              {
                'title': 'Rickshaw',
                'link': 'examples/charts/rickshaw'
              },
              {
                'title': 'Pie Progress',
                'link': 'examples/charts/pie-progress'
              },
              {
                'title': 'C3',
                'link': 'examples/charts/c3'
              }
            ]
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div>
        <div className="page-content container-fluid">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
