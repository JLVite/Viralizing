import React from 'react';

class RibbonExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Ribbon</h1>
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
              <div className="row">
                <div className="col-12">
                  {/* Example Basic */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic</h4>
                    <p>Ribbons have shared markup, starting with the default <code>.ribbons</code> class, as well as
                      shared states. Swap modifier classes <code>.vertical</code> to switch ribbon direction. Add any of
                      the below mentioned modifier
                      classes (example, <code>.ribbon-danger</code> and
                      <code>.ribbon-warning</code>) to change the appearance of a ribbon.
                    </p>
                    <div className="row">
                      <div className="col-xl-2 col-md-4">
                        <div className="example">
                          <div className="ribbon">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example">
                          <div className="ribbon ribbon-primary">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example">
                          <div className="ribbon ribbon-danger">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example">
                          <div className="ribbon ribbon-vertical ribbon-warning">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example">
                          <div className="ribbon ribbon-vertical ribbon-success">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example">
                          <div className="ribbon ribbon-vertical ribbon-info">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Basic */}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Example Reverse */}
                  <div className="example-wrap">
                    <h4 className="example-title">Reverse</h4>
                    <p> Alternatively, you can align ribbons to the right by using <code>.ribbon-reverse</code> utility
                      classes.</p>
                    <div className="row">
                      <div className="col-xl-2 col-md-4">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-reverse">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-reverse ribbon-primary">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-reverse ribbon-danger">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-vertical ribbon-reverse ribbon-warning">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-vertical ribbon-reverse ribbon-success">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-2 col-md-4">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-vertical ribbon-reverse ribbon-info">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Reverse */}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Example Bookmark */}
                  <div className="example-wrap">
                    <h4 className="example-title">Bookmark</h4>
                    <p>Use <code>.ribbon-bookmark</code> class to quickly switch a bookmark
                      styled ribbons.</p>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="example">
                          <div className="ribbon ribbon-bookmark">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-bookmark ribbon-reverse ribbon-primary">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="example">
                          <div className="ribbon ribbon-vertical ribbon-bookmark ribbon-danger">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-vertical ribbon-bookmark ribbon-reverse ribbon-warning">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Bookmark */}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Example Clip */}
                  <div className="example-wrap">
                    <h4 className="example-title">Clip</h4>
                    <p>Use <code>.ribbon-clip</code> class to quickly switch a clip styled
                      ribbons, add <code>.ribbon-bottom</code> to switch the ribbon
                      direction.</p>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="example">
                          <div className="ribbon ribbon-clip">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-clip ribbon-reverse ribbon-primary">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="example example-bottom">
                          <div className="ribbon ribbon-clip ribbon-bottom ribbon-danger">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="example example-bottom-reverse">
                          <div className="ribbon ribbon-clip ribbon-reverse ribbon-bottom ribbon-warning">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Clip */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {/* Example Badge */}
                  <div className="example-wrap m-sm-0">
                    <h4 className="example-title">Badge</h4>
                    <p>Use <code>.ribbon-badge</code> class to quickly switch a badge
                      styled ribbons, add <code>.ribbon-bottom</code> to switch the
                      ribbon direction.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="example">
                          <div className="ribbon ribbon-badge ribbon-primary">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-badge ribbon-primary ribbon-reverse">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-bottom">
                          <div className="ribbon ribbon-badge ribbon-primary ribbon-bottom">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-bottom-reverse">
                          <div className="ribbon ribbon-badge ribbon-primary ribbon-reverse ribbon-bottom">
                            <span className="ribbon-inner">Ribbon</span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Badge */}
                </div>
                <div className="col-md-6">
                  {/* Example Corner */}
                  <div className="example-wrap">
                    <h4 className="example-title">Corner</h4>
                    <p>Use <code>.ribbon-corner</code> class to quickly switch a corner
                      styled ribbons, add <code>.ribbon-bottom</code> to switch the
                      ribbon direction. An icon used in an ribbon with additional .wb-heart
                      class.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="example">
                          <div className="ribbon ribbon-corner ribbon-primary">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-reverse">
                          <div className="ribbon ribbon-corner ribbon-primary ribbon-reverse">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-bottom">
                          <div className="ribbon ribbon-corner ribbon-primary ribbon-bottom">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-bottom-reverse">
                          <div className="ribbon ribbon-corner ribbon-primary ribbon-reverse ribbon-bottom">
                            <span className="ribbon-inner"><i className="icon wb-heart" aria-hidden="true"/></span>
                          </div>
                          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Corner */}
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

export default RibbonExample;
