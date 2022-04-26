import { Meteor } from 'meteor/meteor';
import Feed from 'feed-read-parser';
import jsdom from 'jsdom';

Meteor.methods({
  'rss-feed': function (url) {
    let syncFeed = Meteor.wrapAsync(Feed);
    let syncDom = Meteor.wrapAsync(jsdom.env, jsdom);
    return syncFeed(url).map(a => {
      let __PATH__ = a.link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[0];
      let dom = syncDom(a.content);
      let { author, title, link } = a;
      let image = dom.document.getElementsByTagName('img')[0];
      let article = {
        author,
        title,
        link,
        image: image ? image.src : 'http://viralizing.me/wp-content//uploads/2017/03/60fa9bmxvpe-redd-angelo-uai-258x145.jpg'
      };
      return article;
    });
  }
});
