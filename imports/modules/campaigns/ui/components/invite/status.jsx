import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import AccountInvite from './invite';
import swal from 'sweetalert2';
import notie from 'notie';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.settings.form.invite.sent.' + key;
};

class InviteStatus extends React.Component {
  constructor() {
    super();

    this.deleteInvite = this.deleteInvite.bind(this);
  }

  deleteInvite() {
    let component = this;
    let { invite, campaign } = this.props;
    swal({
      title: I18n.t(getTranslation('delete.confirm.title')),
      text: I18n.t(getTranslation('delete.confirm.description')),
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: I18n.t(getTranslation('delete.confirm.confirm')),
      cancelButtonText: I18n.t(getTranslation('delete.confirm.cancel'))
    }).then(function () {
      Meteor.call('campaign-invite-delete', invite, campaign._id, function (err, res) {
        if (err) {
          notie.alert(3, I18n.t(getTranslation('error')), 3);
          return;
        }
        // component.props.refetch({
        //   accountID: campaign._id
        // });

        component.props.refetch()

        notie.alert(1, I18n.t(getTranslation('success')), 3);
      });
    });
  }

  tooltipContent(content) {
    return <Tooltip id="tooltip_content">{content}</Tooltip>;
  }

  render() {
    let { manager, userId, campaign, invite, refetch, isOwner } = this.props;
    return (
      <div className="row">
        <AccountInvite manager={manager} userId={userId} campaign={campaign} hasInvite={invite ? true : false}
                       refetch={refetch} isOwner={isOwner}/>

        {invite && (
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('label')}/>
              </label>
              <div className="input-group">
                <input type="text" className="form-control"
                       defaultValue={invite.email + ' (' + I18n.t(getTranslation('status.' + invite.status)) + ')'}
                       disabled/>
                <span className="input-group-btn">
                                    <a className="btn btn-primary">
                                        <OverlayTrigger placement="top"
                                                        overlay={this.tooltipContent(<Translate
                                                          value={getTranslation('delete.label')}/>)}>
                                                <i className="icon wb-trash" aria-hidden="true"
                                                   onClick={this.deleteInvite}/>
                                            </OverlayTrigger>
                                    </a>
                                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default InviteStatus;
