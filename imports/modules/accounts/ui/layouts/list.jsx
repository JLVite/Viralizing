import React from 'react';
import Modal from 'react-modal';
import { Translate, I18n } from 'react-redux-i18n';
import notie from 'notie';
import ListTable from '../components/list-table';
import NewAccount from '../components/new-account';
import ListEmpty from '../../../core/ui/components/list-empty';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
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
    const getTranslation = key => `Accounts.${key}`;
    return (
      <div className="page-content container-fluid">
        {(this.props.data && this.props.data.length) ? <ListTable data={this.props.data} new={this.openModal} />
          : (
            <ListEmpty
              message={<Translate value={getTranslation('empty.message')} />}
              button={<Translate value={getTranslation('empty.button')} />}
              callback={this.openModal}
            />
          )}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
          ariaHideApp={false}
          style={{ content: { height: '40%' } }}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true" />
          </button>
          <NewAccount
            close={this.closeModal}
            history={this.props.history}
            refetch={this.props.refetch}
            accounts={this.props.data}
          />

        </Modal>
      </div>
    );
  }
}

export default List;
