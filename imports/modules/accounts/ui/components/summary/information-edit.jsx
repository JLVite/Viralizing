import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { FormSection, Field } from 'redux-form';
import Countries from '../../../../../constants/countries';
import { isoLangs } from '../../../../../translations';
import _ from 'lodash';
import InputTags from '../../../../core/ui/components/forms/input-tags';
import InputSelect from '../../../../core/ui/components/forms/input-select';
import InputDate from '../../../../core/ui/components/forms/input-date';
import moment from 'moment'

class SummaryInformationEdit extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.information.' + key;
    };
    let languages = [];
    Object.keys(isoLangs).forEach((key) => languages.push(isoLangs[key]));
    languages.pop(); //REMOVE TEST LANGUAGE
    languages = _.orderBy(languages, 'native');
    const {
            country, city,gender, language, sexualOrientation, likes,
            categories, forbiddenSubjects, urls, description
          } = this.props.information;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body slim">
              <FormSection name="information" className="form-section">
                <h4>
                  <Translate value={getTranslation('title')}/>
                </h4>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="informationCountry">
                        <Translate value={getTranslation('form.country')}/>
                      </label>
                      <p>{country}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="informationCity">
                        <Translate value={getTranslation('form.city')}/>
                      </label>
                      <p>{city}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="informationGender">
                        <Translate value={getTranslation('form.gender.label')}/>
                      </label>
                      <p>{I18n.t(getTranslation('form.gender.values.'+gender))}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="informationAge">
                        <Translate value={getTranslation('form.birthDate')}/>
                      </label>
                      <p>{moment(this.props.information).format("DD-MM-YYYY")}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="informationLanguages">
                        <Translate value={getTranslation('form.languages')}/>
                      </label>
                      <p>{language}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="informationSexualOrientation">
                        <Translate value={getTranslation('form.sexualOrientation.label')}/>
                      </label>
                      <p>{sexualOrientation}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="informationPoliticalIdeas">
                        <Translate value={getTranslation('form.likes')}/>
                      </label>
                      <p>{likes.join(', ')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="informationPoliticalIdeas">
                        <Translate value={getTranslation('form.categories')}/>
                      </label>
                      <p>{categories.join(', ')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="informationPoliticalIdeas">
                        <Translate value={getTranslation('form.forbiddenSubjects')}/>
                      </label>
                      <p>{forbiddenSubjects.join(', ')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="informationURL1">
                        <Translate value={getTranslation('form.url')}/>
                      </label>
                      <p>{urls.join(', ')}</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        <Translate value={getTranslation('form.description.label')}/>
                      </label>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>

              </FormSection>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryInformationEdit;
