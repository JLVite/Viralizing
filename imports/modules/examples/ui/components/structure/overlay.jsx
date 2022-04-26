import React from 'react';

class OverlayExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Overlay</h1>
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
                <div className="col-lg-6 col-xl-4">
                  {/* Example Basic */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic</h4>
                    <p>To create a position context, add the <code>.overlay</code> class
                      to a container element around an image. Add the <code>.overlay-panel</code> class to a child
                      element to create the actual overlay panel.
                    </p>
                    <div className="example">
                      <figure className="overlay">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Basic */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Toggle Overlay On Hover */}
                  <div className="example-wrap">
                    <h4 className="example-title">Toggle Overlay On Hover</h4>
                    <p>By default, the overlay is always visible. To hide the overlay
                      and display it on hover, add the <code>.overlay-hover</code> class to the overlay container.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-fade">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Toggle Overlay On Hover */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Background */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Background</h4>
                    <p>To give the overlay a background just add the <code>.overlay-background</code> class to the
                      overlay container.</p>
                    <div className="example">
                      <figure className="overlay">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Background */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Icon */}
                  <div className="example-wrap m-lg-0">
                    <h4 className="example-title">Overlay Icon</h4>
                    <p>To display an icon you can add the <code>.overlay-icon</code> class
                      to the overlay panel.</p>
                    <div className="example">
                      <figure className="overlay">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <div className="overlay-panel overlay-icon overlay-background">
                          <i className="icon wb-search" aria-hidden="true"/>
                        </div>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Icon */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Image */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Overlay Image</h4>
                    <p>To apply an image as an overlay, add the <code>.overlay-image</code> class to
                      an <code>&lt;img&gt;</code> element with the <code>.overlay-panel</code> class.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <img className="overlay-panel overlay-image overlay-fade"
                             src="../../../global/photos/placeholder.png" alt="..."/>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Image */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Anchor */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Anchor</h4>
                    <p>To use the entire overlay as a link, just place an <code>&lt;a&gt;</code> element inside the
                      overlay container and add the <code>.overlay-anchor</code>.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <div className="overlay-panel overlay-fade">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </div>
                        <a className="overlay-anchor" href="javascript:void(0)"/>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Anchor */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel */}
          {/* Panel Position */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Overlay Positon</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Top */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Top</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-top overlay-panel overlay-background overlay-slide-top">
                          <h4>Overlay Top</h4>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Top */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Bottom */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Bottom</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-bottom overlay-panel overlay-background overlay-slide-top">
                          <h4>Overlay Bottom</h4>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Bottom */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Left */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Overlay Left</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-left overlay-panel overlay-background overlay-slide-left">
                          <h4>Overlay Left</h4>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Left */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Right */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Right</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-right overlay-panel overlay-background overlay-slide-right">
                          <h4>Overlay Right</h4>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Right */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Position */}
          {/* Panel Transition */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Overlay Transition</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Fade */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Fade</h4>
                    <p>Add this class to the overlay panel or image to fade it in.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-fade">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Fade */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Scale */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Scale</h4>
                    <p>Add this class to the image to scale it up.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure overlay-scale"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Scale */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Spin */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Spin</h4>
                    <p>Add this class to the image to slightly rotate it to the right.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure overlay-spin"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-fade">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Fade */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Grayscale */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Grayscale</h4>
                    <p>Add this class to the image to desaturate it and color it on hover.
                    </p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure overlay-grayscale"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-fade">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Grayscale */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Slide Top */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Slide Top</h4>
                    <p>Add this class to the overlay panel to slide it in from the top.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-slide-top">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Slide Top */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Slide Bottom */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Slide Bottom</h4>
                    <p>Add this class to the overlay panel to slide it in from the bottom.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-slide-bottom">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Slide Bottom */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Slide Left */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Overlay Slide Top</h4>
                    <p>Add this class to the overlay panel to slide it in from the left.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-slide-left">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Slide Left */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Slide Right */}
                  <div className="example-wrap">
                    <h4 className="example-title">Overlay Slide Top</h4>
                    <p>Add this class to the overlay panel to slide it in from the right.</p>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-slide-right">
                          <h3>Title</h3>
                          <p>Lorem <a href="javascript:void(0)">ipsum dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Overlay Slide Right */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Transition */}
          {/* Panel More Examples */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">More Examples</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6 col-xl-4">
                  {/* Example Animation */}
                  <div className="example-wrap m-lg-0">
                    <h4 className="example-title">Animation</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover animation-hover">
                        <img className="overlay-figure overlay-scale"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-fade">
                          <h3 className="animation-slide-bottom">Title</h3>
                          <p className="animation-slide-bottom animation-delay-200">Lorem <a href="javascript:void(0)">ipsum
                            dolor</a> sit amet,
                            consetetur sadipscing elitr.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Animation */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Vertical Align */}
                  <div className="example-wrap m-lg-0">
                    <h4 className="example-title">Vertical Align</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover animation-hover">
                        <img className="overlay-figure overlay-scale"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption
                          className="overlay-panel overlay-background overlay-fade text-center vertical-align">
                          <button type="button" className="btn btn-outline btn-inverse vertical-align-middle">View
                          </button>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Vertical Align */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Overlay Icons */}
                  <div className="example-wrap">
                    <h4 className="example-title">Icons</h4>
                    <div className="example">
                      <figure className="overlay overlay-hover">
                        <img className="overlay-figure"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                        <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                          <a className="icon wb-search" href="#search"/>
                          <a className="icon wb-upload" href="#upload"/>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* End Example Icons */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel More Examples */}
        </div>
      </div>
    );
  }
}

export default OverlayExample;
