import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import Legends from './legends';
import Free from './free';
import Basic from './basic';
import Management from './management';
import Professional from './professional';
import Enterprise from './enterprise';

class PricingTable extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Pricing.table.' + key;
    };
    return (
      <div className="page-content container-fluid pricing">
        <div className="row">
          <div className="col-md-3">
            <Legends/>
          </div>
          <div className="col-md-9">
            <div className="pricing-table">
              <Free/>
              <Basic/>
              <Management/>
              <Professional/>
              <Enterprise/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTable;
