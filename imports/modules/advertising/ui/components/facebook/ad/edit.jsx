import React from 'react';
import { reduxForm, FormSection, Field } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import InputFileReader from '../../../../../core/ui/components/forms/input-file-reader';
import { Translate, I18n } from 'react-redux-i18n';

class AdEdit extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.information.' + key;
    };
    return (
      <div>
        <div className="title">
          <h1>New Ad</h1>
        </div>
        <div className="body">
          <FormSection name="ad">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.name')}/>
                  </label>
                  <Field component="input" name="name" className="form-control"/>
                </div>
              </div>
            </div>
          </FormSection>
          <FormSection name="creative">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.title')}/>
                  </label>
                  <Field component="input" name="title" className="form-control"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.body')}/>
                  </label>
                  <Field component="textarea" name="body" className="form-control"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.image')}/>
                  </label>
                  <Field component={InputFileReader}
                         name="image"
                         className="form-control"
                         settings={{ multiple: false }}
                         uploader="advertising-image-upload"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('form.link')}/>
                  </label>
                  <Field component="input" name="link" className="form-control"/>
                </div>
              </div>
            </div>
          </FormSection>
          <button className="btn btn-primary pull-right" type="submit" onClick={this.props.submit}>Save</button>
        </div>
      </div>
    );
  }
}

AdEdit = reduxForm({
  form: 'ad-edit',
  enableReinitialize: true
})(AdEdit);

export default AdEdit;
