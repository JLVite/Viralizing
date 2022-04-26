import React from 'react';

class MaterialExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Material Elements</h1>
          <ol className="breadcrumb">
            <li><a href="#/">Home</a></li>
            <li><a href="javascript:void(0)">Forms</a></li>
            <li className="active">Material</li>
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
        <div className="page-content container-fluid">
          <div className="row">
            <div className="col-md-6">
              {/* Panel Static Labels */}
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Static Labels</h3>
                </div>
                <div className="panel-body container-fluid">
                  <form autoComplete="off">
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputText">Text</label>
                      <input type="text" className="form-control" id="inputText" name="inputText" placeholder="Text"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputEmail">Email</label>
                      <input type="email" className="form-control" id="inputEmail" name="inputEmail"
                             placeholder="Email"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputPassword">Password</label>
                      <input type="password" className="form-control" id="inputPassword" name="inputPassword"
                             placeholder="Password"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputFile">File</label>
                      <input type="text" className="form-control" placeholder="Browse.." readOnly/>
                      <input type="file" id="inputFile" name="inputFile" multiple/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="textarea">Textarea</label>
                      <textarea className="form-control" id="textarea" name="textarea" rows={3} defaultValue={''}/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="select">Select</label>
                      <select className="form-control" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="selectMulti">Multi Select</label>
                      <select className="form-control" id="selectMulti" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputDisabled">Input Disabled</label>
                      <input type="text" className="form-control" id="inputDisabled" placeholder="Input Disabled"
                             disabled/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputFocus">Input Focus</label>
                      <input type="text" className="form-control focus" id="inputFocus" placeholder="Input Focus"/>
                    </div>
                    <div className="form-group form-material has-warning" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputWarning">Input Warning</label>
                      <input type="text" className="form-control" id="inputWarning" placeholder="Input Warning"/>
                    </div>
                    <div className="form-group form-material has-danger" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputError">Input Danger</label>
                      <input type="text" className="form-control" id="inputError" placeholder="Input Error"/>
                    </div>
                    <div className="form-group form-material has-success" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputSuccess">Input Success</label>
                      <input type="text" className="form-control" id="inputSuccess" placeholder="Input Success"/>
                    </div>
                    <div className="form-group form-material has-info" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputInfo">Input Info</label>
                      <input type="text" className="form-control" id="inputInfo" placeholder="Input Info"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputSmall">Small Input</label>
                      <input type="text" className="form-control form-control-sm" id="inputSmall" name="inputSmall"
                             placeholder="Small Input"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputSmall">Default Input</label>
                      <input type="text" className="form-control" id="inputDefault" name="inputDefault"
                             placeholder="Default Input"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputSmall">Large Input</label>
                      <input type="text" className="form-control form-control-lg" id="inputLarge" name="inputLarge"
                             placeholder="Large Input"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputHint">Input Hint</label>
                      <input type="text" className="form-control" id="inputHint" name="inputHint"
                             placeholder="Input Hint" data-hint="Write here something cool"/>
                    </div>
                    <div className="form-group form-material" data-plugin="formMaterial">
                      <label className="form-control-label" htmlFor="inputAddons">Input addons</label>
                      <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control" id="inputAddons"/>
                        </div>
                        <span className="input-group-btn">
                          <button className="btn btn-outline btn-default" type="button">Button</button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group form-material row" data-plugin="formMaterial">
                      <div className="col-md-6">
                        <label className="form-control-label" htmlFor="inputGrid1">Input Grid</label>
                        <input type="text" className="form-control" id="inputGrid1" name="inputGrid1"
                               placeholder="col-md-6"/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-control-label" htmlFor="inputGrid2">Input Grid</label>
                        <input type="text" className="form-control" id="inputGrid2" name="inputGrid2"
                               placeholder="col-md-6"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Panel Static Labels */}
            </div>
            <div className="col-md-6">
              {/* Panel Floating Labels */}
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Floating Labels</h3>
                </div>
                <div className="panel-body container-fluid">
                  <form autoComplete="off">
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control" name="inputFloatingText"/>
                      <label className="floating-label">Text</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="email" className="form-control" name="inputFloatingEmail"/>
                      <label className="floating-label">Email</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="password" className="form-control" name="inputFloatingPassword"/>
                      <label className="floating-label">Password</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control" readOnly/>
                      <input type="file" name="inputFloatingFile" multiple/>
                      <label className="floating-label">Browse..</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <textarea className="form-control" rows={3} name="textareaFloating" defaultValue={''}/>
                      <label className="floating-label">Textarea</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <select className="form-control">
                        <option>&nbsp;</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <label className="floating-label">Select</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <label className="floating-label floating-label-static">Multi Select</label>
                      <select className="form-control" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control" disabled/>
                      <label className="floating-label">Input Disabled</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control focus"/>
                      <label className="floating-label">Input Focus</label>
                    </div>
                    <div className="form-group form-material floating has-warning" data-plugin="formMaterial">
                      <input type="text" className="form-control"/>
                      <label className="floating-label">Input Warning</label>
                    </div>
                    <div className="form-group form-material floating has-danger" data-plugin="formMaterial">
                      <input type="text" className="form-control"/>
                      <label className="floating-label">Input Danger</label>
                    </div>
                    <div className="form-group form-material floating has-success" data-plugin="formMaterial">
                      <input type="text" className="form-control"/>
                      <label className="floating-label">Input Success</label>
                    </div>
                    <div className="form-group form-material floating has-info" data-plugin="formMaterial">
                      <input type="text" className="form-control"/>
                      <label className="floating-label">Input Info</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control form-control-sm" name="inputFloatingSmall"/>
                      <label className="floating-label">Small Input</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control" name="inputFloatingSmall"/>
                      <label className="floating-label">Default Input</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control form-control-lg" name="inputFloatingLarge"/>
                      <label className="floating-label">Large Input</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <input type="text" className="form-control" name="inputFloatingHint"
                             data-hint="Write here something cool"/>
                      <label className="floating-label">Input Hint</label>
                    </div>
                    <div className="form-group form-material floating" data-plugin="formMaterial">
                      <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control"/>
                          <label className="floating-label">Input addons</label>
                        </div>
                        <span className="input-group-btn">
                          <button className="btn btn-outline btn-default" type="button">Button</button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group form-material floating row" data-plugin="formMaterial">
                      <div className="col-md-6">
                        <input type="text" className="form-control" name="inputFloatingGrid1"/>
                        <label className="floating-label">Input Grid</label>
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="form-control" name="inputFloatingGrid2"/>
                        <label className="floating-label">Input Grid</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Panel Floating Labels */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaterialExample;
