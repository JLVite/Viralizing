import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { FormSection, Field } from 'redux-form';
import Countries from '../../../../../../constants/countries';
import { isoLangs } from '../../../../../../translations';
import _ from 'lodash';
import InputTags from '../../../../../core/ui/components/forms/input-tags';
import InputSelect from '../../../../../core/ui/components/forms/input-select';
import InputDate from '../../../../../core/ui/components/forms/input-date';

class SummaryInformation extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.information.' + key;
    };
    let { information } = this.props;
    let languages = [];
    Object.keys(isoLangs).forEach((key) => languages.push(isoLangs[key]));
    languages.pop(); //REMOVE TEST LANGUAGE
    languages = _.orderBy(languages, 'native');
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body slim">
              <h4>
                <Translate value={getTranslation('title')}/>
              </h4>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="informationCountry">
                      <Translate value={getTranslation('form.country')}/>
                    </label>
                    <input type="text" className="form-control" defaultValue={information.country || '-'}
                           readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="informationCity">
                      <Translate value={getTranslation('form.city')}/>
                    </label>
                    <input type="text" className="form-control" defaultValue={information.city || '-'} readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="informationGender">
                      <Translate value={getTranslation('form.gender.label')}/>
                    </label>
                    <input type="text" className="form-control"
                           defaultValue={I18n.t(getTranslation(`form.gender.values.${information.city}`))}
                           readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="informationAge">
                      <Translate value={getTranslation('form.birthDate')}/>
                    </label>
                    <input type="text" className="form-control"
                           defaultValue={moment(new Date(information.birthDate)).format('DD/MM/YYYY')} readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="informationLanguages">
                      <Translate value={getTranslation('form.languages')}/>
                    </label>

                    <input type="text" className="form-control"
                           defaultValue={isoLangs[information.language].native || '-'} readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="informationSexualOrientation">
                      <Translate value={getTranslation('form.sexualOrientation.label')}/>
                    </label>
                    <input type="text" className="form-control" defaultValue={information.sexualOrientation || '-'}
                           readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="informationPoliticalIdeas">
                      <Translate value={getTranslation('form.likes')}/>
                    </label>
                    <input type="text" className="form-control" defaultValue={information.likes.join(',') || '-'}
                           readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="informationPoliticalIdeas">
                      <Translate value={getTranslation('form.categories')}/>
                    </label>
                    <input type="text" className="form-control" defaultValue={information.categories.join(',') || '-'}
                           readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="informationPoliticalIdeas">
                      <Translate value={getTranslation('form.forbiddenSubjects')}/>
                    </label>
                    <input type="text" className="form-control"
                           defaultValue={information.forbiddenSubjects.join(',') || '-'} readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="informationURL1">
                      <Translate value={getTranslation('form.url')}/>
                    </label>

                    <input type="text" className="form-control" defaultValue={information.urls.join(',') || '-'}
                           readOnly={true}/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      <Translate value={getTranslation('form.description.label')}/>
                    </label>

                    <textarea readOnly={true} rows={3} className="form-control"
                              defaultValue={information.description || '-'}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryInformation;
