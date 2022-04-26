import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CampaignMessage from './messages/messages';
import { Field } from 'redux-form';
import { Translate } from 'react-redux-i18n';

class Messages extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.' + key;
    };
    return (
      <div className="clear-tabs content-padding-30">
        <Tabs defaultActiveKey="invites" id="uncontrolled-tab-example2" bsStyle="tabs">
          <Tab eventKey="invites" title={<Translate value={getTranslation('invites.title')}/>}>
            <CampaignInvites campaignID={this.props.campaignID}/>
          </Tab>

          <Tab eventKey="message" title={<Translate value={getTranslation('messages.title')}/>}>
            <Field component={CampaignMessage} name="messages" className="form-control"/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Messages;
