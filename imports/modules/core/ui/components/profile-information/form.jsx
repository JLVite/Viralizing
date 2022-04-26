import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field, FormSection, reduxForm } from 'redux-form';
import InputPhone from '../forms/input-phone';
import InputRadio from '../forms/input-radio';

class ProfileForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    let getTranslation = (key) => {
      return 'Core.modals.profile.' + key;
    };
    return (
      <form onSubmit={handleSubmit}>
        <h2><Translate value={getTranslation('title')}/></h2>
        <p><Translate value={getTranslation('description')}/></p>
        <div className="padding-20">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.name')}/>
                </label>
                <Field component="input" name="name" className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.lastName')}/>
                </label>
                <Field component="input" name="lastName" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.profile.label')}/>
                </label>
                <Field component="select" name="profile" className="form-control">
                  <option
                    value="">{I18n.t(getTranslation('form.profile.values.notSelected'))}</option>
                  <option
                    value="manager">{I18n.t(getTranslation('form.profile.values.manager'))}</option>
                  <option
                    value="influencer">{I18n.t(getTranslation('form.profile.values.influencer'))}</option>
                  <option value="brand">{I18n.t(getTranslation('form.profile.values.brand'))}</option>
                  <option value="all">{I18n.t(getTranslation('form.profile.values.all'))}</option>
                </Field>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.phone')}/>
                </label>
                <Field component={InputPhone} name="phone" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.mobile')}/>
                </label>
                <Field component={InputPhone} name="mobile" className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.gender.label')}/>
                </label>
                <div className="form-control no-back">
                  <div className="row">
                    <div className="col-md-6" style={{
                      width: 'auto',
                      padding: 0,
                      margin: '0 30px 0 0'
                    }}>
                      <div className="checkbox">
                        <label style={{ padding: 0 }}>
                          <span style={{ marginRight: 7 }}><Translate
                            value={getTranslation('form.gender.values.male')}/></span> <Field name="gender"
                                                                                              component="input"
                                                                                              type="radio"
                                                                                              value="male"/>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6" style={{
                      width: 'auto',
                      padding: 0,
                      margin: '0 30px 0 0'
                    }}>
                      <div className="checkbox">
                        <label style={{ padding: 0 }}>
                          <span style={{ marginRight: 7 }}><Translate
                            value={getTranslation('form.gender.values.female')}/></span> <Field name="gender"
                                                                                                component="input"
                                                                                                type="radio"
                                                                                                value="female"/>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 style={{"float":"left"}}><Translate value={getTranslation('form.address.title')}/></h4>
            </div>
            <FormSection name="address">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.address.address')}/> 1
                  </label>
                  <Field component="input" name="address1" className="form-control"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.address.address')}/> 2
                  </label>
                  <Field component="input" name="address2" className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.address.city')}/>
                  </label>
                  <Field component="input" name="city" className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.address.state')}/>
                  </label>
                  <Field component="input" name="state" className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.address.country')}/>
                  </label>
                  <Field component="input" name="country" className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.address.zipCode')}/>
                  </label>
                  <Field component="input" name="zipCode" className="form-control"/>
                </div>
              </div>
            </FormSection>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary pull-right" style={{height:"60px",width:"130px"}}><Translate
                value={getTranslation('form.button')}/></button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ProfileForm = reduxForm({
  form: 'profile-form'
})(ProfileForm);

export default ProfileForm;

