import React from 'react';
import swal from 'sweetalert2';
import { Translate, I18n } from 'react-redux-i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import notie from 'notie';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.settings.form.invite.' + key;
};

class AccountShares extends React.Component {
  constructor() {
    super();

    this.state = {
      email: ''
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
    this.deleteInvite = this.deleteInvite.bind(this);
    this.removeShare = this.removeShare.bind(this);
  }

  removeShare(share) {
    let component = this;
    return function () {
      swal({
        title: I18n.t(getTranslation('sent.delete.confirm.title')),
        text: I18n.t(getTranslation('sent.delete.confirm.description')),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: I18n.t(getTranslation('sent.delete.confirm.confirm')),
        cancelButtonText: I18n.t(getTranslation('sent.delete.confirm.cancel'))
      }).then(function () {
        let newShares = [...component.props.input.value];
        let indexOf = newShares.indexOf(share);
        newShares.splice(indexOf, 1);
        component.props.input.onChange(newShares);
      });
    };
  }

  updateEmail(e) {
    let val = e.target.value;
    let newState = { ...this.state };
    newState.email = val;
    this.setState(newState);
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.exec(email) ? true : false;
  }

  sendInvite() {
    let { email } = this.state;
    if (!this.validateEmail(email)) {
      // notie.alert(3, I18n.t(getTranslation('error.invalid')), 3);
      return;
    }
    if (email === Meteor.user().emails[0].address) {
      notie.alert(3, I18n.t(getTranslation('error.self')), 3);
      return;
    }
    let newInvite = {
      email,
      account: this.props.account._id,
      type: 'share'
    };
    let component = this;
    Meteor.call('account-invite-create', newInvite, function (err, res) {
      if (err) {
        if (err.error === 500) {
          err.error = I18n.t(getTranslation('error.failed'));
        }
        notie.alert(3,err.error, 3);
        return;
      }
      // component.props.refetch({
      //   accountID: component.props.account._id
      // });
      component.props.refetch()
      component.setState({ form: false, email: '' });
      swal(
        I18n.t(getTranslation('success.title')),
        I18n.t(getTranslation('success.description')),
        'success'
      );

    });
  }

  deleteInvite(invite) {
    let component = this;
    let { account } = this.props;
    return function () {
      swal({
        title: I18n.t(getTranslation('sent.delete.confirm.title')),
        text: I18n.t(getTranslation('sent.delete.confirm.description')),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: I18n.t(getTranslation('sent.delete.confirm.confirm')),
        cancelButtonText: I18n.t(getTranslation('sent.delete.confirm.cancel'))
      }).then(function () {
        Meteor.call('account-invite-delete', invite, account._id, function (err, res) {
          if (err) {
            notie.alert(3, I18n.t(getTranslation('sent.error')), 3);
            return;
          }
          // component.props.refetch({
          //   accountID: account._id
          // });
          component.props.refetch()
          notie.alert(1, I18n.t(getTranslation('sent.success')), 3);
        });
      });
    };
  }

  tooltipContent(content) {
    return <Tooltip id="tooltip_content">{content}</Tooltip>;
  }

  render() {
    let { invites, account, isOwner, isManager } = this.props;
    if (!isManager && !isOwner) {
      return <div/>;
    }
    let shares = this.props.input.value;
    return (
      <div className="row">
        <div className="col-md-12">
          <h5><Translate value={getTranslation('shares.title')}/></h5>
        </div>
        <div className="col-md-9">
          {(shares && account.shares.length !== 0) && (
            <div className="form-group">
              <label htmlFor="sharedWith">
                <Translate value={getTranslation('shares.current')}/>
              </label>
              <ul className="list-group list-group-full">
                {shares.map((account) => (
                  <li className="list-group-item" key={account._id}>
                    <div className="media">
                      <div className="media-left">
                        <a className="avatar" href="javascript:void(0)">
                          <img className="img-fluid" src={account.profile.avatar} alt="..."/>
                        </a>
                      </div>
                      <div className="media-body">
                        <h4
                          className="media-heading">{(account.profile.name || '') + ' ' + (account.profile.lastName || '')}</h4>
                        <small>{account.emails ? account.emails[0].address : '-'}</small>
                      </div>
                      <div className="media-right">
                        <OverlayTrigger placement="top"
                                        overlay={this.tooltipContent(<Translate
                                          value={getTranslation('sent.delete.label')}/>)}>
                          <i className="icon wb-trash" aria-hidden="true"
                             onClick={this.removeShare(account)}/>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="row">
            <div className="col-md-8" style={{height:"88px"}}>
              <div className="form-group" style={{margin:"0",position:"absolute",bottom:"0",width:"93%"}}>
                <label htmlFor="informationName">
                  <Translate value={getTranslation('shares.form.title')}/>
                </label>
                <input type="text" className="form-control"
                       placeholder={I18n.t(getTranslation('placeholder'))}
                       value={this.state.email}
                       onChange={this.updateEmail}/>
              </div>
            </div>
            <div className="col-md-4">
              <a className="btn btn-primary" 
                 style={{ marginTop: '51px',backgroundColor:"#c28c58",borderColor:"#c28c58", height: "37px",padding:"5px 10px"}} onClick={this.sendInvite}>
                <Translate value={getTranslation('send')}/>
              </a>
            </div>
          </div>
        </div>


        {(invites && invites.length > 0) && (
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="sharedWith">
                <Translate value={getTranslation('shares.pending')}/>
              </label>

              {invites.map((invite) => (
                <div className="input-group" key={invite._id} style={{ marginBottom: '25px' }}>
                  <input type="text" className="form-control"
                         defaultValue={invite.email + ' (' + I18n.t(getTranslation('status.' + invite.status)) + ')'}
                         disabled
                         style={{backgroundColor:"rgba(218,218,218,0.3)"}}/>
                  <span className="input-group-btn">
                      <a className="btn btn-primary">
                          <OverlayTrigger placement="top"
                                          overlay={this.tooltipContent(<Translate
                                            value={getTranslation('sent.delete.label')}/>)}>
                                  <i className="icon wb-trash" aria-hidden="true"
                                      onClick={this.deleteInvite(invite)}/>
                              </OverlayTrigger>
                      </a>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AccountShares;
