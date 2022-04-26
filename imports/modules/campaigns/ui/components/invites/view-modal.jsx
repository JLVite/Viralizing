import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import CampaignInvitesPending from './view/pending';
import InvitePostsContainer from '../../containers/invite-posts';

class CampaignInvitesEdit extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.invites.' + key;
    };
    let { invite } = this.props;
    console.log('INVITE',invite)
    return (
      <div className="invite-view">
        <div className="row">
          <div className="col-md-4">
            <div className="panel post">
              <div className="panel-body container-fluid">
                <div className="image">
                  <img src={invite.message.media} alt=""/>
                </div>
                <p className="form-control-static">{invite.message.message}</p>
                <p className="form-control-static">{invite.message.hashtags.join(', ')}</p>
              </div>
            </div>

            <div className="panel">
              <div className="panel-body container-fluid">
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('edit.form.name')}/>
                  </label>
                  <input type="text" defaultValue={invite.name} disabled className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('edit.form.deadline')}/>
                  </label>
                  <input type="text" defaultValue={moment(new Date(invite.deadline)).format('DD/MM/YY')} disabled
                         className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('edit.steps.labels.date')}/>
                  </label>
                  <input type="text" defaultValue={moment(new Date(invite.date)).format('DD/MM/YY')} disabled
                         className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="informationName">
                    <Translate value={getTranslation('edit.form.type.label')}/>
                  </label>
                  <input type="text" defaultValue={I18n.t(getTranslation('edit.form.type.values.post'))} disabled
                         className="form-control"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            {invite.status === 'scheduled' ? <CampaignInvitesPending/> : <InvitePostsContainer
              campaignID={this.props.campaign._id} inviteID={invite._id}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignInvitesEdit;
