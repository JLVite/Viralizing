import React from 'react';

class CardsExample extends React.Component {
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
          <h1 className="page-title">Cards</h1>
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
        {/* Page Content */}
        <div className="page-content container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card */}
              <div className="example-wrap">
                <h4 className="example-title">Example</h4>
                <p>Cards require a small amount of markup and classes to provide you with
                  as much control as possible. These classes and markup are flexible
                  though and can typically be remixed and extended with ease. For example,
                  if your card has no flush content like images, feel free to put the
                  <code>.card-block</code> class on the <code>.card</code> element to
                  consolidate your markup.</p>
                <div className="card">
                  <img className="card-img-top img-fluid width-full"
                       src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              {/* End Example Card */}
            </div>
            <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card Content types */}
              <div className="example-wrap">
                <h4 className="example-title">Content types</h4>
                <p>Cards support a wide variety of content, including images, text, list
                  groups, links, and more. Mix and match multiple content types to create
                  the card you need.</p>
                <div className="card">
                  <img className="card-img-top img-fluid width-full"
                       src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                  </div>
                  <ul className="list-group list-group-bordered list-group-flush margin-bottom-0">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-block">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>
              </div>
              {/* End Example Card Content types */}
            </div>
            <div className="clearfix hidden-sm-down hidden-xxl-up"/>
            <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card Image overlays */}
              <div className="example-wrap">
                <h4 className="example-title">Image overlays &amp; Inverted text</h4>
                <p>Turn an image into a card background and overlay your card’s text. Depending
                  on the image, you may or may not need <code>.card-inverse</code> (see
                  below).</p>
                <p>Cards include a class for quickly toggling the text color. By default,
                  cards use dark text and assume a light background. Add <code>.card-inverse</code> for white text and
                  specify the background-color and border-color to
                  go with it.</p>
                <div className="card card-inverse">
                  <img className="card-img width-full"
                       src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image"/>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                      to additional content.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card card-inverse bg-blue-grey-800" style={{ borderColor: '#263238' }}>
                  <div className="card-block">
                    <h3 className="card-title">Special title treatment</h3>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              {/* End Example Card Image overlays */}
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card Image caps top */}
              <div className="example-wrap">
                <h4 className="example-title">Image caps top</h4>
                <div className="card">
                  <img className="card-img-top width-full"
                       src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Example Card Image caps top */}
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card Image caps bottom */}
              <div className="example-wrap">
                <h4 className="example-title">Image caps bottom</h4>
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <img className="card-img-bottom width-full"
                       src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                </div>
              </div>
              {/* End Example Card Image caps bottom */}
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card Header and footer */}
              <div className="example-wrap">
                <h4 className="example-title">Header and footer</h4>
                <p>Add an optional header and/or footer within a card.</p>
                <div className="card">
                  <div className="card-header card-header-transparent">
                    Featured
                  </div>
                  <div className="card-block">
                    <h4 className="card-title">Special title treatment</h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header card-header-transparent">
                    Quote
                  </div>
                  <div className="card-block">
                    <blockquote className="card-blockquote">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.</p>
                      <footer>Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card text-xs-center">
                  <div className="card-header card-header-transparent">
                    Featured
                  </div>
                  <div className="card-block">
                    <h4 className="card-title">Special title treatment</h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                  <div className="card-footer card-footer-transparent text-muted">
                    2 days ago
                  </div>
                </div>
              </div>
              {/* End Example Card Header and footer */}
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12">
              {/* Example Card Text alignment */}
              <div className="example-wrap">
                <h4 className="example-title">Text alignment</h4>
                <p>You can quickly change the text alignment of any card—in its entirety
                  or specific parts—with our text align classes.</p>
                <div className="card card-block">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card card-block text-xs-center">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card card-block text-xs-right">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              {/* End Example Card Text alignment */}
            </div>
            <div className="clearfix"/>
            <div className="col-xxl-12">
              {/* Example Card Groups */}
              <div className="example-wrap">
                <h4 className="example-title">Groups</h4>
                <p>Use card groups to render cards as a single, attached element with equal
                  width and height columns. By default, card groups use <code>display: table;</code> and <code>table-layout:
                    fixed;</code> to achieve their uniform sizing.
                  However, enabling flexbox mode can switch that to use <code>display: flex;</code> and provide the same
                  effect.</p>
                <div className="card-group">
                  <div className="card">
                    <img className="card-img-top width-full"
                         src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top width-full"
                         src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">This card has supporting text below as a natural lead-in to additional
                        content.</p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top width-full"
                         src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than
                        the first to show that equal height action.</p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Card Group */}
            </div>
            <div className="col-xxl-12">
              {/* Example Card Decks */}
              <div className="example-wrap">
                <h4 className="example-title">Decks</h4>
                <p>Need a set of equal width and height cards that aren’t attached to one
                  another? Use card decks. By default, card decks require two wrapping
                  elements: <code>.card-deck-wrapper</code> and a <code>.card-deck</code>.
                  We use table styles for the sizing and the gutters on <code>.card-deck</code>.
                  The <code>.card-deck-wrapper</code> is used to negative margin out
                  the border-spacing on the <code>.card-deck</code>.</p>
                <p>ProTip! If you enable flexbox mode, you can remove the <code>.card-deck-wrapper</code>.</p>
                <div className="card-deck-wrapper">
                  <div className="card-deck">
                    <div className="card">
                      <img className="card-img-top width-full"
                           src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.</p>
                        <p className="card-text">
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img className="card-img-top width-full"
                           src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional
                          content.</p>
                        <p className="card-text">
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img className="card-img-top width-full"
                           src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                          lead-in to additional content. This card has even longer content
                          than the first to show that equal height action.</p>
                        <p className="card-text">
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Card Decks */}
            </div>
            <div className="col-xxl-12">
              {/* Example Card Background variants */}
              <div className="example-wrap">
                <h4 className="example-title">Background variants</h4>
                <p>Cards include their own variant classes for quickly changing the background-color
                  and border-color of a card. Darker colors require the use of <code>.card-inverse</code>.</p>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="card card-inverse card-primary text-xs-center">
                      <div className="card-block">
                        <blockquote className="card-blockquote">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                          <footer>Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="card card-inverse card-success text-xs-center">
                      <div className="card-block">
                        <blockquote className="card-blockquote">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                          <footer>Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="card card-inverse card-info text-xs-center">
                      <div className="card-block">
                        <blockquote className="card-blockquote">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                          <footer>Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="card card-inverse card-warning text-xs-center">
                      <div className="card-block">
                        <blockquote className="card-blockquote">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                          <footer>Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="card card-inverse card-danger text-xs-center">
                      <div className="card-block">
                        <blockquote className="card-blockquote">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                          <footer>Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Card Background variants */}
            </div>
            <div className="col-xxl-12">
              {/* Example Card Columns */}
              <div className="example-wrap">
                <h4 className="example-title">Columns</h4>
                <p>Cards can be organized into Masonry-like columns with just CSS by wrapping
                  them in .card-columns. Heads up! This is not available in IE9 and below
                  as they have no support for the column CSS properties.</p>
                <div className="card-columns">
                  <div className="card">
                    <img className="card-img-top width-full"
                         src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title that wraps to a new line</h4>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                  <div className="card card-block">
                    <blockquote className="card-blockquote">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.</p>
                      <footer>
                        <small className="text-muted">
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  <div className="card">
                    <img className="card-img-top width-full"
                         src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image cap"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">This card has supporting text below as a natural lead-in to additional
                        content.</p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                  <div className="card card-block card-inverse card-primary text-xs-center">
                    <blockquote className="card-blockquote">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat.</p>
                      <footer>
                        <small>
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  <div className="card card-block text-xs-center">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <div className="card">
                    <img className="card-img width-full"
                         src="http://localhost/remark-react/global/photos/focus-1-480x320.jpg" alt="Card image"/>
                  </div>
                  <div className="card card-block text-xs-right">
                    <blockquote className="card-blockquote">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.</p>
                      <footer>
                        <small className="text-muted">
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  <div className="card card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Example Card Columns */}
            </div>
          </div>
        </div>
        {/* End Page Content */}
      </div>
    );
  }
}

export default CardsExample;
