import React from 'react';
import swal from 'sweetalert2';
import { Translate, I18n } from 'react-redux-i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import notie from 'notie';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.settings.' + key;
};

class AccountInvite extends React.Component {
  constructor() {
    super();

    this.state = {
      form: false,
      email: ''
    };

    this.toggleMagangerForm = this.toggleMagangerForm.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.exec(email) ? true : false;
  }

  sendInvite() {
    let { email } = this.state;
    if (!this.validateEmail(email)) {
      notie.alert(3, I18n.t(getTranslation('form.invite.error.invalid')), 3);
      return;
    }
    if (email === Meteor.user().emails[0].address) {
      notie.alert(3, I18n.t(getTranslation('form.invite.error.self')), 3);
      return;
    }
    let newInvite = {
      email,
      account: this.props.account._id
    };
    let component = this;
    Meteor.call('account-invite-create', newInvite, function (err, res) {
      if (err) {
        if (err.error === 500) {
          err.error = I18n.t(getTranslation('form.invite.error.failed'));
        }
        notie.alert(3,err.error, 3);
        return;
      }
      // component.props.refetch({
      //   accountID: component.props.account._id
      // });
      component.props.refetch()
      component.setState({ form: false });
      swal(
        I18n.t(getTranslation('form.invite.success.title')),
        I18n.t(getTranslation('form.invite.success.description')),
        'success'
      );

    });
    //console.log("SEND_INVITE_TO", email, this.props.account);
  }

  updateEmail(e) {
    let val = e.target.value;
    let newState = { ...this.state };
    newState.email = val;
    this.setState(newState);
  }

  toggleMagangerForm() {
    let newState = { ...this.state };
    newState.form = !newState.form;
    this.setState(newState);
  }

  tooltipContent(content) {
    return <Tooltip id="tooltip_content">{content}</Tooltip>;
  }

  render() {
    let { manager, hasInvite, isOwner } = this.props;
    let managerName = (manager.profile.name || '') + ' ' + (manager.profile.lastName || '');
    return (
      <div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="informationName">
              <Translate value={getTranslation('form.manager.title')}/>
            </label>
            <div className="form-avatar">
              <SocialAvatar avatar={manager.profile.avatar}
                            name={managerName}
                            size="50"/>
              <div className="title">
                {this.props.userId === manager._id ? <Translate
                  value={getTranslation('form.manager.youAre')}/> : (managerName === ' ' ? manager.emails[0].address : managerName)}

                {(hasInvite || !isOwner) ? '' : (
                  <OverlayTrigger placement="top"
                                  overlay={this.tooltipContent(<Translate
                                    value={getTranslation('form.manager.edit')}/>)}>
                    <i className="icon wb-edit" aria-hidden="true" onClick={this.toggleMagangerForm}/>
                  </OverlayTrigger>
                )}

              </div>
            </div>
          </div>
        </div>
        {this.state.form && (
          <div>
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="informationName">
                  <Translate value={getTranslation('form.invite.title')}/>
                </label>
                <input type="text" className="form-control"
                       placeholder={I18n.t(getTranslation('form.invite.placeholder'))}
                       onChange={this.updateEmail}/>
              </div>
            </div>
            <div className="col-md-4">
              <a className="btn btn-primary" style={{ marginTop: '29px',height:"37px", padding:"5px 10px" }} onClick={this.sendInvite}>
                <Translate value={getTranslation('form.invite.send')}/>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AccountInvite;
