import React from 'react';

class LabelsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li><a href="#/">Home</a></li>
            <li className="active">Basic UI</li>
          </ol>
          <h1 className="page-title">Labels</h1>
          <div className="page-header-actions">
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Edit">
              <i className="icon wb-pencil" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Refresh">
              <i className="icon wb-refresh" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Setting">
              <i className="icon wb-settings" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="page-content">
          {/* Panel Labels */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Labels</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6 col-xl-4">
                  {/* Example Labels Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Labels Default</h4>
                    <p>Add any of the default mentioned modifier classes to change the appearance
                      of a label.</p>
                    <div className="example">
                      <span className="label label-default">Default</span>
                      <span className="label label-primary">Primary</span>
                      <span className="label label-success">Success</span>
                      <span className="label label-info">Info</span>
                      <span className="label label-warning">Warning</span>
                      <span className="label label-danger">Danger</span>
                      <span className="label label-dark">Dark</span>
                    </div>
                  </div>
                  {/* End Example Labels Default */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Labels Round */}
                  <div className="example-wrap">
                    <h4 className="example-title">Labels Round</h4>
                    <p>Round labels can used in taxonomies to provide an ad-hoc, user-generated
                      scheme for classification. Add <code>.label-round</code> to change
                      its shape.</p>
                    <div className="example">
                      <span className="label label-round label-default">Default</span>
                      <span className="label label-round label-primary">Primary</span>
                      <span className="label label-round label-success">Success</span>
                      <span className="label label-round label-info">Info</span>
                      <span className="label label-round label-warning">Warning</span>
                      <span className="label label-round label-danger">Danger</span>
                      <span className="label label-round label-dark">Dark</span>
                    </div>
                  </div>
                  {/* End Example Labels Round */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Labels Outline */}
                  <div className="example-wrap">
                    <h4 className="example-title">Labels Outline</h4>
                    <p>The label can have outline style and different border color options.
                      Add <code>.label-outline</code> to change its border style.</p>
                    <div className="example">
                      <span className="label label-outline label-default">Default</span>
                      <span className="label label-outline label-primary">Primary</span>
                      <span className="label label-outline label-success">Success</span>
                      <span className="label label-outline label-info">Info</span>
                      <span className="label label-outline label-warning">Warning</span>
                      <span className="label label-outline label-danger">Danger</span>
                      <span className="label label-outline label-dark">Dark</span>
                    </div>
                  </div>
                  {/* End Example Labels Outline */}
                </div>
                <div className="clearfix hidden-lg-down"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Labels Sizes */}
                  <div className="example-wrap">
                    <h4 className="example-title">Labels Sizes</h4>
                    <p>Various label sizes for common scenarios, from default size to large/small
                      size, you can add additional class <code>.label-lg</code> or <code>.label-sm</code>.</p>
                    <div className="example">
                      <span className="label label-lg label-primary">Large</span>
                      <span className="label label-primary">Default</span>
                      <span className="label label-sm label-primary">Small</span>
                    </div>
                  </div>
                  {/* End Example Labels Sizes */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-xl-8">
                  {/* Example Labels In Header */}
                  <div className="example-wrap">
                    <h4 className="example-title">Labels In Header</h4>
                    <p>They show the information in combination with other visual heading
                      elements by adding <code>&lt;span class=”label label-primary”&gt;</code>.</p>
                    <div className="example">
                      <h1>h1. Bootstrap heading
                        <span className="label label-primary">New</span>
                      </h1>
                      <h2>h2. Heading
                        <span className="label label-primary">New</span>
                      </h2>
                      <h3>h3. Heading
                        <span className="label label-primary">New</span>
                      </h3>
                      <h4>h4. Heading
                        <span className="label label-primary">New</span>
                      </h4>
                      <h5>h5. Heading
                        <span className="label label-primary">New</span>
                      </h5>
                      <h6>h6. Heading
                        <span className="label label-primary">New</span>
                      </h6>
                    </div>
                  </div>
                  {/* End Example Labels In Header */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Labels */}
          {/* Panel Label-pills */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Label-pills</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6 col-xl-4">
                  {/* Example Label-pills Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Label-pills Default</h4>
                    <p>Wrap one of the seven contextual classes ( e.g. <code>.label-success</code> ) for
                      basic <code>.label</code> <code>.label-pill</code> class.
                      Choose from success, info, warning, etc.</p>
                    <div className="example">
                      <span className="label label-pill label-default">1</span>
                      <span className="label label-pill label-primary">2</span>
                      <span className="label label-pill label-success">3</span>
                      <span className="label label-pill label-info">4</span>
                      <span className="label label-pill label-warning">5</span>
                      <span className="label label-pill label-danger">6</span>
                      <span className="label label-pill label-dark">7</span>
                    </div>
                    <div className="example">
                      <span className="label label-pill label-default">11</span>
                      <span className="label label-pill label-primary">12</span>
                      <span className="label label-pill label-success">13</span>
                      <span className="label label-pill label-info">14</span>
                      <span className="label label-pill label-warning">15</span>
                      <span className="label label-pill label-danger">16</span>
                      <span className="label label-pill label-dark">17</span>
                    </div>
                  </div>
                  {/* End Example Label-pills Default */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Label-pills Sizes */}
                  <div className="example-wrap">
                    <h4 className="example-title">Label-pills Sizes</h4>
                    <p>Various label-pills sizes for common scenarios, from default size
                      to large/small size, you can add additional class <code>.label-lg</code> or <code>.label-sm</code>.
                    </p>
                    <div className="example">
                      <span className="label label-pill label-lg label-primary">Large</span>
                      <span className="label label-pill label-primary">Default</span>
                      <span className="label label-pill label-sm label-primary">Small</span>
                    </div>
                  </div>
                  {/* End Example Label-pills Sizes */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Label-pills In Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Label-pills In Button</h4>
                    <p>Easily highlight new or unread items by adding a <code>&lt;span class="label
                      label-pill"&gt;</code> to button div.</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-primary">
                        Update
                        <span className="label label-pill">5</span>
                      </button>
                      <button type="button" className="btn btn-outline btn-primary">
                        Update
                        <span className="label label-pill">5</span>
                      </button>
                    </div>
                  </div>
                  {/* End Example Label-pills In Button */}
                </div>
                <div className="clearfix hidden-lg-down"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Absolute Positioning */}
                  <div className="example-wrap">
                    <h4 className="example-title">Absolute Positioning</h4>
                    <p>They’re commonly found in email cilents like Mail.app or on mobile
                      apps for push notifications. Highligh unread items by adding <code>.label</code>,
                      <code>.label-pill</code>, <code>.up</code>, <code>.label-warning</code> class
                      in <code>&lt;span&gt;</code> mark</p>
                    <div className="example-2 margin-top-25">
                      <span>
                        <i className="icon wb-bell" aria-hidden="true"/>
                        <span className="label label-pill up label-danger">5</span>
                      </span>
                      <span>
                        <i className="icon wb-envelope" aria-hidden="true"/>
                        <span className="label label-pill up label-warning">3</span>
                      </span>
                      <span>
                        <i className="icon wb-user" aria-hidden="true"/>
                        <span className="label label-pill up label-primary">3</span>
                      </span>
                      <span>
                        <i className="icon wb-inbox" aria-hidden="true"/>
                        <span className="label label-pill up label-info">3</span>
                      </span>
                    </div>
                  </div>
                  {/* End Example Absolute Positioning */}
                </div>
                <div className="clearfix hidden-sm-down hidden-xl-up"/>
                <div className="col-md-6 col-xl-4">
                  {/* Example Status Label-pills */}
                  <div className="example-wrap">
                    <h4 className="example-title">Status Label-pills</h4>
                    <p>You can use this examples to create status indicator label-pills
                      with <code>&lt;div class="avatar-online”&gt;</code> for profile
                      images or similar elements.</p>
                    <div className="example example-avatars">
                      <div className="avatar avatar-online">
                        <img src="../.././global/portraits/2.jpg" alt="..."/>
                        <i/>
                      </div>
                      <div className="avatar avatar-off">
                        <img src="../.././global/portraits/3.jpg" alt="..."/>
                        <i/>
                      </div>
                      <div className="avatar avatar-busy">
                        <img src="../.././global/portraits/4.jpg" alt="..."/>
                        <i/>
                      </div>
                      <div className="avatar avatar-away">
                        <img src="../.././global/portraits/5.jpg" alt="..."/>
                        <i/>
                      </div>
                    </div>
                  </div>
                  {/* End Example Status Label-pills */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-md-12">
                  {/* Example Label-pills In Nav */}
                  <div className="example-wrap">
                    <h4 className="example-title">Label-pills In Nav</h4>
                    <p>Built-in styles are included for placing label-pills in active states
                      in pill navigations. Highlight unread items by adding a <code>&lt;span class="label
                        label-pill"&gt;</code> to tab div.</p>
                    <div className="example">
                      <ul className="nav nav-tabs nav-tabs-line">
                        <li className="nav-item" role="presentation">
                          <a className="nav-link active" href="javascript:void(0)">
                            <span>Home</span>
                            <span className="label label-pill label-danger">5</span>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation"><a className="nav-link"
                                                                        href="javascript:void(0)">Blog</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link"
                                                                        href="javascript:void(0)">Profile</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Example Label-pills In Nav */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Label-pills */}
        </div>
      </div>
    );
  }
}

export default LabelsExample;
