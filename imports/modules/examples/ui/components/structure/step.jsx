import React from 'react';

class StepExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Step</h1>
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
              <div className="row">
                <div className="col-lg-12">
                  {/* Example Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default</h4>
                    <p>A set of step.</p>
                    <div className="example">
                      <div className="steps row">
                        <div className="step col-lg-4">
                          <span className="step-number">1</span>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                            <p>Choose what you want</p>
                          </div>
                        </div>
                        <div className="step col-lg-4 current">
                          <span className="step-number">2</span>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                            <p>Pay for the bill</p>
                          </div>
                        </div>
                        <div className="step col-lg-4">
                          <span className="step-number">3</span>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                            <p>Waiting for the goods</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default */}
                </div>
                <div className="col-lg-12">
                  {/* Example Icon */}
                  <div className="example-wrap">
                    <h4 className="example-title">STEPS WITH ICONS</h4>
                    <p>A set of steps with a available icon.</p>
                    <div className="example">
                      <div className="steps row">
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-shopping-cart" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                          </div>
                        </div>
                        <div className="step col-md-4 current">
                          <span className="step-icon icon wb-pluse" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                          </div>
                        </div>
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-time" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Icon */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-3 col-lg-6">
                  {/* Example State Done */}
                  <div className="example-wrap">
                    <h4 className="example-title">States Done</h4>
                    <p>A step with classname <code>.done</code></p>
                    <div className="example">
                      <div className="step done">
                        <span className="step-number">1</span>
                        <div className="step-desc">
                          <span className="step-title">Getting</span>
                          <p>Waiting for the goods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example State Done */}
                </div>
                <div className="col-xl-3 col-lg-6">
                  {/* Example State Error */}
                  <div className="example-wrap">
                    <h4 className="example-title">States Error</h4>
                    <p>A step with classname <code>.error</code></p>
                    <div className="example">
                      <div className="step error">
                        <span className="step-number">2</span>
                        <div className="step-desc">
                          <span className="step-title">Getting</span>
                          <p>Waiting for the goods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example State Error */}
                </div>
                <div className="col-xl-3 col-lg-6">
                  {/* Example State Current */}
                  <div className="example-wrap">
                    <h4 className="example-title">States Current</h4>
                    <p>A step with classname <code>.current</code></p>
                    <div className="example">
                      <div className="step current">
                        <span className="step-number">3</span>
                        <div className="step-desc">
                          <span className="step-title">Getting</span>
                          <p>Waiting for the goods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example State Current */}
                </div>
                <div className="col-xl-3 col-lg-6">
                  {/* Example State Disabled */}
                  <div className="example-wrap">
                    <h4 className="example-title">States Disabled</h4>
                    <p>A step with classname <code>.disabled</code></p>
                    <div className="example">
                      <div className="step disabled">
                        <span className="step-number">4</span>
                        <div className="step-desc">
                          <span className="step-title">Getting</span>
                          <p>Waiting for the goods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example State Disabled */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-lg-8">
                  {/* Example Sizing */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Sizing</h4>
                    <p>Steps can have different sizes.</p>
                    {/* XS Size */}
                    <div className="example">
                      <div className="steps row steps-xs">
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-shopping-cart" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                          </div>
                        </div>
                        <div className="step col-md-4 current">
                          <span className="step-icon icon wb-pluse" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                          </div>
                        </div>
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-time" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End XS Size */}
                    {/* SM Size */}
                    <div className="example">
                      <div className="steps row steps-sm">
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-shopping-cart" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                          </div>
                        </div>
                        <div className="step col-md-4 current">
                          <span className="step-icon icon wb-pluse" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                          </div>
                        </div>
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-time" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End SM Size */}
                    {/* Normal Size */}
                    <div className="example">
                      <div className="steps row">
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-shopping-cart" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                          </div>
                        </div>
                        <div className="step col-md-4 current">
                          <span className="step-icon icon wb-pluse" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                          </div>
                        </div>
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-time" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Normal Size */}
                    {/* LG Size */}
                    <div className="example">
                      <div className="steps row steps-lg">
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-shopping-cart" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                          </div>
                        </div>
                        <div className="step col-md-4 current">
                          <span className="step-icon icon wb-pluse" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                          </div>
                        </div>
                        <div className="step col-md-4">
                          <span className="step-icon icon wb-time" aria-hidden="true"/>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End LG Size */}
                  </div>
                  {/* End Example Sizing */}
                </div>
                <div className="col-lg-4">
                  {/* Example Vertical */}
                  <div className="example-wrap">
                    <h4 className="example-title">VERTICAL</h4>
                    <p>A step can be displayed stacked vertically.</p>
                    <div className="example">
                      <div className="steps steps-vertical">
                        <div className="step">
                          <span className="step-number">1</span>
                          <div className="step-desc">
                            <span className="step-title">Shopping</span>
                            <p>Choose what you want</p>
                          </div>
                        </div>
                        <div className="step current">
                          <span className="step-number">2</span>
                          <div className="step-desc">
                            <span className="step-title">Billing</span>
                            <p>Pay for the bill</p>
                          </div>
                        </div>
                        <div className="step">
                          <span className="step-number">3</span>
                          <div className="step-desc">
                            <span className="step-title">Getting</span>
                            <p>Waiting for the goods</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Vertical */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel */}
          {/* Panel Pearls */}
          <div className="panel">
            <div className="panel-heading">
              <div className="panel-title">
                Pearls Steps
              </div>
            </div>
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-lg-6">
                  {/* Example Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default</h4>
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl done col-4">
                          <span className="pearl-number">1</span>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <span className="pearl-number">2</span>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl col-4">
                          <span className="pearl-number">3</span>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default */}
                </div>
                <div className="col-lg-6">
                  {/* Example Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">Icon</h4>
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl done col-4">
                          <div className="pearl-icon"><i className="icon wb-user" aria-hidden="true"/></div>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <div className="pearl-icon"><i className="icon wb-payment" aria-hidden="true"/></div>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl col-4">
                          <div className="pearl-icon"><i className="icon wb-check" aria-hidden="true"/></div>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default */}
                </div>
                <div className="col-lg-6">
                  {/* Example Default */}
                  <div className="example-wrap m-md-0">
                    <h4 className="example-title">Sizing</h4>
                    {/* Pearls Xs */}
                    <div className="example">
                      <div className="pearls pearls-xs row">
                        <div className="pearl done col-4">
                          <span className="pearl-number">1</span>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <span className="pearl-number">2</span>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl col-4">
                          <span className="pearl-number">3</span>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    {/* End Pearls Xs */}
                    {/* Pearls Sm */}
                    <div className="example">
                      <div className="pearls pearls-sm row">
                        <div className="pearl done col-4">
                          <span className="pearl-number">1</span>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <span className="pearl-number">2</span>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl col-4">
                          <span className="pearl-number">3</span>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    {/* End Pearls Sm */}
                    {/* Pearls Normal */}
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl done col-4">
                          <span className="pearl-number">1</span>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <span className="pearl-number">2</span>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl col-4">
                          <span className="pearl-number">3</span>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    {/* End Pearls Normal */}
                    {/* Pearls Lg */}
                    <div className="example">
                      <div className="pearls pearls-lg row">
                        <div className="pearl done col-4">
                          <span className="pearl-number">1</span>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <span className="pearl-number">2</span>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl col-4">
                          <span className="pearl-number">3</span>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    {/* End Pearls Lg */}
                  </div>
                  {/* End Example Default */}
                </div>
                <div className="col-lg-6">
                  {/* Example Default */}
                  <div className="example-wrap">
                    <h4 className="example-title">States</h4>
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl current col-4">
                          <div className="pearl-icon"><i className="icon wb-user" aria-hidden="true"/></div>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl disabled col-4">
                          <div className="pearl-icon"><i className="icon wb-payment" aria-hidden="true"/></div>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl disabled col-4">
                          <div className="pearl-icon"><i className="icon wb-check" aria-hidden="true"/></div>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl done col-4">
                          <div className="pearl-icon"><i className="icon wb-user" aria-hidden="true"/></div>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <div className="pearl-icon"><i className="icon wb-payment" aria-hidden="true"/></div>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl disabled col-4">
                          <div className="pearl-icon"><i className="icon wb-check" aria-hidden="true"/></div>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl done col-4">
                          <div className="pearl-icon"><i className="icon wb-user" aria-hidden="true"/></div>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl current error col-4">
                          <div className="pearl-icon"><i className="icon wb-payment" aria-hidden="true"/></div>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl disabled col-4">
                          <div className="pearl-icon"><i className="icon wb-check" aria-hidden="true"/></div>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                    <div className="example">
                      <div className="pearls row">
                        <div className="pearl done col-4">
                          <div className="pearl-icon"><i className="icon wb-user" aria-hidden="true"/></div>
                          <span className="pearl-title">Account Info</span>
                        </div>
                        <div className="pearl done col-4">
                          <div className="pearl-icon"><i className="icon wb-payment" aria-hidden="true"/></div>
                          <span className="pearl-title">Billing Info</span>
                        </div>
                        <div className="pearl current col-4">
                          <div className="pearl-icon"><i className="icon wb-check" aria-hidden="true"/></div>
                          <span className="pearl-title">Confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default */}
                </div>
              </div>
            </div>
          </div>
          {/* End Panel Pearls */}
        </div>
      </div>
    );
  }
}

export default StepExample;
