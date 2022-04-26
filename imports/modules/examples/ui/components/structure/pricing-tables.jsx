import React from 'react';

class PricingTablesExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Pricing Tables</h1>
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
              {/* Example Pricing List */}
              <div className="example-wrap">
                <h4 className="example-title">Pricing-List - Bg In Title</h4>
                <div className="example">
                  <div className="row">
                    <div className="col-md-6 col-xl-3">
                      <div className="pricing-list">
                        <div className="pricing-header">
                          <div className="pricing-title">Standard</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">40</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                        </ul>
                        <div className="pricing-footer">
                          <a className="btn btn-primary btn-outline" role="button" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <div className="pricing-list">
                        <div className="pricing-header">
                          <div className="pricing-title bg-blue-600">Premium</div>
                          <div className="pricing-price">
                            <span className="pricing-currency blue-600">$</span>
                            <span className="pricing-amount blue-600">50</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                        </ul>
                        <div className="pricing-footer">
                          <a className="btn btn-primary btn-outline" role="button" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <div className="pricing-list">
                        <div className="pricing-header">
                          <div className="pricing-title">Professional</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">60</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                        </ul>
                        <div className="pricing-footer">
                          <a className="btn btn-primary btn-outline" role="button" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <div className="pricing-list">
                        <div className="pricing-header">
                          <div className="pricing-title">Flagship</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">70</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                        </ul>
                        <div className="pricing-footer">
                          <a className="btn btn-primary btn-outline" role="button" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Pricing List */}
              {/* Example Pricing List2 */}
              <div className="example-wrap">
                <h4 className="example-title">Pricing-List - Bg In Head</h4>
                <div className="example">
                  <div className="row">
                    <div className="col-md-6 col-xxl-3">
                      <div className="pricing-list text-left">
                        <div className="pricing-header bg-blue-grey-600">
                          <div className="pricing-title">Standard</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">40</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                          <p className="px-30 pb-25">Vestibulum lacinia arcu eget nulla. Class aptent taciti</p>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                          <li>
                            <strong>1 GB</strong> Storage
                          </li>
                          <li>
                            <strong>*</strong> Sed dignissim lacinia nunc. Curabitur tortor.
                            Pellentesque nibh.
                          </li>
                        </ul>
                        <div className="pricing-footer text-center bg-blue-grey-100">
                          <a className="btn btn-primary btn-lg" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/> Add to card</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                      <div className="pricing-list text-left">
                        <div className="pricing-header bg-blue-600">
                          <div className="pricing-title">Premium</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">50</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                          <p className="px-30 pb-25">Vestibulum lacinia arcu eget nulla. Class aptent taciti</p>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                          <li>
                            <strong>2 GB</strong> Storage
                          </li>
                          <li>
                            <strong>*</strong> Sed dignissim lacinia nunc. Curabitur tortor.
                            Pellentesque nibh.
                          </li>
                        </ul>
                        <div className="pricing-footer text-center bg-blue-grey-100">
                          <a className="btn btn-primary btn-lg" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/> Add to card</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                      <div className="pricing-list text-left">
                        <div className="pricing-header bg-red-600">
                          <div className="pricing-title">Professional</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">60</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                          <p className="px-30 pb-25">Vestibulum lacinia arcu eget nulla. Class aptent taciti</p>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                          <li>
                            <strong>4 GB</strong> Storage
                          </li>
                          <li>
                            <strong>*</strong> Sed dignissim lacinia nunc. Curabitur tortor.
                            Pellentesque nibh.
                          </li>
                        </ul>
                        <div className="pricing-footer text-center bg-blue-grey-100">
                          <a className="btn btn-primary btn-lg" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/> Add to card</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                      <div className="pricing-list text-left">
                        <div className="pricing-header bg-orange-600">
                          <div className="pricing-title">Flagship</div>
                          <div className="pricing-price">
                            <span className="pricing-currency">$</span>
                            <span className="pricing-amount">70</span>
                            <span className="pricing-period">/ mo</span>
                          </div>
                          <p className="px-30 pb-25">Vestibulum lacinia arcu eget nulla. Class aptent taciti</p>
                        </div>
                        <ul className="pricing-features">
                          <li>
                            <strong>10GB</strong> of Lorem ipsum
                          </li>
                          <li>
                            <strong>200MB</strong> Max File Size
                          </li>
                          <li>
                            <strong>2GHZ</strong> CPU
                          </li>
                          <li>
                            <strong>256MB</strong> Memory
                          </li>
                          <li>
                            <strong>8 GB</strong> Storage
                          </li>
                          <li>
                            <strong>*</strong> Sed dignissim lacinia nunc. Curabitur tortor.
                            Pellentesque nibh.
                          </li>
                        </ul>
                        <div className="pricing-footer text-center bg-blue-grey-100">
                          <a className="btn btn-primary btn-lg" href="#"><i
                            className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/> Add to card</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Pricing List2 */}
              {/* Example Pricing Table */}
              <div className="example-example">
                <h4 className="example-title">Pricing Table</h4>
                <div className="example">
                  <div className="pricing-table">
                    <div className="pricing-column-four">
                      <div className="pricing-header">
                        <div className="pricing-price">
                          <span className="pricing-currency">$</span>
                          <span className="pricing-amount">40</span>
                          <span className="pricing-period">/ mo</span>
                        </div>
                        <div className="pricing-title">Standard</div>
                      </div>
                      <ul className="pricing-features">
                        <li>
                          <strong>10GB</strong> of Lorem ipsum
                        </li>
                        <li>
                          <strong>200MB</strong> Max File Size
                        </li>
                        <li>
                          <strong>2GHZ</strong> CPU
                        </li>
                        <li>
                          <strong>256MB</strong> Memory
                        </li>
                        <li>
                          <strong>1 GB</strong> Storage
                        </li>
                      </ul>
                      <div className="pricing-footer">
                        <a className="btn btn-primary btn-outline" role="button" href="#"><i
                          className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                      </div>
                    </div>
                    <div className="pricing-column-four featured">
                      <div className="pricing-header">
                        <div className="pricing-price">
                          <span className="pricing-currency">$</span>
                          <span className="pricing-amount">50</span>
                          <span className="pricing-period">/ mo</span>
                        </div>
                        <div className="pricing-title">Premium</div>
                      </div>
                      <ul className="pricing-features">
                        <li>
                          <strong>10GB</strong> of Lorem ipsum
                        </li>
                        <li>
                          <strong>200MB</strong> Max File Size
                        </li>
                        <li>
                          <strong>2GHZ</strong> CPU
                        </li>
                        <li>
                          <strong>256MB</strong> Memory
                        </li>
                        <li>
                          <strong>2 GB</strong> Storage
                        </li>
                      </ul>
                      <div className="pricing-footer">
                        <a className="btn btn-primary btn-outline" role="button" href="#"><i
                          className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                      </div>
                    </div>
                    <div className="pricing-column-four">
                      <div className="pricing-header">
                        <div className="pricing-price">
                          <span className="pricing-currency">$</span>
                          <span className="pricing-amount">60</span>
                          <span className="pricing-period">/ mo</span>
                        </div>
                        <div className="pricing-title">Professional</div>
                      </div>
                      <ul className="pricing-features">
                        <li>
                          <strong>10GB</strong> of Lorem ipsum
                        </li>
                        <li>
                          <strong>200MB</strong> Max File Size
                        </li>
                        <li>
                          <strong>2GHZ</strong> CPU
                        </li>
                        <li>
                          <strong>256MB</strong> Memory
                        </li>
                        <li>
                          <strong>4 GB</strong> Storage
                        </li>
                      </ul>
                      <div className="pricing-footer">
                        <a className="btn btn-primary btn-outline" role="button" href="#"><i
                          className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                      </div>
                    </div>
                    <div className="pricing-column-four">
                      <div className="pricing-header">
                        <div className="pricing-price">
                          <span className="pricing-currency">$</span>
                          <span className="pricing-amount">70</span>
                          <span className="pricing-period">/ mo</span>
                        </div>
                        <div className="pricing-title">Flagship</div>
                      </div>
                      <ul className="pricing-features">
                        <li>
                          <strong>10GB</strong> of Lorem ipsum
                        </li>
                        <li>
                          <strong>200MB</strong> Max File Size
                        </li>
                        <li>
                          <strong>2GHZ</strong> CPU
                        </li>
                        <li>
                          <strong>256MB</strong> Memory
                        </li>
                        <li>
                          <strong>8 GB</strong> Storage
                        </li>
                      </ul>
                      <div className="pricing-footer">
                        <a className="btn btn-primary btn-outline" role="button" href="#"><i
                          className="icon wb-arrow-right font-size-16 mr-15" aria-hidden="true"/>Add to card</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Example Pricing Table */}
            </div>
          </div>
          {/* End Panel */}
        </div>
      </div>
    );
  }
}

export default PricingTablesExample;
