import React from 'react';

class InvoiceExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Invoice</h1>
        </div>
        <div className="page-content">
          {/* Panel */}
          <div className="panel">
            <div className="panel-body container-fluid">
              <div className="row">
                <div className="col-lg-3">
                  <h3>
                    <img className="mr-10" src="http://getbootstrapadmin.com/remark/base/assets/images/logo-blue.png"
                         alt="..."/>Remark</h3>
                  <address>
                    795 Folsom Ave, Suite 600
                    <br/> San Francisco, CA, 94107
                    <br/>
                    <abbr title="Mail">E-mail:</abbr>&nbsp;&nbsp;example@google.com
                    <br/>
                    <abbr title="Phone">Phone:</abbr>&nbsp;&nbsp;(123) 456-7890
                    <br/>
                    <abbr title="Fax">Fax:</abbr>&nbsp;&nbsp;800-692-7753
                  </address>
                </div>
                <div className="col-lg-3 offset-lg-6 text-right">
                  <h4>Invoice Info</h4>
                  <p>
                    <a className="font-size-20" href="javascript:void(0)">#5669626</a>
                    <br/> To:
                    <br/>
                    <span className="font-size-20">Machi</span>
                  </p>
                  <address>
                    795 Folsom Ave, Suite 600
                    <br/> San Francisco, CA, 94107
                    <br/>
                    <abbr title="Phone">P:</abbr>&nbsp;&nbsp;(123) 456-7890
                    <br/>
                  </address>
                  <span>Invoice Date: January 20, 2017</span>
                  <br/>
                  <span>Due Date: January 22, 2017</span>
                </div>
              </div>
              <div className="page-invoice-table table-responsive">
                <table className="table table-hover text-right">
                  <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Description</th>
                    <th className="text-right">Quantity</th>
                    <th className="text-right">Unit Cost</th>
                    <th className="text-right">Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      1
                    </td>
                    <td className="text-left">
                      Server hardware purchase
                    </td>
                    <td>
                      32
                    </td>
                    <td>
                      $75
                    </td>
                    <td>
                      $2152
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2
                    </td>
                    <td className="text-left">
                      Office furniture purchase
                    </td>
                    <td>
                      15
                    </td>
                    <td>
                      $169
                    </td>
                    <td>
                      $4169
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      3
                    </td>
                    <td className="text-left">
                      Company Anual Dinner Catering
                    </td>
                    <td>
                      69
                    </td>
                    <td>
                      $49
                    </td>
                    <td>
                      $1260
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      4
                    </td>
                    <td className="text-left">
                      Payment for Jan 2017
                    </td>
                    <td>
                      149
                    </td>
                    <td>
                      $12
                    </td>
                    <td>
                      $866
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-right clearfix">
                <div className="float-right">
                  <p>Sub - Total amount:
                    <span>$4800</span>
                  </p>
                  <p>VAT:
                    <span>$35</span>
                  </p>
                  <p className="page-invoice-amount">Grand Total:
                    <span>$4835</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-animate btn-animate-side btn-primary">
                  <span><i className="icon wb-shopping-cart" aria-hidden="true"/> Proceed
                    to payment</span>
                </button>
                <button type="button" className="btn btn-animate btn-animate-side btn-default btn-outline"
                        onclick="javascript:window.print();">
                  <span><i className="icon wb-print" aria-hidden="true"/> Print</span>
                </button>
              </div>
            </div>
          </div>
          {/* End Panel */}
        </div>
      </div>

    );
  }
}

export default InvoiceExample;
