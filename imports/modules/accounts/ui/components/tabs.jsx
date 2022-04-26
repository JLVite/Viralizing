import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { FormSection, Field } from 'redux-form';
import { Translate } from 'react-redux-i18n';
import Target from './target';
import Gallery from './gallery';
import Information from './information';
import Pricing from './pricing';
import Settings from './settings';
import Analytics from './status';
import Summary from './summary';
import Calendar from '../containers/account-calendar';

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
    const { tabIndex } = this.state;
    const { campaignInviteSentCount } = this.props;
    return (
      <div>

        <div className="nav-tabs-horizontal">
          <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example" bsStyle="tabs" onSelect={key => this.setTab(key)}>
            <Tab eventKey="summary" title={<Translate value="Accounts.edit.tabs.summary.title" />}>
              {this.props.children}
              <Summary accountID={this.props.account._id} campaignInviteSentCount={campaignInviteSentCount} />
            </Tab>
            <Tab eventKey="settings" title={<Translate value="Accounts.edit.tabs.settings.title" />}>
              {this.props.children}
              <Settings account={this.props.account} userId={this.props.userId} />
            </Tab>
            <Tab eventKey="information" title={<Translate value="Accounts.edit.tabs.information.title" />}>
              {this.props.children}
              <FormSection name="information">
                <Information account={this.props.account} accountID={this.props.account._id} />
              </FormSection>
            </Tab>
            <Tab eventKey="status" title={<Translate value="Accounts.edit.tabs.status.title" />}>
              {this.props.children}
              <Analytics
                stats={this.props.account.statistics}
                account={this.props.account}
                refetch={this.props.refetch}
              />
            </Tab>
            <Tab eventKey="target" title={<Translate value="Accounts.edit.tabs.target.title" />}>
              {this.props.children}
              <FormSection name="audience">
                <Target tabIndex={tabIndex} accountID={this.props.account._id} />
              </FormSection>
            </Tab>
            <Tab eventKey="pricing" title={<Translate value="Accounts.edit.tabs.pricing.title" />}>
              {this.props.children}
              <FormSection name="pricing">
                <Pricing />
              </FormSection>
            </Tab>
            <Tab eventKey="gallery" title={<Translate value="Accounts.edit.tabs.gallery.title" />}>
              {this.props.children}
              <FormSection name="gallery">
                <Gallery tabIndex={tabIndex} account={this.props.account} setTab={this.setTab} refetch={this.props.refetch} />
              </FormSection>
            </Tab>
            <Tab eventKey="calendar" title={<Translate value="Accounts.edit.tabs.calendar.title" />}>
              {this.props.children}
              <Calendar tabIndex={tabIndex} account={this.props.account} setTab={this.setTab} />
            </Tab>
          </Tabs>

        </div>
      </div>
    );
  }
}

export default TabsContainer;
