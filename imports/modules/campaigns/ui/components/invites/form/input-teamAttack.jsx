import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import CampaignTeamAttackContainer from '../../../containers/campaign-team-attack';
import SocialAvatar from '../../../../../core/ui/components/social-avatar';

class InputTeamAttack extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    if (this.props.input.onBlur) {
      this.props.input.onBlur();
    }
    this.setState({ modalIsOpen: false });
  }

  handleChange(tags) {
    let validatedTags = tags;
    if (this.props.validation) {
      validatedTags = this.props.validation(tags);
    }
    this.props.input.onChange(validatedTags);
  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.invites.' + key;
    };
    return (
      <div className="input-teamAttack"
           onClick={this.openModal}>
        <label htmlFor="informationName">
          {this.props.label}
        </label>
        <img src="/images/plus.png" alt="plus" style={{height:"30px", width:"30px", display: 'grid'}}/>
        <div className="accounts-list"
             style={{ marginLeft: 5 }}>
          {this.props.input.value.map(a => (
            <div key={a._id}
                 style={{ padding: '2px 5px', display: 'inline-block' }}>
              <SocialAvatar avatar={a.information.avatar}
                            name={a.information.name + ' ' + a.information.lastName}
                            network={a.network} size="50"/>
            </div>
          ))}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal semifull-screen"
          contentLabel="Conquer Map"
          ariaHideApp={false}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <CampaignTeamAttackContainer input={this.props.input}/>
        </Modal>
      </div>
    );
  }
}

export default InputTeamAttack;
