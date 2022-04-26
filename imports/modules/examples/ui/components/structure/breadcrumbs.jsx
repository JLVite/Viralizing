import React from 'react';

class BreadcrumbsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Breadcrumbs</h1>
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
          {/* Panel */}
          <div className="panel">
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-xl-4 col-md-6">
                  {/* Example Default Style */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default Style</h4>
                    <p>Separators are automatically added in CSS through <code>:before</code> and content.</p>
                    <div className="example">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item active">Library</li>
                      </ol>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                      </ol>
                    </div>
                  </div>
                  {/* End Example Default Style */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Arrow Style */}
                  <div className="example-wrap">
                    <h4 className="example-title">Arrow Style</h4>
                    <p>Add modifier class <code>.breadcrumb-arrow</code> to switch slash
                      or arrow style.</p>
                    <div className="example">
                      <ol className="breadcrumb breadcrumb-arrow">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item active">Library</li>
                      </ol>
                      <ol className="breadcrumb breadcrumb-arrow">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                      </ol>
                    </div>
                  </div>
                  {/* End Example Arrow Style */}
                </div>
                <div className="col-xl-4 col-md-6">
                  {/* Example Items With Icon */}
                  <div className="example-wrap">
                    <h4 className="example-title">Items With Icon</h4>
                    <p>An icon used in breadcrumb to convey that it’s an home page, with
                      additional <code>.wb-home</code> class.</p>
                    <div className="example">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="icon wb-home" href="javascript:void(0)">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Data</li>
                      </ol>
                      <ol className="breadcrumb breadcrumb-arrow">
                        <li className="breadcrumb-item"><a className="icon wb-home" href="javascript:void(0)">Home</a>
                        </li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                      </ol>
                    </div>
                  </div>
                  {/* End Example Items With Icon */}
                </div>

                <div className="col-xl-4 col-md-6">
                  {/* Example Accessibility */}
                  <div className="example-wrap">
                    <h4 className="example-title">Accessibility</h4>
                    <p>Use this snippet to make breadcrumbs more accessible. Adding the
                      role attribute gives context to a screen reader. The <code>aria-label</code> attribute will allow
                      a screen reader to call out what the component
                      is to the user.</p>
                    <div className="example">
                      <ol className="breadcrumb" aria-label="breadcrumbs" role="menubar">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Getting Started</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Library</a></li>
                        <li className="breadcrumb-item disable" aria-disabled="true"><a
                          href="javascript:void(0)">Customize</a></li>
                        <li className="breadcrumb-item active">Data</li>
                      </ol>
                    </div>
                  </div>
                  {/* End Example Accessibility */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel */}
        </div>
      </div>

    );
  }
}

export default BreadcrumbsExample;
