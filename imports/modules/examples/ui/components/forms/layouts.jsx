import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';

class LayoutsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Form Layouts</h1>
          <ol className="breadcrumb">
            <li><a href="#/">Home</a></li>
            <li><a href="javascript:void(0)">Forms</a></li>
            <li className="active">Layouts</li>
          </ol>
          <div className="page-header-actions">
            <button type="button" className="btn btn-sm btn-icon btn-default btn-outline btn-round"
                    data-toggle="tooltip" data-original-title="Edit">
              <i className="icon wb-pencil" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-default btn-outline btn-round"
                    data-toggle="tooltip" data-original-title="Refresh">
              <i className="icon wb-refresh" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-sm btn-icon btn-default btn-outline btn-round"
                    data-toggle="tooltip" data-original-title="Setting">
              <i className="icon wb-settings" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="page-content">
          <div className="panel">
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6">
                  {/* Example Basic Form */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic Form</h4>
                    <div className="example">
                      <form autoComplete="off">
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label className="form-control-label" htmlFor="inputBasicFirstName">First Name</label>
                            <input type="text" className="form-control" id="inputBasicFirstName" name="inputFirstName"
                                   placeholder="First Name" autoComplete="off"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label className="form-control-label" htmlFor="inputBasicLastName">Last Name</label>
                            <input type="text" className="form-control" id="inputBasicLastName" name="inputLastName"
                                   placeholder="Last Name" autoComplete="off"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Gender</label>
                          <div>
                            <div className="radio-custom radio-default radio-inline">
                              <input type="radio" id="inputBasicMale" name="inputGender"/>
                              <label htmlFor="inputBasicMale">Male</label>
                            </div>
                            <div className="radio-custom radio-default radio-inline">
                              <input type="radio" id="inputBasicFemale" name="inputGender" defaultChecked/>
                              <label htmlFor="inputBasicFemale">Female</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="inputBasicEmail">Email Address</label>
                          <input type="email" className="form-control" id="inputBasicEmail" name="inputEmail"
                                 placeholder="Email Address" autoComplete="off"/>
                        </div>
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="inputBasicPassword">Password</label>
                          <input type="password" className="form-control" id="inputBasicPassword" name="inputPassword"
                                 placeholder="Password" autoComplete="off"/>
                        </div>
                        <div className="form-group">
                          <div className="checkbox-custom checkbox-default">
                            <input type="checkbox" id="inputBasicRemember" name="inputCheckbox" defaultChecked
                                   autoComplete="off"/>
                            <label htmlFor="inputBasicRemember">Remember Me</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="button" className="btn btn-primary">Sign Up</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Example Basic Form */}
                </div>
                <div className="col-md-6">
                  {/* Example Basic Form Without Label */}
                  <div className="example-wrap">
                    <h4 className="example-title">Basic Form Without Label</h4>
                    <div className="example">
                      <form>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="firstname" placeholder="First Name"
                                   autoComplete="off"/>
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="lastname" placeholder="Last Name"
                                   autoComplete="off"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="radio-custom radio-default radio-inline">
                            <input type="radio" id="inputLabelMale" name="inputRadioGender"/>
                            <label htmlFor="inputLabelMale">Male</label>
                          </div>
                          <div className="radio-custom radio-default radio-inline">
                            <input type="radio" id="inputLabelFemale" name="inputRadioGender" defaultChecked/>
                            <label htmlFor="inputLabelFemale">Female</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" placeholder="Email Address"
                                 autoComplete="off"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" name="password" placeholder="Password"
                                 autoComplete="off"/>
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Briefly Describe Yourself" defaultValue={''}/>
                        </div>
                        <div className="form-group">
                          <div className="checkbox-custom checkbox-default">
                            <input type="checkbox" id="inputCheckboxAgree" name="inputCheckboxesAgree" defaultChecked
                                   autoComplete="off"/>
                            <label htmlFor="inputCheckboxAgree">Agree Policy</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Example Basic Form Without Label */}
                </div>
                <div className="clearfix hidden-md-down"/>
                <div className="col-md-12 col-lg-6">
                  {/* Example Horizontal Form */}
                  <div className="example-wrap">
                    <h4 className="example-title">Horizontal Form</h4>
                    <p>
                      Use <code>.form-horizontal</code> class to set horizontal form.
                    </p>
                    <div className="example">
                      <form className="form-horizontal">
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Your Name: </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" name="name" placeholder="Full Name"
                                   autoComplete="off"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Your Gender: </label>
                          <div className="col-md-9">
                            <div className="radio-custom radio-default radio-inline">
                              <input type="radio" id="inputHorizontalMale" name="inputRadiosMale2"/>
                              <label htmlFor="inputHorizontalMale">Male</label>
                            </div>
                            <div className="radio-custom radio-default radio-inline">
                              <input type="radio" id="inputHorizontalFemale" name="inputRadiosMale2" defaultChecked/>
                              <label htmlFor="inputHorizontalFemale">Female</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Your Email: </label>
                          <div className="col-md-9">
                            <input type="email" className="form-control" name="email" placeholder="@email.com"
                                   autoComplete="off"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Description: </label>
                          <div className="col-md-9">
                            <textarea className="form-control" placeholder="Briefly Describe Yourself"
                                      defaultValue={''}/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-9 col-md-offset-3">
                            <button type="button" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-default btn-outline">Reset</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Example Horizontal Form */}
                </div>
              </div>
            </div>
          </div>
          {/* Panel Inline Form */}
          <div className="panel">
            <header className="panel-heading">
              <h3 className="panel-title">
                Inline Form
                <span className="panel-desc">
                  Use <code>.form-inline</code> class in the form to style with inline
                  fields.
                </span>
              </h3>
            </header>
            <div className="panel-body">
              <div className="example-wrap">
                <h4 className="example-title">Basic Inline Form</h4>
                <div className="example">
                  <form className="form-inline">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="inputInlineUsername">Username</label>
                      <input type="text" className="form-control" id="inputInlineUsername" name="inputUsername"
                             placeholder="Username" autoComplete="off"/>
                    </div>
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="inputInlinePassword">Password</label>
                      <input type="password" className="form-control" id="inputInlinePassword" name="inputPassword"
                             placeholder="Password" autoComplete="off"/>
                    </div>
                    <div className="form-group">
                      <div className="checkbox-custom checkbox-default">
                        <input type="checkbox" id="inputInlineRemember" name="inputCheckboxRemember" defaultChecked
                               autoComplete="off"/>
                        <label htmlFor="inputInlineRemember">Remember me</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-outline">Login</button>
                    </div>
                  </form>
                </div>
                <h4 className="example-title">Basic Inline Form Without Label</h4>
                <div className="example">
                  <form className="form-inline">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="inputUnlabelUsername">Username</label>
                      <input type="text" className="form-control" id="inputUnlabelUsername" placeholder="Username"
                             autoComplete="off"/>
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="inputUnlabelPassword">Password</label>
                      <input type="password" className="form-control" id="inputUnlabelPassword" placeholder="Password"
                             autoComplete="off"/>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-outline">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Inline Form */}
          {/* Panel Controls Sizing */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Controls Sizing</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-md-6">
                  {/* Example Input Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Input Sizing</h4>
                    <div className="example">
                      <input type="text" className="form-control form-control-lg" placeholder=".input-lg"/>
                    </div>
                    <div className="example">
                      <input type="text" className="form-control" placeholder="Default input"/>
                    </div>
                    <div className="example">
                      <input type="text" className="form-control form-control-sm" placeholder=".input-sm"/>
                    </div>
                  </div>
                  {/* End Example Input Sizing */}
                </div>
                <div className="col-md-6">
                  {/* Example Select Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Select Sizing</h4>
                    <div className="example">
                      <select className="form-control form-control-lg">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="example">
                      <select className="form-control">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="example">
                      <select className="form-control form-control-sm">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </div>
                  {/* End Example Select Sizing */}
                </div>
                <div className="col-md-12">
                  {/* Example Column Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Column Sizing</h4>
                    <div className="example">
                      <div className="row row-lg">
                        <div className="form-group col-md-2">
                          <input type="text" className="form-control" placeholder=".col-md-2"/>
                        </div>
                        <div className="form-group col-md-4">
                          <input type="text" className="form-control" placeholder=".col-md-4"/>
                        </div>
                        <div className="form-group col-md-6">
                          <input type="text" className="form-control" placeholder=".col-md-6"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Column Sizing */}
                </div>
                <div className="col-md-12">
                  {/* Example Horizontal Form Label Sizing */}
                  <div className="example-wrap">
                    <h4 className="example-title">Horizontal Form Label Sizing</h4>
                    <div className="example">
                      <form className="form-horizontal">
                        <div className="form-group row">
                          <label className="col-md-3 form-control-lg form-control-label" htmlFor="inputSizingLarge">Large
                            label</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control form-control-lg" id="inputSizingLarge"
                                   name="inputLarge" placeholder="Large input"/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 form-control-sm form-control-label" htmlFor="inputSizingSmall">Small
                            label</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control form-control-sm" id="inputSizingSmall"
                                   name="inputLarge" placeholder="Small input"/>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Example Horizontal Form Label Sizing */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Controls Sizing */}
          {/* Panel Input Grid */}
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Input Grid</h3>
            </div>
            <div className="panel-body container-fluid">
              <div className="row">
                <div className="col-lg-12 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-12"/>
                </div>
                <div className="col-lg-6 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-6"/>
                </div>
                <div className="col-lg-6 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-6"/>
                </div>
                <div className="col-lg-4 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-4"/>
                </div>
                <div className="col-lg-4 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-4"/>
                </div>
                <div className="col-lg-4 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-4"/>
                </div>
                <div className="col-lg-3 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-3"/>
                </div>
                <div className="col-lg-3 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-3"/>
                </div>
                <div className="col-lg-3 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-3"/>
                </div>
                <div className="col-lg-3 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-3"/>
                </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-2"/>
                </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-2"/>
                </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-2"/>
                </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-2"/>
                </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-2"/>
                </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-2"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
                <div className="col-lg-1 form-group">
                  <input type="text" className="form-control" placeholder=".col-lg-1"/>
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Input Grid */}
        </div>
      </div>
    );
  }
}

export default LayoutsExample;
