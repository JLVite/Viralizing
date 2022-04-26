import React from 'react';
import { I18n, Translate } from 'react-redux-i18n';
import { Field } from 'redux-form';
import InputTags from '../../../core/ui/components/forms/input-tags';
import InputSelect from '../../../core/ui/components/forms/input-select';
import InputDate from '../../../core/ui/components/forms/input-date';
import Countries from '../../../../constants/countries';
import { isoLangs } from '../../../../translations';
import _ from 'lodash';
import SpecialtyProposal from './information/specialty-proposal';
import CategoryProposal from './information/category-proposal';

class Information extends React.Component {

  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.information.' + key;
    };
    let { accountID, handleSubmit } = this.props;
    let languages = [];
    Object.keys(isoLangs).forEach((key) => languages.push(isoLangs[key]));
    languages.pop(); //REMOVE TEST LANGUAGE
    languages = _.orderBy(languages, 'native');
    return (
      <div className="content-padding-30" style={{marginBottom:'30px'}}>
        <h4><Translate value={getTranslation('instructions')}/></h4>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.name')}/>
              </label>
              <Field component="input" name="name" className="form-control"/>
            </div>
          </div>
          {/*
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="informationLastName">
                                <Translate value={getTranslation("form.surname")}/>
                            </label>
                            <Field component="input" name="lastName" className="form-control"/>
                        </div>
                    </div>
                    */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationGender">
                <Translate value={getTranslation('form.gender.label')}/>
              </label>
              <Field component={InputSelect} name="gender" className="form-control" options={[{
                value: 'male',
                label: I18n.t(getTranslation('form.gender.values.male'))
              }, { value: 'female', label: I18n.t(getTranslation('form.gender.values.female')) }]}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationAge">
                <Translate value={getTranslation('form.birthDate')}/>
              </label>
              <Field component={InputDate} name="birthDate" className="form-control"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationCountry">
                <Translate value={getTranslation('form.country')}/>
              </label>
              <Field component="select" name="country" className="form-control">
                <option value="">{I18n.t(getTranslation('helpers.noSelect'))}</option>
                {Countries.map((c, i) => (<option key={i} value={c}>{c}</option>))}
              </Field>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationCity">
                <Translate value={getTranslation('form.city')}/>
              </label>
              <Field component="input" name="city" className="form-control"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationMaritalStatus">
                <Translate value={getTranslation('form.maritalStatus.label')}/>
              </label>
              <Field component={InputSelect} name="maritalStatus" className="form-control"
                    options={[
                      { value: '', label: I18n.t(getTranslation('helpers.noSelect')) },
                      { value: 'single', label: I18n.t(getTranslation('form.maritalStatus.values.single')) },
                      { value: 'married', label: I18n.t(getTranslation('form.maritalStatus.values.married')) }
                    ]}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationLanguages">
                <Translate value={getTranslation('form.languages')}/>
              </label>
              <Field component="select" name="language" placeholder=" " className="form-control">
                <option key="no-select" value="">{I18n.t(getTranslation('helpers.noSelect'))}</option>
                {languages.map((l) => (<option key={l.code} value={l.native}>{l.native}</option>))}
              </Field>
            </div>
          </div>


          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationSexualOrientation">
                <Translate value={getTranslation('form.sexualOrientation.label')}/>
              </label>
              <Field component={InputSelect} name="sexualOrientation" className="form-control"
                    options={[
                      { value: '', label: I18n.t(getTranslation('helpers.noSelect')) },
                      {
                        value: 'heterosexual',
                        label: I18n.t(getTranslation('form.sexualOrientation.values.heterosexual'))
                      },
                      {
                        value: 'homosexual',
                        label: I18n.t(getTranslation('form.sexualOrientation.values.homosexual'))
                      },
                      { value: 'bisexual', label: I18n.t(getTranslation('form.sexualOrientation.values.bisexual')) },
                      {
                        value: 'transexual',
                        label: I18n.t(getTranslation('form.sexualOrientation.values.transexual'))
                      }
                    ]}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationPoliticalIdeas">
                <Translate value={getTranslation('form.likes')}/>
              </label>
              <Field component={InputTags} name="likes" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                <Translate value={getTranslation('form.description.label')}/>
                <div>
                  <small><Translate value={getTranslation('form.description.description')}/></small>
                </div>
              </label>
              <Field component="textarea" name="description" rows={3} className="form-control"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationPoliticalIdeas">
                <Translate value={getTranslation('form.categories')}/>
              </label>
              <Field component={InputTags} name="categories" className="form-control"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationPoliticalIdeas">
                <Translate value={getTranslation('form.specialties')}/>
              </label>
              <Field component={InputTags} name="specialties" className="form-control"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <CategoryProposal accountID={accountID}/>
          </div>
          <div className="col-md-8">
            <SpecialtyProposal accountID={accountID}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="informationPoliticalIdeas">
                <Translate value={getTranslation('form.forbiddenSubjects')}/>
              </label>
              <Field component={InputTags} name="forbiddenSubjects" className="form-control"/>
            </div>
          </div>
        </div>
        <h5><Translate value={getTranslation('form.urlTitle')}/></h5>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="informationURL1">
                <Translate value={getTranslation('form.url')}/>
              </label>
              <Field component={InputTags} name="urls" placeholder=" " className="form-control"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Information;

