import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Translate } from 'react-redux-i18n';
import Summary from './summary';
//import Target from "./target";
import Gallery from './gallery';
import Information from './information';
import Calendar from '../../containers/account-calendar';

class TabsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0
    };

    this.setTab = this.setTab.bind(this);
  };

  setTab(tabIndex) {
    this.setState({ tabIndex: tabIndex });
  }

  render() {
    let { tabIndex } = this.state;
    return (
      <div>

        <div className="nav-tabs-horizontal">
          <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example" bsStyle="tabs" onSelect={this.setTab}>
            <Tab eventKey="summary" title={<Translate value="Accounts.edit.tabs.summary.title"/>}>
              <Summary account={this.props.account}/>
            </Tab>
            <Tab eventKey="information" title={<Translate value="Accounts.edit.tabs.information.title"/>}>
              <Information account={this.props.account}/>
            </Tab>
            {/*

                        <Tab eventKey="target" title={<Translate value="Accounts.edit.tabs.target.title"/>}>
                            <FormSection name="audience">
                                <Target tabIndex={tabIndex} accountID={this.props.account._id}/>
                            </FormSection>
                        </Tab>


                        */}
            <Tab eventKey="gallery" title={<Translate value="Accounts.edit.tabs.gallery.title"/>}>
              <Gallery account={this.props.account}/>
            </Tab>
            <Tab eventKey="calendar" title={<Translate value="Accounts.edit.tabs.calendar.title"/>}>
              <Calendar account={this.props.account} readOnly={true}/>
            </Tab>

          </Tabs>
        </div>
      </div>
    );
  }
}

export default TabsContainer;
