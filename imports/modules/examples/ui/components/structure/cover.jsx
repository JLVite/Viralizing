import React from 'react';

class CoverExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Cover</h1>
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
                <div className="col-md-6">
                  {/* Example Video & Audio */}
                  <div className="example-wrap">
                    <h4 className="example-title">Video &amp; Audio</h4>
                    <div className="example">
                      <div className="cover player" data-plugin="plyr">
                        <video poster="../../assets/examples/images/poster.jpg" controls crossOrigin>
                          {/* Video Files */}
                          <source type="video/mp4" src="https://cdn.selz.com/plyr/1.0/movie.mp4"/>
                          <source type="video/webm" src="https://cdn.selz.com/plyr/1.0/movie.webm"/>
                          {/* Text Track File */}
                          <track kind="captions" label="English" srcLang="en" src="//cdn.selz.com/plyr/1.0/en.vtt"
                                 default/>
                          {/* Fallback For Browsers That Don'T Support The <Video> Element */}
                          <a href="https://cdn.selz.com/plyr/1.0/movie.mp4">Download</a>
                        </video>
                      </div>
                    </div>
                    <div className="example">
                      <div className="cover player" data-plugin="plyr">
                        <audio controls style={{ height: 40 }}>
                          {/* Audio Files */}
                          <source type="audio/mp3" src="https://cdn.selz.com/plyr/1.0/logistics-96-sample.mp3"/>
                          <source type="audio/ogg" src="https://cdn.selz.com/plyr/1.0/logistics-96-sample.ogg"/>
                          {/* Fallback For Browsers That Don'T Support The <Audio> Element */}
                          <a href="https://cdn.selz.com/plyr/1.0/logistics-96-sample.mp3">Download</a>
                        </audio>
                      </div>
                    </div>
                  </div>
                  {/* End Example Video & Audio */}
                </div>
                <div className="col-md-6">
                  {/* Example Quote */}
                  <div className="example-wrap">
                    <h4 className="example-title">Quote</h4>
                    <p>Add the <code>.cover-quote</code> class to a text.</p>
                    <div className="example">
                      <div className="cover">
                        <blockquote className="blockquote cover-quote">Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Integer
                          nec odio.
                        </blockquote>
                      </div>
                    </div>
                    <p>Quote with background</p>
                    <div className="example">
                      <div className="cover">
                        <div className="cover-background py-30"
                             style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/placeholder.png")' }}>
                          <blockquote className="blockquote cover-quote white">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                            Integer nec odio.
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Quote */}
                </div>
                <div className="col-md-6">
                  {/* Example Iframe */}
                  <div className="example-wrap">
                    <h4 className="example-title">Iframe</h4>
                    <p>Add the <code>.cover-iframe</code> class to the iframe item.</p>
                    <div className="example">
                      <div className="cover">
                        <iframe className="cover-iframe h-500 h-only-sm-300 h-only-xs-300"
                                src="http://www.youtube.com/embed/YE7VzlLtp-4?autoplay=0&controls=0&showinfo=0&rel=0&loop=1&modestbranding=1&wmode=transparent&enablejsapi=1&api=1"/>
                      </div>
                    </div>
                  </div>
                  {/* Example Iframe */}
                </div>
                <div className="col-md-6">
                  {/* Example Background Image */}
                  <div className="example-wrap">
                    <h4 className="example-title">Background Image</h4>
                    <p>Add the <code>.cover-background</code> class to an element with
                      a background image.</p>
                    <div className="example">
                      <div className="cover h-500 h-only-sm-300 h-only-xs-300">
                        <div className="cover-background"
                             style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/placeholder.png")' }}/>
                      </div>
                    </div>
                  </div>
                  {/* Example Background Image */}
                </div>
                <div className="col-md-6">
                  {/* Example Responsive Image */}
                  <div className="example-wrap m-sm-0">
                    <h4 className="example-title">Responsive Image</h4>
                    <p>Add the <code>.cover-image</code> class to a responsive image.</p>
                    <div className="example">
                      <div className="cover">
                        <img className="cover-image"
                             src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                      </div>
                    </div>
                  </div>
                  {/* End Example Responsive Image */}
                </div>
                <div className="col-md-6">
                  {/* Example Gallery */}
                  <div className="example-wrap">
                    <h4 className="example-title">Gallery</h4>
                    <p>Add the <code>.cover-gallery</code> class to a gallery.</p>
                    <div className="example">
                      <div className="cover">
                        <div className="cover-gallery carousel slide" id="cover-gallery-example" data-ride="carousel">
                          <ol className="carousel-indicators">
                            <li className="active" data-target="#cover-gallery-example" data-slide-to={0}/>
                            <li data-target="#cover-gallery-example" data-slide-to={1}/>
                            <li data-target="#cover-gallery-example" data-slide-to={2}/>
                          </ol>
                          <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                              <img className="h-full" alt="First slide"
                                   src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"/>
                            </div>
                            <div className="carousel-item">
                              <img className="h-full" alt="Second  slide"
                                   src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"/>
                            </div>
                            <div className="carousel-item">
                              <img className="h-full" alt="Third  slide"
                                   src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png"/>
                            </div>
                          </div>
                          {/* Controls */}
                          <a className="carousel-control-prev" href="#cover-gallery-example" data-slide="prev"
                             role="button">
                            <span className="carousel-control-prev-icon wb-chevron-left" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#cover-gallery-example" data-slide="next"
                             role="button">
                            <span className="carousel-control-next-icon wb-chevron-right" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Gallery */}
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

export default CoverExample;
