import React from 'react';
import { Translate } from 'react-redux-i18n';
import ContentSoon from '../../../core/ui/components/content-soon';
import AnalyticsComments from './analytics/comments';
import AnalyticsEngagement from './analytics/engagement';
import AnalyticsFavorites from './analytics/favorites';
import AnalyticsFollows from './analytics/follows';
import AnalyticsLikes from './analytics/likes';
import AnalyticsPosts from './analytics/posts';
import AnalyticsRetweets from './analytics/retweets';
import AnalyticsShares from './analytics/shares';
import AnalyticsInidicators from './analytics/Indicators';

class Analytics extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };

    this.reloadAnalytics = this.reloadAnalytics.bind(this);
  }

  reloadAnalytics() {
    let component = this;
    let { account, refetch } = this.props;

    this.setState({ loading: true });
    Meteor.call('profile-get-stats', account, function (err, res) {
      //console.log("RELOAD ANALYTICS",err,res);

      refetch({ _id: account._id });
      component.setState({ loading: false });
    });
  }

  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.status.' + key;
    };
    let { stats } = this.props;
    if (!stats) {
      return <ContentSoon content={<Translate value={getTranslation('soon.title')}/>}/>;
    }
    let { retweets, retweetsPerPost, favorites, favoritesPerPost, comments, commentsPerPost, likes, likesPerPost, shares, sharesPerPost, engagement, followers, following, profileLikes, posts, postsPerDay } = stats;
    return (
      <div className="content-padding-30">
        <a onClick={this.reloadAnalytics} className="btn btn-icon btn-primary pull-right spinner">
          {this.state.loading ? <i className="fa fa-circle-o-notch "/> : 'Reload'}
        </a>
        <div className="spacer-30"></div>

        <div className="row">
          <AnalyticsInidicators data={{
            likes,
            likesPerPost,
            shares,
            sharesPerPost,
            engagement,
            followers,
            following,
            profileLikes,
            posts,
            postsPerDay
          }}/>

        </div>
        <div className="clearfix visible-lg-block"/>


      </div>
    );
  }
}

export default Analytics;
