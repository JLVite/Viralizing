import React from 'react';
import { Translate } from 'react-redux-i18n';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

class People extends React.Component {
  render() {
    const getTranslation = key => `Campaigns.edit.tabs.summary.${key}`;
    const { owner, manager } = this.props;
    const titleStyle = {
      width: '70px',
      transform: 'translateY(10px)',
    };
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h4><Translate value={getTranslation('owner')} /></h4>
            <div className="form-avatar">
              <SocialAvatar
                avatar={owner.profile.avatar}
                name={`${owner.profile.name || ''} ${owner.profile.lastName || ''}`}
                size="50"
              />
              <div className="title" style={titleStyle}>
                {`${owner.profile.name || ''} ${owner.profile.lastName || ''}`}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4><Translate value={getTranslation('manager')} /></h4>
            <div className="form-avatar">
              <SocialAvatar
                avatar={manager.profile.avatar}
                name={`${manager.profile.name || ''} ${manager.profile.lastName || ''}`}
                size="50"
              />
              <div className="title" style={titleStyle}>
                {`${manager.profile.name || ''} ${manager.profile.lastName || ''}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default People;
