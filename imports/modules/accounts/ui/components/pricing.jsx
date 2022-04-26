import React from 'react';
import InputMaskedNumber from '../../../core/ui/components/forms/input-masked-number';
import { Translate } from 'react-redux-i18n';
import { Field } from 'redux-form';

class Pricing extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.pricing.' + key;
    };
    return (
      <div className="content-padding-30 account-pricing">
        <div className="row">
          <div className="col-md-6">
            <h4><Translate value={getTranslation('instructions')}/></h4>
          </div>
          <div className="col-md-6">
            <div className="pull-right post-price">
              <div className="title">
                <Translate value={getTranslation('form.values.post')}/>
              </div>
              <div className="price-range">
                $1,140.00 -- $2,140.00 USD
              </div>

            </div>
          </div>
        </div>

        <div className="spacer-20"/>

        <div className="row price-block">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.post')}/>
              </label>
              <div className="input-group">
                <div className="input-group-addon">$</div>

                <Field component={InputMaskedNumber} name="post" className="form-control" type="number"/>

                <div className="input-group-addon">USD</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.profilePicture')}/>
              </label>
              <div className="input-group">
                <div className="input-group-addon">$</div>

                <Field component={InputMaskedNumber} name="profilePicture" className="form-control" type="number"/>

                <div className="input-group-addon">USD</div>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.coverPhoto')}/>
              </label>
              <div className="input-group">
                <div className="input-group-addon">$</div>

                <Field component={InputMaskedNumber} name="coverPhoto" className="form-control" type="number"/>

                <div className="input-group-addon">USD</div>
              </div>

            </div>
          </div>
        </div>
        <div className="row price-block">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.share')}/>
              </label>
              <div className="input-group">
                <div className="input-group-addon">$</div>

                <Field component={InputMaskedNumber} name="share" className="form-control" type="number"/>

                <div className="input-group-addon">USD</div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.hour')}/>
              </label>
              <div className="input-group">
                <div className="input-group-addon">$</div>

                <Field component={InputMaskedNumber} name="hour" className="form-control" type="number"/>

                <div className="input-group-addon">USD</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.day')}/>
              </label>
              <div className="input-group">
                <div className="input-group-addon">$</div>

                <Field component={InputMaskedNumber} name="day" className="form-control" type="number"/>

                <div className="input-group-addon">USD</div>
              </div>
            </div>
          </div> */}
        </div>
        
        <div className="legend">
          *<Translate value={getTranslation('form.legend')}/>
        </div>
      </div>
    );
  }
}

export default Pricing;
