import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Translate, I18n } from 'react-redux-i18n';
import AboutUs from '../components/about-us';
import Billing from '../components/billing';
import Payment from '../components/payments';
import Charge from '../components/charge';
import Profile from '../components/profile';
import Settings from '../components/settings';
import Security from '../components/security';
import { reduxForm } from 'redux-form';

class SettingsLayout extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Settings.tabs.' + key;
    };
    return (
      <div>
        <div className="row">

          <div className="col-lg-12">
            <div className="nav-tabs-horizontal">
              <Tabs defaultActiveKey={this.props.params.tab} id="uncontrolled-tab-example" bsStyle="tabs">
                <Tab eventKey="profile" title={<Translate value={getTranslation('profile.title')}/>}>
                  <Profile/>
                </Tab>
                <Tab eventKey="security" title={<Translate value={getTranslation('security.title')}/>}>
                  <Security/>
                </Tab>
                <Tab eventKey="payments" title={<Translate value={getTranslation('payments.title')}/>}>
                  <Payment/>
                </Tab>
                <Tab eventKey="charge" title={<Translate value={getTranslation('charge.title')}/>}>
                  <Charge/>
                </Tab>
                {/*
                            <Tab eventKey="billing" title={<Translate value={getTranslation("billing.title")}/>}>
                                <Billing/>
                            </Tab>
                            <Tab eventKey="settings" title={<Translate value={getTranslation("settings.title")}/>}>
                                <Settings/>
                            </Tab>
                            */}
                <Tab eventKey="about-us" title={<Translate value={getTranslation('about.title')}/>}>
                  <AboutUs/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SettingsLayout = reduxForm({
  form: 'settings-forms',
  enableReinitialize: true
})(SettingsLayout);

export default SettingsLayout;
