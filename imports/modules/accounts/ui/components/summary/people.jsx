import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

class SummaryPeople extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.summary.people.' + key;
    };
    let { owner, manager, shares } = this.props;
    let titleStyle = {
      width: '70px',
      transform: 'translateY(10px)'
    };
    return (
      <div className="col-md-4">
        <div className="panel">
          <div className="panel-body slim">
            <div className="row">
              <div className="col-md-6">
                <h4><Translate value={getTranslation('owner')}/></h4>
                <div className="form-avatar">
                  <SocialAvatar avatar={owner.profile.avatar}
                                name={(owner.profile.name || '') + ' ' + (owner.profile.lastName || '')}
                                size="50"/>
                  <div className="title" style={titleStyle}>
                    {(owner.profile.name || '') + ' ' + (owner.profile.lastName || '')}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h4><Translate value={getTranslation('manager')}/></h4>
                <div className="form-avatar">
                  <SocialAvatar avatar={manager.profile.avatar}
                                name={(manager.profile.name || '') + ' ' + (manager.profile.lastName || '')}
                                size="50"/>
                  <div className="title" style={titleStyle}>
                    {(manager.profile.name || '') + ' ' + (manager.profile.lastName || '')}
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer-20"/>

            {shares.length !== 0 && (
              <div className="row">
                <div className="col-md-12">
                  <h4><Translate value={getTranslation('shares')}/></h4>
                  <div className="avatar-horizontal-list">
                    {shares.map((account) => (
                      <div className="form-avatar">
                        <SocialAvatar avatar={account.profile.avatar}
                                      name={(account.profile.name || '') + ' ' + (account.profile.lastName || '')}
                                      size="50"/>
                        <div className="title">
                          {(account.profile.name || '') + ' ' + (account.profile.lastName || '')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryPeople;
