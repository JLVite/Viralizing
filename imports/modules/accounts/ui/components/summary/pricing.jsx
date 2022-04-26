import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';

class SummaryPricing extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.pricing.' + key;
    };
    let { pricing } = this.props;
    return (
      <div className="col-md-3">
        <div className="panel account-pricing">
          <div className="panel-body slim" style={{"height":"302px"}}>
            <h4><Translate value={getTranslation('title')}/></h4>
            <div className="post-price">
              <div className="title">
                <Translate value={getTranslation('form.values.post')}/>
              </div>
              <div className="price-range">
                $1,140.00 - $2,140.00 USD
              </div>
            </div>

            <div className="account-pricing-horizontal-list">
              <div className="price">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.post')}/>
                  </label>
                  <div className="form-control">
                    {pricing.post} USD
                  </div>
                </div>
              </div>
              <div className="price">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.profilePicture')}/>
                  </label>
                  <div className="form-control">
                    {pricing.profilePicture} USD
                  </div>
                </div>
              </div>
              <div className="price">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.coverPhoto')}/>
                  </label>
                  <div className="form-control">
                    {pricing.coverPhoto} USD
                  </div>
                </div>
              </div>
              <div className="price">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.share')}/>
                  </label>
                  <div className="form-control">
                    {pricing.share} USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryPricing;
