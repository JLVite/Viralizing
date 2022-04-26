import { Meteor } from 'meteor/meteor';

export default {
  Query: {
    getNews(root, args, context) {
      let path = 'http://viralizing.me';
      let tag = 'news';
      if (args.lang === 'es') {
        path = 'http://viralizing.me/es';
        tag = 'noticias';
      }

      let blog = Meteor.call('rss-feed', path + '/feed/') || [];
      blog.map((n) => Object.assign(n, { type: 'blog' }));
      let news = Meteor.call('rss-feed', path + '/feed/?tag=' + tag) || [];
      news.map((n) => Object.assign(n, { type: 'news' }));

      return [...blog, ...news];
    }
  }
};
