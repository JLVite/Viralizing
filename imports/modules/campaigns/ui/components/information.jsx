import React from 'react';
import { Field } from 'redux-form';
import { Translate, I18n } from 'react-redux-i18n';
import AccountSearch from '../../../core/ui/components/forms/account-search';
import InputDate from '../../../core/ui/components/forms/input-date';
import InputConquer from './information/input-conquer';
import SocialAvatar from '../../../core/ui/components/social-avatar';
import CampaignHeader from './campaign-header';

class Information extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOptions: [],
    };

    this.handleTags = this.handleTags.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const ok = [...this.state.selectedOptions, value];
    this.setState({ selectedOptions: ok });
  }

  handleTags(tags) {
    return tags.map(tag => (tag.split('#').length > 1 ? tag : `#${tag}`));
  }

  render() {
    const getTranslation = key => `Campaigns.edit.tabs.information.${key}`;
    const { owner, campaign, tabIndex } = this.props;
    const { information } = campaign;
    return (
      <div>
        <CampaignHeader tabIndex={tabIndex} information={information} />
        <div className="content-padding-30">
          <h4><Translate value={getTranslation('instructions')} /></h4>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.name')} />
                </label>
                <Field component="input" name="name" className="form-control" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.owner')} />
                </label>
                <div className="form-control social-avatar-form">
                  <SocialAvatar
                    avatar={owner.profile.avatar}
                    name={`${owner.profile.name || ''} ${owner.profile.lastName || ''}`}
                  />
                  <span>{`${owner.profile.name || ''} ${owner.profile.lastName || ''}`}</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.brand')} />
                </label>
                <Field
                  component={AccountSearch}
                  name="brands"
                  data={this.props.ownAccounts}
                  multi
                  className="test-class"
                />
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.conquer')} />
                </label>
                <Field component={InputConquer} name="conquer" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.dateStart')} />
                </label>
                <Field component={InputDate} name="dateStart" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.dateEnd')} />
                </label>
                <Field component={InputDate} name="dateEnd" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  <Translate value={getTranslation('form.description.label')} />
                </label>
                <Field
                  component="textarea"
                  name="description"
                  rows={3}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.url')} />
                </label>
                <Field component="input" name="url" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
