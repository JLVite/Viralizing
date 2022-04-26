import React from 'react';

class TestimonialsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Testimonials</h1>
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
                <div className="col-12">
                  {/* Example Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default</h4>
                    <p>Testimonials from customers who are not famous have been effectively
                      used in marketing for as long as marketing has existed.</p>
                    <div className="example">
                      <div className="testimonial">
                        <ul className="testimonial-ul row">
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/1.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Herman Beck</span>
                            <span className="testimonial-company">Web Designer</span>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Mary Adams</span>
                            <span className="testimonial-company">Videographer</span>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/3.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Owen Hunt</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default */}
                </div>
                <div className="col-12">
                  {/* Example Reverse */}
                  <div className="example-wrap">
                    <h4 className="example-title">Reverse</h4>
                    <p>The content, customer’s avatar, author and company information
                      can be align to bottom right side by using an additional class
                      <code>.testimonial-reverse</code>.</p>
                    <div className="example">
                      <div className="testimonial testimonial-reverse">
                        <ul className="testimonial-ul row">
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">June Lane</span>
                            <span className="testimonial-company">Web Designer</span>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Edward Fletcher</span>
                            <span className="testimonial-company">Videographer</span>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/6.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Crystal Bates</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Example Reverse */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-12">
                  {/* Example Top */}
                  <div className="example-wrap">
                    <h4 className="example-title">Top</h4>
                    <p>The content, customer’s avatar, author and company information
                      can be align to top left side by using an additional class
                      <code>.testimonial-top</code>.</p>
                    <div className="example">
                      <div className="testimonial testimonial-top">
                        <ul className="testimonial-ul row">
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/7.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Nathan Watts</span>
                            <span className="testimonial-company">Web Designer</span>
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/8.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Heather Harper</span>
                            <span className="testimonial-company">Videographer</span>
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/9.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Willard Wood</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Example Top */}
                </div>
                <div className="col-12">
                  {/* Example Top & Reverse */}
                  <div className="example-wrap">
                    <h4 className="example-title">Top &amp; Reverse</h4>
                    <p>The content, customer’s avatar, author and company information
                      can be align to top right side by using an additional classes
                      <code>.testimonial-top</code> and <code>.testimonial-reverse</code>.</p>
                    <div className="example">
                      <div className="testimonial testimonial-top testimonial-reverse">
                        <ul className="testimonial-ul row">
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/10.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Ronnie Ellis</span>
                            <span className="testimonial-company">Web Designer</span>
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/11.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Gwendolyn Wheeler</span>
                            <span className="testimonial-company">Videographer</span>
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                          </li>
                          <li className="testimonial-item col-md-4">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/12.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Daniel Russell</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Example Top & Reverse */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Slide Show - Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Slide Show - Default</h4>
                    <p>This slideshow testimonial for cycling through person’s written
                      or spoken statement, like a carousel. The default content, customer’s
                      avatar, author and company information align to bottom left side.</p>
                    <div className="example">
                      <div className="testimonial carousel" role="listbox" id="exampleDefault" data-ride="carousel">
                        <ul className="testimonial-ul carousel-inner">
                          <li className="testimonial-item carousel-item active">
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/13.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Sarah Graves</span>
                            <span className="testimonial-company">Web Designer</span>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/14.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Andrew Hoffman</span>
                            <span className="testimonial-company">Videographer</span>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/15.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Camila Lynch</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                          </li>
                        </ul>
                        <div className="testimonial-control">
                          <a className="testimonial-control-left" data-slide="prev" href="#exampleDefault"
                             role="button">
                            <span className="icon wb-chevron-left" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="testimonial-control-right" data-slide="next" href="#exampleDefault"
                             role="button">
                            <span className="icon wb-chevron-right" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Slide Show - Default */}
                </div>
                <div className="col-xl-6">
                  {/* Example Slide Show - Reverse */}
                  <div className="example-wrap">
                    <h4 className="example-title">Slide Show - Reverse</h4>
                    <p>This slideshow testimonial’s content, customer’s avatar, author
                      and company information can be align to bottom right side by
                      using class <code>.testimonial-reverse</code>.</p>
                    <div className="example">
                      <div className="testimonial testimonial-reverse carousel" role="listbox" id="exampleReverse"
                           data-ride="carousel">
                        <ul className="testimonial-ul carousel-inner">
                          <li className="testimonial-item carousel-item active">
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/16.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Ramon Dunn</span>
                            <span className="testimonial-company">Web Designer</span>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/17.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Scott Sanders</span>
                            <span className="testimonial-company">Videographer</span>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/18.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Nina Wells</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                          </li>
                        </ul>
                        <div className="testimonial-control">
                          <a className="testimonial-control-left" data-slide="prev" href="#exampleReverse"
                             role="button">
                            <span className="icon wb-chevron-left" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="testimonial-control-right" data-slide="next" href="#exampleReverse"
                             role="button">
                            <span className="icon wb-chevron-right" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Slide Show - Reverse */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Slide Show - Top */}
                  <div className="example-wrap m-lg-0">
                    <h4 className="example-title">Slide Show - Top</h4>
                    <p>This slideshow testimonial’s content, customer’s avatar, author
                      and company information can be align to top left side by using
                      class <code>.testimonial-top</code>.</p>
                    <div className="example">
                      <div className="testimonial testimonial-top carousel" role="listbox" id="exampleTop"
                           data-ride="carousel">
                        <ul className="testimonial-ul carousel-inner">
                          <li className="testimonial-item carousel-item active">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/20.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Marvin Nelson</span>
                            <span className="testimonial-company">Web Designer</span>
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/3.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Caleb Richards</span>
                            <span className="testimonial-company">Videographer</span>
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">June Lane</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                          </li>
                        </ul>
                        <div className="testimonial-control">
                          <a className="testimonial-control-left" data-slide="prev" href="#exampleTop" role="button">
                            <span className="icon wb-chevron-left" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="testimonial-control-right" data-slide="next" href="#exampleTop" role="button">
                            <span className="icon wb-chevron-right" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Slide Show - Top */}
                </div>
                <div className="col-xl-6">
                  {/* Example Slide Show - Top & Reverse */}
                  <div className="example-wrap">
                    <h4 className="example-title">Slide Show - Top &amp; Reverse</h4>
                    <p>This slideshow testimonial’s content, customer’s avatar, author
                      and company information can be align to top right side by using
                      classes <code>.testimonial-top</code> and <code>.testimonial-reverse</code>.</p>
                    <div className="example">
                      <div className="testimonial testimonial-reverse testimonial-top carousel" role="listbox"
                           data-ride="carousel" id="exampleTopReverse">
                        <ul className="testimonial-ul carousel-inner">
                          <li className="testimonial-item carousel-item active">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Mary Adams</span>
                            <span className="testimonial-company">Web Designer</span>
                            <div className="testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante quis
                                turpis. </p>
                            </div>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/6.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Crystal Bates</span>
                            <span className="testimonial-company">Videographer</span>
                            <div className="testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                                Integer euismod lacus luctus magna. </p>
                            </div>
                          </li>
                          <li className="testimonial-item carousel-item">
                            <div className="testimonial-image">
                              <a className="avatar" href="javascript:void(0)">
                                <img src="http://getbootstrapadmin.com/remark/global/portraits/15.jpg" alt="image"/>
                              </a>
                            </div>
                            <span className="testimonial-author">Camila Lynch</span>
                            <span className="testimonial-company">Wordpress Ninja</span>
                            <div className="testimonial-content">
                              <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                                ipsum. Praesent mauris. Fusce nec tellus sed augue
                                semper porta.</p>
                            </div>
                          </li>
                        </ul>
                        <div className="testimonial-control">
                          <a className="testimonial-control-left" data-slide="prev" href="#exampleTopReverse"
                             role="button">
                            <span className="icon wb-chevron-left" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="testimonial-control-right" data-slide="next" href="#exampleTopReverse"
                             role="button">
                            <span className="icon wb-chevron-right" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Slide Show - Top & Reverse */}
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

export default TestimonialsExample;
