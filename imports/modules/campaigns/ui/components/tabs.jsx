import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import { FormSection } from 'redux-form';
import CampaignCalendar from '../containers/campaign-calendar';
import Gallery from './gallery';
import Information from './information';
import Status from './status';
import Settings from './settings';
import Summary from './summary';
import CampaignInvites from './invites';

class TabsContainer extends React.Component {
  render() {
    const {
      campaign, invitesCampaign, teamAttacks, accounts, refetch, ownAccounts, campaignInviteSentOwn, tabIndex, setTab,
    } = this.props;
    return (
      <div>
        <div className="nav-tabs-horizontal" style={{ position: 'relative', zIndex: '99' }}>
          <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example" bsStyle="tabs" activeKey={tabIndex} onSelect={key => setTab(key)}>
            <Tab eventKey="summary" title={<Translate value="Campaigns.edit.tabs.summary.title" />}>
              <Summary
                tabIndex={tabIndex}
                campaign={campaign}
                invites={invitesCampaign}
              />
            </Tab>
            <Tab eventKey="settings" style={{ zIndex: '1' }} title={<Translate value="Campaigns.edit.tabs.settings.title" />}>
              <Settings tabIndex={tabIndex} campaign={campaign} userId={this.props.userId} ownAccounts={this.props.ownAccounts} />
            </Tab>
            <Tab eventKey="information" title={<Translate value="Campaigns.edit.tabs.information.title" />}>
              <FormSection name="information">
                <Information
                  tabIndex={tabIndex}
                  campaign={campaign}
                  ownAccounts={ownAccounts}
                  owner={campaign.owner}
                />
              </FormSection>
            </Tab>
            <Tab eventKey="status" title={<Translate value="Campaigns.edit.tabs.status.title" />}>
              <Status />
            </Tab>
            <Tab eventKey="invites" title={<Translate value="Campaigns.edit.tabs.invites.title" />}>
              <CampaignInvites setTab={setTab} campaignInviteSentOwn={campaignInviteSentOwn} tabIndex={tabIndex} campaign={campaign} invites={invitesCampaign} teamAttacks={teamAttacks} accounts={accounts} refetch={refetch} />
            </Tab>
            <Tab eventKey="calendar" title={<Translate value="Campaigns.edit.tabs.calendar.title" />}>
              <CampaignCalendar campaignID={this.props.campaignID} controls />
            </Tab>
            <Tab eventKey="gallery" title={<Translate value="Campaigns.edit.tabs.gallery.title" />}>
              <FormSection name="gallery">
                <Gallery tabIndex={tabIndex} />
              </FormSection>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TabsContainer;
