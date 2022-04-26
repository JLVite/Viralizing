import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import TwitterPreview from '../../../../search/ui/components/previews/twitter';
import FacebookPreview from '../../../../search/ui/components/previews/facebook';
import InstagramPreview from '../../../../search/ui/components/previews/instagram';

class PostPreview extends React.Component {
  render() {
    const getTranslation = key => `Agenda.publish.modal.${key}`;
    const { form } = this.props;
    if (!form) {
      return null;
    }
    const post = {
      link: null,
      title: null,
      date: form.date,
      description: `${form.message || ''} ${form.hashtags ? form.hashtags.join(' ') : ''}`,
      network: 'network',
      media: {
        type: 'photo',
        url: form.media || null,
        preview: null,
      },
      user: {
        name: (form.accounts && form.accounts[0]) ? (`${form.accounts[0].information.name || ''} ${form.accounts[0].information.lastName || ''}`) : '',
        screenName: (form.accounts && form.accounts[0]) ? (form.accounts[0].information.name || '') : '',
        avatar: (form.accounts && form.accounts[0]) ? (form.accounts[0].information.avatar) : '',
      },
    };
    return (
      <div className={`${this.props.open ? 'open' : ''} panel preview-panel panel-modal clear-tabs`}>
        <Tabs defaultActiveKey="facebook" id="uncontrolled-tab-example" bsStyle="tabs">
          <Tab eventKey="facebook" title="Facebook">
            <FacebookPreview data={post} />
          </Tab>
          <Tab eventKey="twitter" title="Twitter">
            <TwitterPreview data={post} />
          </Tab>
          <Tab eventKey="instagram" title="Instagram">
            <InstagramPreview data={post} />
          </Tab>
        </Tabs>
        <a className="btn btn-primary pull-right" onClick={this.props.close}>
          {this.props.closeButton}
        </a>
      </div>
    );
  }
}

export default connect(state => ({
  form: state.form['post-create'] ? state.form['post-create'].values : null,
}))(PostPreview);
