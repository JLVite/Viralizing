import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import Calendar from '../components/calendar';
import CalendarFilter from '../components/calendar-filter';
import CalendarMenu from '../components/menu';
import PostCreateContainer from '../containers/post-create';

class Agenda extends React.Component {
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
    const getTranslation = key => `Agenda.${key}`;
    const events = this.props.events || [];
    const { accounts, tabIndex } = this.props;

    return (
      <div>
        <div className="page-content container-fluid">
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-primary" onClick={this.openModal}>
                <Translate value={getTranslation('publish.button')} />
              </button>
              <div className="spacer-30" />
              <CalendarFilter filters={this.props.filters} update={this.props.update} accounts={accounts} />
            </div>
            <div className="col-md-9">
              <Calendar tabIndex={tabIndex} events={events} refetch={this.props.refetch} />
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true" />
          </button>
          <PostCreateContainer tabIndex={tabIndex} close={this.closeModal} refetch={this.props.refetch} />
        </Modal>
      </div>
    );
  }
}

export default Agenda;
