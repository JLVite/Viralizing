import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import ListEmpty from '../../../core/ui/components/list-empty';
import CampaignAdvertisingList from '../components/list';
import CampaignAdvertisingNew from '../components/new';

class Advertising extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let getTranslation = (key) => {
      return 'Advertising.' + key;
    };
    let list = {
      length: 0
    };
    return (
      <div className="content-padding-30">
        {list.length ? <CampaignAdvertisingList new={this.openModal}/> : <ListEmpty
          message={<Translate value={getTranslation('empty.message')}/>}
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
          <CampaignAdvertisingNew/>

        </Modal>
      </div>
    );
  }
}

export default Advertising;
