import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field, reduxForm } from 'redux-form';

class NewCampaign extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    let getTranslation = (key) => {
      return 'Campaigns.new.' + key;
    };
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
                  <Translate value={getTranslation('name')}/>
                </label>
                <Field component="select" name="buyingType" className="form-control">
                  <option value="">Not Selected</option>
                  <option value="AUCTION">AUTCION</option>
                </Field>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('spend_cap')}/>
                </label>
                <Field component="input" type="number" name="spendCap" className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('objective')}/>
                </label>
                <Field component="select" name="objective" className="form-control">
                  <option value="">Not Selected</option>
                  <option value="APP_INSTALLS">APP_INSTALLS</option>
                  <option value="BRAND_AWARENESS"> BRAND_AWARENESS</option>
                  <option value="CONVERSIONS"> CONVERSIONS</option>
                  <option value="EVENT_RESPONSES"> EVENT_RESPONSES</option>
                  <option value="LEAD_GENERATION"> LEAD_GENERATION</option>
                  <option value="LINK_CLICKS"> LINK_CLICKS</option>
                  <option value="LOCAL_AWARENESS"> LOCAL_AWARENESS</option>
                  <option value="OFFER_CLAIMS"> OFFER_CLAIMS</option>
                  <option value="PAGE_LIKES"> PAGE_LIKES</option>
                  <option value="POST_ENGAGEMENT"> POST_ENGAGEMENT</option>
                  <option value="PRODUCT_CATALOG_SALES"> PRODUCT_CATALOG_SALES</option>
                  <option value="REACH"> REACH</option>
                  <option value="VIDEO_VIEWS"> VIDEO_VIEWS</option>
                  <option value="APP_INSTALLS">APP_INSTALLS</option>
                  <option value="BRAND_AWARENESS"> BRAND_AWARENESS</option>
                  <option value="CONVERSIONS"> CONVERSIONS</option>
                  <option value="EVENT_RESPONSES"> EVENT_RESPONSES</option>
                  <option value="LEAD_GENERATION"> LEAD_GENERATION</option>
                  <option value="LINK_CLICKS"> LINK_CLICKS</option>
                  <option value="LOCAL_AWARENESS"> LOCAL_AWARENESS</option>
                  <option value="OFFER_CLAIMS"> OFFER_CLAIMS</option>
                  <option value="PAGE_LIKES"> PAGE_LIKES</option>
                  <option value="POST_ENGAGEMENT"> POST_ENGAGEMENT</option>
                  <option value="PRODUCT_CATALOG_SALES"> PRODUCT_CATALOG_SALES</option>
                  <option value="REACH"> REACH</option>
                  <option value="VIDEO_VIEWS"> VIDEO_VIEWS</option>
                </Field>
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
  form: 'facebook-campaign-create'
})(NewCampaign);

export default NewCampaign;
