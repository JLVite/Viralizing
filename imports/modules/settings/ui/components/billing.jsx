import React from 'react';
import { Translate } from 'react-redux-i18n';

class Billing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-padding-30 row">
        <div className="col-md-9">
          {/*<p>All payments done by your account are available for revision here.
                        <span className="ng-binding ng-scope">
                        <br/> You're subscribed to our <strong className="ng-binding">Survmetrics Unlimited Forever</strong> plan and it's next billing cycle is on 12/26/2016.<br/>If you wish to cancel your subscription <span className="link">click here</span>
                    </span>
                        <span>
                        <br/>You have <strong>$129</strong> in account credit.
                    </span>
                    </p>*/}
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th>Date</th>
                <th>Concept</th>
                <th>Paid</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2569</td>
                <td>@Jessica</td>
                <td>
                  <span className="label label-pill label-dark">Credit Card</span>
                </td>
                <td>$256.10</td>
              </tr>
              <tr>
                <td>4582</td>
                <td>@William</td>
                <td>
                  <span className="label label-pill label-success">Credit Card</span>
                </td>
                <td>$96.75</td>
              </tr>
              <tr>
                <td>2563</td>
                <td>@Jennifer</td>
                <td>
                  <span className="label label-pill label-dark">Credit Card</span>
                </td>
                <td>$458.00</td>
              </tr>
              <tr>
                <td>4378</td>
                <td>@Rolando</td>
                <td>
                  <span className="label label-pill label-success">Credit Card</span>
                </td>
                <td>$30.25</td>
              </tr>
              <tr>
                <td>8465</td>
                <td>@Katelin</td>
                <td>
                  <span className="label label-pill label-dark">Credit Card</span>
                </td>
                <td>$158.50</td>
              </tr>
              <tr>
                <td>1526</td>
                <td>@Richard</td>
                <td>
                  <span className="label label-pill label-success">Credit Card</span>
                </td>
                <td>$58.80</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default Billing;
