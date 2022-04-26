import React from 'react';

class ProgressBarsExample extends React.Component {
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
          <h1 className="page-title">Progress Bars</h1>
          <div className="page-header-actions">
            <a className="btn btn-sm btn-inverse btn-round" href="https://github.com/amazingSurge/jquery-asProgress"
               target="_blank">
              <i className="icon wb-link" aria-hidden="true"/>
              <span className="hidden-sm-down">Official Website</span>
            </a>
          </div>
        </div>
        <div className="page-content">
          {/* Panel */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Progress</h3>
            </div>
            <div className="panel-body container-fluid">
              {/* Example Styles */}
              <div className="example-wrap">
                <h4 className="example-title">Styles</h4>
                <p>Progress bar is a graphical control element used to visualize the progression
                  of an extended computer operation, such as a download, file transfer,
                  or professional skill and work task. The graphic is accompanied by
                  a textual representation of the progress in a percent format.</p>
                <div className="row row-lg">
                  <div className="col-md-4">
                    <div className="example-wrap">
                      <div className="example">
                        <h5>Basic Progress</h5>
                        <div className="progress progress-xs">
                          <div className="progress-bar" style={{ width: '80%' }} role="progressbar">
                            <span className="sr-only">80% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="example-wrap">
                      <div className="example">
                        <h5>With Label</h5>
                        <div className="progress progress-lg">
                          <div className="progress-bar progress-bar-danger" style={{ width: '60%' }}
                               role="progressbar">60%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="example-wrap">
                      <div className="example">
                        <h5>Striped</h5>
                        <div className="progress">
                          <div className="progress-bar progress-bar-info progress-bar-striped" aria-valuenow={80}
                               aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} role="progressbar">
                            <span className="sr-only">80% Complete (success)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-lg">
                  <div className="col-md-4">
                    <div className="example-wrap">
                      <div className="example">
                        <h5>Indicating</h5>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-warning progress-bar-indicating active"
                               style={{ width: '80%' }} role="progressbar">
                            <span className="sr-only">80% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="example-wrap">
                      <div className="example">
                        <h5>Animated</h5>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped active" aria-valuenow={90} aria-valuemin={0}
                               aria-valuemax={100} style={{ width: '90%' }} role="progressbar">
                            <span className="sr-only">90% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="example-wrap">
                      <div className="example">
                        <h5>Stacked</h5>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-success" style={{ width: '35%' }}
                               role="progressbar">
                            <span className="sr-only">35% Complete (success)</span>
                          </div>
                          <div className="progress-bar progress-bar-warning progress-bar-striped"
                               style={{ width: '20%' }} role="progressbar">
                            <span className="sr-only">20% Complete (warning)</span>
                          </div>
                          <div className="progress-bar progress-bar-danger" style={{ width: '10%' }} role="progressbar">
                            <span className="sr-only">10% Complete (danger)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Style */}
              <div className="row row-lg">
                <div className="col-md-4">
                  {/* Example Color */}
                  <div className="example-wrap">
                    <h4 className="example-title">Color</h4>
                    <p>You can also apply any colour suited according to the nature of the
                      task.</p>
                    <div className="example">
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-default" style={{ width: '15%' }} role="progressbar">
                          <span className="sr-only">15% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-success" style={{ width: '30%' }} role="progressbar">
                          <span className="sr-only">30% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-info" style={{ width: '45%' }} role="progressbar">
                          <span className="sr-only">45% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-warning" style={{ width: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-danger" style={{ width: '75%' }} role="progressbar">
                          <span className="sr-only">75% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-dark" style={{ width: '90%' }} role="progressbar">
                          <span className="sr-only">90% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Color */}
                </div>
                <div className="col-md-4">
                  {/* Example Size */}
                  <div className="example-wrap">
                    <h4 className="example-title">Bar Size</h4>
                    <p>You can also use a thinner version of the default progress by simple
                      changing the classes.</p>
                    <div className="example">
                      <div className="progress progress-xs">
                        <div className="progress-bar" style={{ width: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-sm">
                        <div className="progress-bar" style={{ width: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-lg">
                        <div className="progress-bar" style={{ width: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Size */}
                </div>
                <div className="col-md-4">
                  {/* Example Radius */}
                  <div className="example-wrap">
                    <h4 className="example-title">Radius</h4>
                    <p>You can also use a radius style of the default progress by simple
                      changing the classes.</p>
                    <div className="example">
                      <div className="progress progress-square">
                        <div className="progress-bar progress-bar-primary" style={{ width: '50%' }} role="progressbar">
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" style={{ width: '50%' }} role="progressbar">
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-circle">
                        <div className="progress-bar progress-bar-primary" style={{ width: '50%' }} role="progressbar">
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Radius */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-md-4">
                  {/* Example Vertical */}
                  <div className="example-wrap">
                    <h4 className="example-title">Vertical Color</h4>
                    <div className="example" style={{ maxHeight: 250, overflow: 'hidden' }}>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-default" style={{ height: '15%' }} role="progressbar">
                          <span className="sr-only">15% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-success" style={{ height: '30%' }} role="progressbar">
                          <span className="sr-only">30% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-info" style={{ height: '45%' }} role="progressbar">
                          <span className="sr-only">45% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-warning" style={{ height: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-danger" style={{ height: '75%' }} role="progressbar">
                          <span className="sr-only">75% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-xs progress-vertical margin-right-0">
                        <div className="progress-bar progress-bar-dark" style={{ height: '90%' }} role="progressbar">
                          <span className="sr-only">90% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Vertical Color */}
                </div>
                <div className="col-md-4">
                  {/* Example Vertical Size */}
                  <div className="example-wrap">
                    <h4 className="example-title">Vertical Bar Size</h4>
                    <div className="example" style={{ maxHeight: 250, overflow: 'hidden' }}>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar" style={{ height: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-sm progress-vertical">
                        <div className="progress-bar" style={{ height: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-vertical">
                        <div className="progress-bar" style={{ height: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-lg progress-vertical margin-right-0">
                        <div className="progress-bar" style={{ height: '60%' }} role="progressbar">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Vertical Size */}
                </div>
                <div className="col-md-4">
                  {/* Example Vertical Complex */}
                  <div className="example-wrap">
                    <h4 className="example-title">Vertical Complex Usage</h4>
                    <div className="example" style={{ maxHeight: 250, overflow: 'hidden' }}>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-success" style={{ height: '25%' }} role="progressbar">
                          <span className="sr-only">35% Complete (success)</span>
                        </div>
                        <div className="progress-bar progress-bar-warning progress-bar-striped"
                             style={{ height: '15%' }} role="progressbar">
                          <span className="sr-only">20% Complete (warning)</span>
                        </div>
                        <div className="progress-bar progress-bar-danger" style={{ height: '10%' }} role="progressbar">
                          <span className="sr-only">10% Complete (danger)</span>
                        </div>
                      </div>
                      <div className="progress progress-xs progress-vertical">
                        <div className="progress-bar progress-bar-warning progress-bar-indicating active"
                             style={{ height: '70%' }} role="progressbar">
                          <span className="sr-only">70% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-lg progress-vertical">
                        <div className="progress-bar progress-bar-danger" style={{ height: '80%' }}
                             role="progressbar">80%
                        </div>
                      </div>
                      <div className="progress progress-vertical">
                        <div className="progress-bar progress-bar-striped active" aria-valuenow={90} aria-valuemin={0}
                             aria-valuemax={100} style={{ height: '90%' }} role="progressbar">
                          <span className="sr-only">90% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-vertical margin-right-0">
                        <div className="progress-bar progress-bar-info progress-bar-striped" aria-valuenow={80}
                             aria-valuemin={0} aria-valuemax={100} style={{ height: '95%' }} role="progressbar">
                          <span className="sr-only">95% Complete (success)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Vertical Complex */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-md-12">
                  {/* Example Bars */}
                  <div className="example-wrap">
                    <h4 className="example-title">Skill Bars</h4>
                    <div className="row row-lg">
                      <div className="col-md-6">
                        <div className="example-wrap">
                          <p>A more recent development is the professional skill bars, which
                            is used in your professional situations where the extent
                            of the skill can not be determined in a way that could be
                            expressed as a percentage.This bar uses motion and title
                            text to show that progress is taking place.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example-wrap">
                          <h5>Photoshop
                            <span className="pull-xs-right">40%</span>
                          </h5>
                          <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-indicating active" style={{ width: '40%' }}
                                 role="progressbar"/>
                          </div>
                          <h5>Html
                            <span className="pull-xs-right">80%</span>
                          </h5>
                          <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-indicating active" style={{ width: '80%' }}
                                 role="progressbar"/>
                          </div>
                          <h5>Javascript
                            <span className="pull-xs-right">60%</span>
                          </h5>
                          <div className="progress progress-sm">
                            <div className="progress-bar progress-bar-indicating active" style={{ width: '60%' }}
                                 role="progressbar"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Bars */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-md-12">
                  {/* Example asProgress */}
                  <div className="example-wrap">
                    <h4 className="example-title">asProgress
                      <small><a className="example-plugin-link" href="https://github.com/amazingSurge/jquery-asProgress"
                                target="_blank">official website</a></small>
                    </h4>
                    <p>Progress bar use a linear function, such that the advancement of
                      a progress bar is directly proportional to the amount of work that
                      has been completed. </p>
                    <div className="row row-lg">
                      <div className="col-md-6">
                        <div className="example-wrap">
                          <h6 className="font-size-16 margin-top-0">Numbers</h6>
                          <div className="progress" data-goal={60} data-plugin="progress">
                            <div className="progress-bar" aria-valuemin={15} aria-valuemax={115} aria-valuenow={25}
                                 role="progressbar">
                              <span className="progress-label"/>
                            </div>
                          </div>
                          <h6 className="font-size-16">Percentage</h6>
                          <div className="progress" data-labeltype="percentage" data-goal={-40} data-plugin="progress">
                            <div className="progress-bar" aria-valuemin={-100} aria-valuemax={0} aria-valuenow={-80}
                                 role="progressbar">
                              <span className="progress-label"/>
                            </div>
                          </div>
                          <h6 className="font-size-16">Steps</h6>
                          <div className="progress" data-labeltype="steps" data-totalsteps={8} data-goal={80}
                               data-plugin="progress">
                            <div className="progress-bar" aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}
                                 aria-valuenow={60} role="progressbar">
                              <span className="progress-label"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example-wrap">
                          <div className="contextual-progress">
                            <div className="clearfix">
                              <div className="progress-title">Numbers</div>
                              <div className="progress-label">25%</div>
                            </div>
                            <div className="progress" data-goal={60} data-plugin="progress">
                              <div className="progress-bar" aria-valuemin={15} aria-valuemax={115} aria-valuenow={25}
                                   role="progressbar">
                                <span className="progress-label"/>
                              </div>
                            </div>
                          </div>
                          <div className="contextual-progress">
                            <div className="clearfix">
                              <div className="progress-title">Percentage</div>
                              <div className="progress-label">50%</div>
                            </div>
                            <div className="progress" data-labeltype="percentage" data-goal={-40}
                                 data-plugin="progress">
                              <div className="progress-bar" aria-valuemin={-100} aria-valuemax={0} aria-valuenow={-80}
                                   role="progressbar">
                                <span className="progress-label"/>
                              </div>
                            </div>
                          </div>
                          <div className="contextual-progress">
                            <div className="clearfix">
                              <div className="progress-title">Steps</div>
                              <div className="progress-label">50%</div>
                            </div>
                            <div className="progress" data-labeltype="steps" data-totalsteps={8} data-goal={80}
                                 data-plugin="progress">
                              <div className="progress-bar" aria-valuemin={0} aria-valuemax={100}
                                   style={{ width: '50%' }} aria-valuenow={60} role="progressbar">
                                <span className="progress-label"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs-center example example-buttons">
                      <button className="btn btn-outline btn-primary" id="exampleButtonStart" type="button">start
                      </button>
                      <button className="btn btn-outline btn-primary" id="exampleButtonStop" type="button">stop</button>
                      <button className="btn btn-outline btn-primary" id="exampleButtonGoto" type="button">go to value
                        50
                      </button>
                      <button className="btn btn-outline btn-primary" id="exampleButtonGotoPercentage" type="button">go
                        to 50%
                      </button>
                      <button className="btn btn-outline btn-primary" id="exampleButtonFinish" type="button">finish
                      </button>
                      <button className="btn btn-outline btn-primary" id="exampleButtonReset" type="button">reset
                      </button>
                      <button className="btn btn-outline btn-primary" id="exampleButtonRandom" type="button">random
                      </button>
                    </div>
                  </div>
                  {/* End Example asProgress */}
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

export default ProgressBarsExample;
