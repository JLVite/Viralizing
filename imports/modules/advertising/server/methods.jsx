import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'advertising-facebook-create-compound-ad': function (IDs, data) {
    let { accountID, adAccountID, adSetID } = IDs;
    let userID = Meteor.userId();
    if (!userID) throw new Meteor.Error(401, 'Not allowed');
    let errors = [];
    let { creative, ad } = data;

    let processedFile = creative.image.split(',')[1];
    let image = Meteor.call('fb-marketing-images-create', accountID, adAccountID, processedFile);

    let hashImage = image.images.bytes.hash;
    console.log('IMAGE_UPLOAD', hashImage);
    creative = {
      title: creative.title,
      account_id: adAccountID,
      body: creative.body,
      //image_url: creative.image,
      image_hash: hashImage,
      link_url: creative.link,
      //object_id: "369756380077148",
      object_story_spec: {
        'link_data': {
          image_hash: hashImage,
          'call_to_action': {
            'type': 'SIGN_UP',
            'value': { 'link': 'https://www.facebook.com/ibolviralizing/' }
          },
          'link': 'https://www.facebook.com/ibolviralizing/',
          'message': 'try it out'
        },
        'page_id': '369756380077148',
        'instagram_actor_id': ''
      }
    };

    let creativeRes = Meteor.call('fb-marketing-adCreative-create', accountID, adAccountID, creative);
    let creativeID = creativeRes.id;
    if (!creativeID) errors.push(creativeRes);
    ad = {
      name: ad.name,
      adset_id: adSetID,
      creative: { creative_id: creativeID },
      status: 'ACTIVE' //ACTIVE, PAUSED, DELETED, ARCHIVED
    };
    let adRes = Meteor.call('fb-marketing-ads-create', accountID, adAccountID, adSetID, creativeID, ad);
    if (!adRes.id) errors.push(adRes);

    if (errors.length > 0) return { errors };
    return adRes;
  }
});
