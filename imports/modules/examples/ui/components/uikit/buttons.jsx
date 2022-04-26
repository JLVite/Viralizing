import React from 'react';

class ButtonsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Basic UI</li>
          </ol>
          <h1 className="page-title">Buttons</h1>
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
        <div className="page-content">
          {/* Panel General Button */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">General Button</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-12">
                  {/* Example Default Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default Button</h4>
                    <p>Use any of the available button classes to quickly create a styled
                      button . We provide a variety of colors for you to express different
                      emotions.</p>
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-xl-2">
                        <div className="example">
                          <ul className="list-unstyled">
                            <li className="mb-20">
                              <button type="button" className="btn btn-block btn-default">Default</button>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-blue-grey-200"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Normal</p>
                                <span className="font-size-12">#e4eaec</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-blue-grey-300"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Hover</p>
                                <span className="font-size-12">#ccd5db</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-blue-grey-400"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">active</p>
                                <span className="font-size-12">#76838f</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-xl-2">
                        <div className="example">
                          <ul className="list-unstyled">
                            <li className="mb-20">
                              <button type="button" className="btn btn-block btn-primary">Primary</button>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-primary-600"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Normal</p>
                                <span className="font-size-12">#62a8ea</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-primary-500"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Hover</p>
                                <span className="font-size-12">#89bceb</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-primary-700"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">active</p>
                                <span className="font-size-12">#4e97d9</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-xl-2">
                        <div className="example">
                          <ul className="list-unstyled">
                            <li className="mb-20">
                              <button type="button" className="btn btn-block btn-success">Success</button>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-green-600"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Normal</p>
                                <span className="font-size-12">#46be8a</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-green-500"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Hover</p>
                                <span className="font-size-12">#5cd29d</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-green-700"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">active</p>
                                <span className="font-size-12">#36ab7a</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-xl-2">
                        <div className="example">
                          <ul className="list-unstyled">
                            <li className="mb-20">
                              <button type="button" className="btn btn-block btn-info">Info</button>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-cyan-600"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Normal</p>
                                <span className="font-size-12">#57c7d4</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-cyan-500"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Hover</p>
                                <span className="font-size-12">#77d6e1</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-cyan-700"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">active</p>
                                <span className="font-size-12">#47b8c6</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-xl-2">
                        <div className="example">
                          <ul className="list-unstyled">
                            <li className="mb-20">
                              <button type="button" className="btn btn-block btn-warning">Warning</button>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-orange-600"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Normal</p>
                                <span className="font-size-12">#f2a654</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-orange-500"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Hover</p>
                                <span className="font-size-12">#f4b066</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-orange-700"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">active</p>
                                <span className="font-size-12">#e79857</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-xl-2">
                        <div className="example">
                          <ul className="list-unstyled">
                            <li className="mb-20">
                              <button type="button" className="btn btn-block btn-danger">Danger</button>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-red-600"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Normal</p>
                                <span className="font-size-12">#f96868</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-red-500"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">Hover</p>
                                <span className="font-size-12">#fa7a7a</span>
                              </div>
                            </li>
                            <li className="mb-20">
                              <div className="float-left color-box bg-red-700"/>
                              <div className="ml-35">
                                <p className="font-size-14 grey-600 m-0">active</p>
                                <span className="font-size-12">#e9595b</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default Button */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Alternative Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Alternative Button</h4>
                    <p>Use a classes <code>.btn-outline</code> to quickly create a outline.</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-outline btn-default">Default</button>
                      <button type="button" className="btn btn-outline btn-primary">Primary</button>
                      <button type="button" className="btn btn-outline btn-success">Success</button>
                      <button type="button" className="btn btn-outline btn-info">Info</button>
                      <button type="button" className="btn btn-outline btn-warning">Warning</button>
                      <button type="button" className="btn btn-outline btn-danger">Danger</button>
                      <button type="button" className="btn btn-outline btn-dark">dark</button>
                    </div>
                  </div>
                  {/* End Example Alternative Button */}
                </div>
                <div className="col-lg-6">
                  {/* Example Rounded Button / Squard Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Rounded Button / Squard Button</h4>
                    <p>Round button and the square button can be used to distinguish th
                      different behavior or style.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="example example-buttons">
                          <div>
                            <button type="button" className="btn btn-round btn-outline btn-default btn-lg">Large
                            </button>
                          </div>
                          <div>
                            <button type="button" className="btn btn-round btn-outline btn-default">Default</button>
                          </div>
                          <div>
                            <button type="button" className="btn btn-round btn-outline btn-default btn-sm">Small
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-buttons">
                          <div>
                            <button type="button" className="btn btn-squared btn-outline btn-default btn-lg">Large
                            </button>
                          </div>
                          <div>
                            <button type="button" className="btn btn-squared btn-outline btn-default">Default</button>
                          </div>
                          <div>
                            <button type="button" className="btn btn-squared btn-outline btn-default btn-sm">Small
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Rounded Button / Squard Button */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Sizing</h4>
                    <p>Size might vary from smaller screen to a larger screen. We made
                      few sizes that are pixel perfect and resposive.
                      <br/> Fancy larger or smaller buttons? Add <code>.btn-lg</code>,
                      <code>.btn-sm</code>, or <code>.btn-xs</code> for additional
                      sizes.
                    </p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-outline btn-default btn-lg">Large Button</button>
                      <button type="button" className="btn btn-outline btn-default">Default Button</button>
                      <button type="button" className="btn btn-outline btn-default btn-sm">Small Button</button>
                      <button type="button" className="btn btn-outline btn-default btn-xs">Tiny Button</button>
                    </div>
                  </div>
                  {/* End Example Sizing */}
                </div>
                <div className="col-lg-6">
                  {/* Example Block Button With Icon */}
                  <div className="example-wrap">
                    <h4 className="example-title">Block Button With Icon</h4>
                    <p>Create block level buttons,with by adding add <code>.btn-block</code> .</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-default btn-outline btn-block"><i
                        className="icon wb-menu float-right" aria-hidden="true"/>Default
                      </button>
                      <button type="button" className="btn btn-primary btn-block btn-round"><i className="icon wb-menu"
                                                                                               aria-hidden="true"/>Primary
                      </button>
                    </div>
                  </div>
                  {/* End Example Block Button With Icon */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-6 col-xl-4">
                  {/* Example Button With Direction */}
                  <div className="example-wrap">
                    <h4 className="example-title">Button With Direction</h4>
                    <p>Create buttons with directions by adding add <code>.btn-up</code>,
                      <code>.btn-right</code>, <code>.btn-bottom</code> or <code>.btn-left</code> .</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-direction btn-up btn-primary">Up Button</button>
                      <button type="button" className="btn btn-direction btn-right btn-warning">Right Button</button>
                      <button type="button" className="btn btn-direction btn-bottom btn-success btn-outline">Down
                        Button
                      </button>
                      <button type="button" className="btn btn-direction btn-left btn-danger btn-outline">Left Button
                      </button>
                    </div>
                  </div>
                  {/* End Example Button With Direction */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Button Animation */}
                  <div className="example-wrap">
                    <h4 className="example-title">Button Animation</h4>
                    <p>A button can animate to show hidden content. Modern and subtle
                      styles &amp; effects for buttons.</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-animate btn-animate-side btn-success">
                        <span><i className="icon wb-download" aria-hidden="true"/>Side Animation</span>
                      </button>
                      <button type="button" className="btn btn-animate btn-animate-vertical btn-success">
                        <span><i className="icon wb-download" aria-hidden="true"/>Vertical
                          Animation
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* End Example Button Animation */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Floating Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Floating Button</h4>
                    <p>Floating action buttons are used for a special type of promoted
                      action. They are distinguished by a circled icon floating above
                      the UI and have special motion behaviors related to morphing,
                      launching, and the transferring anchor point.
                      <br/> Use the default class <code>.btn</code> with an additional class
                      <code>.btn-floating</code> .</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-floating btn-success"><i className="icon wb-pencil"
                                                                                        aria-hidden="true"/></button>
                      <button type="button" className="btn btn-floating btn-success btn-sm"><i
                        className="icon wb-pencil" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-floating btn-danger"><i className="icon wb-plus"
                                                                                       aria-hidden="true"/></button>
                      <button type="button" className="btn btn-floating btn-danger btn-sm"><i className="icon wb-plus"
                                                                                              aria-hidden="true"/>
                      </button>
                    </div>
                  </div>
                  {/* End Example Floating Button */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Flat And Raised Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Flat And Raised Button</h4>
                    <p>Raised buttons behave like a piece of material resting on another
                      sheet – they lift and color on press.
                      <br/> Flat buttons are printed on the material. They do not lift but
                      fill with color on press.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="example example-buttons">
                          <button type="button" className="btn btn-raised btn-primary btn-block">Normal</button>
                          <button type="button" className="btn btn-raised btn-primary btn-block active"
                                  style={{ background: '#89bceb', borderColor: '#89bceb' }}>Hover
                          </button>
                          <button type="button" className="btn btn-raised btn-primary btn-block active">Active</button>
                          <button type="button" className="btn btn-raised btn-primary btn-block disabled">Disabled
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="example example-buttons">
                          <button type="button" className="btn btn-flat btn-default btn-block">Normal</button>
                          <button type="button" className="btn btn-flat btn-default btn-block active"
                                  style={{ background: '#f8f9f9', borderColor: '#f8f9f9>' }}>Hover
                          </button>
                          <button type="button" className="btn btn-flat btn-default btn-block active">Active</button>
                          <button type="button" className="btn btn-flat btn-default btn-block disabled">Disabled
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Flat And Raised Button */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Pill Left Or Right */}
                  <div className="example-wrap">
                    <h4 className="example-title">Pill Left Or Right</h4>
                    <p>Create a button like pill
                      by <code>.btn-pill-left</code> or <code>.btn-pill-right</code> with <code>.btn-round</code>.</p>
                    <div className="example example-buttons">
                      <div>
                        <button type="button" className="btn btn-round btn-default btn-outline btn-pill-left">Pill
                          Left
                        </button>
                        <button type="button" className="btn btn-round btn-default btn-outline btn-pill-right">Pill
                          Right
                        </button>
                      </div>
                      <div>
                        <button type="button" className="btn btn-round btn-primary btn-pill-left">Pill Left</button>
                        <button type="button" className="btn btn-round btn-primary btn-pill-right">Pill Right</button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Pill Left Or Right */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Button With Icon */}
                  <div className="example-wrap">
                    <h4 className="example-title">Button With Icon</h4>
                    <p>Basic buttons are traditional buttons with borders and background
                      with an extra commponent like an icon. You can place it either
                      on the left or the right which ever you want with different color
                      opitons.</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-dark"><i className="icon wb-upload"
                                                                        aria-hidden="true"/> Upload
                      </button>
                      <button type="button" className="btn btn-warning"><i className="icon wb-thumb-up"
                                                                           aria-hidden="true"/> I like
                      </button>
                      <button type="button" className="btn btn-success"><i className="icon wb-check"
                                                                           aria-hidden="true"/> I agree
                      </button>
                      <button type="button" className="btn btn-outline btn-primary"><i className="icon wb-plus"
                                                                                       aria-hidden="true"/> More
                      </button>
                      <button type="button" className="btn btn-danger"><i className="icon wb-link"
                                                                          aria-hidden="true"/> Link
                      </button>
                      <button type="button" className="btn btn-info"><i className="icon wb-chat"
                                                                        aria-hidden="true"/> Comment
                      </button>
                    </div>
                  </div>
                  {/* End Example Button With Icon */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Icon Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Icon Button</h4>
                    <p>Icon only button.</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-icon btn-default"><i className="icon wb-map"
                                                                                    aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-grid-9"
                                                                                    aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-success"><i className="icon wb-bell"
                                                                                    aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-info"><i className="icon wb-calendar"
                                                                                 aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-warning btn-round"><i className="icon wb-time"
                                                                                              aria-hidden="true"/>
                      </button>
                      <button type="button" className="btn btn-icon btn-danger btn-round"><i className="icon wb-plugin"
                                                                                             aria-hidden="true"/>
                      </button>
                      <button type="button" className="btn btn-icon btn-dark btn-round"><i className="icon wb-pie-chart"
                                                                                           aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-default btn-outline"><i
                        className="icon wb-pencil" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-primary btn-outline"><i className="icon wb-eye"
                                                                                                aria-hidden="true"/>
                      </button>
                      <button type="button" className="btn btn-icon btn-success btn-outline"><i
                        className="icon wb-search" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-info btn-outline"><i className="icon wb-wrench"
                                                                                             aria-hidden="true"/>
                      </button>
                      <button type="button" className="btn btn-icon btn-warning btn-outline btn-round"><i
                        className="icon wb-musical" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-danger btn-outline btn-round"><i
                        className="icon wb-heart" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-dark btn-outline btn-round"><i
                        className="icon wb-refresh" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-pure btn-default icon wb-lock"/>
                      <button type="button" className="btn btn-pure btn-primary icon wb-thumb-up"/>
                      <button type="button" className="btn btn-pure btn-success icon wb-share"/>
                      <button type="button" className="btn btn-pure btn-info icon wb-random"/>
                      <button type="button" className="btn btn-pure btn-warning icon wb-star"/>
                      <button type="button" className="btn btn-pure btn-danger icon wb-print"/>
                      <button type="button" className="btn btn-pure btn-dark icon wb-flag"/>
                    </div>
                  </div>
                  {/* End Example Icon Button */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Icon Dropdown */}
                  <div className="example-wrap">
                    <h4 className="example-title">Icon Dropdown</h4>
                    <p>Icon used in the dropdown.</p>
                    <div className="example example-buttons">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary dropdown-toggle" id="exampleIconDropdown1"
                                data-toggle="dropdown" aria-expanded="false">
                          <i className="icon wb-grid-9" aria-hidden="true"/>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="exampleIconDropdown1" role="menu">
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                        </div>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-warning dropdown-toggle" id="exampleIconDropdown2"
                                data-toggle="dropdown" aria-expanded="false">
                          <i className="icon wb-heart" aria-hidden="true"/>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="exampleIconDropdown2" role="menu">
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                        </div>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-danger dropdown-toggle" id="exampleIconDropdown3"
                                data-toggle="dropdown" aria-expanded="false">
                          <i className="icon wb-calendar" aria-hidden="true"/>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="exampleIconDropdown3" role="menu">
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                        </div>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-dark dropdown-toggle" id="exampleIconDropdown4"
                                data-toggle="dropdown" aria-expanded="false">
                          <i className="icon wb-pie-chart" aria-hidden="true"/>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="exampleIconDropdown4" role="menu">
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                          <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Icon Dropdown */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Social Icon Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Social Icon Button</h4>
                    <p>Icon only button. But icon is social icon. </p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-icon social-facebook"><i className="icon bd-facebook"
                                                                                        aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-twitter"><i className="icon bd-twitter"
                                                                                       aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-linkedin"><i className="icon bd-linkedin"
                                                                                        aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-dribbble"><i className="icon bd-dribbble"
                                                                                        aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-instagram"><i className="icon bd-instagram"
                                                                                         aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-github"><i className="icon bd-github"
                                                                                      aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-skype"><i className="icon bd-skype"
                                                                                     aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-youtube"><i className="icon bd-youtube"
                                                                                       aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-evernote"><i className="icon bd-evernote"
                                                                                        aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon social-google-plus"><i
                        className="icon bd-google-plus" aria-hidden="true"/></button>
                    </div>
                  </div>
                  {/* End Example Social Icon Button */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Social In Labels */}
                  <div className="example-wrap m-lg-0">
                    <h4 className="example-title">Social In Labels</h4>
                    <p>It is often used at the top of a page or section. An social icon
                      must be with this variation.</p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-tagged social-facebook">
                        <span className="btn-tag"><i className="icon bd-facebook" aria-hidden="true"/></span>Facebook
                      </button>
                      <button type="button" className="btn btn-tagged social-twitter">
                        <span className="btn-tag"><i className="icon bd-twitter" aria-hidden="true"/></span>Twitter
                      </button>
                      <button type="button" className="btn btn-tagged social-google-plus">
                        <span className="btn-tag"><i className="icon bd-google-plus" aria-hidden="true"/></span>Google+
                      </button>
                      <button type="button" className="btn btn-tagged social-linkedin">
                        <span className="btn-tag"><i className="icon bd-linkedin" aria-hidden="true"/></span>Linkedin
                      </button>
                      <button type="button" className="btn btn-tagged social-flickr">
                        <span className="btn-tag"><i className="icon bd-flickr" aria-hidden="true"/></span>Flickr
                      </button>
                      <button type="button" className="btn btn-tagged social-tumblr">
                        <span className="btn-tag"><i className="icon bd-tumblr" aria-hidden="true"/></span>Tumblr
                      </button>
                    </div>
                  </div>
                  {/* End Example Social In Labels */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Social Button Sizes */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Social Button Sizes</h4>
                    <p>Different Sizes for you to use with icon button or icon only button.
                    </p>
                    <div className="example example-buttons">
                      <ul className="list-unstyled float-left">
                        <li>
                          <button type="button" className="btn btn-tagged btn-lg social-facebook">
                            <span className="btn-tag"><i className="icon bd-facebook" aria-hidden="true"/></span>Facebook
                          </button>
                        </li>
                        <li>
                          <button type="button" className="btn btn-tagged social-facebook">
                            <span className="btn-tag"><i className="icon bd-facebook" aria-hidden="true"/></span>Facebook
                          </button>
                        </li>
                        <li>
                          <button type="button" className="btn btn-tagged btn-sm social-facebook">
                            <span className="btn-tag"><i className="icon bd-facebook" aria-hidden="true"/></span>Facebook
                          </button>
                        </li>
                        <li>
                          <button type="button" className="btn btn-tagged btn-xs social-facebook">
                            <span className="btn-tag"><i className="icon bd-facebook" aria-hidden="true"/></span>Facebook
                          </button>
                        </li>
                      </ul>
                      <ul className="list-unstyled">
                        <li>
                          <button type="button" className="btn btn-icon btn-lg social-facebook"><i
                            className="icon bd-facebook" aria-hidden="true"/></button>
                        </li>
                        <li>
                          <button type="button" className="btn btn-icon social-facebook"><i className="icon bd-facebook"
                                                                                            aria-hidden="true"/>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="btn btn-icon btn-sm social-facebook"><i
                            className="icon bd-facebook" aria-hidden="true"/></button>
                        </li>
                        <li>
                          <button type="button" className="btn btn-icon btn-xs social-facebook"><i
                            className="icon bd-facebook" aria-hidden="true"/></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Example Social Button Sizes */}
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* Example Icon Block Button */}
                  <div className="example-wrap">
                    <h4 className="example-title">Icon Block Button</h4>
                    <p>Icon only block button. </p>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-icon btn-block btn-primary btn-outline"><i
                        className="icon wb-heart" aria-hidden="true"/></button>
                      <button type="button" className="btn btn-icon btn-block social-twitter"><i
                        className="icon bd-twitter" aria-hidden="true"/></button>
                    </div>
                  </div>
                  {/* End Example Icon Block Button */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel General Button */}
          {/* Panel Button Group */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Button Group</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-xl-4 col-lg-6">
                  {/* Example Basic Button Group */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic Button Group</h4>
                    <p>Grouped buttons give users access to frequently performed actions
                      of a focused task. Wrap a series of buttons with <code>.btn</code> in <code>.btn-group.</code></p>
                    <div className="example example-buttons">
                      <div className="btn-group" aria-label="Basic example" role="group">
                        <button type="button" className="btn btn-icon btn-pure btn-default"><i className="icon wb-play"
                                                                                               aria-hidden="true"/>
                        </button>
                        <button type="button" className="btn btn-icon btn-pure btn-primary"><i className="icon wb-pause"
                                                                                               aria-hidden="true"/>
                        </button>
                        <button type="button" className="btn btn-icon btn-pure btn-danger"><i className="icon wb-stop"
                                                                                              aria-hidden="true"/>
                        </button>
                      </div>
                      <div className="btn-group" aria-label="Basic example" role="group">
                        <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-play"
                                                                                      aria-hidden="true"/></button>
                        <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-pause"
                                                                                      aria-hidden="true"/></button>
                        <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-stop"
                                                                                      aria-hidden="true"/></button>
                      </div>
                      <div className="btn-group" aria-label="Basic example" role="group">
                        <button type="button" className="btn btn-outline btn-default"><i className="icon wb-pencil"
                                                                                         aria-hidden="true"/>Edit
                        </button>
                        <button type="button" className="btn btn-outline btn-default"><i className="icon wb-reply"
                                                                                         aria-hidden="true"/>Reply
                        </button>
                        <button type="button" className="btn btn-outline btn-default"><i className="icon wb-share"
                                                                                         aria-hidden="true"/>Share
                        </button>
                      </div>
                      <div className="btn-group" aria-label="Basic example" role="group">
                        <button type="button" className="btn btn-outline btn-default">Left</button>
                        <button type="button" className="btn btn-outline btn-default">Middle</button>
                        <button type="button" className="btn btn-outline btn-default">Right</button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Basic Button Group */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Vertical Button Group */}
                  <div className="example-wrap">
                    <h4 className="example-title">Vertical Button Group</h4>
                    <p>Order the buttons in a group for actions that are used regularly
                      or are significant.</p>
                    <div className="example example-buttons">
                      <div className="btn-group-vertical" aria-label="Vertical button group" role="group">
                        <button type="button" className="btn btn-outline btn-default"><i className="icon wb-flag"
                                                                                         aria-hidden="true"/></button>
                        <button type="button" className="btn btn-outline btn-default"><i className="icon wb-wrench"
                                                                                         aria-hidden="true"/></button>
                        <button type="button" className="btn btn-outline btn-default"><i className="icon wb-print"
                                                                                         aria-hidden="true"/></button>
                      </div>
                      <div className="btn-group-vertical" aria-label="Vertical button group" role="group">
                        <button type="button" className="btn btn-outline btn-default">1</button>
                        <button type="button" className="btn btn-outline btn-default">2</button>
                        <button type="button" className="btn btn-outline btn-default">3</button>
                      </div>
                      <div className="btn-group-vertical" aria-label="Vertical button group" role="group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Vertical Button Group */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Button Group Sizes */}
                  <div className="example-wrap">
                    <h4 className="example-title">Button Group Sizes</h4>
                    <p>Instead of applying button sizing classes to every button in a
                      group, just add <code>.btn-group-*</code> to each <code>.btn-group</code>,
                      including when nesting multiple groups.</p>
                    <div className="example example-buttons">
                      <div>
                        <div className="btn-group btn-group-lg" aria-label="Large button group" role="group">
                          <button type="button" className="btn btn-outline btn-default">Left</button>
                          <button type="button" className="btn btn-outline btn-default">Middle</button>
                          <button type="button" className="btn btn-outline btn-default">Right</button>
                        </div>
                      </div>
                      <div>
                        <div className="btn-group" aria-label="Default button group" role="group">
                          <button type="button" className="btn btn-outline btn-default">Left</button>
                          <button type="button" className="btn btn-outline btn-default">Middle</button>
                          <button type="button" className="btn btn-outline btn-default">Right</button>
                        </div>
                      </div>
                      <div>
                        <div className="btn-group btn-group-sm" aria-label="Small button group" role="group">
                          <button type="button" className="btn btn-outline btn-default">Left</button>
                          <button type="button" className="btn btn-outline btn-default">Middle</button>
                          <button type="button" className="btn btn-outline btn-default">Right</button>
                        </div>
                      </div>
                      <div>
                        <div className="btn-group btn-group-xs" aria-label="Extra-small button group" role="group">
                          <button type="button" className="btn btn-outline btn-default">Left</button>
                          <button type="button" className="btn btn-outline btn-default">Middle</button>
                          <button type="button" className="btn btn-outline btn-default">Right</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Button Group Sizes */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Button Toolbar */}
                  <div className="example-wrap">
                    <h4 className="example-title">Button Toolbar</h4>
                    <p>This group button is used to show the close relationship between
                      a number of buttons, and is usually used on edit page.</p>
                    <div className="example example-buttons">
                      <div className="btn-toolbar" aria-label="Toolbar with button groups" role="toolbar">
                        <div className="btn-group">
                          <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-bold"
                                                                                        aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-italic"
                                                                                        aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-underline"
                                                                                        aria-hidden="true"/></button>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-align-left"
                                                                                        aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-align-center"
                                                                                        aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-primary"><i className="icon wb-align-right"
                                                                                        aria-hidden="true"/></button>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn btn-icon btn-primary dropdown-toggle"
                                  data-toggle="dropdown" aria-expanded="false" aria-hidden="true">
                            <i className="icon wb-wrench" aria-hidden="true"/>
                          </button>
                          <div className="dropdown-menu" role="menu">
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                              <i className="icon wb-scissor" aria-hidden="true"/> Cut
                            </a>
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                              <i className="icon wb-copy" aria-hidden="true"/> Copy
                            </a>
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                              <i className="icon wb-rubber" aria-hidden="true"/> Eraser
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="btn-toolbar" aria-label="Toolbar with button groups" role="toolbar">
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-icon btn-default btn-outline"><i
                            className="icon wb-file" aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-default btn-outline"><i
                            className="icon wb-pencil" aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-default btn-outline"><i
                            className="icon wb-folder" aria-hidden="true"/></button>
                          <button type="button" className="btn btn-icon btn-default btn-outline"><i
                            className="icon wb-trash" aria-hidden="true"/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Button Toolbar */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Nesting Button Group */}
                  <div className="example-wrap">
                    <h4 className="example-title">Nesting Button Group</h4>
                    <p>Place a <code>.btn-group</code> within another <code>.btn-group</code> when you want dropdown
                      menus mixed with a series of buttons.</p>
                    <div className="example example-buttons">
                      <div className="btn-group" aria-label="Button group with nested dropdown" role="group">
                        <button type="button" className="btn btn-primary">1</button>
                        <button type="button" className="btn btn-primary">2</button>
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary dropdown-toggle" id="exampleGroupDrop1"
                                  data-toggle="dropdown" aria-expanded="false">
                            Dropdown
                          </button>
                          <div className="dropdown-menu" aria-labelledby="exampleGroupDrop1" role="menu">
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                          </div>
                        </div>
                      </div>
                      <div className="btn-group" aria-label="Button group with nested dropdown" role="group">
                        <button type="button" className="btn btn-outline btn-default">1</button>
                        <button type="button" className="btn btn-outline btn-default">2</button>
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-outline btn-default dropdown-toggle"
                                  id="exampleGroupDrop2" data-toggle="dropdown" aria-expanded="false">
                            Dropdown
                          </button>
                          <div className="dropdown-menu" aria-labelledby="exampleGroupDrop2" role="menu">
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Dropdown link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Nesting Button Group */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Justified Button Group */}
                  <div className="example-wrap">
                    <h4 className="example-title">Justified Button Group</h4>
                    <p>To use justified button groups with <code>&lt;button&gt;</code> elements, you must wrap each
                      button in a button group. Most browsers
                      don't properly apply our CSS for justification to
                      <code>&lt;button&gt;</code> elements, but since we support button
                      dropdowns, we can work around that.</p>
                    <div className="example example-buttons">
                      <div className="btn-group btn-group-justified">
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary">
                            <i className="icon wb-star" aria-hidden="true"/>
                            <br/>
                            <span className="text-uppercase hidden-sm-down">Favourites</span>
                          </button>
                        </div>
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-info">
                            <i className="icon wb-time" aria-hidden="true"/>
                            <br/>
                            <span className="text-uppercase hidden-sm-down">Recent</span>
                          </button>
                        </div>
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-success">
                            <i className="icon wb-user" aria-hidden="true"/>
                            <br/>
                            <span className="text-uppercase hidden-sm-down">Contacts</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Justified Button Group */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Button.Js Componenents */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Button.Js Componenents</h4>
                    <p>
                      There are a few easy ways to quickly get started with Bootstrap, each one ...
                    </p>
                    <p id="exampleMoreless">
                      Appealing to a different skill level and use case. Read through to see what suits
                      your particular needs.
                    </p>
                    <div className="example example-buttons">
                      <div>
                        <button type="button" className="btn btn-sm btn-primary" data-toggle="button"
                                data-plugin="moreButton" data-more="#exampleMoreless">
                          <i className="icon wb-plus text" aria-hidden="true"/>
                          <span className="text">More</span>
                          <i className="icon wb-minus text-active" aria-hidden="true"/>
                          <span className="text-active">Less</span>
                        </button>
                      </div>
                      <div>
                        <button type="button" className="btn btn-success" data-toggle="button">
                          <i className="icon wb-upload text" aria-hidden="true"/>
                          <span className="text">Upload</span>
                          <i className="icon wb-check text-active" aria-hidden="true"/>
                          <span className="text-active">Success</span>
                        </button>
                        <button type="button" className="btn btn-default btn-outline" data-toggle="button">
                          <i className="icon wb-heart-outline text" aria-hidden="true"/>
                          <i className="icon wb-heart text-active text-danger" aria-hidden="true"/>
                        </button>
                        <button type="button" className="btn btn-default btn-outline active" data-toggle="button">
                          <span className="text">
                            <i className="icon wb-thumb-up" aria-hidden="true"/> 25
                          </span>
                          <span className="text-active">
                            <i className="icon wb-thumb-up text-danger" aria-hidden="true"/>                        26
                          </span>
                        </button>
                      </div>
                      <div>
                        <div className="btn-group" data-toggle="buttons" role="group">
                          <label className="btn btn-outline btn-primary active">
                            <input type="radio" name="options" autoComplete="off" defaultValue="male" defaultChecked/>
                            <i className="icon wb-check text-active" aria-hidden="true"/> Male
                          </label>
                          <label className="btn btn-outline btn-primary">
                            <input type="radio" name="options" autoComplete="off" defaultValue="female"/>
                            <i className="icon wb-check text-active" aria-hidden="true"/> Female
                          </label>
                          <label className="btn btn-outline btn-primary">
                            <input type="radio" name="options" autoComplete="off" defaultValue="n/a"/>
                            <i className="icon wb-check text-active" aria-hidden="true"/> N/A
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="btn-group" data-toggle="buttons" role="group">
                          <label className="btn btn-primary active">
                            <input type="checkbox" name="multiples" defaultValue="apple" defaultChecked/> Apple
                          </label>
                          <label className="btn btn-primary active">
                            <input type="checkbox" name="multiples" defaultValue="banana" defaultChecked/> Banana
                          </label>
                          <label className="btn btn-primary">
                            <input type="checkbox" name="multiples" defaultValue="orange"/> Orange
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Button.Js Componenents */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Stateful */}
                  <div className="example-wrap">
                    <h4 className="example-title">Stateful</h4>
                    <p>Add <code>data-loading-text="Loading..."</code> to use
                      a loading state on a button.</p>
                    <div className="example">
                      <button type="button" className="btn btn-primary" id="exampleStatefulButton"
                              data-plugin="loadingButton" data-loading-text="Loading...">
                        Loading state
                      </button>
                    </div>
                  </div>
                  {/* End Example Stateful */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Button Group */}
          {/* Panel Ladda Buttons */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Ladda Buttons
                <small><a className="example-plugin-link" href="http://msurguy.github.io/ladda/" target="_blank">official
                  website</a></small>
              </h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-xl-4 col-lg-6">
                  {/* Example Expand */}
                  <div className="example-wrap">
                    <h4 className="example-title">Expand</h4>
                    <div className="example example-buttons">
                      <div className="float-left">
                        <button type="button" className="btn btn-info ladda-button" data-style="expand-left"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-expand mr-10" aria-hidden="true"/>Expand
                            left
                          </span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-success ladda-button" data-style="expand-right"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-expand mr-10" aria-hidden="true"/>Expand
                            right
                          </span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-primary ladda-button" data-style="expand-up"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-expand mr-10" aria-hidden="true"/>Expand
                            up
                          </span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-warning ladda-button" data-style="expand-down"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-expand mr-10" aria-hidden="true"/>Expand
                            down
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Expand */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Zoom */}
                  <div className="example-wrap">
                    <h4 className="example-title">Zoom</h4>
                    <div className="example example-buttons">
                      <div className="float-left">
                        <button type="button" className="btn btn-warning ladda-button" data-style="zoom-in"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-zoom-in mr-10" aria-hidden="true"/>Zoom
                            in
                          </span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-danger ladda-button" data-style="zoom-out"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-zoom-out mr-10" aria-hidden="true"/>Zoom
                            out
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Zoom */}
                </div>
                <div className="col-xl-4 col-lg-6">
                  {/* Example Progress */}
                  <div className="example-wrap">
                    <h4 className="example-title">Progress</h4>
                    <div className="example example-buttons">
                      <div className="float-left">
                        <button type="button" className="btn btn-success ladda-button" data-style="expand-left"
                                data-plugin="ladda" data-type="progress">
                          <span className="ladda-label"><i className="icon wb-arrow-expand mr-10" aria-hidden="true"/>Expand</span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-warning ladda-button" data-style="zoom-in"
                                data-plugin="ladda" data-type="progress">
                          <span className="ladda-label"><i className="icon wb-zoom-in mr-10"
                                                           aria-hidden="true"/>Zoom</span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-primary ladda-button" data-style="slide-left"
                                data-plugin="ladda" data-type="progress">
                          <span className="ladda-label"><i className="icon wb-arrow-left mr-10" aria-hidden="true"/>Slide</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Progress */}
                </div>
                <div className="col-lg-6">
                  {/* Example Slide */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Slide</h4>
                    <div className="example example-buttons">
                      <div className="float-left">
                        <button type="button" className="btn btn-primary ladda-button" data-style="slide-left"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-left mr-10" aria-hidden="true"/>Slide
                            left
                          </span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-primary ladda-button" data-style="slide-right"
                                data-plugin="ladda">
                          <span className="ladda-label">Slide right<i className="icon wb-arrow-right ml-10"
                                                                      aria-hidden="true"/></span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-primary ladda-button" data-style="slide-up"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-up mr-10" aria-hidden="true"/>Slide
                            up
                          </span>
                        </button>
                      </div>
                      <div className="float-left">
                        <button type="button" className="btn btn-primary ladda-button" data-style="slide-down"
                                data-plugin="ladda">
                          <span className="ladda-label"><i className="icon wb-arrow-down mr-10" aria-hidden="true"/>Slide
                            down
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Example Slide */}
                </div>
                <div className="col-lg-6">
                  {/* Example Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Sizing</h4>
                    <div className="example example-buttons">
                      <button type="button" className="btn btn-primary btn-lg ladda-button" data-style="expand-left"
                              data-plugin="ladda">
                        <span className="ladda-label">Large</span>
                      </button>
                      <button type="button" className="btn btn-primary ladda-button" data-style="expand-left"
                              data-plugin="ladda">
                        <span className="ladda-label">Default</span>
                      </button>
                      <button type="button" className="btn btn-primary btn-sm ladda-button" data-style="expand-left"
                              data-plugin="ladda">
                        <span className="ladda-label">Small</span>
                      </button>
                      <button type="button" className="btn btn-primary btn-xs ladda-button" data-style="expand-left"
                              data-plugin="ladda">
                        <span className="ladda-label">Tiny</span>
                      </button>
                    </div>
                  </div>
                  {/* End Example Sizing */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Ladda Buttons */}
        </div>
      </div>
    );
  }
}

export default ButtonsExample;
