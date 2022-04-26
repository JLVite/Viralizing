import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';
import $ from 'jquery';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const name = ev.target[3].value + ' ' + ev.target[4].value;
    const address_zip = ev.target[5].value;
    const address_country = ev.target[6].value;
    this.props.stripe.createToken({ name, address_zip, address_country }).then(({ token }) => {
      const user = Meteor.user();
      const card = Meteor.call('stripe_cards_create', user, token, (err, card) => {
        console.log('CARD', card);
        this.props.refresh();
        $('#payment-form input').each((i, el) => $(el).val(''));
        this.card_number.clear();
        this.card_expiry.clear();
        this.card_cvc.clear();
      });
    });

  }

  render() {
    let getTranslation = (key) => {
      return 'Settings.tabs.payments.' + key;
    };

    return (
      <div>
        <form id="payment-form" onSubmit={this.handleSubmit}>
          <label htmlFor="informationName">
            <Translate value={getTranslation('form.infoNum')}/>*
          </label>
          <div className="stripeForm-inputs">
            <CardNumberElement onReady={(c) => this.card_number = c}/>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.expDate')}/>*
              </label>
              <div className="stripeForm-inputs">
                <CardExpiryElement onReady={(c) => this.card_expiry = c}/>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.secCode')}/>*
              </label>
              <div className="stripeForm-inputs">
                <CardCVCElement onReady={(c) => this.card_cvc = c}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.name')}/>
              </label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.lastName')}/>
              </label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.zipCode')}/>
              </label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.country')}/>
              </label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <hr/>
          <ButtonGroup className="pull-right">
            <button className="payment-cancel btn">
              <Translate value={getTranslation('cancel')}/>
            </button>
            <button className="payment-accept btn btn-primary">
              <Translate value={getTranslation('addCard')}/>
            </button>
          </ButtonGroup>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
