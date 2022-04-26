import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import AccountSearch from '../../../core/ui/components/forms/account-search';
import InputDate from '../../../core/ui/components/forms/input-date';

class NewCampaign extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, accounts, dateStart } = this.props;
    let getTranslation = (key) => {
      return 'Campaigns.new.' + key;
    };
    console.log('PROPS', this.props);
    window.accounts = accounts;
    return (
      <form onSubmit={handleSubmit}>
        <h2><Translate value={getTranslation('title')}/></h2>
        <div className="padding-20">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('name')}/>
                </label>
                <Field component="input" name="name" className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('brand')}/>
                </label>
                <Field component={AccountSearch} name="brands" data={accounts} multi={true}
                       className="test-class"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('dateStart')}/>
                </label>
                <Field component={InputDate} name="dateStart" minDate={moment()}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('dateEnd')}/>
                </label>
                <Field component={InputDate} name="dateEnd" minDate={dateStart}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary pull-right"><Translate value={getTranslation('button')}/>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

NewCampaign = reduxForm({
  form: 'campaign-create'
})(NewCampaign);

const selector = formValueSelector('campaign-create');

NewCampaign = connect(state => {
  const dateStart = selector(state, 'dateStart')
  return {
    dateStart,
  }

})(NewCampaign)

export default NewCampaign;
