import React from 'react';
import { Translate } from 'react-redux-i18n';
import { FormSection, Field } from 'redux-form';
import { connect } from 'react-redux';
import TargetObjectives from './information/objectives';
import CampaignHeader from './campaign-header';
import People from './summary/people';
import Brands from './summary/brands';
import Conquer from './summary/conquer';
import Calendar from './summary/calendar';
import InvitesSummary from './invites/table-view/container';

class Summary extends React.Component {
  render() {
    const getTranslation = key => `Campaigns.edit.tabs.information.${key}`;
    const {
      campaign, invites, tabIndex, campaignInviteSentOwn,
    } = this.props;

    const { values } = this.props.form;
    const { information } = values;
    const campaignID = campaign._id;


    return (
      <div className="campaign-summary">
        <CampaignHeader tabIndex={tabIndex} />
        <div className="content-padding-30">
          <div className="row">
            <div className="col-md-6">
              <div className="panel">
                <div className="panel-body slim">
                  <div className="row">
                    <div className="col-md-6">
                      <People owner={values.owner} manager={values.manager} />
                    </div>
                    <div className="col-md-6">
                      <Brands brands={information.brands} />
                    </div>
                  </div>
                  <div className="row description">
                    <div className="col-md-12">
                      <h4><Translate value={getTranslation('form.description.label')} /></h4>
                      <div className="form-group">
                        <p className="form-control-static">{information.description || '-'}</p>
                      </div>
                    </div>
                  </div>
                  <FormSection name="information">
                    <Field component={Conquer} name="conquer" className="form-control" title="Conquer" />
                  </FormSection>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel campaign-actions">
                <div className="panel-body slim">
                  <InvitesSummary
                    invites={invites}
                    hasAccounts
                    isSummary
                    campaign={campaign}
                    campaignInviteSentOwn={campaignInviteSentOwn}
                  />
                  <div className="panel">
                    <div className="panel-body slim">
                      <Calendar campaignID={campaignID} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-20">
            <h4><Translate value={getTranslation('form.objectives.title')} /></h4>
            <FormSection name="information">
              <FormSection name="objectives">
                <TargetObjectives padding />
              </FormSection>
            </FormSection>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="campaignName">
                  <Translate value={getTranslation('form.url')} />
                </label>
                <FormSection name="information">
                  <Field component="input" name="url" className="form-control" />
                </FormSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  form: state.form['campaign-edit'],
}))(Summary);
