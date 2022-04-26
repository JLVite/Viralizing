import React from 'react';
import Modal from 'react-modal';
import { Translate, I18n } from 'react-redux-i18n';
import swal from 'sweetalert2';
import CampaignMessagesList from './messages/list';
import CampaignMessagesEdit from './messages/edit-modal';
import ListEmpty from '../../../../core/ui/components/list-empty';

const getTranslation = key => `Campaigns.edit.tabs.messages.messages.${key}`;

class CampaignMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      list: [],
      current: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.save = this.save.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ current: null, modalIsOpen: false });
  }

  componentWillMount() {
    this.setState({
      list: [...this.props.input.value],
    });
  }

  onSubmitForm(element) {
    const newState = this.state;
    let indexOfMatch = null;
    const match = newState.list.filter((t, i) => {
      if (t._id === element._id) {
        indexOfMatch = i;
      }
      return t._id === element._id;
    })[0];
    if (match) {
      newState.list[indexOfMatch] = element;
    } else {
      newState.list.push(element);
    }
    newState.current = null;

    this.setState(newState);

    // console.log("MESSAGES_ONSUBMIT_FORM");
    this.save();
  }

  editMessage(message) {
    const component = this;
    return function () {
      component.setState({ current: message });
      component.openModal();
    };
  }

  deleteMessage(element) {
    const component = this;
    return function () {
      swal({
        title: I18n.t(getTranslation('delete.title')),
        text: I18n.t(getTranslation('delete.description')),
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: I18n.t(getTranslation('delete.cancel')),
        confirmButtonText: I18n.t(getTranslation('delete.confirm')),
      }).then(() => {
        const newState = component.state;
        let indexOfMatch = null;
        const match = newState.list.filter((t, i) => {
          if (t._id === element._id) {
            indexOfMatch = i;
          }
          return t._id === element._id;
        })[0];
        if (match) {
          newState.list.splice(indexOfMatch, 1);
          component.setState(newState);
          component.save();
        } else {
          console.error('SOMETHING WENT WRONG');
        }
      });
    };
  }

  save() {
    this.props.input.onChange(this.state.list);
  }

  render() {
    const data = this.props.input.value;
    return (
      <div>
        {data.length ? (
          <CampaignMessagesList
            new={this.openModal}
            data={data}
            editMessage={this.editMessage}
            deleteMessage={this.deleteMessage}
          />
        ) : (
          <ListEmpty
            message={<Translate value={getTranslation('empty.message')} />}
            button={<Translate value={getTranslation('empty.button')} />}
            callback={this.openModal}
          />
        )}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal small"
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true" />
          </button>
          <CampaignMessagesEdit onSubmit={this.onSubmitForm} close={this.closeModal} current={this.state.current} />

        </Modal>
      </div>
    );
  }
}

export default CampaignMessage;
