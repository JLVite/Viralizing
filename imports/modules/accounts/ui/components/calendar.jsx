import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import Modal from 'react-modal';
import notie from 'notie';
import Calendar from '../../../agenda/ui/components/calendar';
import CalendarFilter from './calendar/filters';
import PostAccount from '../../../agenda/ui/containers/account-post-create';


class AccountCalendar extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      edit: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({ modalIsOpen: true });
    return false;
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const getTranslation = key => `Accounts.edit.tabs.calendar.${key}`;
    const {
      events, filters, update, controls, readOnly, refetch, setTab, tabIndex,
    } = this.props;
    return (
      <div className="content-padding-30">
        <div className="row">
          {controls !== false && (
            <div className="col-md-4">
              {readOnly !== true && (
                <div>
                  <a className="btn btn-primary" onClick={this.openModal}>
                    <Translate value={getTranslation('publish.button')} />
                  </a>
                  <div className="spacer-30" />
                </div>
              )}

              <CalendarFilter filters={filters} update={update} />
            </div>
          )}

          <div className={controls !== false ? 'col-md-8' : 'col-md-12'}>
            <Calendar tabIndex={tabIndex} events={events} refetch={refetch} setTab={setTab} account={this.props.account} />
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
          <PostAccount
            tabIndex={tabIndex}
            close={this.closeModal}
            refetch={refetch}
            account={this.props.account}
            controls={{
              media: true, date: true, location: true, preview: true, discard: true, draft: true, select: true,
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default AccountCalendar;
