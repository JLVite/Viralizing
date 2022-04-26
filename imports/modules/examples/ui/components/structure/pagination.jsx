import React from 'react';

class PaginationExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Pagination</h1>
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
          {/* Panel Pagination */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Pagination</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Basic Pagination */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic Pagination</h4>
                    <p>Simple pagination inspired by Rdio, great for apps and search results.
                      The large block is hard to miss, easily scalable, and provides
                      large click areas.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Basic Pagination */}
                </div>
                <div className="col-lg-6">
                  {/* Example Disabled And Active States */}
                  <div className="example-wrap">
                    <h4 className="example-title">Disabled And Active States</h4>
                    <p>Links are customizable for different circumstances. Use <code>.disabled</code> for unclickable
                      links and <code>.active</code> to indicate the
                      current page.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination">
                          <li className="disabled page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="active page-item"><a className="page-link" href="javascript:void(0)">1 <span
                            className="sr-only">(current)</span></a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Disabled And Active States */}
                </div>
                <div className="col-lg-6">
                  {/* Example Pagination With Gap */}
                  <div className="example-wrap">
                    <h4 className="example-title">Pagination With Gap</h4>
                    <p>This pagination style has large clickable areas for each page,
                      the current page clearly stands out from the links.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination pagination-gap">
                          <li className="disabled page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="active page-item"><a className="page-link" href="javascript:void(0)">1 <span
                            className="sr-only">(current)</span></a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Pagination With Gap */}
                </div>
                <div className="col-lg-6">
                  {/* Example Pagination No Border */}
                  <div className="example-wrap">
                    <h4 className="example-title">Pagination No Border</h4>
                    <p>The previous and next buttons are nicely detached from the rest
                      of the pagination through their style.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination pagination-no-border">
                          <li className="disabled page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="active page-item"><a className="page-link" href="javascript:void(0)">1 <span
                            className="sr-only">(current)</span></a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Pagination No Border */}
                </div>
                <div className="col-lg-6">
                  {/* Example Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Sizing</h4>
                    <p>Fancy larger or smaller pagination?
                      Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination pagination-lg">
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <nav>
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <nav>
                        <ul className="pagination pagination-sm">
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0)" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Sizing */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Pagination */}
          {/* Panel Pager */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Pager</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Pager */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default Example</h4>
                    <p>By default, the pager centers links.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">Previous</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">Next</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Pager */}
                </div>
                <div className="col-lg-6">
                  {/* Example Optional Disabled State */}
                  <div className="example-wrap">
                    <h4 className="example-title">Optional disabled state</h4>
                    <p>Pager links also use the general <code>.disabled</code> utility
                      class from the pagination.</p>
                    <div className="example">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a className="page-link" href="javascript:void(0)">
                              <span aria-hidden="true">←</span> Older</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">Newer <span
                            aria-hidden="true">→</span></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Example Optional Disabled State */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Pager */}
        </div>
      </div>

    );
  }
}

export default PaginationExample;
