import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import ListTable from '../../components/facebook/campaigns/list';
import ListEmpty from '../../../../core/ui/components/list-empty';
import CampaignNew from '../../components/facebook/campaigns/new';
import notie from 'notie';

class CamppaignsList extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      current: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  formSubmit(data) {
    let component = this;
    let { accountID, adAccountID } = this.props;
    console.log('NEW_CAMPAIGN', data);
    Meteor.call('fb-marketing-campaign-create', accountID, adAccountID, data, function (err, res) {
      console.log('fb-marketing-campaign-create', err, res);
      if (err || (res && res.error)) {
        let message = '';
        if (err && err.error === 500) {
          err.error = 'Failed to create post.';
          message = err.reason || err.error;
        }
        if (res) {
          message = res.error;
        }
        console.log('ERROR', err);
        notie.alert(3, message, 3);
        return;
      }
      component.closeModal();
      component.props.refetch({}).then(function () {
        console.log('SERVER_SAVE_CAMPAIGN_RESPONSE', res);
        component.props.router.push(`/advertising/facebook/${accountID}/${adAccountID}/${res.id}`);
      });
    });
  }

  render() {
    let getTranslation = (key) => {
      return 'Accounts.' + key;
    };
    let { accountID, adAccountID } = this.props;
    return (
      <div className="page-content container-fluid">
        {(this.props.data && this.props.data.length) ? <ListTable data={this.props.data} new={this.openModal}
                                                                  accountID={accountID} adAccountID={adAccountID}/> :
          <ListEmpty message={<Translate value={getTranslation('empty.message')}/>}
                     button={<Translate value={getTranslation('empty.button')}/>} callback={this.openModal}/>}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <CampaignNew close={this.closeModal}
                       onSubmit={this.formSubmit}
                       accountID={accountID}
                       adAccountID={adAccountID}/>
        </Modal>
      </div>
    );
  }
}

export default CamppaignsList;
