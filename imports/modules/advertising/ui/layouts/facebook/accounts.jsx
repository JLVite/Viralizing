import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import ListTable from '../../components/accounts/list-table';
import ListEmpty from '../../../../core/ui/components/list-empty';
import CampaignAdvertisingNewRouter from '../../components/new-router';

class Accounts extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      current: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  selectAccount(account) {
    let component = this;
    return function () {
      component.setState({ current: account, modalIsOpen: true });
    };
  }

  render() {
    let getTranslation = (key) => {
      return 'Accounts.' + key;
    };
    console.log('LIST_CONTAINER', this.props.refetch);
    let { current } = this.state;
    return (
      <div className="page-content container-fluid">
        {(this.props.data && this.props.data.length) ? <ListTable data={this.props.data} new={this.openModal}
                                                                  selectAccount={this.selectAccount}/> : <ListEmpty
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
          {current && (
            <CampaignAdvertisingNewRouter socialAccount={current}/>
          )}
        </Modal>
      </div>
    );
  }
}

export default Accounts;
