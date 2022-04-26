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
            <span className="pricing-amount">299</span>
            <span className="pricing-period">/ m</span>
          </div>
          <div className="pricing-title"><Translate value={getTranslation('enterprise.title')}/></div>
        </div>
        <ul className="pricing-features">
          <li>Free</li>
          <li>High</li>
          <li>Free</li>
          <li>Advance</li>
          <li>Advance</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li>60/10</li>
          <li>30</li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li>Unlimited</li>
          <li>10%</li>
          <li>24</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li>7</li>
          <li>12</li>
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
