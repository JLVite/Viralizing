import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

let getTranslation = (key) => {
  return 'Campaigns.edit.tabs.invites.' + key;
};

class CampaignInvitesHeader extends React.Component {
  render() {
    let { campaign, updateViewType } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>{campaign.information.name}</h1>
          </div>

          <div className="col-md-6 controls">

            {campaign.information.brands && (
              <div className="pull-right">
                <SocialAvatar avatar={campaign.information.brands[0].information.avatar}
                              network={campaign.information.brands[0].network}
                              name={(campaign.information.brands[0].information.name || '') + ' ' + (campaign.information.brands[0].information.lastName || '')}
                              size="50"/>
                {(campaign.information.brands[0].information.name || '') + ' ' + (campaign.information.brands[0].information.lastName || '')}
              </div>
            )}
            <ul className="pull-right">
              <li onClick={updateViewType('table')}>
                <i className="fa fa-bars" aria-hidden="true"/>
              </li>
              <li onClick={updateViewType('list')}>
                <i className="fa fa-table" aria-hidden="true"/>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default CampaignInvitesHeader;
