import React from 'react';

class StatisticsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Statistics Widgets</h1>
          <ol className="breadcrumb">
            <li><a href="../index.html">Home</a></li>
            <li><a href="javascript:void(0)">Widgets</a></li>
            <li className="active">Statistics</li>
          </ol>
          <div className="page-header-actions">
            <button type="button" className="btn btn-sm btn-outline btn-default btn-round">
              <span className="text hidden-xs">Settings</span>
              <i className="icon wb-chevron-right" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="page-content container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-content padding-25 bg-white">
                      <div className="counter counter-lg">
                        <span className="counter-number">60</span>
                        <div className="counter-label text-uppercase">counters</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-content padding-25 bg-white">
                      <div className="counter counter-lg">
                        <div className="counter-number-group">
                          <span className="counter-number-related">-</span>
                          <span className="counter-number">120</span>
                        </div>
                        <div className="counter-label text-uppercase">points</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-content padding-25 bg-blue-600">
                      <div className="counter counter-lg counter-inverse">
                        <div className="counter-label text-uppercase">score</div>
                        <span className="counter-number">220</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-content padding-25 bg-purple-600">
                      <div className="counter counter-lg counter-inverse">
                        <div className="counter-label text-uppercase">earn</div>
                        <div className="counter-number-group">
                          <span className="counter-number-related">-</span>
                          <span className="counter-number">90</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* Widget */}
              <div className="widget" style={{ overflow: 'hidden' }}>
                <div className="widget-content">
                  <div className="row no-space">
                    <div className="col-sm-6">
                      <div className="counter counter-md vertical-align bg-white height-300">
                        <div className="counter-icon padding-30 green-600"
                             style={{ position: 'absolute', top: 0, left: 0 }}>
                          <i className="icon wb-stats-bars" aria-hidden="true"/>
                        </div>
                        <div className="counter-number-group font-size-30 vertical-align-middle">
                          <span className="counter-icon green-600 margin-right-10"><i className="wb-graph-up"/></span>
                          <span className="counter-number">9</span>
                          <span className="counter-number-related">%</span>
                          <div className="font-size-20 margin-top-3">More sales</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="vertical-align text-center bg-red-700 white padding-30 height-300">
                        <div className="vertical-align-middle font-size-40">
                          <p>AS</p>
                          <p>Tshirt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="clearfix visible-lg-block"/>
            <div className="col-lg-6 col-md-12">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-white">
                  <div className="row no-space">
                    <div className="col-sm-6">
                      <div className="counter counter-lg text-left padding-left-20">
                        <span className="counter-number">286</span>
                        <div className="counter-label text-uppercase">Online Players</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter counter-lg text-left padding-left-20">
                        <span className="counter-number">286</span>
                        <div className="counter-label text-uppercase">Online Players</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-white">
                  <div className="counter counter-lg">
                    <div className="counter-label text-uppercase">bounce rate</div>
                    <div className="counter-number-group">
                      <span className="counter-icon margin-right-10 green-600">
                        <i className="wb-stats-bars"/>
                      </span>
                      <span className="counter-number">2.8</span>
                      <span className="counter-number-related">%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-white">
                  <div className="counter counter-lg">
                    <div className="counter-label text-uppercase">bounce rate</div>
                    <div className="counter-number-group">
                      <span className="counter-number">4.5</span>
                      <span className="counter-number-related">%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="clearfix visible-lg-block"/>
            <div className="col-lg-6 col-md-12">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content">
                  <div className="row no-space">
                    <div className="col-sm-4">
                      <div className="counter counter-lg counter-inverse bg-blue-600 vertical-align height-150">
                        <div className="vertical-align-middle">
                          <div className="counter-icon margin-bottom-5"><i className="icon wb-image"
                                                                           aria-hidden="true"/></div>
                          <span className="counter-number">1,286</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="counter counter-lg counter-inverse bg-red-600 vertical-align height-150">
                        <div className="vertical-align-middle">
                          <div className="counter-icon margin-bottom-5"><i className="icon wb-video"
                                                                           aria-hidden="true"/></div>
                          <span className="counter-number">620</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="counter counter-lg counter-inverse bg-purple-600 vertical-align height-150">
                        <div className="vertical-align-middle">
                          <div className="counter-icon margin-bottom-5"><i className="icon wb-envelope"
                                                                           aria-hidden="true"/></div>
                          <span className="counter-number">2,860</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-20 bg-white">
                  <div className="counter counter-lg">
                    <div className="counter-label text-uppercase font-size-16">we have</div>
                    <div className="counter-number-group">
                      <span className="counter-number">300</span>
                      <span className="counter-number-related">+</span>
                    </div>
                    <div className="counter-label text-uppercase font-size-16">followers</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-20 bg-blue-600 white">
                  <div className="counter counter-lg counter-inverse">
                    <div className="counter-label text-uppercase font-size-16">we have</div>
                    <div className="counter-number-group">
                      <span className="counter-number">365</span>
                      <span className="counter-icon margin-left-10"><i className="icon wb-image"
                                                                       aria-hidden="true"/></span>
                    </div>
                    <div className="counter-label text-uppercase font-size-16">pictures</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="clearfix visible-lg-block"/>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-6">
                  {/* Widget */}
                  <div className="widget">
                    <div className="widget-content padding-35 bg-white clearfix">
                      <div className="pull-left white">
                        <i className="icon icon-circle icon-2x wb-clipboard bg-red-600" aria-hidden="true"/>
                      </div>
                      <div className="counter counter-md counter text-right pull-right">
                        <div className="counter-number-group">
                          <span className="counter-number">25</span>
                          <span className="counter-number-related text-capitalize">projects</span>
                        </div>
                        <div className="counter-label text-capitalize font-size-16">in design</div>
                      </div>
                    </div>
                  </div>
                  {/* End Widget */}
                </div>
                <div className="col-md-6">
                  {/* Widget */}
                  <div className="widget">
                    <div className="widget-content padding-35 bg-white clearfix">
                      <div className="counter counter-md pull-left text-left">
                        <div className="counter-number-group">
                          <span className="counter-number">42</span>
                          <span className="counter-number-related text-capitalize">people</span>
                        </div>
                        <div className="counter-label text-capitalize font-size-16">in room</div>
                      </div>
                      <div className="pull-right white">
                        <i className="icon icon-circle icon-2x wb-users bg-blue-600" aria-hidden="true"/>
                      </div>
                    </div>
                  </div>
                  {/* End Widget */}
                </div>
                <div className="col-md-6">
                  {/* Widget */}
                  <div className="widget">
                    <div className="widget-content padding-30 bg-white">
                      <div className="counter counter-md text-left">
                        <div className="counter-label text-uppercase margin-bottom-5">New Visitors</div>
                        <div className="counter-number-group margin-bottom-10">
                          <span className="counter-number">12,657</span>
                        </div>
                        <div className="counter-label">
                          <div className="progress progress-xs margin-bottom-10">
                            <div className="progress-bar progress-bar-info bg-blue-600" aria-valuenow="70.3"
                                 aria-valuemin={0} aria-valuemax={100} style={{ width: '70.3%' }} role="progressbar">
                              <span className="sr-only">70.3%</span>
                            </div>
                          </div>
                          <div className="counter counter-sm text-left">
                            <div className="counter-number-group">
                              <span className="counter-icon blue-600 margin-right-5"><i className="wb-graph-up"/></span>
                              <span className="counter-number">38%</span>
                              <span className="counter-number-related">more than last month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Widget */}
                </div>
                <div className="col-md-6">
                  {/* Widget */}
                  <div className="widget">
                    <div className="widget-content padding-30 bg-white">
                      <div className="counter counter-md text-left">
                        <div className="counter-label text-uppercase margin-bottom-5">New Orders</div>
                        <div className="counter-number-group margin-bottom-10">
                          <span className="counter-number">2,381</span>
                        </div>
                        <div className="counter-label">
                          <div className="progress progress-xs margin-bottom-5">
                            <div className="progress-bar progress-bar-info bg-red-600" aria-valuenow="20.3"
                                 aria-valuemin={0} aria-valuemax={100} style={{ width: '20.3%' }} role="progressbar">
                              <span className="sr-only">20.3%</span>
                            </div>
                          </div>
                          <div className="counter counter-sm text-left">
                            <div className="counter-number-group">
                              <span className="counter-icon red-600 margin-right-5"><i
                                className="wb-graph-down"/></span>
                              <span className="counter-number">14%</span>
                              <span className="counter-number-related">less than last month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Widget */}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-green-600 height-350">
                  <div className="counter counter-lg counter-inverse">
                    <div className="counter-label">
                      <div className="font-size-30">2016</div>
                      <div className="font-size-14">Total Expenses</div>
                    </div>
                    <div className="counter-number-group text-center"
                         style={{ width: '100%', position: 'absolute', bottom: 30, left: 0 }}>
                      <span className="counter-number">356</span>
                      <span className="counter-number-related font-size-30">$</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-lg-2 col-sm-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-orange-600 text-center vertical-align height-350">
                  <div className="counter counter-lg counter-inverse vertical-align-middle">
                    <span className="counter-number">7.3</span>
                    <div className="counter-label text-capitalize">IMDB Rating</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="clearfix visible-lg-block"/>
            <div className="col-sm-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-blue-600">
                  <div className="widget-watermark darker font-size-60 margin-15"><i className="icon wb-clipboard"
                                                                                     aria-hidden="true"/></div>
                  <div className="counter counter-md counter-inverse text-left">
                    <div className="counter-number-group">
                      <span className="counter-number">25</span>
                      <span className="counter-number-related text-capitalize">projects</span>
                    </div>
                    <div className="counter-label text-capitalize">in design</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-sm-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-red-600">
                  <div className="widget-watermark darker font-size-60 margin-15"><i className="icon wb-users"
                                                                                     aria-hidden="true"/></div>
                  <div className="counter counter-md counter-inverse text-left">
                    <div className="counter-number-group">
                      <span className="counter-number">42</span>
                      <span className="counter-number-related text-capitalize">pepele</span>
                    </div>
                    <div className="counter-label text-capitalize">in room</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-sm-6">
              {/* Widget */}
              <div className="widget">
                <div className="widget-content padding-30 bg-green-600">
                  <div className="widget-watermark darker font-size-60 margin-15"><i className="icon wb-musical"
                                                                                     aria-hidden="true"/></div>
                  <div className="counter counter-md counter-inverse text-left">
                    <div className="counter-number-group">
                      <span className="counter-number">661</span>
                      <span className="counter-number-related text-capitalize">songs</span>
                    </div>
                    <div className="counter-label text-capitalize">in album</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-sm-6">
              {/* Widget  */}
              <div className="widget">
                <div className="widget-content padding-30 bg-purple-600">
                  <div className="widget-watermark lighter font-size-60 margin-15"><i className="icon wb-image"
                                                                                      aria-hidden="true"/></div>
                  <div className="counter counter-md counter-inverse text-left">
                    <div className="counter-number-wrap font-size-30">
                      <span className="counter-number">1025</span>
                      <span className="counter-number-related text-capitalize">photos</span>
                    </div>
                    <div className="counter-label text-capitalize">in family</div>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default StatisticsExample;
