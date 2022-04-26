import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import CampaignCalendar from '../../containers/campaign-calendar';
import Gallery from './gallery';
import Information from './information';
import Summary from './summary';
import CampaignInvites from './invites';

class TabsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 'summary',
    };
    this.setTab = this.setTab.bind(this);
  }

  setTab(tabIndex) {
    this.setState({ tabIndex });
  }

  render() {
    const { campaign, invites, campaignInviteSentOwn, refetch } = this.props;
    const { tabIndex } = this.state;
    return (
      <div>
        <div className="nav-tabs-horizontal">
          <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example" bsStyle="tabs" onSelect={key => this.setTab(key)}>
            <Tab eventKey="summary" title={<Translate value="Campaigns.edit.tabs.summary.title" />}>
              <Summary
                campaign={campaign}
                invites={invites}
                campaignInviteSentOwn={campaignInviteSentOwn}
                refetch={refetch}
              />
            </Tab>
            <Tab eventKey="information" title={<Translate value="Campaigns.edit.tabs.information.title" />}>
              <Information campaign={campaign} />
            </Tab>
            <Tab eventKey="invites" title={<Translate value="Campaigns.edit.tabs.invites.title" />}>
              <CampaignInvites
                tabIndex={tabIndex}
                campaign={campaign}
                invites={invites}
              />
            </Tab>
            <Tab eventKey="calendar" title={<Translate value="Campaigns.edit.tabs.calendar.title" />}>
              <CampaignCalendar campaignID={campaign._id} controls />
            </Tab>
            <Tab eventKey="gallery" title={<Translate value="Campaigns.edit.tabs.gallery.title" />}>
              <Gallery campaign={campaign} />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TabsContainer;
