import React from 'react';

class BlockquotesExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Blockquotes</h1>
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
                <div className="col-xl-6">
                  {/* Example Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default</h4>
                    <p>Wrap <code>&lt;blockquote&gt;</code> around any HTML as the quote.
                      For straight quotes, we recommend a <code>&lt;p&gt;</code>.</p>
                    <div className="example">
                      <blockquote className="blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.</p>
                      </blockquote>
                    </div>
                  </div>
                  {/* End Example Default */}
                </div>
                <div className="col-xl-6">
                  {/* Example Naming A Source */}
                  <div className="example-wrap">
                    <h4 className="example-title">Naming A Source</h4>
                    <p>Add a <code>&lt;footer&gt;</code> for identifying the source. Wrap
                      the name of the source work in <code>&lt;cite&gt;</code>.</p>
                    <div className="example">
                      <blockquote className="blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.</p>
                        <footer className="blockquote-footer">Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  {/* End Example Naming A Source */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Alternate Displays */}
                  <div className="example-wrap">
                    <h4 className="example-title">Alternate Displays</h4>
                    <p>Add <code>.blockquote-reverse</code> for a blockquote with right-aligned
                      content.
                    </p>
                    <div className="example">
                      <blockquote className="blockquote blockquote-reverse">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.</p>
                        <footer className="blockquote-footer">Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  {/* End Example Alternate Displays */}
                </div>
                <div className="col-xl-6">
                  {/* Example Cover Quote */}
                  <div className="example-wrap">
                    <h4 className="example-title">Cover Quote</h4>
                    <p>Add <code>.cover-quote</code> for a blockquote with left-aligned
                      content and additional class .blockquote-reverse for right-aligned
                      content.
                    </p>
                    <div className="example">
                      <blockquote className="blockquote cover-quote">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
                        <footer className="blockquote-footer">Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  {/* End Example Cover Quote */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-md-12">
                  {/* Example Styles */}
                  <div className="example-wrap">
                    <h4 className="example-title">Styles</h4>
                    <p>Use any of the available blockquote classes to quickly create a
                      styled button.</p>
                    <div className="row row-lg">
                      <div className="col-md-6">
                        <div className="example">
                          <blockquote className="blockquote custom-blockquote blockquote-success">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                              integer.
                            </p>
                            <footer className="blockquote-footer">Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example">
                          <blockquote className="blockquote custom-blockquote blockquote-info">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                              integer.
                            </p>
                            <footer className="blockquote-footer">Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example">
                          <blockquote className="blockquote custom-blockquote blockquote-warning">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                              integer.
                            </p>
                            <footer className="blockquote-footer">Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example">
                          <blockquote className="blockquote custom-blockquote blockquote-danger">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                              integer.
                            </p>
                            <footer className="blockquote-footer">Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Styles */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default BlockquotesExample;
