import React from 'react';
import { Translate } from 'react-redux-i18n';
import SocialAvatar from '../../../../../core/ui/components/social-avatar';

class CampaignInvitesPosts extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.invites.view.list.' + key;
    };
    if (!this.props.posts) {
      return null;
    }
    return (
      <div className="post-list">
        {this.props.posts.map((post, i) => (
          <div className="post" key={i}>
            <SocialAvatar name={(post.account.name || '') + ' ' + (post.account.lastName || '')}
                          avatar={post.account.avatar} network={post.account.network} size="50"/>
            <div className="status">
              <Translate value={getTranslation('status.' + post.status)}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CampaignInvitesPosts;
