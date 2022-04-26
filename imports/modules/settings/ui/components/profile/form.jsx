import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field, FormSection, reduxForm } from 'redux-form';
import {
  FormGroup, ControlLabel, FormControl, HelpBlock,
} from 'react-bootstrap';
import { Session } from 'meteor/session';
import InputPhone from '../../../../core/ui/components/forms/input-phone';
import ProfileAvatar from './avatar';
import Countries from '../../../../../constants/countries';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Meteor.user(),
    };

    this.watchUser = this.watchUser.bind(this);
    this.loadFormData = this.loadFormData.bind(this);
  }

  componentWillMount() {
    const user = Meteor.user();
    console.log(user);
    this.setState({ user });
  }

  loadFormData() {
    const { emails, profile } = this.state.user;
    const { address } = profile;
    const {
      city, country, state, zipCode, address1, address2,
    } = address;
    const { initialize } = this.props;

    profile.email = emails[0].address;

    initialize({
      profile,
      city,
      country,
      state,
      zipCode,
      address1,
      address2,
    });
  }

  componentDidMount() {
    this.watchUser();
  }

  watchUser() {
    Tracker.autorun(() => {
      const user = Meteor.user();
      this.setState({ user }, () => {
        this.loadFormData();
      });
    });
  }

  render() {
    const getTranslation = key => `Core.modals.profile.${key}`;
    const profiles = ['Todos', 'Manager', 'Influencer', 'Marca'];
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <ProfileAvatar />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <FormSection name="profile">
            <div className="padding-20">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('form.name')} />
                    </label>
                    <Field component="input" name="name" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ zIndex: '1' }}>
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('form.lastName')} />
                    </label>
                    <Field component="input" name="lastName" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('form.mobile')} />
                    </label>
                    <Field component={InputPhone} name="mobile" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('form.phone')} />
                    </label>
                    <Field component={InputPhone} name="phone" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('form.eMail')} />
                    </label>
                    <Field component="input" name="email" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('form.profile.label')} />
                    </label>
                    <Field component="select" name="profile" className="form-control">
                      <option value="">{I18n.t(getTranslation('form.profile.values.notSelected'))}</option>
                      {profiles.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4><Translate value={getTranslation('form.address.title')} /></h4>
                </div>
                <FormSection name="address">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('form.address.country')} />
                      </label>
                      <Field component="select" name="country" className="form-control">
                        <option value="">{I18n.t(getTranslation('form.profile.values.notSelected'))}</option>
                        {Countries.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                      </Field>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('form.address.state')} />
                      </label>
                      <Field component="input" name="state" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('form.address.city')} />
                      </label>
                      <Field component="input" name="city" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('form.address.zipCode')} />
                      </label>
                      <Field component="input" name="zipCode" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('form.address.address')} />
                        {' '}
1
                      </label>
                      <Field component="input" name="address1" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('form.address.address')} />
                        {' '}
2
                      </label>
                      <Field component="input" name="address2" className="form-control" />
                    </div>
                  </div>
                </FormSection>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary pull-right">
                    <Translate
                      value={getTranslation('form.button')}
                    />
                  </button>
                </div>
              </div>
            </div>
          </FormSection>
        </form>
      </div>
    );
  }
}


const reduxProfileForm = reduxForm({
  form: 'profile-form',
  keepDirtyOnReinitialize: true,
})(ProfileForm);

export default reduxProfileForm;
