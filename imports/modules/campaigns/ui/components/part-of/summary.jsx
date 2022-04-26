import React from 'react';
import { Translate } from 'react-redux-i18n';
import Header from './header';
import People from '../summary/people';
import Brands from '../summary/brands';
import Conquer from '../summary/conquer';
import Calendar from '../summary/calendar';
import TargetObjectives from './information/objectives';
import InvitesSummary from '../invites/table-view/container';
import PartOf from './partOf';

class Summary extends React.Component {
  render() {
    const getTranslation = key => `Campaigns.edit.tabs.information.${key}`;
    const { campaign, invites, campaignInviteSentOwn, refetch } = this.props;
    const values = campaign;
    const { information } = values;
    console.log('CAMPAIGNPART',campaign)
    return (
      <div className="campaign-summary">
        <Header campaign={campaign} />
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
                  <Conquer
                    title="Conquer"
                    input={{ value: information.conquer, onChange: () => {} }}
                    readOnly
                  />
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
                  />
                  <div className="panel">
                    <div className="panel-body">
                      <PartOf refetch={refetch} campaignInviteSentOwn={campaignInviteSentOwn} />
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-body slim">
                      <Calendar campaignID={campaign._id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="row padding-20">
            <h4><Translate value={getTranslation('form.objectives.title')} /></h4>
            <TargetObjectives objectives={information.objectives} readOnly />
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
