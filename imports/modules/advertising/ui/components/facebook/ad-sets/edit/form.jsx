import React from 'react';
import { FormSection, Field, reduxForm } from 'redux-form';
import InputTags from '../../../../../../core/ui/components/forms/input-tags';
import InputSelect from '../../../../../../core/ui/components/forms/input-select';
import InputDate from '../../../../../../core/ui/components/forms/input-date';
import { Translate, I18n } from 'react-redux-i18n';

class EditForm extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Advertising.edit.tabs.settings.' + key;
    };
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('name')}/>
              </label>
              <Field component="input" name="name" className="form-control"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="informationGender">
                <Translate value={getTranslation('start_time')}/>
              </label>
              <Field component={InputDate} name="startDate" className="form-control" options={[{
                value: 'male',
                label: I18n.t(getTranslation('form.gender.values.male'))
              }, { value: 'female', label: I18n.t(getTranslation('form.gender.values.female')) }]}/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="informationGender">
                <Translate value={getTranslation('end_time')}/>
              </label>
              <Field component={InputDate} name="endDate" className="form-control" options={[{
                value: 'male',
                label: I18n.t(getTranslation('form.gender.values.male'))
              }, { value: 'female', label: I18n.t(getTranslation('form.gender.values.female')) }]}/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="informationCountry">
                <Translate value={getTranslation('billing_event')}/>
              </label>
              <Field component="select" name="billingEvent" className="form-control">
                <option value=""><Translate value={getTranslation('billing_opt.no_select')}/></option>
                <option value="APP_INSTALLS"><Translate value={getTranslation('billing_opt.app_install')}/></option>
                <option value="IMPRESSIONS"><Translate value={getTranslation('billing_opt.impressions')}/></option>
                <option value="LINK_CLICKS"><Translate value={getTranslation('billing_opt.link_clicks')}/></option>
                <option value="OFFER_CLAIMS"><Translate value={getTranslation('billing_opt.offer_claims')}/></option>
                <option value="PAGE_LIKES"><Translate value={getTranslation('billing_opt.page_likes')}/></option>
                <option value="POST_ENGAGEMENT"><Translate value={getTranslation('billing_opt.post_engagement')}/>
                </option>
                <option value="VIDEO_VIEWS"><Translate value={getTranslation('billing_opt.video_views')}/></option>
                <option value="MRC_VIDEO_VIEWS"><Translate value={getTranslation('billing_opt.impressions')}/></option>
                <option value="COMPLETED_VIDEO_VIEWS"><Translate value={getTranslation('billing_opt.mrc_video_views')}/>
                </option>
                <option value="VIDEO_VIEWS_15S"><Translate value={getTranslation('billing_opt.video_views_15s')}/>
                </option>
              </Field>
            </div>
          </div>

          <FormSection name="money">
            <FormSection name="budget">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('budget_daily')}/>
                  </label>
                  <Field component="input" name="daily" className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('budget_lifetime')}/>
                  </label>
                  <Field component="input" name="lifetime" className="form-control"/>
                </div>
              </div>
            </FormSection>
          </FormSection>


          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="informationPoliticalIdeas">
                <Translate value={getTranslation('categories')}/>
              </label>
              <Field component={InputTags} name="adlabels" className="form-control"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditForm;


