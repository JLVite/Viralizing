import React from 'react';
import swal from 'sweetalert2';
import { Translate, I18n } from 'react-redux-i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import notie from 'notie';

const getTranslation = key => `Accounts.edit.tabs.settings.form.invite.${key}`;

class CampaignShares extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
    this.deleteInvite = this.deleteInvite.bind(this);
    this.removeShare = this.removeShare.bind(this);
  }

  removeShare(share) {
    const component = this;
    return function () {
      swal({
        title: I18n.t(getTranslation('sent.delete.confirm.title')),
        text: I18n.t(getTranslation('sent.delete.confirm.description')),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: I18n.t(getTranslation('sent.delete.confirm.confirm')),
        cancelButtonText: I18n.t(getTranslation('sent.delete.confirm.cancel')),
      }).then(() => {
        const newShares = [...component.props.input.value];
        const indexOf = newShares.indexOf(share);
        newShares.splice(indexOf, 1);
        component.props.input.onChange(newShares);
      });
    };
  }

  updateEmail(e) {
    const val = e.target.value;
    const newState = { ...this.state };
    newState.email = val;
    this.setState(newState);
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !!re.exec(email);
  }

  sendInvite() {
    const { email } = this.state;
    if (!this.validateEmail(email)) {
      notie.alert(3, I18n.t(getTranslation('error.invalid')), 3);
      return;
    }
    if (email === Meteor.user().emails[0].address) {
      notie.alert(3, I18n.t(getTranslation('error.self')), 3);
      return;
    }
    const newInvite = {
      email,
      campaign: this.props.campaign._id,
      type: 'share',
    };
    const component = this;
    Meteor.call('campaign-invite-create', newInvite, (err, res) => {
      console.log('BEFORE-ERROR', err);
      if (err) {
        if (err.error === 500) {
          err.error = I18n.t(getTranslation('error.failed'));
        }

        // internal error viralizing
        console.log('ERROR', err);
        notie.alert(3, err.error, 3);
        return;
      }

      component.setState({ form: false, email: '' });
      swal(
        I18n.t(getTranslation('success.title')),
        I18n.t(getTranslation('success.description')),
        'success',
      );
      component.props.refetch();
    });
  }

  deleteInvite(invite) {
    const component = this;
    const { campaign } = this.props;
    return function () {
      swal({
        title: I18n.t(getTranslation('sent.delete.confirm.title')),
        text: I18n.t(getTranslation('sent.delete.confirm.description')),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: I18n.t(getTranslation('sent.delete.confirm.confirm')),
        cancelButtonText: I18n.t(getTranslation('sent.delete.confirm.cancel')),
      }).then(() => {
        Meteor.call('campaign-invite-delete', invite, campaign._id, (err, res) => {
          if (err) {
            notie.alert(3, I18n.t(getTranslation('sent.error')), 3);
            return;
          }
          component.props.refetch({
            campaignID: campaign._id,
          });
          notie.alert(1, I18n.t(getTranslation('sent.success')), 3);
        });
      });
    };
  }

  tooltipContent(content) {
    return <Tooltip id="tooltip_content">{content}</Tooltip>;
  }

  render() {
    const {
      invites, campaign, isOwner, isManager,
    } = this.props;
    if (!isManager && !isOwner) {
      return <div />;
    }
    const shares = this.props.input.value;
    return (
      <div className="row">
        <div className="col-md-12">
          <h5><Translate value={getTranslation('shares.title')} /></h5>
        </div>
        <div className="col-md-9">
          {(shares && campaign.shares.length !== 0) && (
            <div className="form-group">
              <label htmlFor="sharedWith">
                <Translate value={getTranslation('shares.current')} />
              </label>
              <ul className="list-group list-group-full">
                {shares.map(campaign => (
                  <li className="list-group-item" key={campaign._id}>
                    <div className="media">
                      <div className="media-left">
                        <a className="avatar" href="javascript:void(0)">
                          <img className="img-fluid" src={campaign.profile.avatar} alt="..." />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4
                          className="media-heading"
                        >
                          {`${campaign.profile.name || ''} ${campaign.profile.lastName || ''}`}
                        </h4>
                        <small>{campaign.emails ? campaign.emails[0].address : '-'}</small>
                      </div>
                      <div className="media-right">
                        <OverlayTrigger
                          placement="top"
                          overlay={this.tooltipContent(<Translate
                            value={getTranslation('sent.delete.label')}
                          />)}
                        >
                          <i
                            className="icon wb-trash"
                            aria-hidden="true"
                            onClick={this.removeShare(campaign)}
                          />
                        </OverlayTrigger>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="row">
            <div className="col-md-8" style={{ height: '88px' }}>
              <div
                className="form-group"
                style={{
                  margin: '0', position: 'absolute', bottom: '0', width: '93%',
                }}
              >
                <label htmlFor="informationName">
                  <Translate value={getTranslation('shares.form.title')} />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={I18n.t(getTranslation('placeholder'))}
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
            </div>
            <div className="col-md-4">
              <a
                className="btn btn-primary"
                style={{
                  marginTop: '51px', backgroundColor: '#c28c58', borderColor: '#c28c58', height: '37px', padding: '5px 10px',
                }}
                onClick={this.sendInvite}
              >
                <Translate value={getTranslation('send')} />
              </a>
            </div>
          </div>
        </div>


        {(invites && invites.length > 0) && (
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="sharedWith">
                <Translate value={getTranslation('shares.pending')} />
              </label>

              {invites.map(invite => (
                <div className="input-group" key={invite._id} style={{ marginBottom: '25px' }}>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={`${invite.email} (${I18n.t(getTranslation(`status.${invite.status}`))})`}
                    disabled
                  />
                  <span className="input-group-btn">
                    <a className="btn btn-primary">
                      <OverlayTrigger
                        placement="top"
                        overlay={this.tooltipContent(<Translate
                          value={getTranslation('sent.delete.label')}
                        />)}
                      >
                        <i
                          className="icon wb-trash"
                          aria-hidden="true"
                          onClick={this.deleteInvite(invite)}
                        />
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

export default CampaignShares;
