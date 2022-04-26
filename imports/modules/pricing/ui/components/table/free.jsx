import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';

class Basic extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Pricing.table.' + key;
    };
    return (
      <div className="pricing-column-five">
        <div className="pricing-header">
          <div className="pricing-price">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">0</span>
            <span className="pricing-period">/ m</span>
          </div>
          <div className="pricing-title"><Translate value={getTranslation('free.title')}/></div>
        </div>
        <ul className="pricing-features">
          <li>10%</li>
          <li>-</li>
          <li>15%</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li>-</li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li>-</li>
          <li>3/1</li>
          <li>1</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li>-</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li>-</li>
          <li>1</li>
        </ul>
        <div className="pricing-footer">
          <a className="btn btn-primary btn-outline" role="button" href="#">
            <Translate value={getTranslation('legends.selectPlan')}/>
          </a>
        </div>
      </div>
    );
  }
}

export default Basic;
