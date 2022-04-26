import React from 'react';
import AppSettings from '../../../../settings';
import InputSelect from '../../../core/ui/components/forms/input-select';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './stripeForm';

class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      cards: null
    };
    this.list_cards = this.list_cards.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  refresh() {
    Meteor.call('stripe_cards_list', Meteor.user(), {}, (err, res) => {
      if (!res) return;
      this.setState({ cards: res.data });
    });
  }

  list_cards() {
    let getTranslation = (key) => {
      return 'Settings.tabs.payments.' + key;
    };
    return this.state.cards.map((obj, i) => {
      let source;
      switch (obj.brand) {
        case 'Visa':
          source = '/images/visa_v.png';
          break;
        case 'Mastercard':
          source = '/images/mastercard_v.png';
          break;
        case 'Amex':
          source = '/images/amex_v.png';
          break;
        case 'Discover':
          source = '/images/discover_v.png';
          break;
      }
      if (i === 0) {
        return <div key={i} className="row" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
          <div className="col-md-1" style={{ 'color': 'red', 'cursor': 'pointer', 'marginTop': '12px' }}
               onClick={this.delete_card.bind(this, obj.id)}>-
          </div>
          <div className="card-container col-md-10">
            <img src={source}/>
            
              <p style={{
              }}>
              {obj.exp_month}/{String(obj.exp_year).substring(2)} XXXXXXXXXXXX{obj.last4}
              </p>
              <p  className="pull-right" 
                  style={{ 'color': '#d29320' }}>
                  <Translate value={getTranslation('pred')}/>
              </p>
            
          </div>
        </div>;
      } else {
        return <div key={i} className="row" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
          <div className="col-md-1" style={{ 'color': 'red', 'cursor': 'pointer', 'marginTop': '12px' }}
               onClick={this.delete_card.bind(this, obj.id)}>-
          </div>
          <div className="card-container col-md-10">
            <img src={source}/>
            <div className="card-align-text">
              <p>
                {obj.exp_month}/{String(obj.exp_year).substring(2)} XXXXXXXXXXXX{obj.last4}
              </p>
            </div>
          </div>
        </div>;
      }
    });
  }

  delete_card(id) {
    console.log('CARD-DELETE', id);
    Meteor.call('stripe_cards_delete', Meteor.user(), id, (err, res) => {
      if (!res) return;
      this.refresh();
    });
  }

  render() {
    let getTranslation = (key) => {
      return 'Settings.tabs.payments.' + key;
    };

    const { cards } = this.state;
    return (
      <div className="row">
        <div className="col-md-4" style={{ 'margin': '40px' }}>
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Translate value={getTranslation('form.add')}/>
              </h4>
              <hr style={{ 'margin': '0 0 13px 0' }}/>
            </div>
            <div className="panel-body container">
              <div className="container-type-cards">
                <img src="/images/visa_v.png"/>
                <img src="/images/mastercard_v.png"/>
                <img src="/images/amex_v.png"/>
                <img src="/images/discover_v.png"/>
              </div>
              <Elements>
                <CheckoutForm refresh={this.refresh}/>
              </Elements>
            </div>
          </div>
          <div>
            <div className="panel" style={{ 'margin': '0' }}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <Translate value={getTranslation('addCoupons')}/>
                </h4>
              </div>
            </div>
            <div className="container" style={{
              'border': '1px solid rgba(0, 0, 0, .1)',
            }}>
              <form>
                <div className="row" style={{ 'marginTop': '10px' }}>
                  <div className="form-group col-md-4">
                    <label htmlFor="informationName" style={{ 'marginLeft': '4px' }}>
                      <Translate value={getTranslation('addCoupon')}/>
                    </label>
                    <input type="text" className="background-white form-control" style={{ 'padding': '6px 18px' }}/>
                  </div>
                  <div className="form-group col-md-3">
                    <button type="button" className="payment-addCoupon btn btn-primary">
                      <Translate value={getTranslation('addCoupon')}/>
                    </button>
                  </div>
                  <div className="col-md-5" style={{ 'textAlign': 'left' }}>
                    <div className="form-group">
                      <label htmlFor="informationGender">
                        <Translate value={getTranslation('display')}/>
                      </label>
                      <Field
                        name="example"
                        component={InputSelect}
                        className="background-white form-control"
                        options={['Todos los cupones disponibles']
                        }
                        style={{ 'padding': '6px 0', 'margin': '0px -9px' }}/>
                    </div>
                  </div>
                </div>
                <hr style={{ 'margin': '0 0 13px 0' }}/>
                  <p><Translate value={getTranslation('coupons_added')}/></p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5"
             style={{
               'margin': '40px',
               'padding': '0'
             }}>
          <div className="panel" style={{ 'margin': '0' }}>
            <div className="panel-heading">
              <h4 className="panel-title">
                <Translate value={getTranslation('paymentsMethods')}/>
              </h4>
            </div>
          </div>
          <div className="container" style={{
            'border': '1px solid rgba(0, 0, 0, 0.1)',
            'padding': '30px 20px 0 0',
          }}>
            {cards && this.list_cards()}
          </div>
        </div>
      </div>
    );
  }
}

export default Payments;
