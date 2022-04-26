import React from 'react';
import { FormSection, Field, reduxForm } from 'redux-form';
import { Translate, I18n } from 'react-redux-i18n';
import AudienceSizeWithData from '../../../../containers/facebook/campaigns/audience';
import DelEstimateSizeWithData from '../../../../containers/facebook/campaigns/delivery_estimate';
import SelectCountry from './country-select';
import SelectUserOS from './user-os-select';
import UserDevFetch from './user-device-select';
import PublisherFetch from './publisher-platforms';
import { connect } from 'react-redux';

class EditTargeting extends React.Component {
  render() {
    let { form } = this.props;
    const targeting = (form && form.targeting) ? form.targeting : {};
    let countries = targeting.countries || [];
    if (targeting && countries) {
      countries = countries.map(c => c.key);
    }
    let getTranslation = (key) => {
      return 'Advertising.edit.tabs.targeting.' + key;
    };

    let data = {
      currency: 'USD',
      optimize_for: 'OFFSITE_CONVERSIONS',
      targeting_spec: {
        geo_locations: { countries: [...countries] },
        age_min: targeting.age_min,
        age_max: targeting.age_max
      }
    };
    let data2 = {
      'targeting_spec': {
        'geo_locations': { 'country_groups': [...countries] },
        'user_device': [targeting.userDev],
        'user_os': [targeting.userOS]
      },
      'optimization_goal': 'IMPRESSIONS'
    };
    return (
      <div>
        <FormSection name="targeting">
          <div className="row">
            <h4><Translate value={getTranslation('geolocation')}/></h4>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('countries')}/>
                </label>
                <Field component={SelectCountry} name="countries" className="form-control"/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('user_os')}/>
                </label>
                <Field component={SelectUserOS} name="user_os" className="form-control"/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('user_device')}/>
                </label>
                <Field component={UserDevFetch} name="user_device" className="form-control"/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('publisher_platforms')}/>
                </label>
                <Field component={PublisherFetch} name="publisher" className="form-control"/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      <Translate value={getTranslation('age')}/>
                    </label>
                    <Field component="input" name="age_min" type="number" className="form-control" placeholder="Min"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="informationName">
                      &nbsp;
                    </label>
                    <Field component="input" name="age_max" type="number" className="form-control" placeholder="Max"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <AudienceSizeWithData data={data} adID={'act_134799713698531'} socialAccountID={'vsRxw2iuDfednsYx8'}/>
            </div>
            <div className="col-md-6">
              <DelEstimateSizeWithData data={data2} adID={'act_134799713698531'} socialAccountID={'vsRxw2iuDfednsYx8'}/>
            </div>
          </div>

        </FormSection>
      </div>
    );
  }
}

export default connect(state => {
  return {
    form: state.form['adSet-edit'].values
  };
})(EditTargeting);


