import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { FormSection, Field } from 'redux-form';
import Countries from '../../../../../constants/countries';
import Cities from '../../../../../constants/cities';
import { isoLangs } from '../../../../../translations';
import _ from 'lodash';
import InputSelectMultiple from '../../../../core/ui/components/forms/input-select-multiple';

class TargetsItem extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.target.' + key;
    };
    let languages = [];
    Object.keys(isoLangs).forEach((key) => languages.push(isoLangs[key]));
    languages.pop(); //REMOVE TEST LANGUAGE
    languages = _.orderBy(languages, 'native').map((l) => l.name);
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <Field component="input" name="name" className="form-control no-back target-title"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p><Translate value={getTranslation('sections.own.description')}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAudienceAge">
                <Translate value={getTranslation('form.age.label')}/>
              </label>
              <Field component="select" name="age" className="form-control">
                <option value="all">{I18n.t(getTranslation('form.cities.all'))}</option>
                <option value="18-19">
                  18-19 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="20-24">
                  20-24 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="25-29">
                  25-29 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="30-34">
                  30-34 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="35-39">
                  35-39 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="40-44">
                  40-44 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="45-49">
                  45-49 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="50-54">
                  50-54 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="55-59">
                  55-59 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="60-64">
                  60-64 {I18n.t(getTranslation('form.age.helper'))}</option>
                <option value="65">
                  65+ {I18n.t(getTranslation('form.age.helper'))}</option>
              </Field>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAudienceGender">
                <Translate value={getTranslation('form.gender.label')}/>
              </label>
              <Field component="select" name="gender" className="form-control">
                <option
                  value="male">{I18n.t(getTranslation('form.gender.values.male'))}</option>
                <option
                  value="female">{I18n.t(getTranslation('form.gender.values.female'))}</option>
                <option
                  value="split">{I18n.t(getTranslation('form.gender.values.split'))}</option>
              </Field>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAudienceNRSSG">
                <Translate value={getTranslation('form.nrssg.label')}/>
              </label>
              <Field component="select" name="nrssg" className="form-control">
                <option value="all">{I18n.t(getTranslation('form.countries.all'))}</option>
                <option value="a">{I18n.t(getTranslation('form.nrssg.values.a'))}</option>
                <option value="b">{I18n.t(getTranslation('form.nrssg.values.b'))}</option>
                <option value="c1">{I18n.t(getTranslation('form.nrssg.values.c1'))}</option>
                <option value="c2">{I18n.t(getTranslation('form.nrssg.values.c2'))}</option>
                <option value="d">{I18n.t(getTranslation('form.nrssg.values.d'))}</option>
                <option value="e">{I18n.t(getTranslation('form.nrssg.values.e'))}</option>
              </Field>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAudienceCountry">
                <Translate value={getTranslation('form.countries.label')}/>
              </label>
                <Field component="select" name="city" className="form-control">
                  <option key='all' value='all'>{I18n.t(getTranslation('form.countries.all'))}</option>
                  {Countries.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                </Field>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAudienceCities">
                <Translate value={getTranslation('form.cities.label')}/>
              </label>
              <Field component="select" name="city" className="form-control">
                <option key='all' value='all'>{I18n.t(getTranslation('form.cities.all'))}</option>
                {Cities.map((c, i) => (<option key={i} value={c}>{c}</option>))}
              </Field>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAudienceLanguages">
                <Translate value={getTranslation('form.languages.label')}/>
              </label>
              <Field component="select" name="languages" className="form-control">
                <option key='all' value='all'>{I18n.t(getTranslation('form.languages.all'))}</option>
                {languages.map((c, i) => (<option key={i} value={c}>{c}</option>))}
              </Field>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                <Translate value={getTranslation('form.description.label')}/>
              </label>
              <Field component="textarea" name="description" rows={3} className="form-control"
                     placeholder={I18n.t(getTranslation('form.description.placeholder'))}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TargetsItem;

