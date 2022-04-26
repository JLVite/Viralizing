import React from 'react';

class SocialExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Social Widgets</h1>
          <ol className="breadcrumb">
            <li><a href="../index.html">Home</a></li>
            <li><a href="javascript:void(0)">Widgets</a></li>
            <li className="active">Social</li>
          </ol>
          <div className="page-header-actions">
            <button type="button" className="btn btn-sm btn-outline btn-default btn-round">
              <span className="text hidden-xs">Settings</span>
              <i className="icon wb-chevron-right" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="page-content container-fluid">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            {/* Panel Example1 */}
            <div className="col-lg-4 col-md-6" style={{ height: 470 }}>
              <div className="widget widget-shadow text-center">
                <div className="widget-header cover overlay" style={{ height: 'calc(100% - 100px)' }}>
                  <img className="cover-image"
                       src="http://getbootstrapadmin.com/remark/global/photos/view-3-960x640.jpg" alt="..."
                       style={{ height: '100%' }}/>
                  <div className="overlay-panel vertical-align">
                    <div className="vertical-align-middle">
                      <a className="avatar avatar-100 bg-white margin-bottom-10 img-bordered margin-xs-0"
                         href="javascript:void(0)">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/1.jpg" alt/>
                      </a>
                      <div className="font-size-20">Herman Beck</div>
                      <div className="font-size-14 grey-400">Designer</div>
                    </div>
                  </div>
                </div>
                <div className="widget-footer padding-horizontal-30 padding-vertical-20 height-100">
                  <div className="row no-space">
                    <div className="col-xs-4">
                      <div className="counter">
                        <div className="counter-label">Followers</div>
                        <span className="counter-number">11.2K</span>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <div className="counter-label">Following</div>
                        <span className="counter-number">683</span>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <div className="counter-label">Tweets</div>
                        <span className="counter-number">326</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Panel Example1 */}
            <div className="col-lg-4 col-md-6" style={{ height: 470 }}>
              <div className="widget widget-shadow">
                <div className="widget-header cover overlay" style={{ height: 'calc(100% - 100px)' }}>
                  <img className="cover-image"
                       src="http://getbootstrapadmin.com/remark/global/photos/view-2-960x640.jpg" alt="..."
                       style={{ height: '100%' }}/>
                  <div className="overlay-panel overlay-background overlay-top">
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="font-size-20 white">Mary Adams</div>
                        <div className="font-size-14 grey-400">Designer</div>
                      </div>
                      <div className="col-xs-6 text-right">
                        <div className="avatar">
                          <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="widget-footer text-center bg-white padding-horizontal-30 padding-vertical-20 height-100">
                  <div className="row no-space">
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number">6809</span>
                        <div className="counter-label">Followers</div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number">569</span>
                        <div className="counter-label">Following</div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number">357</span>
                        <div className="counter-label">Tweets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ height: 470 }}>
              <div className="widget widget-shadow">
                <div className="widget-header cover overlay">
                  <div className="cover-background height-150"
                       style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/focus-4-960x480.jpg")' }}/>
                </div>
                <div className="widget-body padding-horizontal-30 padding-vertical-20"
                     style={{ height: 'calc(100% - 250px)' }}>
                  <div style={{ position: 'relative', paddingLeft: 110 }}>
                    <a className="avatar avatar-100 bg-white img-bordered" href="javascript:void(0)"
                       style={{ position: 'absolute', top: '-50px', left: 0 }}>
                      <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt/>
                    </a>
                    <div className="margin-bottom-20">
                      <div className="font-size-20">Caleb Richards</div>
                      <div className="font-size-14">Designer</div>
                    </div>
                  </div>
                  <p>
                    Reiciendis iactant eligendi. Vestrae referenda mundus asperum physico miserum viderer
                    potiendi, feci dissentiunt ardore, audaces.
                  </p>
                </div>
                <div className="widget-footer text-center bg-blue-grey-400 padding-30 height-100">
                  <div className="row no-space">
                    <div className="col-xs-6">
                      <div className="counter counter-inverse">
                        <span className="counter-number">7896</span>
                        <div className="counter-label inline-block margin-left-5">Followers</div>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="counter counter-inverse">
                        <span className="counter-number">621</span>
                        <div className="counter-label inline-block margin-left-5">Following</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ height: 269 }}>
              <div className="widget widget-shadow">
                <div className="widget-content padding-20 bg-green-500 white height-full">
                  <a className="avatar pull-left margin-right-20" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/15.jpg" alt/>
                  </a>
                  <div style={{ overflow: 'hidden' }}>
                    <small className="pull-right grey-200">Yeserday, 13:48</small>
                    <div className="font-size-18">Robin Ahrens</div>
                    <div className="grey-200 font-size-14 margin-bottom-10">Web Designer</div>
                    <blockquote className="cover-quote font-size-16 white">Oportet magnopere optio ignavia tribuat
                      derigatur, idem, vituperatum.
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ height: 269 }}>
              <div className="widget widget-shadow">
                <div className="widget-content white bg-twitter padding-20 height-full">
                  <h3 className="white margin-top-0">Astris fere mediocris evertunt deterruisset impetu, fabulae
                    praetorem.</h3>
                  <small>21 May, 2016 via mobile</small>
                  <div className="margin-top-30">
                    <i className="icon bd-twitter font-size-26"/>
                    <ul className="list-inline pull-right margin-top-15">
                      <li>
                        <i className="icon wb-heart"/> 598
                      </li>
                      <li>
                        <i className="icon wb-thumb-up"/> 96
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ height: 269 }}>
              <div className="widget widget-shadow">
                <div className="widget-content white bg-facebook padding-20 height-full">
                  <h3 className="white margin-top-0">Pertinerent iucunditatem animal dixit ipsos, probabo proprius
                    universas.</h3>
                  <small>21 May, 2016 via mobile</small>
                  <div className="margin-top-30">
                    <i className="icon bd-facebook font-size-26"/>
                    <ul className="list-inline pull-right margin-top-15">
                      <li>
                        <i className="icon wb-heart"/> 1256
                      </li>
                      <li>
                        <i className="icon wb-star"/> 379
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ height: 190 }}>
              <div className="widget widget-shadow">
                <div className="widget-header bg-green-600 padding-30 white">
                  <a className="avatar avatar-100 img-bordered bg-white pull-left margin-right-20"
                     href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/11.jpg" alt/>
                  </a>
                  <div className="vertical-align height-100 text-truncate">
                    <div className="vertical-align-middle">
                      <div className="font-size-20 margin-bottom-5 text-truncate">Gwendolyn Wheeler</div>
                      <div className="font-size-14 text-truncate">Adminnistrator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ height: 190 }}>
              <div className="widget widget-shadow">
                <div className="widget-header bg-blue-600 padding-30 white text-center">
                  <a className="avatar avatar-100 img-bordered bg-white" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/12.jpg" alt/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ height: 190 }}>
              <div className="widget widget-shadow">
                <div className="widget-header padding-30 bg-white">
                  <a className="avatar avatar-100 pull-left margin-right-20" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/13.jpg" alt/>
                  </a>
                  <div className="vertical-align text-right height-100 text-truncate">
                    <div className="vertical-align-middle">
                      <div className="font-size-20 margin-bottom-5 blue-600 text-truncate">Sarah Graves</div>
                      <div className="font-size-14 text-truncate">Web Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ height: 190 }}>
              <div className="widget widget-shadow">
                <div className="widget-header padding-30 bg-blue-600 white">
                  <a className="avatar avatar-100 img-bordered bg-white pull-right" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/14.jpg" alt/>
                  </a>
                  <div className="vertical-align height-100 text-truncate">
                    <div className="vertical-align-middle">
                      <div className="font-size-20 margin-bottom-5 text-truncate">Andrew Hoffman</div>
                      <div className="font-size-14 text-truncate">Web Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-plugin="masonry" style={{ position: 'relative', height: 1342 }}>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 0, top: 0 }}>
              <div className="widget widget-shadow">
                <div className="widget-header bg-blue-600 text-center padding-30 padding-bottom-15">
                  <div className="font-size-20 white">June Lane</div>
                  <div className="grey-300 font-size-14 margin-bottom-20">Web Designer</div>
                  <a className="avatar avatar-100 img-bordered margin-bottom-10 bg-white" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt/>
                  </a>
                </div>
                <div className="widget-footer padding-horizontal-30 padding-vertical-20 text-center">
                  <div className="row no-space">
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number blue-600">102</span>
                        <div className="counter-label">Projects</div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number blue-600">83</span>
                        <div className="counter-label">Clients</div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number blue-600">13.5K</span>
                        <div className="counter-label">Followers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 695, top: 0 }}>
              <div className="widget">
                <div className="widget-header white bg-cyan-600 padding-30 clearfix">
                  <a className="avatar avatar-100 pull-left margin-right-20" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt/>
                  </a>
                  <div className="pull-left">
                    <div className="font-size-20 margin-bottom-15">Robin Ahrens</div>
                    <p className="margin-bottom-5 text-nowrap"><i className="icon wb-map margin-right-10"
                                                                  aria-hidden="true"/>
                      <span className="text-break">Mountain View,CA 94043, United States</span>
                    </p>
                    <p className="margin-bottom-5 text-nowrap"><i className="icon wb-envelope margin-right-10"
                                                                  aria-hidden="true"/>
                      <span className="text-break">amazingSurge@yahoo.com</span>
                    </p>
                    <p className="margin-bottom-5 text-nowrap"><i className="icon bd-twitter margin-right-10"
                                                                  aria-hidden="true"/>
                      <span className="text-break">Kolage</span>
                    </p>
                  </div>
                </div>
                <div className="widget-content">
                  <div className="row no-space padding-vertical-20 padding-horizontal-30 text-center">
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number cyan-600">102</span>
                        <div className="counter-label">Projects</div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number cyan-600">125</span>
                        <div className="counter-label">Clients</div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter">
                        <span className="counter-number cyan-600">10.8K</span>
                        <div className="counter-label">Followers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 695, top: 319 }}>
              <div className="widget widget-shadow avatar-group">
                <div className="widget-header text-center padding-30">
                  <ul className="list-unstyled list-inline">
                    <li>
                      <a className="avatar avatar-lg margin-5" href="javascript:void(0)">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/7.jpg" alt/>
                      </a>
                    </li>
                    <li>
                      <a className="avatar avatar-lg margin-5" href="javascript:void(0)">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/8.jpg" alt/>
                      </a>
                    </li>
                    <li>
                      <a className="avatar avatar-lg margin-5" href="javascript:void(0)">
                        <img src="http://getbootstrapadmin.com/remark/global/portraits/9.jpg" alt/>
                      </a>
                    </li>
                  </ul>
                  <div className="font-size-18 blue-600">Amazing Surge</div>
                  <div className="font-size-14">Design</div>
                </div>
                <div
                  className="widget-footer bg-blue-grey-400 white text-center padding-vertical-20 padding-horizontal-30">
                  <div className="row no-space ">
                    <div className="col-xs-4">
                      <div className="counter counter-inverse">
                        <span className="counter-icon"><i className="icon wb-eye margin-right-15"
                                                          aria-hidden="true"/></span>
                        <span className="counter-number">102</span>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter counter-inverse">
                        <span className="counter-icon"><i className="icon wb-heart margin-right-15" aria-hidden="true"/></span>
                        <span className="counter-number">8</span>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="counter counter-inverse">
                        <span className="counter-icon"><i className="icon wb-user margin-right-15" aria-hidden="true"/></span>
                        <span className="counter-number">12.6K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 0, top: 351 }}>
              <div className="widget widget-shadow background-bottom">
                <div className="widget-header cover overlay">
                  <div className="cover-background height-250"
                       style={{ backgroundImage: 'url(http://getbootstrapadmin.com/remark/global/photos/object-5-960x480.jpg)' }}/>
                  <div className="overlay-panel overlay-background overlay-bottom">
                    <div className="row no-space">
                      <div className="col-xs-6">
                        <a className="avatar avatar-lg bg-white pull-left margin-right-20 img-bordered"
                           href="javascript:void(0)">
                          <img src="http://getbootstrapadmin.com/remark/global/portraits/10.jpg" alt/>
                        </a>
                        <div>
                          <div className="font-size-20">William Dalebout</div>
                          <div className="font-size-14">CEO</div>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="row no-space text-center">
                          <div className="col-xs-4">
                            <div className="counter counter-inverse">
                              <div className="counter-label">Followers</div>
                              <span className="counter-number">6584</span>
                            </div>
                          </div>
                          <div className="col-xs-4">
                            <div className="counter counter-inverse">
                              <div className="counter-label">Following</div>
                              <span className="counter-number">2046</span>
                            </div>
                          </div>
                          <div className="col-xs-4">
                            <div className="counter counter-inverse">
                              <div className="counter-label">Tweets</div>
                              <span className="counter-number">325</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 695, top: 601 }}>
              <div className="widget widget-shadow text-center">
                <div className="widget-header cover overlay">
                  <div className="cover-background"
                       style={{ backgroundImage: 'url(http://getbootstrapadmin.com/remark/global/photos/view-5-960x640.jpg)' }}>
                    <div className="vertical-align padding-horizontal-0">
                      <div className="vertical-align-bottom width-full">
                        <a className="avatar avatar-100 img-bordered bg-white margin-top-20" href="javascript:void(0)">
                          <img src="http://getbootstrapadmin.com/remark/global/portraits/17.jpg" alt/>
                        </a>
                        <h3 className="white">Herman Beck</h3>
                        <p className="white"><i className="icon wb-map margin-right-10" aria-hidden="true"/>United
                          States</p>
                        <button type="button" className="btn btn-primary margin-bottom-20">Follow</button>
                        <div className="row no-space overlay-background">
                          <div className="col-xs-4">
                            <div className="counter counter-inverse">
                              <span className="counter-number">13.2K</span>
                              <div className="counter-label">Followers</div>
                            </div>
                          </div>
                          <div className="col-xs-4">
                            <div className="counter counter-inverse">
                              <span className="counter-number">246</span>
                              <div className="counter-label">Following</div>
                            </div>
                          </div>
                          <div className="col-xs-4">
                            <div className="counter counter-inverse">
                              <span className="counter-number">32</span>
                              <div className="counter-label">Tweets</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 0, top: 631 }}>
              <div className="widget widget-shadow">
                <div className="widget-header bg-blue-600 white padding-15 clearfix">
                  <a className="avatar avatar-lg pull-left margin-right-20" href="javascript:void(0)">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/16.jpg" alt/>
                  </a>
                  <div className="font-size-18">Robin Ahrens</div>
                  <div className="grey-300 font-size-14">Web Designer</div>
                </div>
                <div className="widget-content">
                  <ul className="list-group list-group-bordered">
                    <li className="list-group-item">
                      <span className="badge badge-success">6</span>
                      <i className="icon wb-inbox" aria-hidden="true" draggable="true"/> Cras justo odio
                    </li>
                    <li className="list-group-item">
                      <span className="badge badge-info">2</span>
                      <i className="icon wb-user" aria-hidden="true" draggable="true"/> Dapibus ac facilisis in
                    </li>
                    <li className="list-group-item">
                      <i className="icon wb-bell" aria-hidden="true" draggable="true"/> Morbi leo risus
                    </li>
                    <li className="list-group-item">
                      <span className="badge badge-info">10</span>
                      <i className="icon wb-info-circle" aria-hidden="true" draggable="true"/> Porta ac consectetur ac
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 0, top: 914 }}>
              <div className="widget widget-shadow">
                <div className="widget-header cover">
                  <div className="cover-background padding-30"
                       style={{ backgroundImage: 'url("http://getbootstrapadmin.com/remark/global/photos/focus-1-960x640.jpg")' }}>
                    <blockquote className="cover-quote white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer
                      nec odio.
                    </blockquote>
                  </div>
                </div>
                <div className="widget-body">
                  <div className="avatar avatar-sm pull-left margin-right-10 margin-top-5">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/3.jpg" alt/>
                  </div>
                  <div className="info margin-bottom-25">
                    <div className="blue-grey-700 text-uppercase">John Doe</div>
                    <div className="blue-grey-400 text-capitalize">Design</div>
                  </div>
                  <p className="margin-bottom-40">Rudem falso dicitis, curis depravatum affecti stoicos rerum.</p>
                  <div className="text-right">
                    <a className="text-action" href="javascript:void(0)">
                      <i className="icon wb-heart"/>
                      <span>23</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 masonry-item" style={{ position: 'absolute', left: 695, top: 954 }}>
              <div className="widget widget-shadow">
                <div
                  className="widget-header height-150 bg-blue-600 vertical-align padding-vertical-20 padding-horizontal-25">
                  <blockquote className="cover-quote vertical-align-middle white font-size-20">Corporis dicere
                    disputatione laborat quamque.
                  </blockquote>
                </div>
                <div className="widget-body padding-top-0" style={{ marginTop: '-30px' }}>
                  <div className="avatar avatar-lg img-bordered bg-white margin-bottom-10">
                    <img src="http://getbootstrapadmin.com/remark/global/portraits/13.jpg" alt/>
                  </div>
                  <div className="info margin-bottom-25">
                    <div className="blue-grey-700">Sarah Graves</div>
                    <div className="blue-grey-400">Developer</div>
                  </div>
                  <p className="margin-bottom-35 blue-grey-500">Menandri nixam arguerent quanti fecerit laudem vidisse
                    elegantis.
                  </p>
                  <div className="text-right">
                    <a className="text-action" href="javascript:void(0)">
                      <i className="icon wb-heart"/>
                      <span>16</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SocialExample;
