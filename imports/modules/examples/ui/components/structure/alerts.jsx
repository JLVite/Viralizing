import React from 'react';

class AlertsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Alerts</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Structure</li>
          </ol>
          <div className="page-header-actions">
            <form>
              <div className="input-search input-search-dark">
                <i className="input-search-icon wb-search" aria-hidden="true"/>
                <input type="text" className="form-control" name placeholder="Search..."/>
              </div>
            </form>
          </div>
        </div>
        <div className="page-content">
          <div className="panel">
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                {/* Example Simple */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Simple</h4>
                    <p>Add color contextual class.</p>
                    <div className="alert alert-primary alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      NEWS : You have done 5 actions.
                    </div>
                    <div className="alert alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      INFO : You have 198 messages
                    </div>
                    <div className="alert alert-success alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      SUCCESS : The page has been added.
                    </div>
                    <div className="alert alert-danger alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      DANGER : The daily report has failed
                    </div>
                    <div className="alert alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      WARNING : Bandwidth limit exceeded
                    </div>
                  </div>
                </div>
                {/* End Example Simple */}
                {/* Example Dark */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Dark</h4>
                    <p>Add <code>.dark</code> class to change the style.</p>
                    <div className="alert dark alert-primary alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      NEWS : You have done 5 actions.
                    </div>
                    <div className="alert dark alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      INFO : You have 198 messages
                    </div>
                    <div className="alert dark alert-success alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      SUCCESS : The page has been added.
                    </div>
                    <div className="alert dark alert-danger alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      DANGER : The daily report has failed
                    </div>
                    <div className="alert dark alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      WARNING : Bandwidth limit exceeded
                    </div>
                  </div>
                </div>
                {/* End Example Dark */}
                {/* Example With Icon */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">With Icon</h4>
                    <p>Add <code>.alert-icon</code> class.</p>
                    <div className="alert dark alert-icon alert-primary alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-bell" aria-hidden="true"/> You have done
                      5 actions.
                    </div>
                    <div className="alert dark alert-icon alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-info" aria-hidden="true"/> You have 198
                      messages
                    </div>
                    <div className="alert dark alert-icon alert-success alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-check" aria-hidden="true"/> The page has
                      been added.
                    </div>
                    <div className="alert dark alert-icon alert-danger alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-close" aria-hidden="true"/> The daily report
                      has failed
                    </div>
                    <div className="alert dark alert-icon alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-alert" aria-hidden="true"/> Bandwidth limit
                      exceeded
                    </div>
                  </div>
                </div>
                {/* End Example With Icon */}
                {/* Example With Title */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">With Title</h4>
                    <p>Add title.</p>
                    <div role="alert" className="alert alert-success alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                    <div role="alert" className="alert dark alert-warning alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                    <div role="alert" className="alert dark alert-info alert-icon alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-bell" aria-hidden="true"/>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Example With Title */}
                {/* Example With Button */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">With Button</h4>
                    <p>Add buttons.</p>
                    <div className="alert alert-icon alert-danger alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon wb-bell" aria-hidden="true"/> You have done
                      5 actions.
                      <p className="mt-15">
                        <button className="btn btn-danger" type="button">Do this</button>
                        <button className="btn btn-link blue-grey-500" type="button">Or this</button>
                      </p>
                    </div>
                    <div role="alert" className="alert dark alert-primary alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                      <p className="mt-15">
                        <button className="btn btn-primary btn-inverse btn-outline" type="button">Do this</button>
                        <button className="btn btn-link white" type="button">Or this</button>
                      </p>
                    </div>
                    <div role="alert" className="alert dark alert-success alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                      <p className="mt-15">
                        <button className="btn btn-success btn-inverse btn-outline" type="button">Do this</button>
                        <button className="btn btn-link white" type="button">Or this</button>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Example With Button */}
                {/* Example With Avatar */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">With Avatar</h4>
                    <p>Add <code>.alert-avatar</code> class.</p>
                    <div className="alert alert-primary alert-avatar alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <span className="avatar">
                        <img alt="..." src="../../../global/portraits/5.jpg"/>
                      </span>
                      You have done 5 actions.
                    </div>
                    <div role="alert" className="alert dark alert-info alert-avatar alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <span className="avatar">
                        <img alt="..." src="../../../global/portraits/5.jpg"/>
                      </span>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                    <div role="alert" className="alert dark alert-danger alert-avatar alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <span className="avatar">
                        <img alt="..." src="../../../global/portraits/5.jpg"/>
                      </span>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                      <p className="mt-15">
                        <button className="btn btn-danger btn-inverse btn-outline" type="button">Do this</button>
                        <button className="btn btn-link white" type="button">Or this</button>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Example With Avatar */}
                {/* Example Dismissible & Click */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Dismissible and Click</h4>
                    <p>Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.</p>
                    <div className="alert alert-primary alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <strong>Heads up!</strong> This alert needs your attention, but it's
                      not super important.
                    </div>
                    <div className="alert dark alert-primary" role="alert">
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Example Dismissible & Click */}
                {/* Example Link In Alerts */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Link In Alerts</h4>
                    <p>Use the <code>.alert-link</code> utility class to quickly provide
                      matching colored links within any alert.</p>
                    <div className="alert alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <a className="alert-link" href="javascript:void(0)">not looking too good</a>
                    </div>
                    <div className="alert dark alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <a className="alert-link" href="javascript:void(0)">not looking too good</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Example Link In Alerts */}
                {/* Example With List */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">With List</h4>
                    <p>An alert include title and item list with close button.</p>
                    <div className="alert alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Alert With List</h4>
                      <ul>
                        <li>Cras justo odio</li>
                        <li>Dapibus ac facilisis in</li>
                      </ul>
                    </div>
                    <div className="alert dark alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4>Alert With List</h4>
                      <ul>
                        <li>Cras justo odio</li>
                        <li>Dapibus ac facilisis in</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Example With List */}
                {/* Example Alt Alerts */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Alt Alerts</h4>
                    <p>Swap modifier class <code>.alert-alt</code> to switch another four
                      contextual feedback message style below. </p>
                    <div className="alert alert-alt alert-primary alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert alert-alt alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert alert-alt alert-success alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert alert-alt alert-danger alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert alert-alt alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                  </div>
                </div>
                {/* End Example Alt Alerts */}
                {/* Example Dark Alt Alerts */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Dark Alt</h4>
                    <p>Swap modifier class <code>.alert-alt</code> and <code>.dark</code> to switch another four
                      contextual feedback message style below.
                    </p>
                    <div className="alert dark alert-alt alert-primary alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert dark alert-alt alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert dark alert-alt alert-success alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert dark alert-alt alert-danger alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                    <div className="alert dark alert-alt alert-warning alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      Lorem ipsum dolor sit amet, <a className="alert-link" href="javascript:void(0)">consectetur
                      adipisicing elit</a>.
                    </div>
                  </div>
                </div>
                {/* End Example Dark Alt Alerts */}
                {/* Example Social Messages */}
                <div className="col-md-6 col-lg-4">
                  <div className="example-wrap">
                    <h4 className="example-title">Social Messages</h4>
                    <p>Add <code>.alert-social</code> class.</p>
                    <div role="alert" className="alert alert-social alert-facebook alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon bd-facebook" aria-hidden="true"/>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                    <div role="alert" className="alert alert-social alert-twitter alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon bd-twitter" aria-hidden="true"/>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                    <div role="alert" className="alert alert-social alert-google-plus alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon bd-google-plus" aria-hidden="true"/>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                    <div role="alert" className="alert alert-social alert-linkedin alert-dismissible">
                      <button aria-label="Close" data-dismiss="alert" className="close" type="button">
                        <span aria-hidden="true">×</span>
                      </button>
                      <i className="icon bd-linkedin" aria-hidden="true"/>
                      <h4>Some Message</h4>
                      <p>
                        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                        voluptate.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Example Social Messages */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertsExample;
