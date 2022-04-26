import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import UrlShorter from 'node-url-shorter';
import { HTTP } from 'meteor/http';
import PostSchema from '../../../server/schemas/posts/schema';
import { I18n } from 'react-redux-i18n';

Meteor.methods({
  'posts-scheduler-convocatories': function (data) {

    let userID = Meteor.userId();
    let urlRegEx = new RegExp('(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})');
    let getTranslation = (key) => {
      return 'Agenda.methods.error.' + key;
    };
    let err = '';
    /*if (!data.message || typeof (data.message) !== 'string') {
      err = I18n.t(getTranslation('message'))
      throw new Meteor.Error(400, err);
    }
    // if (!data.accounts || data.accounts.length === 0) {
    //   err = I18n.t(getTranslation('accounts'))
    //   throw new Meteor.Error(400, err);
    // }
    if (!data.date || typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('date'))
      throw new Meteor.Error(400, err);
    }
    if (data.deadline && typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('dead_line'))
      throw new Meteor.Error(400, err);
    }
    // if (data.location && !Array.isArray(data.location) && data.location.length !== 2 && typeof (data.location[0]) !== 'number' && typeof (data.location[1]) !== 'number') {
    //   err = I18n.t(getTranslation('location'))
    //   throw new Meteor.Error(400, err);
    // }
    if (data.media && typeof (data.media) === 'string' && !data.media.match(urlRegEx)) {
      err = I18n.t(getTranslation('media'))
      throw new Meteor.Error(400, err);
    }
    if (data.campaign && typeof (data.campaign) !== 'string') {
      err = I18n.t(getTranslation('campaign'))
      throw new Meteor.Error(400, err);
    }

    if (data.status && typeof (data.status) !== 'string') {
      err = I18n.t(getTranslation('status'))
      throw new Meteor.Error(400, err);
    }
    if (data.hashtags && data.hashtags.length !== 0 && data.hashtags.every((e) => typeof (e) !== 'string')) {
      err = I18n.t(getTranslation('hashtags'))
      throw new Meteor.Error(400, err);
    }

    if (data.hashtags) {
      data.hashtags.forEach(function (hashtag) {
        data.message += ' ' + hashtag;
      });
    }*/


    let arrayPost = data.map(invite => {

      const account = SocialAccounts.findOne({_id:invite.accountId})

      let array = invite.messages.map(msg => {
          let newPost = Object.assign({}, PostSchema);
          newPost.owner = userID;
          newPost.type = msg.type;
          newPost.date = msg.date;
          newPost.campaign = invite.campaignId;
          newPost.status = invite.status || 'scheduled';
          newPost.account = {
            _id: account._id,
            name: account.information.name,
            lastName: account.information.lastName,
            avatar: account.information.avatar,
            network: account.network,
          };
          newPost.data.message = msg.message;
          newPost.data.media = msg.media;
          newPost.data.location = msg.location;

          console.log('newPost',newPost)

          Posts.insert(newPost);
          return newPost;
        });
        return array;
      });

    return arrayPost;
  },
  'posts-scheduler-account': function (data, userID) {

    console.log("DATA POST",data)

    userID = userID || Meteor.userId();
    let urlRegEx = new RegExp('(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})');
    let getTranslation = (key) => {
      return 'Agenda.methods.error.' + key;
    };
    let err = '';
    if (!data.type || typeof (data.type) !== 'string') {
      err = I18n.t(getTranslation('type'))
      throw new Meteor.Error(400, err);
    }
    if (!data.message || typeof (data.message) !== 'string') {
      err = I18n.t(getTranslation('message'))
      throw new Meteor.Error(400, err);
    }
    // if (!data.accounts || data.accounts.length === 0) {
    //   err = I18n.t(getTranslation('accounts'))
    //   throw new Meteor.Error(400, err);
    // }
    if (!data.date || typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('date'))
      throw new Meteor.Error(400, err);
    }
    if (data.deadline && typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('dead_line'))
      throw new Meteor.Error(400, err);
    }
    // if (data.location && !Array.isArray(data.location) && data.location.length !== 2 && typeof (data.location[0]) !== 'number' && typeof (data.location[1]) !== 'number') {
    //   err = I18n.t(getTranslation('location'))
    //   throw new Meteor.Error(400, err);
    // }
    if (data.media && typeof (data.media) === 'string' && !data.media.match(urlRegEx)) {
      err = I18n.t(getTranslation('media'))
      throw new Meteor.Error(400, err);
    }
    if (data.campaign && typeof (data.campaign) !== 'string') {
      err = I18n.t(getTranslation('campaign'))
      throw new Meteor.Error(400, err);
    }
    if (data.invite && typeof (data.invite) !== 'string') {
      err = I18n.t(getTranslation('invite'))
      throw new Meteor.Error(400, err);
    }
    if (data.isPaid && typeof (data.isPaid) !== 'boolean') {
      err = I18n.t(getTranslation('is_paid'))
      throw new Meteor.Error(400, err);
    }
    if (data.status && typeof (data.status) !== 'string') {
      err = I18n.t(getTranslation('status'))
      throw new Meteor.Error(400, err);
    }
    if (data.hashtags && data.hashtags.length !== 0 && data.hashtags.every((e) => typeof (e) !== 'string')) {
      err = I18n.t(getTranslation('hashtags'))
      throw new Meteor.Error(400, err);
    }

    if (data.hashtags) {
      data.hashtags.forEach(function (hashtag) {
        data.message += ' ' + hashtag;
      });
    }



    let newPost = Object.assign({}, PostSchema);
    newPost.owner = userID;
    newPost.type = data.type;
    newPost.date = data.date;
    newPost.deadline = data.deadline || null;
    newPost.campaign = data.campaign || null;
    newPost.invite = data.invite || null;
    newPost.status = data.status || 'scheduled';
    newPost.isPaid = data.isPaid || false;
    newPost.account = {
      _id: data.account._id,
      name: data.account.information.name,
      lastName: data.account.information.lastName,
      avatar: data.account.information.avatar,
      network: data.account.network
    };
    newPost.data.message = data.message;
    newPost.data.media = data.media;
    newPost.data.location = data.location;

    let postID = Posts.insert(newPost)

    return postID;
  },
  'posts-scheduler': function (data, userID) {

    console.log("DATA POST",data)

    userID = userID || Meteor.userId();
    let urlRegEx = new RegExp('(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})');
    let getTranslation = (key) => {
      return 'Agenda.methods.error.' + key;
    };
    let err = '';
    if (!data.message || typeof (data.message) !== 'string') {
      err = I18n.t(getTranslation('message'))
      throw new Meteor.Error(400, err);
    }
    if (!data.type || typeof (data.type) !== 'string') {
      err = I18n.t(getTranslation('type'))
      throw new Meteor.Error(400, err);
    }
    if (!data.accounts || data.accounts.length === 0) {
       err = I18n.t(getTranslation('accounts'))
       throw new Meteor.Error(400, err);
    }
    if (!data.date || typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('date'))
      throw new Meteor.Error(400, err);
    }
    if (data.deadline && typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('dead_line'))
      throw new Meteor.Error(400, err);
    }
    // if (data.location && !Array.isArray(data.location) && data.location.length !== 2 && typeof (data.location[0]) !== 'number' && typeof (data.location[1]) !== 'number') {
    //   err = I18n.t(getTranslation('location'))
    //   throw new Meteor.Error(400, err);
    // }
    if (data.media && typeof (data.media) === 'string' && !data.media.match(urlRegEx)) {
      err = I18n.t(getTranslation('media'))
      throw new Meteor.Error(400, err);
    }
    if (data.campaign && typeof (data.campaign) !== 'string') {
      err = I18n.t(getTranslation('campaign'))
      throw new Meteor.Error(400, err);
    }
    if (data.invite && typeof (data.invite) !== 'string') {
      err = I18n.t(getTranslation('invite'))
      throw new Meteor.Error(400, err);
    }
    if (data.isPaid && typeof (data.isPaid) !== 'boolean') {
      err = I18n.t(getTranslation('is_paid'))
      throw new Meteor.Error(400, err);
    }
    if (data.status && typeof (data.status) !== 'string') {
      err = I18n.t(getTranslation('status'))
      throw new Meteor.Error(400, err);
    }
    if (data.hashtags && data.hashtags.length !== 0 && data.hashtags.every((e) => typeof (e) !== 'string')) {
      err = I18n.t(getTranslation('hashtags'))
      throw new Meteor.Error(400, err);
    }

    if (data.hashtags) {
      data.hashtags.forEach(function (hashtag) {
        data.message += ' ' + hashtag;
      });
    }


    let postIDs = [];
    data.accounts.forEach(function (account) {
      let newPost = Object.assign({}, PostSchema);
      newPost.owner = userID;
      newPost.type = data.type;
      newPost.date = data.date;
      newPost.deadline = data.deadline || null;
      newPost.campaign = data.campaign || null;
      newPost.invite = data.invite || null;
      newPost.status = data.status || 'scheduled';
      newPost.isPaid = data.isPaid || false;
      newPost.account = {
        _id: account._id,
        name: account.information.name,
        lastName: account.information.lastName,
        avatar: account.information.avatar,
        network: account.network
      };
      newPost.data.message = data.message;
      newPost.data.media = data.media;
      newPost.data.location = data.location;

      postIDs.push(Posts.insert(newPost));
    });

    return postIDs;
  },
  'edit-scheduler': function (data, postID, userID) {
    userID = userID || Meteor.userId();
    
    if(!data.account && data.accountId){
      data.account=SocialAccounts.findOne({_id: data.accountId})
    }

    if(!data.account) throw new Meteor.Error(404, 'Social Account not found')

    data.accounts = {
      name: data.account.information.name,
      lastName: data.account.information.lastName,
      avatar: data.account.information.avatar,
      network: data.account.network,
      _id: data.account._id,
    }
    
    let urlRegEx = new RegExp('(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})');
    let getTranslation = (key) => {
      return 'Agenda.methods.error.' + key;
    };
    let err = '';
    if (!data.message || typeof (data.message) !== 'string') {
      err = I18n.t(getTranslation('message'))
      console.log(err)
      err.translation='message';
      throw new Meteor.Error(400, err);
    }
    // if (!data.accounts || data.accounts.length === 0) {
    //   err = I18n.t(getTranslation('accounts'))
    //   throw new Meteor.Error(400, err);
    // }
    if (!data.date || typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('date'))
      throw new Meteor.Error(400, err);
    }
    if (data.deadline && typeof data.date.getMonth !== 'function') {
      err = I18n.t(getTranslation('dead_line'))
      throw new Meteor.Error(400, err);
    }
    // if (data.location && !Array.isArray(data.location) && data.location.length !== 2 && typeof (data.location[0]) !== 'number' && typeof (data.location[1]) !== 'number') {
    //   err = I18n.t(getTranslation('location'))
    //   throw new Meteor.Error(400, err);
    // }
    if (data.media && typeof (data.media) === 'string' && !data.media.match(urlRegEx)) {
      err = I18n.t(getTranslation('media'))
      throw new Meteor.Error(400, err);
    }
    if (data.campaign && typeof (data.campaign) !== 'string') {
      err = I18n.t(getTranslation('campaign'))
      throw new Meteor.Error(400, err);
    }
    if (data.invite && typeof (data.invite) !== 'string') {
      err = I18n.t(getTranslation('invite'))
      throw new Meteor.Error(400, err);
    }
    if (data.isPaid && typeof (data.isPaid) !== 'boolean') {
      err = I18n.t(getTranslation('is_paid'))
      throw new Meteor.Error(400, err);
    }
    if (data.status && typeof (data.status) !== 'string') {
      err = I18n.t(getTranslation('status'))
      throw new Meteor.Error(400, err);
    }
    if (data.hashtags && data.hashtags.length !== 0 && data.hashtags.every((e) => typeof (e) !== 'string')) {
      err = I18n.t(getTranslation('hashtags'))
      throw new Meteor.Error(400, err);
    }


    if (data.hashtags) {
      data.hashtags.forEach(function (hashtag) {
        data.message += ' ' + hashtag;
      });
    }

    

    let newPost = Object.assign({}, PostSchema);

    newPost.owner = userID;
    newPost.type = data.type;
    newPost.date = data.date;
    newPost.deadline = data.deadline || null;
    newPost.campaign = data.campaign || null;
    newPost.invite = data.invite || null;
    newPost.status = data.status || 'scheduled';
    newPost.isPaid = data.isPaid || false;
    newPost.account = data.accounts
    newPost.data.message = data.message;
    newPost.data.media = data.media;
    newPost.data.location = data.location;

    console.log("NEW-POST",newPost)

    Posts.update({_id:postID},newPost);
    return newPost;
  },
  'request-event': function (postID) {
    const event = Posts.findOne({_id:postID});
    return event;
  },
  'posts-fake-create': function () {
    console.log('POSTS_FAKE-CALLED');
    let accounts = [
      {
        '_id': '6eGeKTxGbNuLfjbtk',
        'network': 'twitter',
        'information': {
          'avatar': 'https://pbs.twimg.com/profile_images/826115681946988544/TgOgp2gP_normal.jpg',
          'lastName': 'Incorp',
          'name': 'Ibol_Inc'
        },
        'connection': {
          'id': '825526971505446912',
          'screenName': 'Ibol_Inc',
          'accessToken': '825526971505446912-BKiaP4KjYkYFfMCmYDc2AkLZjpcLkV0',
          'accessTokenSecret': 'UZXTVYOiaIgh50kaDxNFRSx9wbAzWF67ndT9UFvcWurto',
          'profile_image_url': 'http://pbs.twimg.com/profile_images/826115681946988544/TgOgp2gP_normal.jpg',
          'profile_image_url_https': 'https://pbs.twimg.com/profile_images/826115681946988544/TgOgp2gP_normal.jpg',
          'lang': 'en'
        }
      }, {
        '_id': 'JTpPdmWj8HHSHE49u',
        'network': 'facebook',
        'information': {
          'avatar': 'https://graph.facebook.com/133170043861498/picture?type=large',
          'lastName': 'Incorp',
          'name': 'Ibol'
        },
        'connection': {
          'accessToken': 'EAAQ8cdw98pUBAAxD8QsSqdMPJWdZAkpHTHwJTZAVIABQCfMjoCgE51GdSbUGUZAzCDJyWDHaACFUIooFW7c77qLKREuRodIy7TB6KRrFfZBHV5Y8i1TAyGq8CB2uvTOz8kGFwgZBiuPkaQKdhhOYwg1CQrZBwxR1oRKarZCyWtvHgZDZD',
          'expiresAt': 1492367978241,
          'id': '133170043861498',
          'name': 'Ibol Incorp',
          'first_name': 'Ibol',
          'last_name': 'Incorp',
          'link': 'https://www.facebook.com/app_scoped_user_id/133170043861498/',
          'gender': 'male',
          'locale': 'en_US',
          'age_range': { 'min': 21 }
        }
      }, {
        '_id': 'pBnZgT5E3x7Cekj8a',
        'network': 'instagram',
        'information': {
          'avatar': 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/16230362_1842733642635953_3112165154159067136_n.jpg',
          'lastName': '',
          'name': 'Ibol'
        },
        'connection': {
          'bio': '',
          'username': 'ibol_viralizing',
          'id': '4533566292',
          'full_name': 'Ibol',
          'website': '',
          'profile_picture': 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/16230362_1842733642635953_3112165154159067136_n.jpg',
          'accessToken': '4533566292.aef68f0.6e138f18196345c596dd6e80d6ab59aa'
        }
      }];
    let i;
    let lastDate = new Date();
    let posts = [];

    for (i = 0; i < 100; i++) {
      console.log('POST_' + i + '_INITIATED', lastDate);
      let accountPosition = Math.floor(Math.random() * 3);
      let account = accounts[accountPosition];
      let newPost = Object.assign({}, PostSchema);
      let minutesOffset = Math.floor(Math.random() * 3) + 1;

      newPost.owner = Meteor.userId();
      newPost.type = 'post';
      newPost.date = moment(lastDate).add(minutesOffset, 'minutes').toDate();
      newPost.status = 'scheduled';
      newPost.isPaid = false;
      newPost.account = {
        _id: account._id,
        name: account.information.name,
        lastName: account.information.lastName,
        avatar: account.information.avatar,
        network: account.network
      };
      newPost.data.message = 'This is a test message #viralizing';
      newPost.data.media = 'https://scontent.fmex7-1.fna.fbcdn.net/v/t31.0-8/16252222_130164834162019_8387112973073187684_o.jpg?oh=7921c404001814ff46dd3ff43601f63b&oe=59306168';

      lastDate = moment(newPost.date).toDate();

      posts.push(Posts.insert(newPost));
      console.log('POST_' + i + '_CREATED');
    }

    console.log('FOR_LOOP_FINISHED', posts.length);

    return posts;
  },
  'post-get-short-url': function (url) {
    check(url, String);
    return HTTP.call('POST', 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBcythzarlyApVyP89lJ8W4QagEYVhru2E', {
      data: {
        longUrl: url
      }
    }).data.id;
  }
});
