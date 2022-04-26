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
            <span className="pricing-amount">199</span>
            <span className="pricing-period">/ m</span>
          </div>
          <div className="pricing-title"><Translate value={getTranslation('professional.title')}/></div>
        </div>
        <ul className="pricing-features">
          <li>1%</li>
          <li>Medium</li>
          <li>Free</li>
          <li>Advance</li>
          <li>Advance</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li>25/5</li>
          <li>10</li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li><i className="fa fa-check" aria-hidden="true"/></li>
          <li>Unlimited</li>
          <li>7%</li>
          <li>12</li>
          <li><i className="fa fa-times" aria-hidden="true"/></li>
          <li>5</li>
          <li>7</li>
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
