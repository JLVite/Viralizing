import React from 'react';
import { Translate } from 'react-redux-i18n';
import Calendar from '../../../agenda/ui/components/calendar';
import CalendarFilter from './calendar/filters';
import PostCreate from '../../../agenda/ui/components/post-create';
import Modal from 'react-modal';
import notie from 'notie';
import { I18n } from 'react-redux-i18n';

class AccountCalendar extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  openModal(e) {
    this.setState({ modalIsOpen: true });
    return false;
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  savePost(data) {
    //console.log("SAVE_POST", data);
    let account = this.props.account;
    data.accounts = [account];
    let getTranslation = (key) => {
      return 'Agenda.publish.modal.messages.' + key;
    };
    let component = this;
    //TODO: Validate Data
    Meteor.call('posts-scheduler', data, function (err, res) {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create post.';
        }
        console.error('ERROR_SAVING_POST', err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      notie.alert(1, I18n.t(getTranslation('saved')), 3);
      component.props.refetch({});
      component.closeModal();
      //console.log("SERVER_SAVE_POSTS_RESPONSE",res);
    });
  }

  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.calendar.' + key;
    };
    let { events, filters, update, controls } = this.props;
    return (
      <div className="content-padding-30">
        <div className="row">
          {controls !== false && (
            <div className="col-md-4">
              <a className="btn btn-primary" onClick={this.openModal}>
                <Translate value={getTranslation('publish.button')}/>
              </a>
              <div className="spacer-30"/>
              <CalendarFilter filters={filters} update={update}/>
            </div>
          )}

          <div className={controls !== false ? 'col-md-8' : 'col-md-12'}>
            <Calendar events={events}/>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <PostCreate refetch={this.props.refetch} onSubmit={this.savePost}
                      controls={{ media: true, date: true, location: true, preview: true, discard: true }}/>
        </Modal>
      </div>
    );
  }
}

export default AccountCalendar;
