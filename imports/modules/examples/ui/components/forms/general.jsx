import React from 'react';

class GeneralExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Form General Elements</h1>
          <ol className="breadcrumb">
            <li><a href="#/">Home</a></li>
            <li><a href="javascript:void(0)">Forms</a></li>
            <li className="active">General</li>
          </ol>
        </div>
        <div className="page-content">
          {/* Panel Form Elements */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Form Elements</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6 col-lg-4">
                  {/* Example Rounded Input */}
                  <div className="example-wrap">
                    <h4 className="example-title">Rounded Input</h4>
                    <input type="text" className="form-control round" id="inputRounded"/>
                  </div>
                  {/* End Example Rounded Input */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Disable */}
                  <div className="example-wrap">
                    <h4 className="example-title">Disable</h4>
                    <input type="text" className="form-control" id="inputDisabled"
                           placeholder="Disabled input here..." disabled/>
                  </div>
                  {/* End Example Disable */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Input Focus */}
                  <div className="example-wrap">
                    <h4 className="example-title">Input Focus</h4>
                    <input type="text" className="form-control focus" id="inputFocus"
                           defaultValue="This is focused..."/>
                  </div>
                  {/* End Example Input Focus */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Placeholder */}
                  <div className="example-wrap">
                    <h4 className="example-title">Placeholder</h4>
                    <input type="text" className="form-control" id="inputPlaceholder"
                           placeholder="placeholder"/>
                  </div>
                  {/* End Example Placeholder */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Static Control */}
                  <div className="example-wrap">
                    <h4 className="example-title">Static Control</h4>
                    <p className="form-control-static">email@example.com</p>
                  </div>
                  {/* End Example Static Control */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example File Upload */}
                  <div className="example-wrap">
                    <h4 className="example-title">File Upload</h4>
                    <div className="form-group">
                      <div className="input-group input-group-file" data-plugin="inputGroupFile">
                        <input type="text" className="form-control" readOnly/>
                        <span className="input-group-btn">
                          <span className="btn btn-success btn-file">
                            <i className="icon wb-upload" aria-hidden="true"/>
                            <input type="file" name multiple/>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-file" data-plugin="inputGroupFile">
                        <input type="text" className="form-control" readOnly/>
                        <span className="input-group-btn">
                          <span className="btn btn-outline btn-file">
                            <i className="icon wb-upload" aria-hidden="true"/>
                            <input type="file" name multiple/>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End Example File Upload */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example With Help */}
                  <div className="example-wrap">
                    <h4 className="example-title">With Help</h4>
                    <input type="text" className="form-control" id="inputHelpText"/>
                    <span className="text-help">A block of help text that breaks onto a new line and may extend beyond
                      one line.</span>
                  </div>
                  {/* End Example With Help */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Search */}
                  <div className="example-wrap">
                    <h4 className="example-title">Search</h4>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" name
                               placeholder="Search..."/>
                        <span className="input-group-btn">
                          <button type="submit" className="btn btn-primary"><i className="icon wb-search"
                                                                               aria-hidden="true"/></button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-search">
                        <button type="submit" className="input-search-btn"><i
                          className="icon wb-search" aria-hidden="true"/></button>
                        <input type="text" className="form-control" name
                               placeholder="Search..."/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-search input-search-dark">
                        <i className="input-search-icon wb-search" aria-hidden="true"/>
                        <input type="text" className="form-control" name
                               placeholder="Search..."/>
                        <button type="button" className="input-search-close icon wb-close"
                                aria-label="Close"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-search">
                        <i className="input-search-icon wb-search" aria-hidden="true"/>
                        <input type="text" className="form-control" name
                               placeholder="Search..."/>
                        <button type="button" className="input-search-close icon wb-close"
                                aria-label="Close"/>
                      </div>
                    </div>
                  </div>
                  {/* End Example Search */}
                </div>
                <div className="clearfix hidden-sm-down hidden-lg-up"/>
                <div className="col-md-6 col-lg-4">
                  {/* Example Size */}
                  <div className="example-wrap">
                    <h4 className="example-title">Size</h4>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-sm"
                             placeholder="Small"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Normal"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg"
                             placeholder="Big"/>
                    </div>
                  </div>
                  {/* End Example Size */}
                </div>
                <div className="col-md-6">
                  {/* Example Select */}
                  <div className="example-wrap margin-sm-0">
                    <h4 className="example-title">Select</h4>
                    <div className="form-group">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  {/* End Example Select */}
                </div>
                <div className="clearfix hidden-sm-down hidden-lg-up"/>
                <div className="col-md-6">
                  {/* Example Textarea */}
                  <div className="example-wrap">
                    <h4 className="example-title">Textarea</h4>
                    <textarea className="form-control" id="textareaDefault" rows={3}
                              defaultValue={''}/>
                  </div>
                  {/* End Example Textarea */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Form Elements */}
          {/* Panel Input Groups */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Input Groups</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6 col-lg-4">
                  {/* Example Checkbox And Radio */}
                  <div className="example-wrap">
                    <h4 className="example-title">Checkbox And Radio</h4>
                    <p>Place any checkbox or radio option within an input group's addon
                      instead of text. </p>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="checkbox-custom checkbox-default">
                            <input type="checkbox" id="inputCheckbox" name="inputCheckbox" defaultChecked/>
                            <label htmlFor="inputCheckbox"/>
                          </span>
                        </span>
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="radio-custom radio-default">
                            <input type="radio" id="inputRadio" name="inputRadio" defaultChecked/>
                            <label htmlFor="inputRadio"/>
                          </span>
                        </span>
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  {/* End Example Checkbox And Radio */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Text Addon */}
                  <div className="example-wrap">
                    <h4 className="example-title">Text Addon</h4>
                    <p>Place one add-on or button on either side of an input. You may also
                      place one on both sides of an input.</p>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="email"/>
                        <span className="input-group-addon">@example.com</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input type="text" className="form-control" placeholder/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input type="text" className="form-control" placeholder/>
                        <span className="input-group-addon">.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Example Text Addon */}
                </div>
                <div className="clearfix hidden-sm-down hidden-lg-up"/>
                <div className="col-md-6 col-lg-4">
                  {/* Example Icon Addon */}
                  <div className="example-wrap">
                    <h4 className="example-title">Icon Addon</h4>
                    <p>Place icon instead of text in add-on on either side of an input.
                      You may also place one on both sides of an input. </p>
                    <div className="form-group">
                      <div className="input-group input-group-icon">
                        <span className="input-group-addon">
                          <span className="icon wb-user" aria-hidden="true"/>
                        </span>
                        <input type="text" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-icon">
                        <span className="input-group-addon">
                          <span className="icon wb-envelope" aria-hidden="true"/>
                        </span>
                        <input type="text" className="form-control" placeholder="Email"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-icon">
                        <input type="email" className="form-control" placeholder="Email"/>
                        <span className="input-group-addon">
                          <span className="icon wb-envelope" aria-hidden="true"/>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End Example Icon Addon */}
                </div>
                <div className="clearfix hidden-md-down hidden-xl-up"/>
                <div className="col-md-6 col-lg-4">
                  {/* Example Button Addon */}
                  <div className="example-wrap margin-md-0">
                    <h4 className="example-title">Button Addon</h4>
                    <p>Buttons in input groups are a bit different and require one extra
                      level of nesting. Instead of <code>.input-group-addon</code>, you'll
                      need to use <code>.input-group-btn</code> to wrap the buttons.
                      This is required due to default browser styles that cannot be overridden.
                    </p>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-default btn-outline">Go!</button>
                        </span>
                        <input type="text" className="form-control"
                               placeholder="Search for..."/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control"
                               placeholder="Search for..."/>
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-default btn-outline">Go!</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End Example Button Addon */}
                </div>
                <div className="clearfix hidden-sm-down hidden-lg-up"/>
                <div className="col-md-6 col-lg-4">
                  {/* Example Buttons With Dropdowns */}
                  <div className="example-wrap margin-sm-0">
                    <h4 className="example-title">Buttons With Dropdowns</h4>
                    <p>Place any button or drodowns within an input group's addon instead
                      of text. </p>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-btn">
                          <button type="button"
                                  className="btn btn-default btn-outline dropdown-toggle"
                                  data-toggle="dropdown" aria-expanded="false">Action
                          </button>
                          <div className="dropdown-menu" role="menu">
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Action</a>
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Another action</a>
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Something else here</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Separated link</a>
                          </div>
                        </div>
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control"/>
                        <div className="input-group-btn">
                          <button type="button" className="btn btn-default btn-outline"
                                  tabIndex={-1}>Action
                          </button>
                          <button type="button"
                                  className="btn btn-default btn-outline dropdown-toggle"
                                  data-toggle="dropdown" aria-expanded="false" tabIndex={-1}>
                          </button>
                          <div className="dropdown-menu pull-xs-right" role="menu">
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Action</a>
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Another action</a>
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Something else here</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="javascript:void(0)"
                               role="menuitem">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Buttons With Dropdowns */}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* Example Size */}
                  <div className="example-wrap">
                    <h4 className="example-title">Size</h4>
                    <p>Add the relative form sizing classes to the <code>.input-group</code> itself
                      and contents within will automatically resize—no need for
                      repeating the form control size classes on each element.</p>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <span className="input-group-addon">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-sm">
                        <span className="input-group-addon">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                  </div>
                  {/* End Example Size */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Input Groups */}
          {/* Panel Checkbox & Radio */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Checkbox &amp; Radio
                <small><a className="example-plugin-link"
                          href="http://flatlogic.github.io/awesome-bootstrap-checkbox/demo/"
                          target="_blank">official website</a></small>
              </h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6 col-xl-4">
                  {/* Example Checkboxes */}
                  <div className="example-wrap">
                    <h4 className="example-title">Checkboxes</h4>
                    <p>Add class <code>.checkbox-custom</code>to make it.</p>
                    <div className="checkbox-custom checkbox-primary">
                      <input type="checkbox" id="inputUnchecked"/>
                      <label htmlFor="inputUnchecked">Unchecked</label>
                    </div>
                    <div className="checkbox-custom checkbox-primary">
                      <input type="checkbox" id="inputChecked" defaultChecked/>
                      <label htmlFor="inputChecked">Checked</label>
                    </div>
                    <div className="checkbox-custom">
                      <input type="checkbox" disabled/>
                      <label>Disabled Unchecked</label>
                    </div>
                    <div className="checkbox-custom">
                      <input type="checkbox" disabled defaultChecked/>
                      <label>Checked Disabled</label>
                    </div>
                  </div>
                  {/* End Example Checkboxes */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Radios */}
                  <div className="example-wrap">
                    <h4 className="example-title">Radios</h4>
                    <p>Add class <code>.radio-custom</code>to make it.</p>
                    <div className="radio-custom radio-primary">
                      <input type="radio" id="inputRadiosUnchecked" name="inputRadios"/>
                      <label htmlFor="inputRadiosUnchecked">Unchecked</label>
                    </div>
                    <div className="radio-custom radio-primary">
                      <input type="radio" id="inputRadiosChecked" name="inputRadios"
                             defaultChecked/>
                      <label htmlFor="inputRadiosChecked">Checked</label>
                    </div>
                    <div className="radio-custom radio-primary">
                      <input type="radio" id="inputRadiosDisabled" name="inputRadiosDisabled"
                             disabled/>
                      <label htmlFor="inputRadiosDisabled">Disabled Unchecked</label>
                    </div>
                    <div className="radio-custom radio-primary">
                      <input type="radio" id="inputRadiosDisabledChecked"
                             name="inputRadiosDisabledChecked" disabled defaultChecked/>
                      <label htmlFor="inputRadiosDisabledChecked">Checked Disabled</label>
                    </div>
                  </div>
                  {/* End Example Radios */}
                </div>
                <div className="col-md-6 col-xl-4">
                  {/* Example Color Options */}
                  <div className="example-wrap">
                    <h4 className="example-title">Color Options</h4>
                    <p>Add class <code>.checkbox-default</code>, <code>.checkbox-primary</code>,
                      <code>.checkbox-success</code>, <code>.checkbox-info</code>, <code>.checkbox-warning</code>,
                      <code>.checkbox-danger</code>, to change styles.</p>
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <div className="checkbox-custom">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="checkbox-custom checkbox-default">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="checkbox-custom checkbox-primary">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="checkbox-custom checkbox-success">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="checkbox-custom checkbox-info">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="checkbox-custom checkbox-warning">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="checkbox-custom checkbox-danger">
                          <input type="checkbox" name="inputCheckboxes" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <div className="radio-custom">
                          <input type="radio" id="inputRadioNormal" name="inputRadiosNormal"
                                 defaultChecked/>
                          <label htmlFor="inputRadioNormal"/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="radio-custom radio-default">
                          <input type="radio" name="inputRadioDefault" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="radio-custom radio-primary">
                          <input type="radio" name="inputRadioPrimary" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="radio-custom radio-success">
                          <input type="radio" name="inputRadioSuccess" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="radio-custom radio-info">
                          <input type="radio" name="inputRadioInfo" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="radio-custom radio-warning">
                          <input type="radio" name="inputRadioWarning" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="radio-custom radio-danger">
                          <input type="radio" name="inputRadioDanger" defaultChecked/>
                          <label/>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* End Example Color Options */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Checkbox & Radio */}
        </div>
      </div>
    );
  }
}

export default GeneralExample;
