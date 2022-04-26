import React from 'react';
import { reduxForm } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import EditForm from './edit/form';
import EditTargeting from './edit/targeting';
import { Translate, I18n } from 'react-redux-i18n';

class AdSetsEdit extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Advertising.edit.' + key;
    };
    let { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1><Translate value={getTranslation('title_adgroup')}/></h1>
        </div>
        <div className="body advertising-tabs">
          <Tabs defaultActiveKey="settings" id="uncontrolled-tab-example" bsStyle="tabs" onSelect={this.setTab}>
            <Tab eventKey="settings" title={<Translate value={getTranslation('settings')}/>}>
              <EditForm/>
            </Tab>
            <Tab eventKey="targeting" title={<Translate value={getTranslation('targeting')}/>}>
              <EditTargeting/>
            </Tab>
          </Tabs>
          <button type="submit" className="btn btn-primary pull-right">
            Save
          </button>
        </div>
      </form>
    );
  }
}

AdSetsEdit = reduxForm({
  form: 'adSet-edit',
  enableReinitialize: true
})(AdSetsEdit);

export default AdSetsEdit;
