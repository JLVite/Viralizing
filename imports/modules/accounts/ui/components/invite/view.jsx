import React from 'react';
import { withRouter } from 'react-router';
import swal from 'sweetalert2';
import Modal from 'react-modal';
import { Translate, I18n } from 'react-redux-i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import notie from 'notie';
import PropTypes from 'prop-types';

let getTranslation = (key) => {
  return 'Accounts.invite.' + key;
};

class AccountInviteView extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateInvite = this.updateInvite.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  updateInvite(action) {
    let { invite } = this.props;
    let component = this;
    return function () {
      Meteor.call('account-invite-update-status', invite, action, function (err, res) {
        if (err) {
          return;
        }
        if (action === 'accept') {
          //console.log("ACCEPT", invite);
          //component.props.router.push("/accounts");
          component.props.router.push('/accounts/edit/' + invite.account._id);
        } else {
          component.props.router.push('/accounts');
        }

      });
    };
  }

  componentWillMount() {
    let { invite } = this.props;

    if (invite) {
      if (invite.status === 'rejected') {
        this.props.router.push('/accounts');
      }
      if (invite.email !== Meteor.user().emails[0].address) {
        let component = this;
        this.setState({ modalIsOpen: false });
        swal(
          I18n.t(getTranslation('error.title')),
          I18n.t(getTranslation('error.description')),
          'error'
        ).then(function () {
          component.props.router.push('/accounts');
        });
      }
    } else {
      this.props.router.push('/accounts');
    }
  }

  render() {
    let { invite } = this.props;
    if (!invite) {
      return <div/>;
    }
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <div className="account-invite-view">
            <h1><span
              className="owner">{((invite.owner.profile.name || '') + ' ' + (invite.owner.profile.lastName || '')) === ' ' ? invite.owner.emails[0].address : (invite.owner.profile.name || '') + ' ' + (invite.owner.profile.lastName || '')}</span>
              <Translate value={getTranslation('title')}></Translate></h1>
            <div className="form-avatar">
              <SocialAvatar avatar={invite.account.information.avatar}
                            network={invite.account.network}
                            size="75"
                            name={(invite.account.information.name || '') + ' ' + (invite.account.information.lastName || '')}/>
              <div className="title">
                {(invite.account.information.name || '') + ' ' + (invite.account.information.lastName || '')}
              </div>
            </div>
            <div className="controls">
              <a className="btn btn-danger" onClick={this.updateInvite('reject')}>
                <Translate value={getTranslation('decline')}/>
              </a>
              <a className="btn btn-primary" onClick={this.updateInvite('accept')}>
                <Translate value={getTranslation('accept')}/>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

let AccountInviteViewWithRouter = withRouter(AccountInviteView);

AccountInviteView.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default AccountInviteViewWithRouter;
