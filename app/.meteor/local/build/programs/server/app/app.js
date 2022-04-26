var require = meteorInstall({"imports":{"modules":{"campaigns":{"server":{"cron-jobs":{"actions":{"invites-scheduled.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/cron-jobs/actions/invites-scheduled.jsx                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
//console.log("Invites-Scheduled");
Meteor.methods({
  "invites-scheduled-run": function () {
    let invites = Invites.find({
      status: "scheduled"
    });
    let schedules = [];
    invites.forEach(function (invite) {
      let accounts = SocialAccounts.find({
        _id: {
          $in: invite.members
        }
      }, {
        fields: {
          "_id": 1,
          "information.name": 1,
          "information.lastName": 1,
          "information.avatar": 1,
          "network": 1
        }
      }).fetch();
      let data = {
        message: invite.message.message,
        accounts,
        status: "pending",
        campaign: invite.campaign,
        invite: invite._id,
        isPaid: true,
        date: invite.date,
        deadline: invite.deadline,
        media: invite.message.media,
        hashtags: invite.message.hashtags
      };
      schedules.push(data);
      Meteor.call("posts-scheduler", data, invite.owner);
      Invites.update(invite._id, {
        $set: {
          status: "sent"
        }
      });
    });
    return {
      data: schedules
    };
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts-scheduled.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/cron-jobs/actions/posts-scheduled.jsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
Meteor.methods({
  "posts-scheduled-run": function () {
    let currentTime = moment().second(0).toDate(),
        dateCeil = moment(currentTime).add(4, "minutes").toDate();
    let query = {
      status: "scheduled",
      date: {
        $lte: dateCeil
      }
    };
    let posts = Posts.find(query).fetch();
    let accountIDs = posts.map(p => p.account._id);
    let accounts = SocialAccounts.find({
      _id: {
        $in: accountIDs
      }
    }, {
      fields: {
        network: 1,
        _id: 1,
        connection: 1
      }
    }).fetch();

    if (posts.length === 0) {} //console.log("NO_POSTS_FOUND_TO_RUN");
    //console.log("POSTS_RUN_TIME_FROM:", currentTime, "_TO_", dateCeil, "_FOUND:", posts.length, "_POSTS");


    posts.forEach(function (post) {
      let account = accounts.filter(a => a._id === post.account._id)[0];

      if (account) {
        let method = "";

        switch (account.network) {
          case "facebook":
            method = "facebook-post-create";
            break;

          case "twitter":
            method = "twitter-post-create";
            break;

          case "instagram":
            method = "instagram-post-create";
            break;

          default:
            throw new Meteor.error(500, "Invalid Social Network");
        }

        post.data.date = post.date;
        Meteor.call(method, account.connection, post.data, function () {
          //console.log("SOCIAL_MEDIA_POST_SUCCESFUL");
          Posts.update({
            _id: post._id
          }, {
            $set: {
              status: "published"
            }
          });
        });
      } else {//TODO: Send Email to acknowledge error in dev.
        //console.log("[ERROR]: POSTING ERROR: NO ACCOUNT MARCH", post._id);
      }
    });
    return posts;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"invites.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/cron-jobs/invites.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
SyncedCron.add({
  name: "Run Invites Actions",
  schedule: function (parser) {
    return parser.text("every 1 minutes");
  },
  job: function () {
    //Meteor.call("invites-scheduled-run");
    return true;
  }
}); //Add CronJob every day for
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/cron-jobs/posts.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//console.log("EVENT_CRON");
SyncedCron.add({
  name: "Run Post Actions",
  schedule: function (parser) {
    return parser.text("every 5 minutes");
  },
  job: function () {
    Meteor.call("posts-scheduled-run");
    return true;
  }
}); //Add CronJob every day for
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/bundle.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./methods"));
module.watch(require("./cron-jobs/posts"));
module.watch(require("./cron-jobs/invites"));
module.watch(require("./cron-jobs/actions/posts-scheduled"));
module.watch(require("./cron-jobs/actions/invites-scheduled"));
module.watch(require("./image-upload"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"image-upload.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/image-upload.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let uuid;
module.watch(require("uuid"), {
  default(v) {
    uuid = v;
  }

}, 0);
Slingshot.createDirective("campaign-image-upload", Slingshot.S3Storage, {
  bucket: "ibol-campaigns-media",
  acl: "public-read",
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  maxSize: 10 * 1024 * 1024,
  // 10 MB (use null for unlimited).
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  key: function (file) {
    let re = /(?:\.([^.]+))?$/;
    let fileExt = re.exec(file.name)[1];
    return Meteor.userId() + "/" + uuid.v4() + "." + fileExt;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/campaigns/server/methods.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Email;
module.watch(require("meteor/email"), {
  Email(v) {
    Email = v;
  }

}, 1);
let Settings;
module.watch(require("../../../settings"), {
  default(v) {
    Settings = v;
  }

}, 2);
let CampaignsSchema;
module.watch(require("../../../server/schemas/campaign/schema"), {
  default(v) {
    CampaignsSchema = v;
  }

}, 3);
let InviteSchema;
module.watch(require("../../../server/schemas/invites/schema"), {
  default(v) {
    InviteSchema = v;
  }

}, 4);
Meteor.methods({
  "campaigns-crate": function (data) {
    // console.log("CAMPAIGNS_CREATE_BEFORE", data);
    let user = Meteor.user();
    let newCampaign = Object.assign({}, CampaignsSchema, {
      owner: user._id,
      manager: user._id
    });
    let {
      name,
      dateStart,
      dateEnd,
      brands
    } = data;
    newCampaign.information = Object.assign({}, newCampaign.information, {
      name,
      dateStart,
      dateEnd,
      brands: brands.map(b => b._id)
    }); //console.log("CAMPAIGNS_CREATE_INSERT", newCampaign, data);

    return Campaigns.insert(newCampaign);
  },
  "campaigns-save": function (campaign) {
    const user = Meteor.user();
    let dbCampaign = Campaigns.findOne({
      _id: campaign._id
    });

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    };

    campaign.owner = campaign.owner._id;
    campaign.manager = campaign.manager._id;

    if (campaign.information.brands) {
      campaign.information.brands = campaign.information.brands.map(b => b._id);
    }

    removeTypeNames(campaign);
    return Campaigns.update(campaign._id, {
      $set: Object.assign({}, dbCampaign, campaign)
    });
  },
  "invite-create": function (invite) {
    //console.log("INVITE_CREATE");
    let user = Meteor.user();

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    };

    let newInvite = Object.assign({}, InviteSchema, invite, {
      owner: user._id
    });
    newInvite.campaign = newInvite.campaign._id;
    newInvite.influencers = newInvite.influencers.map(a => a._id);
    removeTypeNames(newInvite);
    return Invites.insert(newInvite);
  },
  "invite-update": function (invite) {
    const user = Meteor.user();

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    };

    invite.influencers = invite.influencers.map(a => a._id);
    invite.teamAttacks = invite.teamAttacks.map(a => a._id);
    removeTypeNames(invite);
    return Invites.update(invite._id, {
      $set: invite
    });
  },
  "invite-save-multiple": function (invites, campaignID) {
    let writes = [];
    invites.forEach(invite => {
      invite.campaign = campaignID;
      writes.push(Meteor.call("invite-update", invite));
    });
    return writes;
  },
  "campaign-objective-proposal": function (campaignID, data) {
    //console.log("campaign-objective-proposal", campaignID, data);
    let user = Meteor.user();
    let userName = user.profile.name;
    let action = "Objetivo de Campaña";
    let proposal = data.objective;
    this.unblock();
    let subject = "Se ha sugerido un nuevo " + action;
    let html = (userName ? userName : "El usuario") + " (" + user.emails[0].address + " - " + user._id + ")" + " ha sugerido un nuevo " + action + ": " + proposal + ".";
    Email.send({
      from: Settings.email.noReply,
      to: "hello@viralizing.me",
      subject,
      html
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"facebook":{"server":{"marketing":{"ad":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad/bundle.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
module.watch(require("./from-adset"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad/create.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-ads-create": function (accountID, adAccount, adSetID, creativeID, Ad) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    /*
    let Ad={
        name: "Test AdCreative "+moment().format("DD/MM/YYYY h:m"),
        adset_id:adSetID,
        creative: {creative_id:creativeID},
        status: "ACTIVE" //ACTIVE, PAUSED, DELETED, ARCHIVED
    };*/

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);

    try {
      return client(`${adAccount}/ads`, "post", Ad);
    } catch (e) {
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad/delete.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-ads-delete": function (accountID, adID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adID}/`, "delete");
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"from-adset.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad/from-adset.jsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-ads-from-adset": function (accountID, adSetID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adSetID}/ads`, {
      fields: ["account_id", "title", "actor_id", "body", "branded_content_sponsor_page_id", "call_to_action_type", "id", "image_crops", "image_hash", "image_url", "link_url", "name", "adlabels", "applink_treatment", "object_id", "object_story_id", "object_type", "configured_status", "effective_status", "status"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad/list.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-ads-list": function (accountID, adAccount) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/ads`, {
      fields: ["account_id", "actor_id", "adlabels", "body", "title", "call_to_action_type", "id", "image_crops", "image_hash", "image_url", "link_og_id", "link_url"]
    });
    return res.data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad/read.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-ads-read": function (accountID, adID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adID}/`, {
      fields: ["account_id", "campaign", "campaign_id", "ad_review_feedback", "adlabels", "adset", "adset_id", "bid_amount", "bid_info", "bid_type", "configured_status", "conversion_specs", "created_time", "creative", "effective_status", "id", "adcreatives", "name", "recommendations", "source_ad", "source_ad_id", "status", "tracking_specs", "updated_time", "insights", "leads"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ad-accounts":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-accounts/bundle.jsx                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./list"));
module.watch(require("./read"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-accounts/list.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adAccounts-list": function (accountID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client("me/adaccounts", {
      fields: ["name", "account_status", "business", "account_id", "id", "partner", "balance", "currency", "end_advertiser", "end_advertiser_name", "created_time", "amount_spent"]
    });
    return res.data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-accounts/read.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adAccounts-read": function (accountID, adAccountID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    if (adAccountID.split("_").length === 1) {
      adAccountID = "act_" + adAccountID;
    }

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccountID}/`, {
      fields: ["business_name", "account_id", "account_status", "business", "balance", "business_city", "business_country_code", "business_state", "business_street", "business_street2", "business_zip", "can_create_brand_lift_study", "capabilities", "created_time", "currency", "disable_reason", "end_advertiser", "end_advertiser_name", "failed_delivery_checks", "funding_source", "funding_source_details", "has_migrated_permissions", "id", "age", "amount_spent"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ad-creative":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-creative/bundle.jsx                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
module.watch(require("./from-ad"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-creative/create.jsx                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adCreative-create": function (accountID, adAccount, AdCreative) {
    console.log("fb-marketing-adCreative-create", accountID, adAccount);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    /*let AdCreative = {
        title: "Test AdCreative " + moment().format("DD/MM/YYYY h:m"),
        account_id: adAccount,
        body: "Another! This is a test creative body",
        image_url: "https://ibol-website.s3.amazonaws.com/wp-content//uploads/2017/02/z0nvqfroqwa-denys-nevozhai.jpg",
        link_url: "https://www.facebook.com/ibolviralizing/",
        //object_id: "369756380077148",
        object_story_spec: {
            "link_data": {
                "call_to_action": {
                    "type": "SIGN_UP",
                    "value": {"link": "https://www.facebook.com/ibolviralizing/"}
                },
                "link": "https://www.facebook.com/ibolviralizing/",
                "message": "try it out"
            },
            "page_id": "369756380077148",
            "instagram_actor_id": ""
        }
    };*/

    let client = Meteor.wrapAsync(Facebook.napi, Facebook);

    try {
      return res = client(`${adAccount}/adcreatives`, "post", AdCreative);
    } catch (e) {
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-creative/delete.jsx                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adCreative-delete": function (accountID, adCreativeID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adCreativeID}/`, "delete");
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"from-ad.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-creative/from-ad.jsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adCreative-from-ad": function (accountID, adID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adID}/adcreatives`, {
      fields: ["title", "account_id", "actor_id", "body", "branded_content_sponsor_page_id", "call_to_action_type", "id", "image_crops", "image_hash", "image_url", "link_url", "name", "adlabels", "applink_treatment", "object_id", "object_story_id", "object_type"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-creative/list.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adCreative-list": function (accountID, adAccount) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/adcreatives`, {
      fields: ["account_id", "actor_id", "adlabels", "body", "title", "call_to_action_type", "id", "image_crops", "image_hash", "image_url", "link_og_id", "link_url"]
    });
    return res.data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-creative/read.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adCreative-read": function (accountID, adCreativeID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adCreativeID}/`, {
      fields: ["account_id", "actor_id", "body", "branded_content_sponsor_page_id", "call_to_action_type", "id", "image_crops", "image_hash", "image_url", "link_url", "name", "adlabels", "applink_treatment", "object_id", "object_story_id", "object_type"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ad-sets":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-sets/bundle.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
module.watch(require("./from-campaign"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-sets/create.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adsets-create": function (accountID, adAccount, options) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let AdSetexample = {
      "name": "My New Ad Set",
      "optimization_goal": "REACH",
      "adLabels": ["sad", "das"],
      "daily_budget": 2000,
      "bid_amount": 2,
      "start_time": "2018-09-12 23:59:56-07:00",
      "end_time": "2018-09-15 23:59:56-07:00",
      "billing_event": "IMPRESSIONS",
      "campaign_id": "23842849843970485",
      "status": "PAUSED",
      "targeting": {
        "user_device": ["Galaxy S6", "One m9"],
        "user_os": ["android"],
        "geo_locations": {
          "countries": ["US"]
        },
        "publisher_platforms": ["facebook"]
      }
    };
    const validObj = {
      "name": "My date tesdasfttt " + String(new Date()),
      "adLabels": ["sad", "das"],
      "daily_budget": 2000,
      "bid_amount": 2,
      "start_time": "22-06-2018 12:00",
      "end_time": "26-06-2018 12:00",
      "billing_event": "IMPRESSIONS",
      "campaign_id": "23842849843970485",
      "status": "PAUSED",
      "targeting": {
        "user_device": ["Galaxy S6", "One m9"],
        "user_os": ["android"],
        "geo_locations": {
          "countries": ["US"]
        },
        "publisher_platforms": ["facebook"]
      }
    };
    /* these fields are the problem when requesting with the API */

    options.targeting.user_device = validObj.targeting.user_device;
    options.campaign_id = validObj.campaign_id;
    /*options = {...options, ...validObj}*/
    //options.targeting = validObj.targeting;

    console.log(accountID, adAccount);
    console.log('ADSETS CREATE', options);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);

    try {
      let res = client(`${adAccount}/adsets`, "post", options);
      return res;
    } catch (e) {
      console.log(e);
      return {
        status: 'error',
        error: e
      };
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-sets/delete.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adsets-delete": function (accountID, adSetID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adSetID}/`, "delete");
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"from-campaign.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-sets/from-campaign.jsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adsets-from-campaign": function (accountID, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${campaignID}/adsets`, {
      fields: ["name", "account_id", "adlabels", "adset_schedule", "attribution_spec", "bid_amount", "bid_info", "billing_event", "budget_remaining", "campaign", "campaign_id", "configured_status", "created_time", "creative_sequence", "daily_budget", "effective_status", "end_time", "frequency_control_specs", "id", "is_autobid", "is_average_price_pacing", "lifetime_budget", "lifetime_imps", "optimization_goal", "pacing_type", "promoted_object", "recommendations", "recurring_budget_semantics", "rf_prediction_id", "rtb_flag", "source_adset", "source_adset_id", "start_time", "status", "targeting", "time_based_ad_rotation_id_blocks", "time_based_ad_rotation_intervals", "updated_time"]
    });
    return res.data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-sets/list.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adsets-list": function (accountID, adAccount) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/adsets`, {
      fields: ["name", "account_id", "adlabels", "adset_schedule", "attribution_spec", "bid_amount", "bid_info", "billing_event", "budget_remaining", "campaign", "campaign_id", "configured_status", "created_time", "creative_sequence", "daily_budget", "effective_status", "end_time", "frequency_cap", "frequency_cap_reset_period", "frequency_control_specs", "id", "is_autobid", "is_average_price_pacing", "lifetime_budget", "lifetime_frequency_cap", "lifetime_imps", "optimization_goal", "pacing_type", "promoted_object", "recommendations", "recurring_budget_semantics", "rf_prediction_id", "rtb_flag", "source_adset", "source_adset_id", "start_time", "status", "targeting", "time_based_ad_rotation_id_blocks", "time_based_ad_rotation_intervals", "updated_time"]
    });
    return res.data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/ad-sets/read.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-adsets-read": function (accountID, adSetID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adSetID}/`, {
      fields: ["adlabels", "adset_schedule", "attribution_spec", "bid_amount", "bid_info", "billing_event", "budget_remaining", "campaign", "campaign_id", "configured_status", "created_time", "creative_sequence", "daily_budget", "effective_status", "end_time", "frequency_cap", "frequency_cap_reset_period", "frequency_control_specs", "id", "is_autobid", "lifetime_budget", "is_average_price_pacing", "lifetime_frequency_cap", "lifetime_imps", "name", "optimization_goal", "pacing_type", "promoted_object", "recommendations", "recurring_budget_semantics", "rf_prediction_id", "rtb_flag", "source_adset", "source_adset_id", "start_time", "status", "targeting", "time_based_ad_rotation_id_blocks", "time_based_ad_rotation_intervals", "updated_time", "use_new_app_click", "account_id"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"campaign":{"audience_size.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/audience_size.jsx                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-campaigns-audience": function (accountID, AdAccount, data) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    console.log('fb-marketing-campaigns-audience', accountID, AdAccount, data);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${AdAccount}/reachestimate`, data);
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/bundle.jsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
module.watch(require("./audience_size"));
module.watch(require("./delivery_estimate"));
module.watch(require("./targeting-fields"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/create.jsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-campaign-create": function (accountID, adAccount, data) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let campaign = {
      name: data.name,
      adlabels: [],
      budget_rebalance_flag: true,
      buying_type: data.buyingType,
      //AUCTION OR RESERVED, FIXED_CPM
      promoted_object: null,
      //OBJECT ID
      spend_cap: Number(data.spendCap) * 100,
      status: "PAUSED",
      //PAUSED OR ACTIVE
      objective: data.objective //APP_INSTALLS, BRAND_AWARENESS, CONVERSIONS, EVENT_RESPONSES, LEAD_GENERATION, LINK_CLICKS, LOCAL_AWARENESS, OFFER_CLAIMS, PAGE_LIKES, POST_ENGAGEMENT, PRODUCT_CATALOG_SALES, REACH, VIDEO_VIEWS

    };
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);

    try {
      return client(`${adAccount}/campaigns`, "post", campaign);
    } catch (e) {
      console.log("ERROR", e);
      return {
        error: JSON.parse(e.message).error.error_user_msg
      };
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/delete.jsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-campaign-delete": function (accountID, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${campaignID}/`, "delete");
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delivery_estimate.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/delivery_estimate.jsx                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-campaigns-delivery-estimate": function (accountID, AdAccount, data) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    data.targeting_spec.user_device = data.targeting_spec.user_device.filter(e => e);
    data.targeting_spec.user_os = data.targeting_spec.user_os.filter(e => e);
    console.log('fb-marketing-campaigns-delivery_estimate', accountID, AdAccount, data);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${AdAccount}/delivery_estimate`, data);
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/list.jsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-campaigns-list": function (accountID, adAccount) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccount}/campaigns`, {
      fields: ["configured_status", "effective_status", "status", "start_time", "stop_time", "updated_time", "created_time", "spend_cap", "objective", "buying_type", "name"]
    });
    return res.data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/read.jsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-campaigns-read": function (accountID, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    console.log("fb-marketing-campaigns-read", accountID, campaignID);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    Facebook.napi(`${campaignID}/`, {
      fields: ["account_id", "created_time", "configured_status", "can_use_spend_cap", "can_create_brand_lift_study", "buying_type", "budget_rebalance_flag", "boosted_object_id", "effective_status", "name", "source_campaign", "status", "updated_time", "start_time", "stop_time", "ad_studies", "ads", "spend_cap", "objective", "adsets"]
    }, function (err, res) {
      console.log("FACEBOOO", err, res);
    });
    let res = client(`${campaignID}/`, {
      fields: ["account_id", "created_time", "configured_status", "can_use_spend_cap", "can_create_brand_lift_study", "buying_type", "budget_rebalance_flag", "boosted_object_id", "effective_status", "name", "source_campaign", "status", "updated_time", "start_time", "stop_time", "ad_studies", "ads", "spend_cap", "objective", "adsets"]
    });
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"targeting-fields.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/campaign/targeting-fields.jsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-targeting-fields": function (accountID, data) {
    console.log('ACCOUNT_ID', accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    console.log("fb-marketing-targeting-fields", accountID, data);
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`/search`, data);
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"images":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/images/bundle.jsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/images/create.jsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "fb-marketing-images-create": function (accountID, adAccountID, imageData) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);
    let Image = {
      bytes: imageData
    };
    let client = Meteor.wrapAsync(Facebook.napi, Facebook);
    let res = client(`${adAccountID}/adimages`, "post", Image);
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/marketing/bundle.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./ad-accounts/bundle"));
module.watch(require("./campaign/bundle"));
module.watch(require("./ad-sets/bundle"));
module.watch(require("./ad-creative/bundle"));
module.watch(require("./ad/bundle"));
module.watch(require("./images/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"analytics":{"insights.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/analytics/insights.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("../connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
Meteor.methods({
  "insights": function (pageID, callback) {
    return Promise.asyncApply(() => {
      let account = SocialAccounts.findOne({
        _id: pageID
      });
      let connection = account.connection;
      let client = FacebookConnection(connection.accessToken);
      const fbID = connection.id;
      let arr = ["page_positive_feedback_by_type", "page_impressions", "page_impressions_viral", "page_views_total", "page_content_activity_by_action_type_unique", "page_fans"];

      if (client) {
        return Promise.await(client.api(`${fbID}/insights?metric=${arr.join(',')}&date_preset=today`));
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"account-stats.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/account-stats.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("./connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
Meteor.methods({
  "facebook-account-stats": function (userID, profile) {
    if (!profile) {
      profile = SocialAccounts.findOne({
        "network": "facebook"
      });
    }

    if (!profile) {
      throw new Meteor.Error("There's no matching profile");
    }

    let connection = profile.connection;
    let client = FacebookConnection(connection.accessToken);

    if (profile) {
      let posts = [];
      let fields = [];
      let likesPerPage = null;

      if (profile.type === "fanPage") {
        fields = ["fan_count"];
      }

      let syncFB = Meteor.wrapAsync(client.napi, client);
      let user = syncFB(userID, {
        fields
      });
      let lastPost = null;

      let getPosts = function (until) {
        let query = userID + "/feed";
        let params = {
          limit: 100,
          fields: ["id", "message", "picture", "link", "shares", "created_time", "comments.limit(1).summary(true)", "likes.limit(1).summary(true)"]
        };

        if (until) {
          params.until = until;
        }

        let result = syncFB(query, params);

        if (lastPost) {
          if (lastPost.id === result.data[result.data.length - 1].id) {
            return;
          }
        }

        posts = [...posts, ...result.data];
        lastPost = result.data[result.data.length - 1];
        let lastPostCreation = new Date(result.data[result.data.length - 1].created_time);

        if (result.data.length > 1 && result.paging.next) {
          getPosts(Number(lastPostCreation) / 1000);
        }
      };

      let getPageLikes = function (until) {
        let day = new Date();
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);
        let query = userID + "/insights";
        let params = {
          pretty: 0,
          since: day.toJSON().slice(0, 10),
          until: nextDay.toJSON().slice(0, 10),
          metric: "page_fans"
        };
        let result = syncFB(query, params);
        console.log(result);

        if (result.data && result.data[0]) {
          return result.data.values[0].value;
        } else {
          return null;
        }
      };

      getPosts();
      const first = posts[0];
      const last = posts[posts.length - 1];
      let comments = 0;
      let likes = 0;
      let shares = 0;

      for (const x of posts) {
        if (x.comments) {
          comments += x.comments.summary.total_count;
        }

        if (x.likes) {
          likes += x.likes.summary.total_count;
        }

        if (x.shares) {
          shares += x.shares.count;
        }
      }

      let result = {
        comments,
        commentsPerPost: comments / posts.length,
        likes,
        likesPerPost: likes / posts.length,
        shares,
        sharesPerPost: shares / posts.length,
        engagement: (comments + likes + shares) / posts.length / user.fan_count,
        profileLikes: getPageLikes(),
        posts: posts.length,
        postsPerDay: posts.length / Math.abs(moment(first.created_time).diff(moment(new Date(last.created_time)), "days"))
      };

      if (user.fan_count) {
        result.profileLikes = user.fan_count;
      }

      Object.keys(result).forEach(key => {
        if (Number.isNaN(result[key])) {
          result[key] = 0;
        }
      });

      if (result.postsPerDay === Infinity) {
        result.postsPerDay = 0;
      }

      return result;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./post-create"));
module.watch(require("./account-stats"));
module.watch(require("./cover-profile-photo"));
module.watch(require("./pages-list"));
module.watch(require("./marketing/bundle"));
module.watch(require("./share-post"));
module.watch(require("./analytics/insights"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/connection.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Facebook, FacebookApiException;
module.watch(require("fb"), {
  Facebook(v) {
    Facebook = v;
  },

  FacebookApiException(v) {
    FacebookApiException = v;
  }

}, 0);

let FacebookConnection = function (token) {
  return new Facebook({
    appId: Meteor.settings.private.networks.facebook.appId,
    appSecret: Meteor.settings.private.networks.facebook.secret,
    accessToken: token,
    version: 'v3.0'
  });
};

module.exportDefault(FacebookConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cover-profile-photo.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/cover-profile-photo.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("./connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);

let request = require('request').defaults({
  encoding: null
});

Meteor.methods({
  /*coverURL = idPhoto already uploaded*/

  /* Meteor.call('facebook-update-cover-photo','pageID',IDphoto,(err,res)=>{console.log(err,res)}); */
  "facebook-update-cover-photo": function (pageID, coverURL, callback) {
    let account = SocialAccounts.findOne({
      _id: pageID
    });
    let connection = account.connection;
    console.log('Connetition Data', connection);
    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;

    if (client) {
      client.api(`${fbID}/albums`, {
        fields: ['name', 'id']
      }, function (res) {
        console.log('album', res);
        const albumID = res.data.filter(album => album.name === 'Cover Photos')[0].id;
        console.log('Cover Photos ID', albumID);
        client.api(`${albumID}/photos`, 'post', {
          url: coverURL
        }, function (res) {
          console.log('Cover Response', res);
        });
      });
      return client.api('/' + fbID, "post", {
        cover: coverURL
      }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }

        console.log('success: ' + res.success);

        if (callback) {
          callback();
        }
      });
    }
  },

  /*coverURL = page URL*/

  /* Meteor.call('facebook-update-profile-photo','pageID','coverURL',(err,res)=>{console.log(err,res)}); */
  "facebook-update-profile-photo": function (pageID, coverURL, callback) {
    let account = SocialAccounts.findOne({
      _id: pageID
    });
    let connection = account.connection;
    console.log('Connetition Data', connection);
    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;

    if (client) {
      client.api(`${fbID}/albums`, {
        fields: ['name', 'id']
      }, function (res) {
        console.log('album', res);
        const albumID = res.data.filter(album => album.name === 'Profile Pictures')[0].id;
        console.log('Cover Photos ID', albumID);
        client.api(`${albumID}/photos`, 'post', {
          url: coverURL
        }, function (res) {
          console.log('Cover Response', res);
        });
      });
      return client.api('/' + fbID + '/picture', "post", {
        picture: coverURL
      }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }

        console.log('success: ' + res.success);

        if (callback) {
          callback();
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"pages-list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/pages-list.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("./connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
Meteor.methods({
  "facebook-pages-list": function (accountID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Facebook = FacebookConnection(connection.accessToken);

    if (Facebook) {
      let client = Meteor.wrapAsync(Facebook.napi, Facebook);
      let res = client("me/accounts", {
        fields: ["id", "name", "category", "picture", "access_token", "link", "verification_status", "cover"]
      });
      console.log("FACEBOOK-PAGES", res);
      return res;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"post-create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/post-create.jsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("./connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);

let request = require('request').defaults({
  encoding: null
});

Meteor.methods({
  "facebook-post-create": function (connection, postData, callback) {
    let client = FacebookConnection(connection.accessToken);

    if (client) {
      let postMessage = function (post) {
        return client.api("me/feed", "post", {
          message: post.status
        }, function (res) {
          if (!res || res.error) {
            console.log(!res ? "error occurred" : res.error);
            return;
          }

          console.log('Post Id: ' + res.id);

          if (callback) {
            callback();
          }
        });
      },
          postImage = function (post) {
        return request.get(post.media, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            return client.api("me/photos", "post", {
              url: post.media,
              caption: post.status
            }, function (res) {
              if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
              }

              console.log('Post Id: ' + res.post_id);

              if (callback) {
                callback();
              }
            });
          }
        });
      };
      /*console.log("FACEBOOK_POST_DATE:", post.date, "_CURRENT_TIME:", new Date());*/


      let message = {
        status: postData.message //+ "Scheduled at: " + moment(post.date).format("h:m A") + " Posted at: " + moment(new Date()).format("h:m A")

      };

      if (postData.location) {
        message.lat = postData.location[0];
        message.long = postData.location[1];
        message.display_coordinates = true;
      }

      if (postData.media) {
        message.media = postData.media;
      }

      let query;

      if (message.media) {
        query = postImage(message);
      } else {
        query = postMessage(message);
      }

      return query;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"share-post.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/facebook/server/share-post.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FacebookConnection;
module.watch(require("./connection"), {
  default(v) {
    FacebookConnection = v;
  }

}, 0);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 1);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
Meteor.methods({
  "facebook-share-post": function (pageID, link, callback) {
    check(pageID, String);
    throw new Meteor.Errro(500, 'Page ID not available');
    let account = SocialAccounts.findOne({
      _id: pageID
    });
    let connection = account.connection;
    let client = FacebookConnection(connection.accessToken);
    const fbID = connection.id;

    if (client) {
      return client.api(`${fbID}/feed`, 'post', {
        link: link
      }, function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }

        if (callback) {
          callback();
        }

        console.log('response: ', link);
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"google":{"server":{"adwords":{"ad-groups":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/ad-groups/bundle.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/ad-groups/create.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AdWordsConnection;
module.watch(require("../connection"), {
  default(v) {
    AdWordsConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let XML2JS;
module.watch(require("xml2js"), {
  default(v) {
    XML2JS = v;
  }

}, 2);
Meteor.methods({
  "google-adwords-adGroup-create": function (accountID, data) {
    //console.log("google-adwords-adGroup-create", accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let adGroupService = AdWords.getService('AdGroupService', 'v201708');
    let adGroup = {
      operator: "ADD",
      operand: {
        name: "Test AdGroup " + moment(new Date()).format("DD/MM/YYYY hh:mm:ss A"),
        biddingStrategyConfiguration: {
          biddingStrategyType: "ENHANCED_CPC",
          biddingStrategySource: "CAMPAIGN"
        },
        contentBidCriterionTypeGroup: "KEYWORD",
        campaignId: 934093898,

        /*campaign: {
            campaignId: "934093898"
        },
        status: "PAUSED",*/
        urlCustomParameters: {
          parameters: [],
          doReplace: false
          /*,
          settings: {
             "xsi:type": "TargetingSetting",
             details: [
                 {
                     criterionTypeGroup: "KEYWORD",
                     targetAll: true
                 }
             ]
          }*/

        }
      }
    };
    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/
    //let res= await campaignService.get({serviceSelector});

    let adGroupServiceClient = Meteor.wrapAsync(adGroupService.mutate, adGroupService);

    try {
      let adGroupRes = adGroupServiceClient({
        operations: adGroup
      }); //console.log("SYNC_RES", adGroupRes);

      return adGroupRes;
    } catch (e) {
      //console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body)["soap:Envelope"]["soap:Body"][0]["soap:Fault"][0].faultstring[0];
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/ad-groups/delete.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "google-adwords-adGroup-delete": function (accountID, adAccount, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let campaign = {};
    let client = Meteor.wrapAsync(Twitter.delete, Facebook);

    try {
      return client(`${adAccount}/campaigns`, campaign);
    } catch (e) {
      //console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/ad-groups/list.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AdWordsConnection;
module.watch(require("../connection"), {
  default(v) {
    AdWordsConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Adwords;
module.watch(require("node-adwords"), {
  default(v) {
    Adwords = v;
  }

}, 2);
let XML2JS;
module.watch(require("xml2js"), {
  default(v) {
    XML2JS = v;
  }

}, 3);
Meteor.methods({
  "google-adwords-adGroup-list": function (accountID) {
    console.log("google-adwords-adGroup-list", accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let adGroupService = AdWords.getService('AdGroupService', 'v201708');
    let serviceSelector = {
      fields: ['Id', 'Name', 'Status', 'AdGroupType', 'CampaignId', 'CampaignName'],
      ordering: [{
        field: 'Name',
        sortOrder: 'ASCENDING'
      }],
      paging: {
        startIndex: 0,
        numberResults: 50
      }
    };
    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/
    //let res= await campaignService.get({serviceSelector});

    console.log("adGroupService", adGroupService);
    let client = Meteor.wrapAsync(adGroupService.get, adGroupService);

    try {
      let res = client({
        serviceSelector
      });
      console.log("SYNC_RES", res);
      return res;
    } catch (e) {
      console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/ad-groups/read.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AdWordsConnection;
module.watch(require("../connection"), {
  default(v) {
    AdWordsConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Adwords;
module.watch(require("node-adwords"), {
  default(v) {
    Adwords = v;
  }

}, 2);
let XML2JS;
module.watch(require("xml2js"), {
  default(v) {
    XML2JS = v;
  }

}, 3);
Meteor.methods({
  "google-adwords-adGroup-get": function (accountID) {
    //console.log("google-adwords-campaign-list", accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let campaignService = AdWords.getService('CampaignService', 'v201708');
    let serviceSelector = {
      fields: ['Id', 'Name', 'Status', 'StartDate', 'EndDate'],
      ordering: [{
        field: 'Name',
        sortOrder: 'ASCENDING'
      }],
      paging: {
        startIndex: 0,
        numberResults: 50
      }
    };
    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/
    //let res= await campaignService.get({serviceSelector});

    let client = Meteor.wrapAsync(campaignService.get, campaignService);

    try {
      let res = client({
        serviceSelector
      }); //console.log("SYNC_RES", res );

      return res;
    } catch (e) {
      //console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"campaign":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/campaign/bundle.jsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/campaign/create.jsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AdWordsConnection;
module.watch(require("../connection"), {
  default(v) {
    AdWordsConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Adwords;
module.watch(require("node-adwords"), {
  default(v) {
    Adwords = v;
  }

}, 2);
let XML2JS;
module.watch(require("xml2js"), {
  default(v) {
    XML2JS = v;
  }

}, 3);
Meteor.methods({
  "google-adwords-campaign-create": function (accountID, data) {
    console.log("google-adwords-campaign-create", accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let campaignService = AdWords.getService('CampaignService', 'v201708');
    let budgetService = AdWords.getService('BudgetService', 'v201708');
    let budget = {
      operator: "ADD",
      operand: {
        name: "Test Budget " + moment(new Date()).format("DD/MM/YYYY hh:mm:ss A"),
        amount: {
          microAmount: "50000000"
        }
      }
    };
    let campaign = {
      operator: "ADD",
      operand: {
        name: "Test Campaign " + moment(new Date()).format("DD/MM/YYYY hh:mm:ss A"),
        status: "PAUSED",
        startDate: "20170921",
        endDate: "20371230",
        budget: {
          budgetId: ""
        },
        settings: {
          "xsi:type": "GeoTargetTypeSetting",
          positiveGeoTargetType: "DONT_CARE"
        },
        advertisingChannelType: "SEARCH",
        networkSetting: {
          targetGoogleSearch: true,
          targetSearchNetwork: true,
          targetContentNetwork: false
        },
        biddingStrategyConfiguration: {
          biddingScheme: {
            "xsi:type": "ManualCpcBiddingScheme",
            enhancedCpcEnabled: false
          }
        }
      }
    };
    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/
    //let res= await campaignService.get({serviceSelector});

    let budgetClient = Meteor.wrapAsync(budgetService.mutate, budgetService);
    let campaigClient = Meteor.wrapAsync(campaignService.mutate, campaignService);

    try {
      let budgetRes = budgetClient({
        operations: budget
      });
      campaign.operand.budget.budgetId = budgetRes.value[0].budgetId;
      let campaignRes = campaigClient({
        operations: campaign
      });
      console.log("SYNC_RES", campaignRes);
      return campaignRes;
    } catch (e) {
      console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body)["soap:Envelope"]["soap:Body"][0]["soap:Fault"][0].faultstring[0];
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/campaign/delete.jsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "google-adwords-campaign-delete": function (accountID, adAccount, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let campaign = {};
    let client = Meteor.wrapAsync(Twitter.delete, Facebook);

    try {
      return client(`${adAccount}/campaigns`, campaign);
    } catch (e) {
      console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/campaign/list.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AdWordsConnection;
module.watch(require("../connection"), {
  default(v) {
    AdWordsConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Adwords;
module.watch(require("node-adwords"), {
  default(v) {
    Adwords = v;
  }

}, 2);
let XML2JS;
module.watch(require("xml2js"), {
  default(v) {
    XML2JS = v;
  }

}, 3);
Meteor.methods({
  "google-adwords-campaign-list": function (accountID) {
    //console.log("google-adwords-campaign-list", accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let campaignService = AdWords.getService('CampaignService', 'v201708');
    let serviceSelector = {
      fields: ['Id', 'Name', 'Status', 'StartDate', 'EndDate'],
      ordering: [{
        field: 'Name',
        sortOrder: 'ASCENDING'
      }],
      paging: {
        startIndex: 0,
        numberResults: 50
      }
    };
    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/
    //let res= await campaignService.get({serviceSelector});

    let client = Meteor.wrapAsync(campaignService.get, campaignService);

    try {
      let res = client({
        serviceSelector
      });
      console.log("SYNC_RES", res);
      return res;
    } catch (e) {
      console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/campaign/read.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AdWordsConnection;
module.watch(require("../connection"), {
  default(v) {
    AdWordsConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Adwords;
module.watch(require("node-adwords"), {
  default(v) {
    Adwords = v;
  }

}, 2);
let XML2JS;
module.watch(require("xml2js"), {
  default(v) {
    XML2JS = v;
  }

}, 3);
Meteor.methods({
  "google-adwords-campaign-get": function (accountID) {
    console.log("google-adwords-campaign-list", accountID);
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let AdWords = AdWordsConnection(connection.idToken, connection.accessToken);
    let campaignService = AdWords.getService('CampaignService', 'v201708');
    let serviceSelector = {
      fields: ['Id', 'Name', 'Status', 'StartDate', 'EndDate'],
      ordering: [{
        field: 'Name',
        sortOrder: 'ASCENDING'
      }],
      paging: {
        startIndex: 0,
        numberResults: 50
      }
    };
    /*campaignService.get({serviceSelector}, (error, result) => {
        console.log("ADWORDS_CAMPAIGN",error, typeof result, result);
    });*/
    //let res= await campaignService.get({serviceSelector});

    let client = Meteor.wrapAsync(campaignService.get, campaignService);

    try {
      let res = client({
        serviceSelector
      }); //console.log("SYNC_RES", res );

      return res;
    } catch (e) {
      //console.log("ERROR", typeof e.body, e);
      let parser = Meteor.wrapAsync(XML2JS.parseString, XML2JS);
      return parser(e.body);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/bundle.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./campaign/bundle"));
module.watch(require("./ad-groups/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/adwords/connection.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Adwords;
module.watch(require("node-adwords"), {
  default(v) {
    Adwords = v;
  }

}, 0);

let AdWordsConnection = function (key, secret) {
  let connection = {
    developerToken: Meteor.settings.private.networks.google.AdWordsToken,
    //your adwords developerToken
    userAgent: 'IBOL',
    //any company name
    clientCustomerId: '856-177-2452',
    //'530-908-7582', //the Adwords Account id (e.g. 123-123-123)
    client_id: "666001639290-4ockfbrs6nruqfds6jkugk1g8mctffe2.apps.googleusercontent.com",
    //this is the api console client_id
    client_secret: "xmMAWuSkSv99ENIjVCHNTUf9",
    access_token: secret,
    refresh_token: secret
  }; //console.log("ADWORDS_CONNECTION", connection);

  return new Adwords.AdwordsUser(connection);
};

module.exportDefault(AdWordsConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/bundle.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./connection"));
module.watch(require("./search"));
module.watch(require("./adwords/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/connection.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let GoogleSearch;
module.watch(require("google-search"), {
  default(v) {
    GoogleSearch = v;
  }

}, 0);

let GoogleSearchConnection = function () {
  return new GoogleSearch({
    key: Meteor.settings.private.networks.google.searchApiKey,
    cx: "001142422321320148592:ikfvsltk4bw"
  });
};

module.exportDefault(GoogleSearchConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google/server/search.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let GoogleSearchConnection;
module.watch(require("./connection"), {
  default(v) {
    GoogleSearchConnection = v;
  }

}, 0);
Meteor.methods({
  "google-search": function (query) {
    let client = GoogleSearchConnection();
    let syncClient = Meteor.wrapAsync(client.build, client);
    return syncClient({
      q: query,
      start: 5,
      num: 10 // Number of search results to return between 1 and 10, inclusive

    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"twitter":{"server":{"ads":{"accounts":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/accounts/bundle.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./list"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/accounts/list.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "twt-ads-accounts-list": function (accountID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    Twitter.get(`accounts`, {}, function (err, res) {
      console.log("ACOCUNTS", err, res);
    });
    let client = Meteor.wrapAsync(Twitter.get, Facebook);

    try {
      return client(`accounts`);
    } catch (e) {
      //console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"campaign":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/campaign/bundle.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/campaign/create.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "twt-ads-campaign-create": function (accountID, adAccount, data) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let campaign = {};
    let client = Meteor.wrapAsync(Twitter.post, Facebook);

    try {
      return client(`${adAccount}/campaigns`, campaign);
    } catch (e) {
      //console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/campaign/delete.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "twt-ads-campaign-delete": function (accountID, adAccount, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let campaign = {};
    let client = Meteor.wrapAsync(Twitter.delete, Facebook);

    try {
      return client(`${adAccount}/campaigns`, campaign);
    } catch (e) {
      //console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/campaign/list.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "twt-ads-campaign-list": function (accountID, adAccount, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let campaign = {};
    let client = Meteor.wrapAsync(Twitter.get, Facebook);

    try {
      return client(`${adAccount}/campaigns`, campaign);
    } catch (e) {
      //console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/campaign/read.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("../connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
Meteor.methods({
  "twt-ads-campaign-get": function (accountID, adAccount, campaignID) {
    let account = SocialAccounts.findOne({
      _id: accountID
    });
    let connection = account.connection;
    let Twitter = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let campaign = {};
    let client = Meteor.wrapAsync(Twitter.get, Facebook);

    try {
      return client(`${adAccount}/campaigns`, campaign);
    } catch (e) {
      //console.log("ERROR", e);
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"line-item":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/line-item/bundle.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./create"));
module.watch(require("./delete"));
module.watch(require("./list"));
module.watch(require("./read"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"create.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/line-item/create.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"delete.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/line-item/delete.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/line-item/list.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"read.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/line-item/read.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/bundle.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./campaign/bundle"));
module.watch(require("./line-item/bundle"));
module.watch(require("./accounts/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/ads/connection.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterAdsAPI;
module.watch(require("twitter-ads"), {
  default(v) {
    TwitterAdsAPI = v;
  }

}, 0);

let TwitterConnection = function (key, secret) {
  //console.log("TWITTER_ADS_Connection", key, secret);
  return new TwitterAdsAPI({
    consumer_key: Meteor.settings.private.networks.twitter.consumerKey,
    consumer_secret: Meteor.settings.private.networks.twitter.secret,
    access_token: key,
    access_token_secret: secret,
    sandbox: true,
    // defaults to true
    api_version: '2'
  });
};

module.exportDefault(TwitterConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"account-stats.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/account-stats.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("./connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
Meteor.methods({
  "twitter-account-stats": function (screenName, profile) {
    if (!profile) {
      profile = SocialAccounts.findOne({
        "network": "twitter"
      });
    }

    if (!profile) {
      throw new Meteor.Error("There's no matching profile");
      return;
    }

    let connection = profile.connection,
        client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (profile) {
      let posts = [];

      let syncClient = Meteor.wrapAsync(client.get, client),
          getTweets = function (max_id) {
        let query = {
          screen_name: screenName,
          count: 200,
          include_rts: 0,
          exclude_replies: 1
        };

        if (max_id) {
          query.max_id = max_id;
        }

        let result = syncClient("statuses/user_timeline", query),
            lastTweet = result[result.length - 1];
        posts = [...posts, ...result];

        if (lastTweet) {
          if (max_id) {
            if (max_id !== lastTweet.id) {
              getTweets(lastTweet.id);
            }
          } else {
            getTweets(lastTweet.id);
          }
        }
      };

      getTweets();
      const first = posts[0];
      const last = posts[posts.length - 1];
      let retweets = 0;
      let favorites = 0;

      for (const x of posts) {
        retweets += x.retweet_count;
        favorites += x.favorite_count;
      }

      let user = posts[0].user;
      let result = {
        retweets,
        retweetsPerPost: retweets / posts.length,
        favorites,
        favoritesPerPost: favorites / posts.length,
        engagement: (retweets + favorites) / posts.length / user.followers_count,
        followers: user.followers_count,
        following: user.friends_count,
        posts: user.statuses_count,
        postsPerDay: posts.length / Math.abs(moment(new Date(first.created_at)).diff(moment(new Date(last.created_at)), "days"))
      };
      Object.keys(result).forEach(key => {
        if (Number.isNaN(result[key])) {
          result[key] = 0;
        }
      });

      if (result.postsPerDay === Infinity) {
        result.postsPerDay = 0;
      }

      return result;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/bundle.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./post-create"));
module.watch(require("./account-stats"));
module.watch(require("./search"));
module.watch(require("./trending"));
module.watch(require("./ads/bundle"));
module.watch(require("./cover-profile-photo"));
module.watch(require("./interactions"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/connection.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Twitter;
module.watch(require("twitter"), {
  default(v) {
    Twitter = v;
  }

}, 0);

let TwitterConnection = function (key, secret) {
  return new Twitter({
    consumer_key: Meteor.settings.private.networks.twitter.consumerKey,
    consumer_secret: Meteor.settings.private.networks.twitter.secret,
    access_token_key: key,
    access_token_secret: secret
  });
};

module.exportDefault(TwitterConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cover-profile-photo.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/cover-profile-photo.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("./connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let encode, decode;
module.watch(require("node-base64-image"), {
  encode(v) {
    encode = v;
  },

  decode(v) {
    decode = v;
  }

}, 1);
Meteor.methods({
  "twitter-update-profile-photo": function (connection, coverURL, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return encode(coverURL, {
        string: true
      }, function (err, image) {
        if (err) {
          console.log('Error: ' + err);
        } //console.log('image: ',res)


        return client.post('account/update_profile_image', {
          image
        }, function (error, tweet, response) {
          if (error) {
            console.log('Error: ', error);
          }

          console.log(tweet);

          if (callback) {
            callback();
          }
        });
      });
    }
  },
  "twitter-update-cover-photo": function (connection, coverURL, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return encode(coverURL, {
        string: true
      }, function (err, banner) {
        if (err) {
          console.log('Error: ' + err);
        } //console.log('image: ',res)


        return client.post('account/update_profile_banner', {
          banner
        }, function (error, tweet, response) {
          if (error) {
            console.log('Error: ', error);
          }

          if (callback) {
            callback();
          }
        });
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"interactions.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/interactions.jsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("./connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
let encode, decode;
module.watch(require("node-base64-image"), {
  encode(v) {
    encode = v;
  },

  decode(v) {
    decode = v;
  }

}, 1);
Meteor.methods({
  "twitter-follow-profile": function (connection, screen_name, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('friendships/create', {
        screen_name
      }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }

        console.log(tweet);

        if (callback) {
          callback();
        }
      });
    }
  },
  "twitter-unfollow-profile": function (connection, screen_name, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('friendships/destroy', {
        screen_name
      }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }

        console.log(tweet);

        if (callback) {
          callback();
        }
      });
    }
  },
  "twitter-retweet": function (connection, id, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('statuses/retweet', {
        id
      }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }

        console.log(tweet);

        if (callback) {
          callback();
        }
      });
    }
  },
  "twitter-like": function (connection, id, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    console.log(connection);
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      return client.post('favorites/create', {
        id
      }, function (error, tweet, response) {
        if (error) {
          console.log('Error: ', error);
        }

        console.log(tweet);

        if (callback) {
          callback();
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"post-create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/post-create.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("./connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);

let request = require('request').defaults({
  encoding: null
});

Meteor.methods({
  "twitter-post-create": function (connection, post, callback) {
    if (typeof connection === 'string') {
      let account = SocialAccounts.findOne({
        _id: connection
      });
      connection = account.connection;
    }

    const tweetID = connection.id;
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      /*console.log("TWITTER_CLIENT",client.post);*/
      let postMessage = function (post) {
        return client.post('statuses/update', post, function (error, tweet, response) {
          if (error) {
            throw new Meteor.Error("Twitter: Failed to Post", error);
          }

          if (callback) {
            callback();
          }
        });
      },
          postImage = function (post) {
        request.get(post.media, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            client.post('media/upload', {
              media: body
            }, function (error, media, response) {
              if (error) {
                console.log(error);
                return new Meteor.Error("Twitter: Failed to Upload Media");
              }

              if (!error) {
                post.media_ids = media.media_id_string;
                delete post.media;
                return postMessage(post);
              }
            });
          }
        });
      };

      console.log("TWITTER_POST_DATE:", post.date, "_CURRENT_TIME:", new Date());
      let message = {
        status: post.message // + "Scheduled at: " + moment(post.date).format("h:m A") + " Posted at: " + moment(new Date()).format("h:m A")

      };

      if (post.location) {
        message.lat = post.location[0];
        message.long = post.location[1];
        message.display_coordinates = true;
      }

      if (post.media) {
        message.media = post.media;
      }

      let query;

      if (message.media) {
        query = postImage(message);
      } else {
        query = postMessage(message);
      }

      return query;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/search.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let TwitterConnection;
module.watch(require("./connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 1);
Meteor.methods({
  "twitter-search": function (query) {
    let account = SocialAccounts.findOne({
      network: "twitter",
      connection: {
        $exists: true
      }
    });
    let connection = account.connection;
    /*connection={
        accessToken:"825526971505446912-BKiaP4KjYkYFfMCmYDc2AkLZjpcLkV0",
        accessTokenSecret:"UZXTVYOiaIgh50kaDxNFRSx9wbAzWF67ndT9UFvcWurto"
    }*/

    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);
    let syncClient = Meteor.wrapAsync(client.get, client);
    return syncClient("search/tweets", {
      q: query,
      count: 100
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trending.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/twitter/server/trending.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TwitterConnection;
module.watch(require("./connection"), {
  default(v) {
    TwitterConnection = v;
  }

}, 0);
Meteor.methods({
  "twitter-trends-available": function () {
    let account = SocialAccounts.findOne({
      network: "twitter",
      connection: {
        $exists: true
      }
    });
    let connection = account.connection;
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      let syncClient = Meteor.wrapAsync(client.get, client);
      return syncClient('trends/available');
    }
  },
  "twitter-trends-place": function (woeid) {
    let account = SocialAccounts.findOne({
      network: "twitter",
      connection: {
        $exists: true
      }
    });
    let connection = account.connection;
    let client = TwitterConnection(connection.accessToken, connection.accessTokenSecret);

    if (client) {
      let syncClient = Meteor.wrapAsync(client.get, client);

      try {
        return syncClient('trends/place', {
          id: woeid
        });
      } catch (e) {
        return [{
          trends: []
        }];
      }
    }
  },
  "twitter-find-promoted-trending": function () {
    let places = Meteor.call("twitter-trends-available");
    let promoted = [];
    places.forEach((place, index) => {
      if (index > 70) return;
      let trendings = Meteor.call("twitter-trends-place", place.woeid);
      trendings.forEach(trend => {
        if (trend.promoted_content) {
          promoted.push(trend);
        }
      });
    });
    return promoted;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"core":{"server":{"users":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/users/bundle.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./methods"));
module.watch(require("./onLogin"));
module.watch(require("./on-creation"));
module.watch(require("./native-auth"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/users/methods.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 1);
let md5;
module.watch(require("md5"), {
  default(v) {
    md5 = v;
  }

}, 2);
let Schema;
module.watch(require("./schema"), {
  default(v) {
    Schema = v;
  }

}, 3);
Meteor.methods({
  users_create_account: function (email, password, plan, source) {
    let defaultUser = Schema;

    if (source && source.type) {
      defaultUser.source = source;
    }

    let accountData = Accounts.createUser({
      email: email,
      password: password,
      profile: defaultUser.profile
    });
    /*
     if(typeof(accountData)==="string"){
     console.log("Create Stripe ID");
     Meteor.call('payments_customer_create',accountData,plan);
     }*/

    return accountData;
  },
  users_update_profile: function (profile) {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        profile: profile
      }
    });
    return {
      stauts: "success"
    };
  },
  users_change_password: function (userID, password) {
    return false;
    let change = Accounts.setPassword(userID, password);
    return {
      stauts: "success"
    };
  },
  users_check_password: function (digest) {
    check(digest, String);

    if (this.userId) {
      let user = Meteor.user();
      let password = {
        digest: digest,
        algorithm: 'sha-256'
      };

      let result = Accounts._checkPassword(user, password);

      return result.error == null;
    } else {
      return false;
    }
  },
  "users-get-flags": function () {
    let user = Meteor.user();
    let userData = Meteor.users.findOne({
      _id: user._id
    }, {
      fields: {
        flags: 1
      }
    });
    return userData.flags;
  },
  "users-update-flag": function (flag, value) {
    check(flag, String);
    check(value, Boolean);
    let user = Meteor.user();

    if (!user) {
      throw new Meteor.Error(500, "Use Doesn't Exist");
    }

    let flags = Object.assign({}, user.flags);
    flags[flag] = value;
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        flags
      }
    });
  },
  "users-update-modal-profile": function (data) {
    let user = Meteor.user();

    if (!user) {
      throw new Meteor.Error(500, "Use Doesn't Exist");
    }

    let profile = Object.assign({}, user.profile, data);
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        profile
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"native-auth.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/users/native-auth.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 1);
Meteor.methods({
  'native-authentication': (service, data) => {
    // Check service is a string
    check(service, String); // Check data is an object

    check(data, Object);
    console.log('SERVICE', service);
    console.log('DATA', data); // Initialize query object

    const query = {}; // Set query for service

    query[`services[${service}].id`] = data.id; // Find matching account

    const user = Meteor.users.findOne(query); // If match found

    if (user) {
      // Return Token for login
      return Accounts.impSvc.set(user._id);
    } // Create Identity Object


    const identity = {};
    const newUser = {
      services: {},
      profile: {
        name: identity.name
      },
      emails: [{
        address: identity.email,
        verified: true
      }]
    }; // Set Oauth service data

    newUser.services[service] = data; // Insert new user data

    userId = Meteor.users.insert(newUser); // Return Token for login

    return Accounts.impSvc.set(userId);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"on-creation.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/users/on-creation.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Accounts.onCreateUser(function (options, user) {
  //console.log("USER_CREATE", user);
  let isSocial = false;
  let socialProfile = {
    name: null,
    lname: null,
    email: null,
    avatar: null
  },
      serviceData,
      serviceName;

  if (user.services) {
    if (user.services.facebook) {
      serviceName = "facebook";
      isSocial = true;
      serviceData = user.services.facebook;
      socialProfile.name = serviceData.first_name;
      socialProfile.lname = serviceData.last_name;
      socialProfile.email = serviceData.email;
      socialProfile.avatar = "http://graph.facebook.com/" + serviceData.id + "/picture/?type=large";
    }

    if (user.services.google) {
      serviceName = "google";
      isSocial = true;
      serviceData = user.services.google;
      socialProfile.name = serviceData.given_name;
      socialProfile.lname = serviceData.family_name;
      socialProfile.email = serviceData.email;
      socialProfile.avatar = serviceData.picture;
    }

    if (user.services.twitter) {
      serviceName = "twitter";
      isSocial = true;
      serviceData = user.services.twitter;
      socialProfile.name = serviceData.screenName;
      socialProfile.avatar = serviceData.profile_image_url_https;
    }

    if (user.services.instagram) {
      serviceName = "instagram";
      isSocial = true;
      serviceData = user.services.instagram;
      socialProfile.name = serviceData.full_name;
      socialProfile.avatar = serviceData.profile_picture;
    }
  }

  if (!user.profile) {
    user.profile = {};
  }

  if (isSocial) {
    user.profile.name = socialProfile.name;
    user.profile.lastName = socialProfile.lname;
    user.profile.avatar = socialProfile.avatar; //Insert Email

    if (socialProfile.email) {
      let email = {
        address: socialProfile.email,
        verified: true
      };
      user.emails = [email];
    } //TODO: REVIEW THIS

    /*Meteor.call("profile-create", user, {
        serviceName,
        serviceData
    })*/

  }

  return user;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onLogin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/users/onLogin.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.watch(require("meteor/accounts-base"), {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let Schema;
module.watch(require("./schema"), {
  default(v) {
    Schema = v;
  }

}, 2);
let md5;
module.watch(require("md5"), {
  default(v) {
    md5 = v;
  }

}, 3);
Accounts.onLogin(function (loginObj) {
  let currentUser = loginObj.user;
  let dbUser = Meteor.users.findOne({
    _id: currentUser._id
  });
  let currentProfile = currentUser.profile;
  let profile = Object.assign({}, Schema.profile, currentProfile);
  profile.lastSeen = new Date();

  if (!profile.avatar) {
    profile.avatar = "https://www.gravatar.com/avatar/" + md5(currentUser.emails[0].address);
  }

  if (loginObj.type === "resume") {
    if (profile.loginCount) {
      profile.loginCount++;
    } else {
      profile.loginCount = 1;
    }
  }

  let user = Object.assign({}, Schema, dbUser, {
    profile
  });
  Meteor.users.update(user._id, user);
  return true;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/users/schema.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  isSuspended: false,
  profile: {
    avatar: null,
    name: null,
    lastName: null,
    phone: null,
    profile: null,
    settings: {
      notifications: {
        browser: true,
        email: false
      }
    },
    address: {
      address1: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      country: null
    },
    loginCount: 0,
    score: 0
  },
  stripe: {
    id: null
  },
  zendesk: {
    id: null
  },
  mixpanel: {
    id: null
  },
  subscription: {
    mainPlan: null
  },
  source: {
    type: null,
    id: null
  },
  flags: {
    hasShared: false,
    askedForCard: false,
    hasUpgraded: false,
    askedProfileData: false,
    prizes: {
      login: {
        _100: false,
        _1000: false,
        _10000: false
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/bundle.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./notifications"));
module.watch(require("./rss-feed"));
module.watch(require("./users/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/notifications.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
Meteor.methods({
  "notifications-create": function (userID, data) {
    //console.log("NOTIFICATIONS_CRATE");
    let params = {
      courier: 'appNotifications',
      //required
      data: {
        //optional and whatever you need
        type: "info",
        title: data.title,
        description: data.description
      }
    };

    if (data.url) {
      params.url = data.url;
    }

    return Herald.createNotification(userID, params);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rss-feed.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/core/server/rss-feed.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Feed;
module.watch(require("feed-read-parser"), {
  default(v) {
    Feed = v;
  }

}, 1);
let jsdom;
module.watch(require("jsdom"), {
  default(v) {
    jsdom = v;
  }

}, 2);
Meteor.methods({
  "rss-feed": function (url) {
    let syncFeed = Meteor.wrapAsync(Feed);
    let syncDom = Meteor.wrapAsync(jsdom.env, jsdom);
    return syncFeed(url).map(a => {
      let __PATH__ = a.link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[0];
      let dom = syncDom(a.content);
      let {
        author,
        title,
        link
      } = a;
      let image = dom.document.getElementsByTagName("img")[0];
      let article = {
        author,
        title,
        link,
        image: image ? image.src : "http://viralizing.me/wp-content//uploads/2017/03/60fa9bmxvpe-redd-angelo-uai-258x145.jpg"
      };
      return article;
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"stripe":{"server":{"core":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/core/bundle.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./customers"));
module.watch(require("./charges"));
module.watch(require("./refunds"));
module.watch(require("./transfers"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"charges.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/core/charges.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_charges_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Stripe User Data Provided");
    }

    check(user, Object);
    check(data, {
      amount: Number,
      currency: String,
      application_fee: Match.Maybe(Number),
      capture: Match.Maybe(Boolean),
      description: Match.Maybe(String),
      destination: Match.Maybe(Match.ObjectIncluding({
        account: Match.Maybe(Object),
        amount: Match.Maybe(Number)
      })),
      transfer_group: Match.Maybe(String),
      on_behalf_of: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      receipt_email: Match.Maybe(String),
      shipping: Match.Maybe(Object),
      customer: Match.Maybe(String),
      source: Match.Maybe(String)
    });

    if (!user.emails[0] || !user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (user && user.emails[0]) {
      data.receipt_email = user.emails[0].address;
    }

    if (!data.source) {
      if (!user.stripe.id) {
        throw new Meteor.Error(500, "[Stripe Charges] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
      }

      data.customer = user.stripe.id;
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.charges.create, client.charges);
    return method(data);
  },
  "stripe_charges_update": function (chargeID, data) {
    if (!chargeID) {
      throw new Meteor.Error(500, "[Stripe Charges] - No Stripe Charge ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Charges] - No Stripe User Data Provided");
    }

    check(chargeID, String);
    check(data, {
      description: Match.Maybe(String),
      fraud_details: Match.Maybe(Object),
      metadata: Match.Maybe(Object),
      receipt_email: Match.Maybe(String),
      destination: Match.Maybe(Match.ObjectIncluding({
        address: Match.Maybe(Match.ObjectIncluding({
          line1: String,
          city: Match.Maybe(String),
          country: Match.Maybe(String),
          lin2: Match.Maybe(String),
          postal_code: Match.Maybe(String),
          state: Match.Maybe(String)
        })),
        name: String,
        carrier: Match.Maybe(String),
        phone: Match.Maybe(String),
        tracking_number: Match.Maybe(String)
      })),
      transfer_group: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.charges.update, client.charges);
    return method(chargeID, data);
  },
  "stripe_charges_get": function (chargeID) {
    if (!chargeID) {
      throw new Meteor.Error(500, "[Stripe Charges] - No Stripe Charge ID Provided");
    }

    check(chargeID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.charges.retrieve, client.charges);
    return method(chargeID);
  },
  "stripe_charges_capture": function (chargeID, data) {
    if (!chargeID) {
      throw new Meteor.Error(500, "[Stripe Charges] - No Stripe Charge ID Provided");
    }

    check(chargeID, String);
    check(data, {
      amount: Match.Maybe(Number),
      application_fee: Match.Maybe(Number),
      receipt_email: Match.Maybe(String),
      statement_descriptor: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.charges.capture, client.charges);
    return method(chargeID, data);
  },
  "stripe_charges_list": function (query) {
    if (!query) {
      throw new Meteor.Error(500, "[Stripe Charges] - No Query Provided");
    }

    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      customer: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      source: Match.Maybe(Match.ObjectIncluding({
        object: Match.Maybe(String)
      })),
      starting_after: Match.Maybe(String),
      transfer_group: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.charges.list, client.charges);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"customers.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/core/customers.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_customers_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Stripe User Data Provided");
    }

    check(user, Object);
    check(data, {
      account_balance: Match.Maybe(Number),
      business_vat_id: Match.Maybe(String),
      coupon: Match.Maybe(String),
      description: Match.Maybe(String),
      email: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      shipping: Match.Maybe(Object),
      source: Match.Maybe(Object)
    });

    if (!user.emails[0] || !user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Customers] - User (" + user._id + ") already has a Stripe account.");
    }

    if (user && user.emails[0]) {
      data.email = user.emails[0].address;
    }

    if (user && user.profile) {
      data.description = (user.profile.name || "") + " " + (user.profile.lastName || "") + "-[" + user._id + "]";
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.create, client.customers);
    let stripeRes = method(data);
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        stripe: Object.assign({}, user.stripe, {
          id: stripeRes.id
        })
      }
    });
    return stripeRes;
  },
  "stripe_customers_update": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Stripe User Data Provided");
    }

    check(user, Object);
    check(data, {
      account_balance: Match.Maybe(Number),
      business_vat_id: Match.Maybe(String),
      coupon: Match.Maybe(String),
      default_source: Match.Maybe(String),
      description: Match.Maybe(String),
      email: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      shipping: Match.Maybe(Object),
      source: Match.Maybe(Object)
    });

    if (!user.emails[0] || !user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (user && user.emails[0]) {
      data.email = user.emails[0].address;
    }

    if (!data.description && user && user.profile) {
      data.description = (user.profile.name || "") + " " + (user.profile.lastName || "") + " - [" + user._id + "]";
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.update, client.customers);
    let stripeRes = method(user.stripe.id, data);
    return stripeRes;
  },
  "stripe_customers_get": function (user) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
    }

    check(user, Object);

    if (!user.emails[0] || !user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user || !user.stripe || !user.stripe.id) {
      Meteor.call("stripe_customers_create", user, {});
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user || !user.stripe || !user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Customers] - User or Stripe data doesn't exist.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.retrieve, client.customers);
    return method(user.stripe.id);
  },
  "stripe_customers_delete": function (user) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
    }

    check(user, Object);

    if (!user.emails[0] || !user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user || !user.stripe || !user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Customers] - User or Stripe data doesn't exist.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.del, client.customers);
    Meteor.users.update({
      _id: user._id
    }, {
      $set: {
        stripe: {
          id: null,
          cards: []
        }
      }
    });
    return method(user.stripe.id);
  },
  "stripe_customers_list": function (query) {
    if (!query) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Query Provided");
    }

    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.list, client.customers);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"refunds.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/core/refunds.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_refunds_create": function (data) {
    if (!data) {
      throw new Meteor.Error(500, "[Stripe Refunds] - No Refund Data Provided");
    }

    check(data, {
      charge: String,
      amount: Match.Maybe(Number),
      metadata: Match.Maybe(Object),
      reason: Match.Maybe(String),
      refund_application_fee: Match.Maybe(String),
      reverse_transfer: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.refunds.create, client.refunds);
    return method(data);
  },
  "stripe_refunds_update": function (refundID, data) {
    if (!refundID) {
      throw new Meteor.Error(500, "[Stripe Refunds] - No Stripe Refund ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Refunds] - No Stripe Refund Data Provided");
    }

    check(refundID, String);
    check(data, {
      metadata: Match.Maybe(Object)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.refunds.update, client.refunds);
    return method(refundID, data);
  },
  "stripe_refunds_get": function (refundID) {
    if (!refundID) {
      throw new Meteor.Error(500, "[Stripe Refunds] - No Stripe Refund ID Provided");
    }

    check(refundID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.refunds.retrieve, client.refunds);
    return method(refundID);
  },
  "stripe_refunds_list": function (query) {
    if (!query) {
      throw new Meteor.Error(500, "[Stripe Refunds] - No Query Provided");
    }

    check(query, {
      charge: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.refunds.list, client.refunds);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"transfers.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/core/transfers.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_transfers_create": function (data) {
    if (!data) {
      throw new Meteor.Error(500, "[Stripe Transfers] - No Transfer Data Provided");
    }

    check(data, {
      amount: Number,
      application_fee: Match.Maybe(Number),
      currency: String,
      destination: String,
      description: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      source_transaction: Match.Maybe(String),
      statement_descriptor: Match.Maybe(String),
      source_type: Match.Maybe(String),
      method: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.transfers.create, client.transfers);
    return method(data);
  },
  "stripe_transfers_update": function (transferID, data) {
    if (!transferID) {
      throw new Meteor.Error(500, "[Stripe Transfers] - No Stripe Transfer ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Transfers] - No Stripe Transfer Data Provided");
    }

    check(transferID, String);
    check(data, {
      description: Match.Maybe(String),
      metadata: Match.Maybe(Object)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.transfers.update, client.transfers);
    return method(transferID, data);
  },
  "stripe_transfers_get": function (transferID) {
    if (!transferID) {
      throw new Meteor.Error(500, "[Stripe Transfers] - No Stripe Transfer ID Provided");
    }

    check(transferID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.transfers.retrieve, client.transfers);
    return method(transferID);
  },
  "stripe_transfers_list": function (query) {
    if (!query) {
      throw new Meteor.Error(500, "[Stripe Transfers] - No Query Provided");
    }

    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      date: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      destination: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String),
      status: Match.Maybe(String),
      transfer_group: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.transfers.list, client.transfers);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"payment-methods":{"bank-accounts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/payment-methods/bank-accounts.jsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_bank_accounts_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe User Data Provided");
    }

    check(user, Object);
    check(data, {
      source: Match.OneOf(String, Match.ObjectIncluding({
        object: String,
        account_number: String,
        country: String,
        currency: String,
        account_holder_name: String,
        account_holder_type: String,
        routing_number: String
      })),
      metadata: Match.Maybe(Object)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.createSource, client.customers);
    return method(user.stripe.id, data);
  },
  "stripe_bank_accounts_update": function (user, accountID, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
    }

    if (!accountID) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account Data Provided");
    }

    check(user, Object);
    check(accountID, String);
    check(data, {
      account_holder_name: Match.Maybe(String),
      account_holder_type: Match.Maybe(String),
      metadata: Match.Maybe(Object)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.updateCard, client.customers);
    return method(user.stripe.id, accountID, data);
  },
  "stripe_bank_accounts_get": function (user, accountID) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
    }

    if (!accountID) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
    }

    check(user, Object);
    check(accountID, String);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.retrieveSource, client.customers);
    return method(user.stripe.id, accountID);
  },
  "stripe_bank_accounts_delete": function (user, accountID) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
    }

    if (!accountID) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
    }

    check(user, Object);
    check(accountID, String);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.deleteSource, client.customers);
    return method(user.stripe.id, accountID);
  },
  "stripe_bank_accounts_verify": function (user, accountID, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
    }

    if (!accountID) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe Bank Account ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Stripe User Data Provided");
    }

    check(user, Object);
    check(accountID, String);
    check(data, {
      amounts: [Number],
      verification_method: Match.Maybe(Object)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.verifySource, client.customers);
    return method(user.stripe.id, accountID, data);
  },
  "stripe_bank_accounts_list": function (user, query) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Application User Provided");
    }

    if (!query) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - No Query Provided");
    }

    check(user, Object);
    check(query, {
      object: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Bank Accounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    query.object = "bank_account";
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.listSources, client.customers);
    return method(user.stripe.id, query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/payment-methods/bundle.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./bank-accounts"));
module.watch(require("./cards"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cards.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/payment-methods/cards.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_cards_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card Data Provided");
    }

    check(user, Object);
    check(data, {
      source: Match.OneOf(String, Match.ObjectIncluding({
        object: String,
        exp_month: Number,
        exp_year: Number,
        number: Number,
        address_city: Match.Maybe(String),
        address_country: Match.Maybe(String),
        address_line1: Match.Maybe(String),
        address_line2: Match.Maybe(String),
        address_state: Match.Maybe(String),
        address_zip: Match.Maybe(String),
        currency: Match.Maybe(Object),
        cvc: String,
        default_for_currency: Match.Maybe(String),
        metadata: Match.Maybe(Object),
        name: Match.Maybe(String)
      })),
      metadata: Match.Maybe(Object)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.createSource, client.customers);
    return method(user.stripe.id, data);
  },
  "stripe_cards_update": function (user, cardID, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
    }

    if (!cardID) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card Data Provided");
    }

    check(user, Object);
    check(cardID, String);
    check(data, {
      address_city: Match.Maybe(String),
      address_country: Match.Maybe(String),
      address_line1: Match.Maybe(String),
      address_line2: Match.Maybe(String),
      address_state: Match.Maybe(String),
      address_zip: Match.Maybe(String),
      exp_month: Match.Maybe(Number),
      exp_year: Match.Maybe(Number),
      metadata: Match.Maybe(Object),
      name: Match.Maybe(String)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.updateCard, client.customers);
    return method(user.stripe.id, cardID, data);
  },
  "stripe_cards_get": function (user, cardID) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
    }

    if (!cardID) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Stripe Card ID Provided");
    }

    check(user, Object);
    check(cardID, String);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.retrieveCard, client.customers);
    return method(user.stripe.id, cardID);
  },
  "stripe_cards_delete": function (user, cardID) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
    }

    if (!cardID) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Card Account ID Provided");
    }

    check(user, Object);
    check(cardID, String);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.deleteCard, client.customers);
    return method(user.stripe.id, cardID);
  },
  "stripe_cards_list": function (user, query) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Application User Provided");
    }

    if (!query) {
      throw new Meteor.Error(500, "[Stripe Cards] - No Query Provided");
    }

    check(user, Object);
    check(query, {
      object: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.listCards, client.customers);
    return method(user.stripe.id, query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"subscriptions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/bundle.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./coupons"));
module.watch(require("./discounts"));
module.watch(require("./invoices"));
module.watch(require("./invoice-items"));
module.watch(require("./plans"));
module.watch(require("./subscriptions"));
module.watch(require("./subscription-items"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"coupons.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/coupons.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_coupons_create": function (data) {
    if (!data) {
      throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon Data Provided");
    }

    check(data, {
      id: Match.Maybe(String),
      duration: Match.Where(function (duration) {
        check(duration, String);

        if (duration === "repeating" && !data.duration_in_months) {
          throw new Error("duration_in_months must be set when duration is repeating");
        }

        if (!data.amount_off && !data.percent_off || data.amount_off && data.percent_off) {
          throw new Error("Either percent_off or amount_off must be set");
        }

        if (data.amount_off && !data.currency) {
          throw new Error("Currency must be set when amount_off is used");
        }

        return true;
      }),
      amount_off: Match.Maybe(Match.Where(function (amount) {
        if (data.percent_off) {
          return true;
        }

        check(amount, Number);
        return true;
      })),
      currency: Match.Maybe(Match.Where(function (currency) {
        if (data.amount_off) {
          check(currency, String);
          return true;
        }

        return true;
      })),
      duration_in_months: Match.Maybe(Match.Where(function (months) {
        if (data.duration === "repeating") {
          check(months, Number);
          return true;
        }

        return true;
      })),
      max_redemptions: Match.Maybe(Number),
      metadata: Match.Maybe(Object),
      percent_off: Match.Maybe(Match.Where(function (amount) {
        if (data.amount_off) {
          return true;
        }

        check(amount, Number);
        return true;
      })),
      redeem_by: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.coupons.create, client.coupons);
    return method(data);
  },
  "stripe_coupons_update": function (couponID, data) {
    if (!couponID) {
      throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon Data Provided");
    }

    check(couponID, String);
    check(data, {
      metadata: Match.Maybe(Object)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.coupons.update, client.coupons);
    return method(couponID, data);
  },
  "stripe_coupons_get": function (couponID) {
    if (!couponID) {
      throw new Meteor.Error(500, "[Stripe Coupons] - No Stripe Coupon ID Provided");
    }

    check(couponID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.coupons.retrieve, client.coupons);
    return method(couponID);
  },
  "stripe_coupons_delete": function (couponID) {
    if (!couponID) {
      throw new Meteor.Error(500, "[Stripe Coupons] - No Coupon ID Provided");
    }

    check(couponID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.coupons.del, client.coupons);
    return method(couponID);
  },
  "stripe_coupons_list": function (query) {
    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.coupons.list, client.coupons);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"discounts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/discounts.jsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
Meteor.methods({
  "stripe_discounts_delete_from_customer": function (user) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Discounts] - No Application User Provided");
    }

    check(user, Object);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Discounts] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.customers.deleteDiscount, client.customers);
    return method(user.stripe.id);
  },
  "stripe_discounts_delete_from_subscription": function (subscriptionID) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Discounts] - No Subscription ID Provided");
    }

    check(subscriptionID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.subscriptions.deleteDiscount, client.subscriptions);
    return method(subscriptionID);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"invoice-items.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/invoice-items.jsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_invoice_items_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item Data Provided");
    }

    check(user, Object);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    data.customer = user.stripe.id;
    check(data, {
      amount: Number,
      currency: String,
      customer: String,
      description: Match.Maybe(String),
      discountable: Match.Maybe(Boolean),
      invoice: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      subscription: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoiceItems.create, client.invoiceItems);
    return method(data);
  },
  "stripe_invoice_items_update": function (subscriptionID, data) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item Data Provided");
    }

    check(subscriptionID, String);
    check(data, {
      amount: Number,
      description: Match.Maybe(String),
      discountable: Match.Maybe(Boolean),
      metadata: Match.Maybe(Object)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoiceItems.update, client.invoiceItems);
    return method(subscriptionID, data);
  },
  "stripe_invoice_items_get": function (subscriptionID) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - No Stripe Invoice Item ID Provided");
    }

    check(subscriptionID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoiceItems.retrieve, client.invoiceItems);
    return method(subscriptionID);
  },
  "stripe_invoice_items_delete": function (subscriptionID) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Invoice Items] - No Invoice Item ID Provided");
    }

    check(subscriptionID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoiceItems.del, client.invoiceItems);
    return method(subscriptionID);
  },
  "stripe_invoice_items_list": function (query) {
    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      customer: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoiceItems.list, client.invoiceItems);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"invoices.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/invoices.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_invoices_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice Data Provided");
    }

    check(user, Object);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Invoices] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    data.customer = user.stripe.id;
    check(data, {
      customer: String,
      application_fee: Match.Maybe(String),
      description: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      statement_descriptor: Match.Maybe(String),
      subscription: Match.Maybe(String),
      tax_percent: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.create, client.invoices);
    return method(data);
  },
  "stripe_invoices_update": function (invoiceID, data) {
    if (!invoiceID) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice Data Provided");
    }

    check(invoiceID, String);
    check(data, {
      application_fee: Match.Maybe(String),
      closed: Match.Maybe(Boolean),
      description: Match.Maybe(String),
      forgiven: Match.Maybe(Boolean),
      metadata: Match.Maybe(Object),
      statement_descriptor: Match.Maybe(String),
      subscription: Match.Maybe(String),
      tax_percent: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.update, client.invoices);
    return method(invoiceID, data);
  },
  "stripe_invoices_get": function (invoiceID) {
    if (!invoiceID) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
    }

    check(invoiceID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.retrieve, client.invoices);
    return method(invoiceID);
  },
  "stripe_invoices_get_items": function (invoiceID, query) {
    if (!invoiceID) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
    }

    check(invoiceID, String);
    check(query, {
      coupon: Match.Maybe(String),
      customer: Match.Maybe(String),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String),
      subscription: Match.Maybe(String),
      subscription_items: Match.Maybe(Match.ObjectIncluding({
        id: Match.Maybe(String),
        deleted: Match.Maybe(String),
        plan: Match.Maybe(String),
        quantity: Match.Maybe(String)
      })),
      subscription_plan: Match.Maybe(String),
      subscription_prorate: Match.Maybe(String),
      subscription_proration_date: Match.Maybe(String),
      subscription_quantity: Match.Maybe(String),
      subscription_tax_percent: Match.Maybe(String),
      subscription_trial_end: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.retrieveLines, client.invoices);
    return method(invoiceID);
  },
  "stripe_invoices_get_upcoming": function (user, query) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Application User Provided");
    }

    check(user, Object);
    check(query, {
      coupon: Match.Maybe(String),
      subscription: Match.Maybe(String),
      subscription_items: Match.Maybe(Match.ObjectIncluding({
        id: Match.Maybe(String),
        deleted: Match.Maybe(String),
        plan: Match.Maybe(String),
        quantity: Match.Maybe(String)
      })),
      subscription_plan: Match.Maybe(String),
      subscription_prorate: Match.Maybe(String),
      subscription_proration_date: Match.Maybe(String),
      subscription_quantity: Match.Maybe(String),
      subscription_tax_percent: Match.Maybe(String),
      subscription_trial_end: Match.Maybe(String)
    });

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Invoices] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.retrieveUpcoming, client.invoices);
    return method(user.stripe.id, query);
  },
  "stripe_invoices_pay": function (invoiceID) {
    if (!invoiceID) {
      throw new Meteor.Error(500, "[Stripe Invoices] - No Stripe Invoice ID Provided");
    }

    check(invoiceID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.pay, client.invoices);
    return method(invoiceID);
  },
  "stripe_invoices_list": function (query) {
    check(query, {
      customer: Match.Maybe(String),
      date: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.invoices.list, client.invoices);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"plans.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/plans.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_plans_create": function (data) {
    if (!data) {
      throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan Data Provided");
    }

    check(data, {
      id: String,
      amount: Number,
      currency: String,
      interval: String,
      name: String,
      interval_count: Match.Maybe(String),
      metadata: Match.Maybe(Object),
      statement_descriptor: Match.Maybe(String),
      trial_period_days: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.plans.create, client.plans);
    return method(data);
  },
  "stripe_plans_update": function (planID, data) {
    if (!planID) {
      throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan Data Provided");
    }

    check(planID, String);
    check(data, {
      metadata: Match.Maybe(Object),
      name: Match.Maybe(String),
      statement_descriptor: Match.Maybe(String),
      trial_period_days: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.plans.update, client.plans);
    return method(planID, data);
  },
  "stripe_plans_get": function (planID) {
    if (!planID) {
      throw new Meteor.Error(500, "[Stripe Plans] - No Stripe Plan ID Provided");
    }

    check(planID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.plans.retrieve, client.plans);
    return method(planID);
  },
  "stripe_plans_delete": function (planID) {
    if (!planID) {
      throw new Meteor.Error(500, "[Stripe Plans] - No Plan ID Provided");
    }

    check(planID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.plans.del, client.plans);
    return method(planID);
  },
  "stripe_plans_list": function (query) {
    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.plans.list, client.plans);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscription-items.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/subscription-items.jsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//TODO: Subscription Items
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/subscriptions/subscriptions.jsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StripeConnection;
module.watch(require("../connection"), {
  default(v) {
    StripeConnection = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 3);
Meteor.methods({
  "stripe_subscriptions_create": function (user, data) {
    if (!user) {
      throw new Meteor.Error(500, "[Stripe Customers] - No Application User Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription Data Provided");
    }

    check(user, Object);

    if (!user.stripe) {
      user = Meteor.users.findOne({
        _id: user._id
      });
    }

    if (!user.stripe.id) {
      throw new Meteor.Error(500, "[Stripe Cards] - User (" + user._id + ") does not have a Stripe ID & no source defined.");
    }

    data.customer = user.stripe.id;
    check(data, {
      customer: Match.Where(function (customer) {
        check(customer, String);

        if (!data.items && !data.plan || data.items && data.plan) {
          throw new Meteor.Error(500, "[Stripe Subscriptions] - Either Items or Plan must be provided");
        }

        if (data.items && data.items.length === 0) {
          throw new Meteor.Error(500, "[Stripe Subscriptions] - Items must have at least 1 plan");
        }

        return true;
      }),
      application_fee_percent: Match.Maybe(String),
      coupon: Match.Maybe(String),
      items: Match.Maybe([Match.ObjectIncluding({
        plan: String,
        quantity: Match.Maybe(Number)
      })]),
      metadata: Match.Maybe(Object),
      plan: Match.Maybe(String),
      prorate: Match.Maybe(String),
      quantity: Match.Maybe(Number),
      source: Match.Maybe(String),
      tax_percent: Match.Maybe(Number),
      trial_end: Match.Maybe(Number),
      trial_period_days: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.subscriptions.create, client.subscriptions);
    return method(data);
  },
  "stripe_subscriptions_update": function (subscriptionID, data) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription ID Provided");
    }

    if (!data) {
      throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription Data Provided");
    }

    check(subscriptionID, String);
    check(data, {
      application_fee_percent: Match.Maybe(String),
      coupon: Match.Maybe(String),
      items: Match.Maybe([Match.ObjectIncluding({
        plan: String,
        quantity: Match.Maybe(Number)
      })]),
      metadata: Match.Maybe(Object),
      plan: Match.Maybe(String),
      prorate: Match.Maybe(String),
      proration_date: Match.Maybe(String),
      quantity: Match.Maybe(Number),
      source: Match.Maybe(String),
      tax_percent: Match.Maybe(Number),
      trial_end: Match.Maybe(Number)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.subscriptions.update, client.subscriptions);
    return method(subscriptionID, data);
  },
  "stripe_subscriptions_get": function (subscriptionID) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Subscriptions] - No Stripe Subscription ID Provided");
    }

    check(subscriptionID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.subscriptions.retrieve, client.subscriptions);
    return method(subscriptionID);
  },
  "stripe_subscriptions_delete": function (subscriptionID) {
    if (!subscriptionID) {
      throw new Meteor.Error(500, "[Stripe Subscriptions] - No Subscription ID Provided");
    }

    check(subscriptionID, String);
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.subscriptions.del, client.subscriptions);
    return method(subscriptionID);
  },
  "stripe_subscriptions_list": function (query) {
    check(query, {
      created: Match.Maybe(Match.ObjectIncluding({
        gt: Match.Maybe(String),
        gte: Match.Maybe(String),
        lt: Match.Maybe(String),
        lte: Match.Maybe(String)
      })),
      ending_before: Match.Maybe(String),
      limit: Match.Maybe(Number),
      starting_after: Match.Maybe(String)
    });
    let client = StripeConnection();
    let method = Meteor.wrapAsync(client.subscriptions.list, client.subscriptions);
    return method(query);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/bundle.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./core/bundle"));
module.watch(require("./payment-methods/bundle"));
module.watch(require("./subscriptions/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/stripe/server/connection.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Stripe;
module.watch(require("stripe"), {
  default(v) {
    Stripe = v;
  }

}, 0);

let StripeConneciton = function () {
  let client = Stripe(Meteor.settings.private.stripe.secretKey);
  return client;
};

module.exportDefault(StripeConneciton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"accounts":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/accounts/server/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./social-connect"));
module.watch(require("./methods"));
module.watch(require("./image-upload"));
module.watch(require("./invites"));
module.watch(require("./fake-accounts"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fake-accounts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/accounts/server/fake-accounts.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Schema;
module.watch(require("../../../server/schemas/accounts/schema"), {
  default(v) {
    Schema = v;
  }

}, 1);
let faker;
module.watch(require("faker"), {
  default(v) {
    faker = v;
  }

}, 2);
let Countries;
module.watch(require("../../../constants/countries"), {
  default(v) {
    Countries = v;
  }

}, 3);

let _;

module.watch(require("lodash"), {
  default(v) {
    _ = v;
  }

}, 4);
const isoLangs = {
  "ab": {
    "name": "Abkhaz",
    "code": "ab",
    "native": "аҧсуа",
    "icon": "flag-icon-ru"
  },
  "aa": {
    "name": "Afar",
    "code": "aa",
    "native": "Afaraf",
    "icon": "flag-icon-et"
  },
  "af": {
    "name": "Afrikaans",
    "code": "af",
    "native": "Afrikaans",
    "icon": "flag-icon-za"
  },
  "ak": {
    "name": "Akan",
    "code": "ak",
    "native": "Akan",
    "icon": "flag-icon-gh"
  },
  "sq": {
    "name": "Albanian",
    "code": "sq",
    "native": "Shqip",
    "icon": "flag-icon-al"
  },
  "am": {
    "name": "Amharic",
    "code": "am",
    "native": "አማርኛ",
    "icon": "flag-icon-et"
  },
  "ar": {
    "name": "Arabic",
    "code": "ar",
    "native": "العربية",
    "icon": "flag-icon-sa"
  },
  "an": {
    "name": "Aragonese",
    "code": "an",
    "native": "Aragonés",
    "icon": "flag-icon-es"
  },
  "hy": {
    "name": "Armenian",
    "code": "hy",
    "native": "Հայերեն",
    "icon": "flag-icon-am"
  },
  "as": {
    "name": "Assamese",
    "code": "as",
    "native": "অসমীয়া",
    "icon": "flag-icon-in"
  },
  "av": {
    "name": "Avaric",
    "code": "av",
    "native": "авар мацӀ, магӀарул мацӀ",
    "icon": "flag-icon-ru"
  },
  "ay": {
    "name": "Aymara",
    "code": "ay",
    "native": "aymar aru",
    "icon": "flag-icon-cl"
  },
  "az": {
    "name": "Azerbaijani",
    "code": "az",
    "native": "azərbaycan dili",
    "icon": "flag-icon-az"
  },
  "bm": {
    "name": "Bambara",
    "code": "bm",
    "native": "Bamanankan",
    "icon": "flag-icon-ml"
  },
  "ba": {
    "name": "Bashkir",
    "code": "ba",
    "native": "башҡорт теле",
    "icon": "flag-icon-ru"
  },
  "eu": {
    "name": "Basque",
    "code": "eu",
    "native": "Euskara, euskera",
    "icon": "flag-icon-es"
  },
  "be": {
    "name": "Belarusian",
    "code": "be",
    "native": "Беларуская",
    "icon": "flag-icon-by"
  },
  "bn": {
    "name": "Bengali",
    "code": "bn",
    "native": "বাংলা",
    "icon": "flag-icon-in"
  },
  "bh": {
    "name": "Bihari",
    "code": "bh",
    "native": "भोजपुरी",
    "icon": "flag-icon-in"
  },
  "bi": {
    "name": "Bislama",
    "code": "bi",
    "native": "Bislama",
    "icon": "flag-icon-vu"
  },
  "bs": {
    "name": "Bosnian",
    "code": "bs",
    "native": "Bosanski jezik",
    "icon": "flag-icon-ba"
  },
  "br": {
    "name": "Breton",
    "code": "br",
    "native": "Brezhoneg",
    "icon": "flag-icon-fr"
  },
  "bg": {
    "name": "Bulgarian",
    "code": "bg",
    "native": "български език",
    "icon": "flag-icon-bg"
  },
  "my": {
    "name": "Burmese",
    "code": "my",
    "native": "ဗမာစာ",
    "icon": "flag-icon-mm"
  },
  "ca": {
    "name": "Catalan",
    "code": "ca",
    "native": "Català",
    "icon": "flag-icon-ad"
  },
  "ch": {
    "name": "Chamorro",
    "code": "ch",
    "native": "Chamoru",
    "icon": "flag-icon-gu"
  },
  "ce": {
    "name": "Chechen",
    "code": "ce",
    "native": "нохчийн мотт",
    "icon": "flag-icon-ru"
  },
  "ny": {
    "name": "Chichewa",
    "code": "ny",
    "native": "ChiCheŵa",
    "icon": "flag-icon-mw"
  },
  "zh": {
    "name": "Chinese",
    "code": "zh",
    "native": "中文",
    "icon": "flag-icon-cn"
  },
  "cv": {
    "name": "Chuvash",
    "code": "cv",
    "native": "чӑваш чӗлхи",
    "icon": "flag-icon-ru"
  },
  "kw": {
    "name": "Cornish",
    "code": "kw",
    "native": "Kernewek",
    "icon": "flag-icon-gb"
  },
  "co": {
    "name": "Corsican",
    "code": "co",
    "native": "Corsu, lingua corsa",
    "icon": "flag-icon-fr"
  },
  "cr": {
    "name": "Cree",
    "code": "cr",
    "native": "ᓀᐦᐃᔭᐍᐏᐣ",
    "icon": "flag-icon-ca"
  },
  "hr": {
    "name": "Croatian",
    "code": "hr",
    "native": "Hrvatski",
    "icon": "flag-icon-hr"
  },
  "cs": {
    "name": "Czech",
    "code": "cs",
    "native": "česky, čeština",
    "icon": "flag-icon-cz"
  },
  "da": {
    "name": "Danish",
    "code": "da",
    "native": "Dansk",
    "icon": "flag-icon-dk"
  },
  "dv": {
    "name": "Divehi",
    "code": "dv",
    "native": "ދިވެހި",
    "icon": "flag-icon-mv"
  },
  "nl": {
    "name": "Dutch",
    "code": "nl",
    "native": "Nederlands, Vlaams",
    "icon": "flag-icon-nl"
  },
  "en": {
    "name": "English",
    "code": "en",
    "native": "English",
    "icon": "flag-icon-us"
  },
  "et": {
    "name": "Estonian",
    "code": "et",
    "native": "Eesti, eesti keel",
    "icon": "flag-icon-ee"
  },
  "ee": {
    "name": "Ewe",
    "code": "ee",
    "native": "Eʋegbe",
    "icon": "flag-icon-gh"
  },
  "fo": {
    "name": "Faroese",
    "code": "fo",
    "native": "føroyskt",
    "icon": "flag-icon-dk"
  },
  "fj": {
    "name": "Fijian",
    "code": "fj",
    "native": "vosa Vakaviti",
    "icon": "flag-icon-fj"
  },
  "fi": {
    "name": "Finnish",
    "code": "fi",
    "native": "suomi, suomen kieli",
    "icon": "flag-icon-fi"
  },
  "fr": {
    "name": "French",
    "code": "fr",
    "native": "français",
    "icon": "flag-icon-fr"
  },
  "gl": {
    "name": "Galician",
    "code": "gl",
    "native": "Galego",
    "icon": "flag-icon-es"
  },
  "ka": {
    "name": "Georgian",
    "code": "ka",
    "native": "ქართული",
    "icon": "flag-icon-ge"
  },
  "de": {
    "name": "German",
    "code": "de",
    "native": "Deutsch",
    "icon": "flag-icon-de"
  },
  "el": {
    "name": "Greek",
    "code": "el",
    "native": "Ελληνικά",
    "icon": "flag-icon-gr"
  },
  "gn": {
    "name": "Guaraní",
    "code": "gn",
    "native": "Avañeẽ",
    "icon": "flag-icon-py"
  },
  "gu": {
    "name": "Gujarati",
    "code": "gu",
    "native": "ગુજરાતી",
    "icon": "flag-icon-in"
  },
  "ht": {
    "name": "Haitian",
    "code": "ht",
    "native": "Kreyòl ayisyen",
    "icon": "flag-icon-ht"
  },
  "ha": {
    "name": "Hausa",
    "code": "ha",
    "native": "Hausa, هَوُسَ",
    "icon": "flag-icon-ng"
  },
  "he": {
    "name": "Hebrew",
    "code": "he",
    "native": "עברית",
    "icon": "flag-icon-il"
  },
  "hi": {
    "name": "Hindi",
    "code": "hi",
    "native": "हिन्दी, हिंदी",
    "icon": "flag-icon-in"
  },
  "ho": {
    "name": "Hiri Motu",
    "code": "ho",
    "native": "Hiri Motu",
    "icon": "flag-icon-pg"
  },
  "hu": {
    "name": "Hungarian",
    "code": "hu",
    "native": "Magyar",
    "icon": "flag-icon-hu"
  },
  "id": {
    "name": "Indonesian",
    "code": "id",
    "native": "Bahasa Indonesia",
    "icon": "flag-icon-id"
  },
  "ga": {
    "name": "Irish",
    "code": "ga",
    "native": "Gaeilge",
    "icon": "flag-icon-gb"
  },
  "ig": {
    "name": "Igbo",
    "code": "ig",
    "native": "Asụsụ Igbo",
    "icon": "flag-icon-ng"
  },
  "ik": {
    "name": "Inupiaq",
    "code": "ik",
    "native": "Iñupiaq, Iñupiatun",
    "icon": "flag-icon-us"
  },
  "is": {
    "name": "Icelandic",
    "code": "is",
    "native": "Íslenska",
    "icon": "flag-icon-is"
  },
  "it": {
    "name": "Italian",
    "code": "it",
    "native": "Italiano",
    "icon": "flag-icon-it"
  },
  "iu": {
    "name": "Inuktitut",
    "code": "iu",
    "native": "ᐃᓄᒃᑎᑐᑦ",
    "icon": "flag-icon-ca"
  },
  "ja": {
    "name": "Japanese",
    "code": "ja",
    "native": "日本語",
    "icon": "flag-icon-jp"
  },
  "jv": {
    "name": "Javanese",
    "code": "jv",
    "native": "basa Jawa",
    "icon": "flag-icon-id"
  },
  "kl": {
    "name": "Kalaallisut",
    "code": "kl",
    "native": "kalaallisut",
    "icon": "flag-icon-gl"
  },
  "kn": {
    "name": "Kannada",
    "code": "kn",
    "native": "ಕನ್ನಡ",
    "icon": "flag-icon-in"
  },
  "kr": {
    "name": "Kanuri",
    "code": "kr",
    "native": "Kanuri",
    "icon": "flag-icon-ng"
  },
  "ks": {
    "name": "Kashmiri",
    "code": "ks",
    "native": "कश्मीरी, كشميري‎",
    "icon": "flag-icon-in"
  },
  "kk": {
    "name": "Kazakh",
    "code": "kk",
    "native": "Қазақ тілі",
    "icon": "flag-icon-kz"
  },
  "km": {
    "name": "Khmer",
    "code": "km",
    "native": "ភាសាខ្មែរ",
    "icon": "flag-icon-kh"
  },
  "ki": {
    "name": "Kikuyu",
    "code": "ki",
    "native": "Gĩkũyũ",
    "icon": "flag-icon-ke"
  },
  "rw": {
    "name": "Kinyarwanda",
    "code": "rw",
    "native": "Ikinyarwanda",
    "icon": "flag-icon-rw"
  },
  "ky": {
    "name": "Kirghiz",
    "code": "ky",
    "native": "кыргыз тили",
    "icon": "flag-icon-kg"
  },
  "kv": {
    "name": "Komi",
    "code": "kv",
    "native": "коми кыв",
    "icon": "flag-icon-ru"
  },
  "kg": {
    "name": "Kongo",
    "code": "kg",
    "native": "KiKongo",
    "icon": "flag-icon-cd"
  },
  "ko": {
    "name": "Korean",
    "code": "ko",
    "native": "한국어",
    "icon": "flag-icon-kr"
  },
  "ku": {
    "name": "Kurdish",
    "code": "ku",
    "native": "كوردی‎",
    "icon": "flag-icon-iq"
  },
  "kj": {
    "name": "Kwanyama",
    "code": "kj",
    "native": "Kuanyama",
    "icon": "flag-icon-ao"
  },
  "lb": {
    "name": "Luxembourgish",
    "code": "lb",
    "native": "Lëtzebuergesch",
    "icon": "flag-icon-lu"
  },
  "lg": {
    "name": "Luganda",
    "code": "lg",
    "native": "Luganda",
    "icon": "flag-icon-ug"
  },
  "li": {
    "name": "Limburgish",
    "code": "li",
    "native": "Limburgs",
    "icon": "flag-icon-nl"
  },
  "ln": {
    "name": "Lingala",
    "code": "ln",
    "native": "Lingála",
    "icon": "flag-icon-cd"
  },
  "lo": {
    "name": "Lao",
    "code": "lo",
    "native": "ພາສາລາວ",
    "icon": "flag-icon-la"
  },
  "lt": {
    "name": "Lithuanian",
    "code": "lt",
    "native": "lietuvių kalba",
    "icon": "flag-icon-lt"
  },
  "lv": {
    "name": "Latvian",
    "code": "lv",
    "native": "latviešu valoda",
    "icon": "flag-icon-lv"
  },
  "gv": {
    "name": "Manx",
    "code": "gv",
    "native": "Gaelg, Gailck",
    "icon": "flag-icon-im"
  },
  "mk": {
    "name": "Macedonian",
    "code": "mk",
    "native": "македонски јазик",
    "icon": "flag-icon-mk"
  },
  "mg": {
    "name": "Malagasy",
    "code": "mg",
    "native": "Malagasy fiteny",
    "icon": "flag-icon-mg"
  },
  "ms": {
    "name": "Malay",
    "code": "ms",
    "native": "بهاس ملايو‎",
    "icon": "flag-icon-my"
  },
  "ml": {
    "name": "Malayalam",
    "code": "ml",
    "native": "മലയാളം",
    "icon": "flag-icon-in"
  },
  "mt": {
    "name": "Maltese",
    "code": "mt",
    "native": "Malti",
    "icon": "flag-icon-mt"
  },
  "mi": {
    "name": "Māori",
    "code": "mi",
    "native": "te reo Māori",
    "icon": "flag-icon-nz"
  },
  "mr": {
    "name": "Marathi",
    "code": "mr",
    "native": "मराठी",
    "icon": "flag-icon-in"
  },
  "mh": {
    "name": "Marshallese",
    "code": "mh",
    "native": "Kajin M̧ajeļ",
    "icon": "flag-icon-mh"
  },
  "mn": {
    "name": "Mongolian",
    "code": "mn",
    "native": "монгол",
    "icon": "flag-icon-mn"
  },
  "na": {
    "name": "Nauru",
    "code": "na",
    "native": "Ekakairũ Naoero",
    "icon": "flag-icon-nr"
  },
  "nv": {
    "name": "Navajo",
    "code": "nv",
    "native": "Diné bizaad, Dinékʼehǰí",
    "icon": "flag-icon-us"
  },
  "nb": {
    "name": "Norwegian Bokmål",
    "code": "nb",
    "native": "Norsk bokmål",
    "icon": "flag-icon-no"
  },
  "nd": {
    "name": "North Ndebele",
    "code": "nd",
    "native": "isiNdebele",
    "icon": "flag-icon-zw"
  },
  "ne": {
    "name": "Nepali",
    "code": "ne",
    "native": "नेपाली",
    "icon": "flag-icon-np"
  },
  "ng": {
    "name": "Ndonga",
    "code": "ng",
    "native": "Owambo",
    "icon": "flag-icon-ao"
  },
  "nn": {
    "name": "Norwegian Nynorsk",
    "code": "nn",
    "native": "Norsk nynorsk",
    "icon": "flag-icon-no"
  },
  "no": {
    "name": "Norwegian",
    "code": "no",
    "native": "Norsk",
    "icon": "flag-icon-no"
  },
  "ii": {
    "name": "Nuosu",
    "code": "ii",
    "native": "ꆈꌠ꒿ Nuosuhxop",
    "icon": "flag-icon-cn"
  },
  "nr": {
    "name": "South Ndebele",
    "code": "nr",
    "native": "isiNdebele",
    "icon": "flag-icon-za"
  },
  "oc": {
    "name": "Occitan",
    "code": "oc",
    "native": "Occitan",
    "icon": "flag-icon-es"
  },
  "oj": {
    "name": "Ojibwe",
    "code": "oj",
    "native": "ᐊᓂᔑᓈᐯᒧᐎᓐ",
    "icon": "flag-icon-ca"
  },
  "om": {
    "name": "Oromo",
    "code": "om",
    "native": "Afaan Oromoo",
    "icon": "flag-icon-et"
  },
  "or": {
    "name": "Oriya",
    "code": "or",
    "native": "ଓଡ଼ିଆ",
    "icon": "flag-icon-in"
  },
  "os": {
    "name": "Ossetian",
    "code": "os",
    "native": "ирон æвзаг",
    "icon": "flag-icon-ru"
  },
  "pa": {
    "name": "Panjabi, Punjabi",
    "code": "pa",
    "native": "ਪੰਜਾਬੀ, پنجابی‎",
    "icon": "flag-icon-in"
  },
  "pi": {
    "name": "Pāli",
    "code": "pi",
    "native": "पाऴि",
    "icon": "flag-icon-in"
  },
  "fa": {
    "name": "Persian",
    "code": "fa",
    "native": "فارسی",
    "icon": "flag-icon-ir"
  },
  "pl": {
    "name": "Polish",
    "code": "pl",
    "native": "polski",
    "icon": "flag-icon-pl"
  },
  "ps": {
    "name": "Pashto",
    "code": "ps",
    "native": "پښتو",
    "icon": "flag-icon-af"
  },
  "pt": {
    "name": "Portuguese",
    "code": "pt",
    "native": "Português",
    "icon": "flag-icon-pt"
  },
  "qu": {
    "name": "Quechua",
    "code": "qu",
    "native": "Runa Simi, Kichwa",
    "icon": "flag-icon-ar"
  },
  "rm": {
    "name": "Romansh",
    "code": "rm",
    "native": "rumantsch grischun",
    "icon": "flag-icon-ch"
  },
  "rn": {
    "name": "Kirundi",
    "code": "rn",
    "native": "kiRundi",
    "icon": "flag-icon-bi"
  },
  "ro": {
    "name": "Romanian",
    "code": "ro",
    "native": "română",
    "icon": "flag-icon-ro"
  },
  "ru": {
    "name": "Russian",
    "code": "ru",
    "native": "русский язык",
    "icon": "flag-icon-ru"
  },
  "sa": {
    "name": "Sanskrit",
    "code": "sa",
    "native": "संस्कृतम्",
    "icon": "flag-icon-in"
  },
  "sc": {
    "name": "Sardinian",
    "code": "sc",
    "native": "sardu",
    "icon": "flag-icon-it"
  },
  "sd": {
    "name": "Sindhi",
    "code": "sd",
    "native": "सिन्धी, سنڌي، سندھی‎",
    "icon": "flag-icon-pk"
  },
  "se": {
    "name": "Northern Sami",
    "code": "se",
    "native": "Davvisámegiella",
    "icon": "flag-icon-no"
  },
  "sm": {
    "name": "Samoan",
    "code": "sm",
    "native": "gagana faa Samoa",
    "icon": "flag-icon-ws"
  },
  "sg": {
    "name": "Sango",
    "code": "sg",
    "native": "yângâ tî sängö",
    "icon": "flag-icon-cf"
  },
  "sr": {
    "name": "Serbian",
    "code": "sr",
    "native": "српски језик",
    "icon": "flag-icon-rs"
  },
  "gd": {
    "name": "Gaelic",
    "code": "gd",
    "native": "Gàidhlig",
    "icon": "flag-icon-gb"
  },
  "sn": {
    "name": "Shona",
    "code": "sn",
    "native": "chiShona",
    "icon": "flag-icon-zw"
  },
  "si": {
    "name": "Sinhala",
    "code": "si",
    "native": "සිංහල",
    "icon": "flag-icon-lk"
  },
  "sk": {
    "name": "Slovak",
    "code": "sk",
    "native": "slovenčina",
    "icon": "flag-icon-sk"
  },
  "sl": {
    "name": "Slovene",
    "code": "sl",
    "native": "slovenščina",
    "icon": "flag-icon-si"
  },
  "so": {
    "name": "Somali",
    "code": "so",
    "native": "Soomaaliga, af Soomaali",
    "icon": "flag-icon-so"
  },
  "st": {
    "name": "Southern Sotho",
    "code": "st",
    "native": "Sesotho",
    "icon": "flag-icon-za"
  },
  "es": {
    "name": "Spanish",
    "code": "es",
    "native": "Español",
    "icon": "flag-icon-mx"
  },
  "su": {
    "name": "Sundanese",
    "code": "su",
    "native": "Basa Sunda",
    "icon": "flag-icon-id"
  },
  "sw": {
    "name": "Swahili",
    "code": "sw",
    "native": "Kiswahili",
    "icon": "flag-icon-tz"
  },
  "ss": {
    "name": "Swati",
    "code": "ss",
    "native": "SiSwati",
    "icon": "flag-icon-sz"
  },
  "sv": {
    "name": "Swedish",
    "code": "sv",
    "native": "svenska",
    "icon": "flag-icon-se"
  },
  "ta": {
    "name": "Tamil",
    "code": "ta",
    "native": "தமிழ்",
    "icon": "flag-icon-in"
  },
  "te": {
    "name": "Telugu",
    "code": "te",
    "native": "తెలుగు",
    "icon": "flag-icon-in"
  },
  "tg": {
    "name": "Tajik",
    "code": "tg",
    "native": "тоҷикӣ, toğikī, تاجیکی‎",
    "icon": "flag-icon-tj"
  },
  "th": {
    "name": "Thai",
    "code": "th",
    "native": "ไทย",
    "icon": "flag-icon-th"
  },
  "ti": {
    "name": "Tigrinya",
    "code": "ti",
    "native": "ትግርኛ",
    "icon": "flag-icon-er"
  },
  "bo": {
    "name": "Tibetan Standard, Tibetan, Central",
    "code": "bo",
    "native": "བོད་ཡིག",
    "icon": "flag-icon-cn"
  },
  "tk": {
    "name": "Turkmen",
    "code": "tk",
    "native": "Türkmen, Түркмен",
    "icon": "flag-icon-tm"
  },
  "tl": {
    "name": "Tagalog",
    "code": "tl",
    "native": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
    "icon": "flag-icon-ph"
  },
  "tn": {
    "name": "Tswana",
    "code": "tn",
    "native": "Setswana",
    "icon": "flag-icon-bw"
  },
  "to": {
    "name": "Tonga (Tonga Islands)",
    "code": "to",
    "native": "faka Tonga",
    "icon": "flag-icon-to"
  },
  "tr": {
    "name": "Turkish",
    "code": "tr",
    "native": "Türkçe",
    "icon": "flag-icon-tr"
  },
  "ts": {
    "name": "Tsonga",
    "code": "ts",
    "native": "Xitsonga",
    "icon": "flag-icon-mz"
  },
  "tt": {
    "name": "Tatar",
    "code": "tt",
    "native": "татарча, tatarça, تاتارچا‎",
    "icon": "flag-icon-ru"
  },
  "tw": {
    "name": "Twi",
    "code": "tw",
    "native": "Twi",
    "icon": "flag-icon-gh"
  },
  "ty": {
    "name": "Tahitian",
    "code": "ty",
    "native": "Reo Tahiti",
    "icon": "flag-icon-pf"
  },
  "ug": {
    "name": "Uighur",
    "code": "ug",
    "native": "ئۇيغۇرچە‎",
    "icon": "flag-icon-cn"
  },
  "uk": {
    "name": "Ukrainian",
    "code": "uk",
    "native": "українська",
    "icon": "flag-icon-ua"
  },
  "ur": {
    "name": "Urdu",
    "code": "ur",
    "native": "اردو",
    "icon": "flag-icon-pk"
  },
  "uz": {
    "name": "Uzbek",
    "code": "uz",
    "native": "zbek, Ўзбек, أۇزبېك‎",
    "icon": "flag-icon-uz"
  },
  "ve": {
    "name": "Venda",
    "code": "ve",
    "native": "Tshivenḓa",
    "icon": "flag-icon-za"
  },
  "vi": {
    "name": "Vietnamese",
    "code": "vi",
    "native": "Tiếng Việt",
    "icon": "flag-icon-vn"
  },
  "wa": {
    "name": "Walloon",
    "code": "wa",
    "native": "Walon",
    "icon": "flag-icon-be"
  },
  "cy": {
    "name": "Welsh",
    "code": "cy",
    "native": "Cymraeg",
    "icon": "flag-icon-gb"
  },
  "wo": {
    "name": "Wolof",
    "code": "wo",
    "native": "Wollof",
    "icon": "flag-icon-sn"
  },
  "fy": {
    "name": "Western Frisian",
    "code": "fy",
    "native": "Frysk",
    "icon": "flag-icon-nl"
  },
  "xh": {
    "name": "Xhosa",
    "code": "xh",
    "native": "isiXhosa",
    "icon": "flag-icon-za"
  },
  "yi": {
    "name": "Yiddish",
    "code": "yi",
    "native": "ייִדיש",
    "icon": "flag-icon-il"
  },
  "yo": {
    "name": "Yoruba",
    "code": "yo",
    "native": "Yorùbá",
    "icon": "flag-icon-bj"
  },
  "za": {
    "name": "Zhuang",
    "code": "za",
    "native": "Saɯ cueŋƅ, Saw cuengh",
    "icon": "flag-icon-cn"
  },
  "zz": {
    "name": "Test",
    "code": "zz",
    "native": "Test",
    "icon": "flag-icon-us"
  }
};
let languages = [];
Object.keys(isoLangs).forEach(key => languages.push(isoLangs[key]));
languages.pop(); //REMOVE TEST LANGUAGE

languages = _.orderBy(languages, "native").map(l => l.code);

function randomizer(array, qty) {
  let length = array.length;

  if (qty && qty > 1) {
    if (qty > length) return array;
    let result = [];
    let newArray = [...array];

    for (let i = 0; i < qty; i++) {
      length = newArray.length;
      const index = Math.floor(Math.random() * length);
      newArray.splice(index, 1);
      result.push(array[index]);
    }

    return result;
  } else {
    const index = Math.floor(Math.random() * length);
    return array[index];
  }
}

Meteor.methods({
  "fake-profiles": function () {
    let index;
    let result = []; //return faker;

    for (index = 0; index < 15; index++) {
      const network = randomizer(["facebook", "twitter"]);
      let profile = SocialAccounts.findOne({
        network
      }); // const fake=faker.Helpers.contextualCard();

      profile.active = true; //SET INFORMATION DATA

      profile.information = Object.assign({}, Schema.information, {
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar(),
        gender: randomizer(["male", "female"]),
        birthDate: moment().subtract(15 + Math.random() * 50, 'years').toDate(),
        country: randomizer(Countries),
        city: "",
        maritalStatus: "",
        forbiddenSubjects: [],
        sexualOrientation: "",
        likes: [],
        language: randomizer(languages),
        description: faker.lorem.words(30),
        categories: [],
        specialties: [],
        urls: []
      });
      profile.settings.type.brand = Boolean(Math.floor(Math.random() * 2));
      profile.settings.type.influencer = Boolean(Math.floor(Math.random() * 2));

      let getPrice = () => randomizer([Math.floor(Math.random() * 3000), ""]);

      profile.pricing = Object.assign({}, Schema.pricing, {
        post: getPrice(),
        profilePicture: getPrice(),
        coverPhoto: getPrice(),
        noPostHour: getPrice(),
        noPostDay: getPrice(),
        share: getPrice(),
        partnership: getPrice(),
        ambassador: getPrice()
      });
      const tags = ["Cantantes", "Pop", "Rock", "Mexico", "Artistas", "Mujeres", "Éxitos", "Los 40", "Icons", "Favoritos", "IBOL", "Test"];
      profile.grous = randomizer(tags, Math.random() * 10);
      profile.groups.push("Fake");

      let getRandomNumber = function (multiplier) {
        multiplier = multiplier || 1;
        return Math.floor(Math.random() * 1000 * multiplier);
      };

      profile.statistics = {
        retweets: getRandomNumber(),
        retweetsPerPost: getRandomNumber(Math.random()),
        favorites: getRandomNumber(),
        favoritesPerPost: getRandomNumber(Math.random()),
        comments: getRandomNumber(),
        commentsPerPost: getRandomNumber(Math.random()),
        likes: getRandomNumber(),
        likesPerPost: getRandomNumber(Math.random()),
        shares: getRandomNumber(),
        sharesPerPost: getRandomNumber(Math.random()),
        engagement: Math.random(),
        followers: getRandomNumber(100),
        following: getRandomNumber(100),
        profileLikes: getRandomNumber(),
        posts: getRandomNumber(),
        postsPerDay: getRandomNumber(Math.random())
      };
      delete profile._id;
      SocialAccounts.insert(profile);
      result.push(profile);
    }

    return result;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"image-upload.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/accounts/server/image-upload.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let uuid;
module.watch(require("uuid"), {
  default(v) {
    uuid = v;
  }

}, 1);
Slingshot.createDirective("account-image-upload", Slingshot.S3Storage, {
  bucket: "ibol-accounts-media",
  acl: "public-read",
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  maxSize: 10 * 1024 * 1024,
  // 10 MB (use null for unlimited).
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  key: function (file) {
    let re = /(?:\.([^.]+))?$/;
    let fileExt = re.exec(file.name)[1];
    return Meteor.userId() + "/" + uuid.v4() + "." + fileExt;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/accounts/server/invites.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Email;
module.watch(require("meteor/email"), {
  Email(v) {
    Email = v;
  }

}, 1);
let Schema;
module.watch(require("../../../server/schemas/account-invites/schema"), {
  default(v) {
    Schema = v;
  }

}, 2);
let Settings;
module.watch(require("../../../settings"), {
  default(v) {
    Settings = v;
  }

}, 3);
Meteor.methods({
  "account-invite-create": function (invite) {
    const user = Meteor.user();

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    };

    removeTypeNames(invite);
    let newInvite = Object.assign({}, Schema, {
      owner: user._id
    }, invite);

    if (!newInvite.account) {
      throw new Meteor.Error(500, "No Account sent on Invite");
    }

    let newInviteID = SocialAccountsInvites.insert(newInvite);
    newInvite._id = newInviteID;
    Meteor.call("account-invite-send-email", newInvite);
    return newInviteID;
  },
  "account-invite-delete": function (invite, accountID) {
    let dbInvite = SocialAccountsInvites.findOne({
      _id: invite._id
    });

    if (dbInvite.account !== accountID) {
      throw new Meteor.Error(403, "Invite doesn't belong to account");
    }

    return SocialAccountsInvites.remove({
      _id: invite._id
    });
  },
  "account-invite-send-email": function (invite) {
    let account = SocialAccounts.findOne({
      _id: invite.account
    });
    let user = Meteor.users.findOne({
      _id: account.owner
    }, {
      fields: {
        services: 0
      }
    });
    let userName = user.profile.name;
    let accountName = (account.information.name || "") + " " + (account.information.lastName || "");
    let dbUser = Accounts.findUserByEmail(invite.email);

    if (dbUser) {
      Meteor.call("notifications-create", dbUser._id, {
        type: "info",
        title: "Nueva Invitación",
        description: "Has sido invitado a administrar la cuenta de " + accountName,
        url: "http://localhost:3000/accounts/invite/" + invite._id
      });
    }

    this.unblock();
    let subject = "Ha sido invitado a administrar una cuenta";
    let html = (userName || "El usuario (" + user.emails[0].address + ")") + " te ha invitado a administrar la cuenta de " + accountName + "<br> <a href='http://localhost:3000/accounts/invite/" + invite._id + "'>Ver Invitación</a>";

    if (invite.type === "share") {
      subject = "Ha sido invitado a administrar una cuenta";
      html = (userName || "El usuario (" + user.emails[0].address + ")") + " te ha invitado a administrar la cuenta de " + accountName + "<br> <a href='http://localhost:3000/accounts/invite/" + invite._id + "'>Ver Invitación</a>";
    }

    Email.send({
      from: Settings.email.noReply,
      to: invite.email,
      subject,
      html
    });
    return SocialAccountsInvites.update({
      _id: invite._id
    }, {
      $set: {
        status: "sent",
        sent: new Date()
      }
    });
  },
  "account-invite-update-status": function (invite, status) {
    //console.log("INVITE_UPDATE", status);
    let user = Meteor.user();

    if (status === "reject") {
      return SocialAccountsInvites.update({
        _id: invite._id
      }, {
        $set: {
          status: "rejected"
        }
      });
    }

    if (status === "accept") {
      let query = {};

      if (invite.type === "share") {
        let account = SocialAccounts.findOne({
          _id: invite.account._id
        });
        let shares = account.shares;
        shares.push(user._id);
        query = {
          shares
        };
      }

      if (invite.type === "manager") {
        query = {
          manager: user._id
        };
      }

      SocialAccounts.update({
        _id: invite.account._id
      }, {
        $set: query
      });
      Meteor.call("account-invite-delete", invite, invite.account._id);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/accounts/server/methods.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Email;
module.watch(require("meteor/email"), {
  Email(v) {
    Email = v;
  }

}, 1);
let Schema;
module.watch(require("../../../server/schemas/accounts/schema"), {
  default(v) {
    Schema = v;
  }

}, 2);
let Settings;
module.watch(require("../../../settings"), {
  default(v) {
    Settings = v;
  }

}, 3);
Meteor.methods({
  "profile-create": function (user, connection) {
    //console.log("PROFILE_CREATE_USER", user);
    //console.log("PROFILE_CREAATE_CONNECTION",connection);

    /*
     let passPhrase = Meteor.settings.private.aes.passPhrase;
      let encriptValues = function (serviceData) {
     console.log("ENCRIPTION_PROCESS",Object.keys(serviceData));
     Object.keys(serviceData).forEach(function(key){
     let value = serviceData[key];
     console.log("PREVIOUS_VALUE [" + key + "]: ", value);
     value = CryptoJS.AES.encrypt(value.toString(), passPhrase).toString();
     console.log("ENCRYPTED_VALUE [" + key + "]: ", value);
     serviceData[key] = value;
     });
     };
      encriptValues(connection.serviceData);
     */
    let newProfile = Object.assign({}, Schema, {
      owner: user._id,
      manager: user._id,
      connection: connection.serviceData,
      network: connection.serviceName
    });
    console.log(newProfile.network);

    switch (newProfile.network) {
      case "facebook":
        newProfile.information.name = newProfile.connection.first_name;
        newProfile.information.lastName = newProfile.connection.last_name;
        newProfile.information.avatar = "https://graph.facebook.com/" + newProfile.connection.id + "/picture?type=large";
        newProfile.information.gender = newProfile.connection.gender; //newProfile.information.languages = [newProfile.connection.locale.split("_")[0]];

        break;

      case "twitter":
        newProfile.information.name = newProfile.connection.screenName;
        newProfile.information.avatar = newProfile.connection.profile_image_url_https;
        newProfile.information.languages = [newProfile.connection.lang];
        break;

      case "instagram":
        newProfile.information.name = newProfile.connection.full_name;
        newProfile.information.avatar = newProfile.connection.profile_picture;
        break;

      case "google":
        newProfile.information.name = newProfile.connection.given_name;
        newProfile.information.lastName = newProfile.connection.family_name;
        newProfile.information.avatar = newProfile.connection.picture;
        break;

      default:
        throw new Meteor.Error(500, "Wrong Network");
    }

    let profileID = SocialAccounts.insert(newProfile);
    newProfile._id = profileID;

    if (newProfile.network === 'facebook') {
      Meteor.call("autocreate-pages-related", profileID);
    }

    Meteor.call("profile-get-stats", newProfile);
    return profileID;
  },
  "profiles-save": function (profile) {
    const user = Meteor.user();
    let dbProfile = SocialAccounts.findOne({
      _id: profile._id
    });

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    }; //TODO: Change this...


    profile.owner = profile.owner._id;
    profile.manager = profile.manager._id;
    profile.shares = profile.shares.map(a => a._id);
    removeTypeNames(profile);
    return SocialAccounts.update(profile._id, {
      $set: Object.assign({}, dbProfile, profile)
    });
  },
  "profiles-mark-delete": function (profile) {
    const user = Meteor.user();
    profile = SocialAccounts.findOne({
      _id: profile._id
    });

    if (profile.owner !== user._id) {
      throw new Meteor.Error(403, "Only the owner can delete an account");
    }

    let accountName = (profile.information.name || "") + " " + (profile.information.lastName || "");
    let userName = user.profile.name;
    SocialAccounts.update(profile._id, {
      $set: {
        delete: true,
        active: false
      }
    });
    this.unblock();
    Email.send({
      from: "no-reply@viralizing.me",
      to: Settings.support.email,
      subject: "Eliminación de Cuenta [" + (accountName === " " ? "" : accountName + " - ") + profile.network + "]",
      html: (userName || "El usuario (" + user.emails[0].address + ")") + " desea borrar la cuenta " + accountName + " (" + profile._id + ")"
    });
  },
  "profiles-restore-delete": function (profile) {
    SocialAccounts.update(profile._id, {
      $set: {
        delete: true,
        active: false
      }
    });
  },
  "profile-get-stats": function (profile) {
    let screenName;
    let method;

    if (!profile.connection) {
      profile = SocialAccounts.findOne({
        _id: profile._id
      });
    }

    console.log("CALL STATISTICS");

    switch (profile.network) {
      case "facebook":
        method = "facebook-account-stats";
        screenName = profile.connection.id;
        break;

      case "twitter":
        method = "twitter-account-stats";
        screenName = profile.connection.screenName;
        break;

      case "instagram":
        method = "instagram-account-stats";
        screenName = profile.connection.username;
        break;

      case "google":
        return;

      default:
        throw new Meteor.Error(500, "Unknown Network");
    }

    let statistics = Meteor.call(method, screenName, profile);
    statistics.updated = new Date();
    console.log("NEW STATISTICS", statistics);
    return SocialAccounts.update(profile._id, {
      $set: {
        statistics
      }
    });
  },
  "connect-facebook-pages": function (accountID, pages) {
    let user = Meteor.user();
    let pageData = Meteor.call("facebook-pages-list", accountID);
    let data = pageData.data.filter(page => pages.indexOf(page.id) !== -1);
    let pageIDs = [];
    data.forEach(page => {
      page.parent = accountID;
      page.accessToken = page.access_token;
      let newProfile = Object.assign({}, Schema, {
        owner: user._id,
        manager: user._id,
        connection: page,
        network: "facebook"
      });
      newProfile.information.name = page.name;
      newProfile.information.avatar = "https://graph.facebook.com/" + newProfile.connection.id + "/picture?type=large";
      newProfile.type = "page"; //pageIDs.push(newProfile);
      //return;

      let matchPage = SocialAccounts.findOne({
        "connection.id": page.id
      });

      if (matchPage) {
        //Page Added return Error
        console.log("Page Already Exists", page.id);
        pageIDs.push({
          status: 'Error',
          fbId: page.id,
          name: page.name
        });
      } else {
        let profileID = SocialAccounts.insert(newProfile);
        newProfile._id = profileID;
        Meteor.call("profile-get-stats", newProfile);
        pageIDs.push({
          status: 'Success',
          id: profileID,
          fbId: page.id,
          name: page.name
        });
      }
    });
    return pageIDs;
  },
  "account-category-invite-proposal": function (accountID, data) {
    //console.log("account-category-invite-proposal", accountID, data);
    let user = Meteor.user();
    let userName = user.profile.name;
    let action = "Categoria";
    let proposal = data.category;

    if (data.type === "specialty") {
      action = "Especialidad";
      proposal = (data.category ? data.category : "Sin Categoria") + " -> " + data.specialty;
    }

    this.unblock();
    let subject = "Se ha sugerido una nueva " + action;
    let html = (userName ? userName : "El usuario") + " (" + user.emails[0].address + " - " + user._id + ")" + " ha sugerido una nueva " + action + " (" + proposal + ")";
    Email.send({
      from: Settings.email.noReply,
      to: "hello@viralizing.me",
      subject,
      html
    });
  },
  "account-target-objective-proposal": function (accountID, data) {
    //console.log("account-target-objective-proposal", accountID, data);
    let user = Meteor.user();
    let userName = user.profile.name;
    let action = "Meta";
    let proposal = data.objective;
    this.unblock();
    let subject = "Se ha sugerido una nueva " + action;
    let html = (userName ? userName : "El usuario") + " (" + user.emails[0].address + " - " + user._id + ")" + " ha sugerido una nueva " + action + " (" + proposal + ")";
    Email.send({
      from: Settings.email.noReply,
      to: "hello@viralizing.me",
      subject,
      html
    });
  },
  "autocreate-pages-related": function (profileID) {
    let fbPages = Meteor.call("facebook-pages-list", profileID).data;
    let pageIDs = fbPages.map(page => page.id);
    Meteor.call("connect-facebook-pages", profileID, pageIDs);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"social-connect.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/accounts/server/social-connect.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 0);
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
/////////////////////////////
// OAuth related functions //
/////////////////////////////
let OAuthEncryption = Package["oauth-encryption"] && Package["oauth-encryption"].OAuthEncryption;

let makePascalCased = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

let addOauthService = function (user, options) {
  console.log("addOauthService");
  check(options.oauth, {
    credentialToken: String,
    // When an error occurs while retrieving the access token, we store
    // the error in the pending credentials table, with a secret of
    // null. The client can call the login method with a secret of null
    // to retrieve the error.
    credentialSecret: Match.OneOf(null, String)
  }); // Retrieve the pending credential object

  let result = OAuth.retrieveCredential(options.oauth.credentialToken, options.oauth.credentialSecret);

  if (!result) {
    // OAuth credentialToken is not recognized, which could be either
    // because the popup was closed by the user before completion, or
    // some sort of error where the oauth provider didn't talk to our
    // server correctly and closed the popup somehow.
    throw new Meteor.Error("Social network not connected.");
  }

  if (result instanceof Error) {
    // We tried to login, but there was a fatal error. Report it back
    // to the user.
    throw result;
  }

  let serviceName = result.serviceName;
  let serviceData = result.serviceData; // Service Must be valid

  if (serviceName !== "facebook" && serviceName !== "twitter" && serviceName !== "instagram" && serviceName !== "google") {
    throw new Meteor.Error(makePascalCased(serviceName) + " is not supported");
  } // The user must not have used the service already


  let dbSocialAccount = SocialAccounts.findOne({
    "connection.id": serviceData.id
  });

  if (dbSocialAccount) {
    if (dbSocialAccount.delete) {
      SocialAccounts.update(dbSocialAccount._id, {
        $set: {
          delete: false
        }
      });
      return dbSocialAccount._id;
    } else {
      throw new Meteor.Error("This " + makePascalCased(serviceName) + " account is already connected");
    }
  } // The service must provide an `id` field


  if (!_.has(serviceData, "id")) {
    throw new Meteor.Error("Service data for service " + makePascalCased(serviceName) + " must include id");
  }

  return Meteor.call("profile-create", user, result);
}; //////////////////////////////
// `addLoginService` method //
//////////////////////////////


Meteor.methods({
  addLoginService: function (options) {
    let user = Meteor.user(); // Ensure the user is logged in

    if (!user) {
      throw new Meteor.Error("Login required");
    } // Check arguments


    check(options, Object); // Adding an oauth service

    if (options.oauth) {
      return addOauthService(user, options);
    }

    throw new Meteor.Error("Bad request");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"advertising":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/advertising/server/bundle.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./file-upload"));
module.watch(require("./methods"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"file-upload.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/advertising/server/file-upload.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let uuid;
module.watch(require("uuid"), {
  default(v) {
    uuid = v;
  }

}, 0);
Slingshot.createDirective("advertising-image-upload", Slingshot.S3Storage, {
  bucket: "ibol-advertising-media",
  acl: "public-read",
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  maxSize: 10 * 1024 * 1024,
  // 10 MB (use null for unlimited).
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  key: function (file) {
    let re = /(?:\.([^.]+))?$/;
    let fileExt = re.exec(file.name)[1];
    return Meteor.userId() + "/" + uuid.v4() + "." + fileExt;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/advertising/server/methods.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
Meteor.methods({
  "advertising-facebook-create-compound-ad": function (IDs, data) {
    let {
      accountID,
      adAccountID,
      adSetID
    } = IDs;
    let userID = Meteor.userId();
    if (!userID) throw new Meteor.Error(401, "Not allowed");
    let errors = [];
    let {
      creative,
      ad
    } = data;
    let processedFile = creative.image.split(",")[1];
    let image = Meteor.call("fb-marketing-images-create", accountID, adAccountID, processedFile);
    let hashImage = image.images.bytes.hash;
    console.log("IMAGE_UPLOAD", hashImage);
    creative = {
      title: creative.title,
      account_id: adAccountID,
      body: creative.body,
      //image_url: creative.image,
      image_hash: hashImage,
      link_url: creative.link,
      //object_id: "369756380077148",
      object_story_spec: {
        "link_data": {
          image_hash: hashImage,
          "call_to_action": {
            "type": "SIGN_UP",
            "value": {
              "link": "https://www.facebook.com/ibolviralizing/"
            }
          },
          "link": "https://www.facebook.com/ibolviralizing/",
          "message": "try it out"
        },
        "page_id": "369756380077148",
        "instagram_actor_id": ""
      }
    };
    let creativeRes = Meteor.call("fb-marketing-adCreative-create", accountID, adAccountID, creative);
    let creativeID = creativeRes.id;
    if (!creativeID) errors.push(creativeRes);
    ad = {
      name: ad.name,
      adset_id: adSetID,
      creative: {
        creative_id: creativeID
      },
      status: "ACTIVE" //ACTIVE, PAUSED, DELETED, ARCHIVED

    };
    let adRes = Meteor.call("fb-marketing-ads-create", accountID, adAccountID, adSetID, creativeID, ad);
    if (!adRes.id) errors.push(adRes);
    if (errors.length > 0) return {
      errors
    };
    return adRes;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"agenda":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/agenda/server/bundle.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./image-upload"));
module.watch(require("./methods"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"image-upload.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/agenda/server/image-upload.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let uuid;
module.watch(require("uuid"), {
  default(v) {
    uuid = v;
  }

}, 0);
Slingshot.createDirective("post-image-upload", Slingshot.S3Storage, {
  bucket: "ibol-posts-media",
  acl: "public-read",
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  maxSize: 10 * 1024 * 1024,
  // 10 MB (use null for unlimited).
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  key: function (file) {
    let re = /(?:\.([^.]+))?$/;
    let fileExt = re.exec(file.name)[1];
    return Meteor.userId() + "/" + uuid.v4() + "." + fileExt;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/agenda/server/methods.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 1);
let UrlShorter;
module.watch(require("node-url-shorter"), {
  default(v) {
    UrlShorter = v;
  }

}, 2);
let HTTP;
module.watch(require("meteor/http"), {
  HTTP(v) {
    HTTP = v;
  }

}, 3);
let PostSchema;
module.watch(require("../../../server/schemas/posts/schema"), {
  default(v) {
    PostSchema = v;
  }

}, 4);
Meteor.methods({
  "posts-scheduler": function (data, userID) {
    userID = userID || Meteor.userId();
    let urlRegEx = new RegExp("(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})");

    if (!data.message || typeof data.message !== "string") {
      throw new Meteor.Error(400, "Message must be set.");
    }

    if (!data.accounts || data.accounts.length === 0) {
      throw new Meteor.Error(400, "Accounts must me selected");
    }

    if (!data.date || typeof data.date.getMonth !== "function") {
      throw new Meteor.Error(400, "Date is not valid.");
    }

    if (data.deadline && typeof data.date.getMonth !== "function") {
      throw new Meteor.Error(400, "Deadline is not valid.");
    }

    if (data.location && !Array.isArray(data.location) && data.location.length !== 2 && typeof data.location[0] !== "number" && typeof data.location[1] !== "number") {
      throw new Meteor.Error(400, "Location is not valid.");
    }

    if (data.media && typeof data.media === "string" && !data.media.match(urlRegEx)) {
      throw new Meteor.Error(400, "Media is not valid.");
    }

    if (data.campaign && typeof data.campaign !== "string") {
      throw new Meteor.Error(400, "Campaign is not valid.");
    }

    if (data.invite && typeof data.invite !== "string") {
      throw new Meteor.Error(400, "Campaign is not valid.");
    }

    if (data.isPaid && typeof data.isPaid !== "boolean") {
      throw new Meteor.Error(400, "isPaid is not valid.");
    }

    if (data.status && typeof data.status !== "string") {
      throw new Meteor.Error(400, "Campaign is not valid.");
    }

    if (data.hashtags && data.hashtags.length !== 0 && data.hashtags.every(e => typeof e !== "string")) {
      throw new Meteor.Error(400, "Hashtags are not valid.");
    }

    if (data.hashtags) {
      data.hashtags.forEach(function (hashtag) {
        data.message += " " + hashtag;
      });
    }

    let postIDs = [];
    data.accounts.forEach(function (account) {
      let newPost = Object.assign({}, PostSchema);
      newPost.owner = userID;
      newPost.type = "post";
      newPost.date = data.date;
      newPost.deadline = data.deadline || null;
      newPost.campaign = data.campaign || null;
      newPost.invite = data.invite || null;
      newPost.status = data.status || "scheduled";
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
  "posts-fake-create": function () {
    console.log("POSTS_FAKE-CALLED");
    let accounts = [{
      "_id": "6eGeKTxGbNuLfjbtk",
      "network": "twitter",
      "information": {
        "avatar": "https://pbs.twimg.com/profile_images/826115681946988544/TgOgp2gP_normal.jpg",
        "lastName": "Incorp",
        "name": "Ibol_Inc"
      },
      "connection": {
        "id": "825526971505446912",
        "screenName": "Ibol_Inc",
        "accessToken": "825526971505446912-BKiaP4KjYkYFfMCmYDc2AkLZjpcLkV0",
        "accessTokenSecret": "UZXTVYOiaIgh50kaDxNFRSx9wbAzWF67ndT9UFvcWurto",
        "profile_image_url": "http://pbs.twimg.com/profile_images/826115681946988544/TgOgp2gP_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/826115681946988544/TgOgp2gP_normal.jpg",
        "lang": "en"
      }
    }, {
      "_id": "JTpPdmWj8HHSHE49u",
      "network": "facebook",
      "information": {
        "avatar": "https://graph.facebook.com/133170043861498/picture?type=large",
        "lastName": "Incorp",
        "name": "Ibol"
      },
      "connection": {
        "accessToken": "EAAQ8cdw98pUBAAxD8QsSqdMPJWdZAkpHTHwJTZAVIABQCfMjoCgE51GdSbUGUZAzCDJyWDHaACFUIooFW7c77qLKREuRodIy7TB6KRrFfZBHV5Y8i1TAyGq8CB2uvTOz8kGFwgZBiuPkaQKdhhOYwg1CQrZBwxR1oRKarZCyWtvHgZDZD",
        "expiresAt": 1492367978241,
        "id": "133170043861498",
        "name": "Ibol Incorp",
        "first_name": "Ibol",
        "last_name": "Incorp",
        "link": "https://www.facebook.com/app_scoped_user_id/133170043861498/",
        "gender": "male",
        "locale": "en_US",
        "age_range": {
          "min": 21
        }
      }
    }, {
      "_id": "pBnZgT5E3x7Cekj8a",
      "network": "instagram",
      "information": {
        "avatar": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/16230362_1842733642635953_3112165154159067136_n.jpg",
        "lastName": "",
        "name": "Ibol"
      },
      "connection": {
        "bio": "",
        "username": "ibol_viralizing",
        "id": "4533566292",
        "full_name": "Ibol",
        "website": "",
        "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/16230362_1842733642635953_3112165154159067136_n.jpg",
        "accessToken": "4533566292.aef68f0.6e138f18196345c596dd6e80d6ab59aa"
      }
    }];
    let i;
    let lastDate = new Date();
    let posts = [];

    for (i = 0; i < 100; i++) {
      console.log("POST_" + i + "_INITIATED", lastDate);
      let accountPosition = Math.floor(Math.random() * 3);
      let account = accounts[accountPosition];
      let newPost = Object.assign({}, PostSchema);
      let minutesOffset = Math.floor(Math.random() * 3) + 1;
      newPost.owner = Meteor.userId();
      newPost.type = "post";
      newPost.date = moment(lastDate).add(minutesOffset, "minutes").toDate();
      newPost.status = "scheduled";
      newPost.isPaid = false;
      newPost.account = {
        _id: account._id,
        name: account.information.name,
        lastName: account.information.lastName,
        avatar: account.information.avatar,
        network: account.network
      };
      newPost.data.message = "This is a test message #viralizing";
      newPost.data.media = "https://scontent.fmex7-1.fna.fbcdn.net/v/t31.0-8/16252222_130164834162019_8387112973073187684_o.jpg?oh=7921c404001814ff46dd3ff43601f63b&oe=59306168";
      lastDate = moment(newPost.date).toDate();
      posts.push(Posts.insert(newPost));
      console.log("POST_" + i + "_CREATED");
    }

    console.log("FOR_LOOP_FINISHED", posts.length);
    return posts;
  },
  "post-get-short-url": function (url) {
    check(url, String);
    return HTTP.call("POST", "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBcythzarlyApVyP89lJ8W4QagEYVhru2E", {
      data: {
        longUrl: url
      }
    }).data.id;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"code":{"server":{"bundle.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/code/server/bundle.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"examples":{"server":{"bundle.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/examples/server/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"google-plus":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google-plus/server/bundle.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./post-create"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google-plus/server/connection.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var google = require("googleapis");

let GoogleConnection = function (token) {
  var plus = google.plus("v1");
  var OAuth2 = google.auth.OAuth2;
  var oauth2Client = new OAuth2("666001639290-4ockfbrs6nruqfds6jkugk1g8mctffe2.apps.googleusercontent.com", "xmMAWuSkSv99ENIjVCHNTUf9", "http://localhost:3000");
  oauth2Client.setCredentials({
    access_token: token
  });
  google.options({
    auth: oauth2Client
  });
  return {
    library: plus,
    oauth: oauth2Client
  };
};

module.exportDefault(GoogleConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"post-create.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/google-plus/server/post-create.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let GoogleConnection;
module.watch(require("./connection"), {
  default(v) {
    GoogleConnection = v;
  }

}, 0);
let HTTP;
module.watch(require("meteor/http"), {
  HTTP(v) {
    HTTP = v;
  }

}, 1);

let request = require('request').defaults({
  encoding: null
});

Meteor.methods({
  "google-post-create": function (profileID, message, callback) {
    let profile = Profiles.findOne({
      "network": "google"
    });

    if (!profile) {
      throw new Meteor.Error("There's no matching profile");
    }

    let connection = profile.connection,
        client = GoogleConnection(connection.accessToken);

    if (client) {
      let postMessage = function (post) {
        return client.post('statuses/update', post, function (error, tweet, response) {
          if (error) {
            console.log("TWITTER_ERROR");
            throw new Meteor.Error("Twitter: Failed to Post");
          }

          console.log("TWEET_SUCCESSFUL", tweet); // Tweet body.

          if (callback) {
            callback();
          }
        });
      },
          postImage = function (post) {
        return request.get(post.media, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            client.post('media/upload', {
              media: body
            }, function (error, media, response) {
              if (error) {
                throw new Meteor.Error("Twitter: Failed to Upload Media");
              }

              if (!error) {
                post.media_ids = media.media_id_string;
                delete post.media;
                return postMessage(post);
              }
            });
          }
        });
      };

      message = {
        status: "I Love Pagani!!!! " + moment().format("HH:MM:SS A"),
        lat: "37.7821120598956",
        long: "-122.400612831116",
        display_coordinates: true,
        media: "https://c1.staticflickr.com/8/7340/9722529830_cd8851126e_b.jpg"
      };
      var body = 'My first post using facebook-node-sdk';
      console.log(Object.keys(client.library.activities));
      client.library.people.get({
        userId: 'me'
      }, function (err, response) {
        console.log("ERROR", err);
        console.log("RESPONSE", response);
      });
      HTTP.call("POST", "https://www.googleapis.com/plusDomains/v1/people/{userId}/activities", {
        data: {
          "object": {
            "originalContent": "Happy Monday! #caseofthemondays"
          },
          "access": {
            "items": [{
              "type": "domain"
            }],
            "domainRestricted": true
          }
        },
        headers: {
          "Content-Type": "application/json",
          "Authorization": "OAuth$" + connection.accessToken
        }
      });
      /*
       let query;
        if (message.media) {
       query = postImage(message);
       } else {
       query = postMessage(message);
       }
        return query;*/
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"instagram":{"server":{"account-stats.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/instagram/server/account-stats.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let InstagramConnection;
module.watch(require("./connection"), {
  default(v) {
    InstagramConnection = v;
  }

}, 0);
Meteor.methods({
  "instagram-account-stats": function (userName, profile) {
    if (!profile) {
      profile = SocialAccounts.findOne({
        "network": "instagram"
      });
    }

    if (!profile) {
      throw new Meteor.Error("There's no matching profile");
    }

    let connection = profile.connection,
        client = InstagramConnection(connection.accessToken);

    if (profile) {
      let posts = [];
      let syncUser = Meteor.wrapAsync(client.user_self, client); //console.log("before user");

      let user = syncUser({
        access_token: connection.accessToken
      }); //console.log("after user", user);

      let syncPosts = Meteor.wrapAsync(client.user_self_media_recent, client),
          getPosts = function (max_id) {
        let query = {
          count: 200
        };

        if (max_id) {
          query.max_id = max_id;
        }

        let result = syncPosts(query, {
          access_token: connection.accessToken
        }),
            lastPost = result[result.length - 1];
        posts = [...posts, ...result];

        if (lastPost) {
          if (max_id) {
            if (max_id !== lastPost.id) {
              getPosts(lastPost.id);
            }
          } else {
            getPosts(lastPost.id);
          }
        }
      };

      getPosts();
      let samplePost = {
        created_time: Number(new Date()) / 1000
      };
      const first = posts[0] || samplePost;
      const last = posts[posts.length - 1] || samplePost;
      let comments = 0;
      let likes = 0;

      for (const x of posts) {
        comments += x.comments.count;
        likes += x.likes.count;
      }

      let result = {
        comments,
        commentsPerPost: comments / posts.length,
        likes,
        likesPerPost: likes / posts.length,
        engagement: (comments + likes) / posts.length / user.counts.followed_by,
        followers: user.counts.followed_by,
        following: user.counts.follows,
        posts: user.counts.media,
        postsPerDay: posts.length / Math.abs(moment(new Date(Number(first.created_time) * 1000)).diff(moment(new Date(Number(last.created_time) * 1000)), "days"))
      };
      Object.keys(result).forEach(key => {
        if (Number.isNaN(result[key])) {
          result[key] = 0;
        }
      });

      if (result.postsPerDay === Infinity) {
        result.postsPerDay = 0;
      }

      return result;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/instagram/server/bundle.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./post-create"));
module.watch(require("./account-stats"));
module.watch(require("./search"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/instagram/server/connection.jsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let instagram;
module.watch(require("instagramapi"), {
  default(v) {
    instagram = v;
  }

}, 0);

let InstagramConnection = function (token) {
  let client = instagram.instagram();
  client.use({
    access_token: token
  });
  return client;
};

module.exportDefault(InstagramConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"post-create.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/instagram/server/post-create.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({
  "instagram-post-create": function (connection, post, callback) {
    //console.log("INSTAGRAM_POST_CREATE");
    //console.log("INSTAGRAM_POST_DATE:", post.date, "_CURRENT_TIME:", new Date());
    Meteor.call("notifications-create", "zfbP3aTqiP8yAg8NQ", {
      title: "Instagram Post",
      description: "You have a scheduled post"
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/instagram/server/search.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*import InstagramConnection from "./connection";
import InstagramSearchTags from "instagram-searchtags";

Meteor.methods({
    "instagram-search": function (query) {
        const searchTags = new InstagramSearchTags({
            username: 'ibol_viralizing',
            password: 'ibol2017',
        });


// Login Instagram with credentials
        searchTags.login()
            .then(() => {

                // Create #dog tag
                const tag = searchTags.createTag('dog')

                // Fetch 10 latest nodes
                return tag.fetchNodes(10)

            })
            .then((nodes) => {

                // ... do something cool with nodes

                // close connection
                searchTags.close()

            })
            .catch((err) => {

                // close connection
                searchTags.close()

                console.error(`Error: ${err.message}`)

            })
    }
});
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"paypal":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/paypal/server/bundle.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./payouts"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/paypal/server/connection.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let paypal;
module.watch(require("paypal-rest-sdk"), {
  default(v) {
    paypal = v;
  }

}, 0);

let PaypalConnection = function () {
  paypal.configure({
    mode: "sandbox",
    client_id: Meteor.settings.private.paypal.clientId,
    client_secret: Meteor.settings.private.paypal.secret
  });
  return paypal;
};

module.exportDefault(PaypalConnection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"payouts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/paypal/server/payouts.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let PaypalConnection;
module.watch(require("./connection"), {
  default(v) {
    PaypalConnection = v;
  }

}, 1);
Meteor.methods({
  "paypal-payouts-create": function () {
    let sender_batch_id = Math.random().toString(36).substring(9);
    let create_payout_json = {
      "sender_batch_header": {
        "sender_batch_id": sender_batch_id,
        "email_subject": "You have a payment"
      },
      "items": [{
        "recipient_type": "EMAIL",
        "amount": {
          "value": 0.99,
          "currency": "USD"
        },
        "receiver": "shirt-supplier-one@mail.com",
        "note": "Thank you.",
        "sender_item_id": "item_1"
      }, {
        "recipient_type": "EMAIL",
        "amount": {
          "value": 0.90,
          "currency": "USD"
        },
        "receiver": "shirt-supplier-two@mail.com",
        "note": "Thank you.",
        "sender_item_id": "item_2"
      }, {
        "recipient_type": "EMAIL",
        "amount": {
          "value": 2.00,
          "currency": "USD"
        },
        "receiver": "shirt-supplier-three@mail.com",
        "note": "Thank you.",
        "sender_item_id": "item_3"
      }]
    };
    let paypal = PaypalConnection();
    /*paypal.payout.create(create_payout_json, function (error, payout) {
        if (error) {
            console.log(error.response);
        } else {
            console.log("Create Payout Response");
            console.log(payout);
        }
    });*/

    let client = Meteor.wrapAsync(paypal.payout.create, paypal.payout);

    try {
      return client(create_payout_json);
    } catch (e) {
      return e;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"pricing":{"server":{"bundle.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/pricing/server/bundle.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"reporter":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/reporter/server/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./methods"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/reporter/server/methods.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Email;
module.watch(require("meteor/email"), {
  Email(v) {
    Email = v;
  }

}, 1);
let Schema;
module.watch(require("../../../server/schemas/reports/schema"), {
  default(v) {
    Schema = v;
  }

}, 2);
let Settings;
module.watch(require("../../../settings"), {
  default(v) {
    Settings = v;
  }

}, 3);
Meteor.methods({
  "report-create": function (data) {
    let user = Meteor.user();
    let newReport = Object.assign({}, Schema, data, {
      owner: user._id
    });
    console.log("REPORT_CREATE", newReport);
    return Reports.insert(newReport);
  },
  "report-save": function (report) {
    const user = Meteor.user();
    let dbReport = Reports.findOne({
      _id: report._id
    });

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    };

    report.owner = report.owner._id;
    removeTypeNames(report);
    return Reports.update(report._id, {
      $set: Object.assign({}, dbReport, report)
    });
  },
  "report-delete": function (report) {
    let dbReport = Reports.findOne({
      _id: report._id
    });
    const user = Meteor.user();

    if (dbReport.owner !== user._id) {
      throw new Meteor.Error(403, "Report doesn't belong to user.");
    }

    return Reports.remove({
      _id: report._id
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"statement":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/statement/server/bundle.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./methods"));
module.watch(require("./upload"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/statement/server/methods.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Schema;
module.watch(require("../../../server/schemas/payments/schema"), {
  default(v) {
    Schema = v;
  }

}, 1);
Meteor.methods({
  "payments-create-fake": function () {
    let user = Meteor.user();
    let accounts = SocialAccounts.find({}, {
      fields: {
        _id: 1
      }
    }).fetch();
    accounts = [...accounts, ...accounts, ...accounts];
    let cards = ["Visa", "Amex", "MasterCard", "Discover"];
    let payments = accounts.map(a => Object.assign({}, Schema, {
      status: "completed",
      from: user._id,
      to: a._id,
      campaign: Math.round(Math.random()) ? "FGHsw43uezjudkN2p" : "XEuAEdnJL57WobBKN",
      amount: Math.round(Math.random() * 100000),
      date: moment().subtract(Math.floor(Math.random() * 600), 'days').toDate(),
      paymentMethod: {
        brand: cards[Math.floor(Math.random() * 4)],
        last4: String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10))
      }
    }));
    return payments.map(p => Payments.insert(p));
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upload.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/statement/server/upload.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Slingshot.createDirective("test-bucket-ibol", Slingshot.S3Storage, {
  bucket: "test-bucket-ibol",
  allowedFileTypes: null,
  acl: "public-read",
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  maxSize: 5 * 1024 * 1024 * 1024,
  key: function (file) {
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.username + "/" + file.name;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"teamattack":{"server":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/teamattack/server/bundle.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./methods"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/teamattack/server/methods.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Schema;
module.watch(require("../../../server/schemas/team-attack/schema"), {
  default(v) {
    Schema = v;
  }

}, 1);
Meteor.methods({
  "teamAttack-create": function (teamAttack) {
    let user = Meteor.user();
    let newTeamAttack = Object.assign({}, Schema, {
      owner: user._id
    }, teamAttack);
    return TeamAttack.insert(newTeamAttack);
  },
  "teamAttack-save": function (teamAttack) {
    const user = Meteor.user(); //console.log("teamAttack-save", teamAttack);

    let dbTeamAttack = TeamAttack.findOne({
      _id: teamAttack._id
    });

    const removeTypeNames = function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (k === "__typename") {
          delete obj[k];
        }

        if (obj[k] && typeof obj[k] === "object") {
          removeTypeNames(obj[k]);
        }
      });
    };

    teamAttack.owner = teamAttack.owner._id;
    teamAttack.members = teamAttack.members.map(m => m._id);
    removeTypeNames(teamAttack);
    return TeamAttack.update(teamAttack._id, {
      $set: Object.assign({}, dbTeamAttack, teamAttack)
    });
  },
  "teamAttack-delete": function (teamAttack) {
    const user = Meteor.user();
    let dbTeamAttack = TeamAttack.findOne({
      _id: teamAttack._id
    });

    if (dbTeamAttack.owner !== user._id) {
      throw new Meteor.Error(403, "Only the owner can delete an account");
    }

    return TeamAttack.remove({
      _id: dbTeamAttack._id
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"bundles":{"server.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/modules/bundles/server.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("../core/server/bundle"));
module.watch(require("../agenda/server/bundle"));
module.watch(require("../examples/server/bundle"));
module.watch(require("../accounts/server/bundle"));
module.watch(require("../campaigns/server/bundle"));
module.watch(require("../reporter/server/bundle"));
module.watch(require("../code/server/bundle"));
module.watch(require("../statement/server/bundle"));
module.watch(require("../pricing/server/bundle"));
module.watch(require("../teamattack/server/bundle"));
module.watch(require("../advertising/server/bundle"));
module.watch(require("../twitter/server/bundle"));
module.watch(require("../facebook/server/bundle"));
module.watch(require("../instagram/server/bundle"));
module.watch(require("../google-plus/server/bundle"));
module.watch(require("../google/server/bundle"));
module.watch(require("../stripe/server/bundle"));
module.watch(require("../paypal/server/bundle"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"schemas":{"account-invites":{"definitions":{"account-invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/account-invites/definitions/account-invites.jsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const AccountInvite = `
type AccountInvite {
    _id: String,
    account: Account,
    email: String,
    sent: String,
    owner: User,
    status: String,
    type: String
}
`;
module.exportDefault([AccountInvite]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/account-invites/definitions/bundle.jsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let accountInvites;
module.watch(require("./account-invites"), {
  default(v) {
    accountInvites = v;
  }

}, 0);
module.exportDefault([...accountInvites]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"account-invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/account-invites/resolvers/account-invites.jsx                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    accountInvite(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        _id: args.inviteID
      };
      return SocialAccountsInvites.findOne(query);
    },

    accountInvites(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        account: args.accountID
      };
      return SocialAccountsInvites.find(query).fetch();
    }

  },
  AccountInvite: {
    owner: account => {
      let user = Meteor.users.findOne({
        _id: account.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    account: invite => {
      let user = SocialAccounts.findOne({
        _id: invite.account
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/account-invites/resolvers/bundle.jsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let accountInvites;
module.watch(require("./account-invites"), {
  default(v) {
    accountInvites = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(accountInvites));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/account-invites/bundle.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/account-invites/schema.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  account: null,
  email: null,
  sent: null,
  owner: null,
  status: "pending",
  type: "manager"
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"accounts":{"definitions":{"account.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/definitions/account.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let User;
module.watch(require("../../users/definitions/users"), {
  default(v) {
    User = v;
  }

}, 0);
const Account = `
type Account {
    _id: String,
    suspended: Boolean,
    type: String,
    active: Boolean,
    delete: Boolean,
    network: String,
    manager: User,
    owner: User,
    shares: [User],
    connection: Connection,
    settings: AccountSettings,
    information: AccountInformation,
    audience: AccountAudience,
    pricing: AccountPricing,
    gallery: AccountGallery,
    groups: [String],
    statistics: AccountStatistics,
    campaignsCount: Int
}
`;
const AccountGallery = `
type AccountGallery {
    images: [AccountGalleryFolder],
    videos: [AccountGalleryFolder]
}
`;
const AccountGalleryFolder = `
type AccountGalleryFolder {
    name: String,
    content: [String]
}
`;
const AccountStatistics = `
type AccountStatistics {
    retweets: String,
    retweetsPerPost: String,
    favorites: String,
    favoritesPerPost: String,
    comments: String,
    commentsPerPost: String,
    likes: String,
    likesPerPost: String,
    shares: String,
    sharesPerPost: String,
    engagement: String,
    followers: Int,
    following: String,
    profileLikes: String,
    posts: String,
    postsPerDay: String
}
`;
const AccountAudienceTarget = `
type AccountAudienceTarget {
    name: String,
    age: String,
    gender: String,
    nrssg: String,
    countries: [String],
    cities: [String],
    languages: [String],
    description:String
}   
`;
const AccountAudienceObjectives = `
type AccountAudienceObjectives {
    increaseFollowers: Boolean,
    increaseViews: Boolean,
    increaseShares: Boolean,
    increaseEngagement: Boolean,
    increaseLikes: Boolean,
    increaseTrafficHours: Boolean,
    reachNewMarkets: Boolean,
    increaseSpeaking: Boolean,
    increasePlays: Boolean,
    increaseWebsiteTraffic: Boolean,
    positionTarget: Boolean,
    keepTarget: Boolean,
    presence: Boolean,
    positionNewMarkets: Boolean,
    
}   
`;
const AccountAudience = `
type AccountAudience {
    targets:[AccountAudienceTarget]
    conquer:[String],
    objectives: AccountAudienceObjectives
}   
`;
const Connection = `
type Connection {
    accessToken: String,
    id:String
}
`;
const AccountSettings = `
type AccountSettings {
    type: AccountsSettingsType
}   
`;
const AccountsSettingsType = `
type AccountsSettingsType {
    brand: Boolean,
    influencer: Boolean
}
`;
const AccountInformation = `
type AccountInformation {
    name: String,
    lastName: String,
    avatar: String,
    gender: String,
    birthDate: String,
    country: String,
    city: String,
    maritalStatus: String,
    forbiddenSubjects: [String],
    sexualOrientation: String,
    likes: [String],
    language: String,
    description: String,
    categories:[String],
    specialties:[String]
    urls: [String],
} 
`;
const AccountConceptSubjects = `
type AccountConceptSubjects {
    primary: [String],
    secondary: [String],
    forbidden: [String]
}
`;
const AccountPricing = `
type AccountPricing {
    post: String,
    profilePicture:String,
    coverPhoto:String,
    noPostHour:String,
    noPostDay:String,
    share: String,
    partnership: String,
    ambassador: String
}
`;
const AccountPricingPhotos = `
type AccountPricingPhotos {
    profile: String,
    cover: String
}

`;
const AccountPricingNoPost = `
type AccountPricingNoPost {
    hour: String,
    day: String
}
`;
const RangeQuery = `
input RangeQuery {
    min: String,
    max: String
}
`;
module.exportDefault([Account, Connection, AccountGallery, AccountGalleryFolder, AccountAudience, AccountAudienceTarget, AccountAudienceObjectives, AccountSettings, AccountStatistics, AccountsSettingsType, AccountInformation, AccountConceptSubjects, AccountPricing, AccountPricingPhotos, AccountPricingNoPost, RangeQuery, ...User]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/definitions/bundle.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let accounts;
module.watch(require("./account"), {
  default(v) {
    accounts = v;
  }

}, 0);
let fbPages;
module.watch(require("./facebook-pages"), {
  default(v) {
    fbPages = v;
  }

}, 1);
module.exportDefault([...accounts, ...fbPages]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"facebook-pages.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/definitions/facebook-pages.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const FBPage = `
type FBPage {
    id: String,
    name: String,
    category: String,
    perms: [String],
    picture: String
}
`;
module.exportDefault([FBPage]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"accounts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/resolvers/accounts.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    account(root, args, context) {
      // Only return the current user, for security
      const account = SocialAccounts.findOne({
        _id: args._id
      });
      let userID = context.userId;

      if (userID !== account.owner && userID !== account.manager && account.shares.indexOf(userID) == -1) {
        return null;
      }

      return account;
    },

    accountsOwnSearch(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        $or: [{
          owner: userID
        }, {
          manager: userID
        }, {
          shares: {
            $in: [userID]
          }
        }],
        delete: {
          $ne: true
        }
      };

      if (args.query) {
        const regex = new RegExp(args.query, "i");
        query.$and.push({
          $or: [{
            "information.name": {
              $regex: regex
            }
          }, {
            "information.lastName": {
              $regex: regex
            }
          }, {
            "network": {
              $regex: regex
            }
          }]
        });
      }

      console.log("ACCOUNTS_OWN", query);
      return SocialAccounts.find(query, {
        limit: 15
      }).fetch();
    },

    accountsByTag(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      re = new RegExp(args.tag, "i");
      console.log("ACCOUNTS_BY_TAG: ", args.tag); //db.accounts.find({groups:{$in:[/^ibol$/i]}}).count()

      let query = {
        $and: [{
          $or: [{
            owner: userID
          }, {
            manager: userID
          }, {
            shares: {
              $in: [userID]
            }
          }]
        }],
        groups: {
          $in: [re]
        }
      };
      return SocialAccounts.find(query).fetch();
    },

    accounts(root, args, context) {
      const userID = context.userId;
      return SocialAccounts.find({
        $or: [{
          owner: userID
        }, {
          manager: userID
        }, {
          shares: {
            $in: [userID]
          }
        }],
        delete: {
          $ne: true
        }
      }).fetch();
    },

    accountFBPages(root, args, context) {
      const userID = context.userId;
      let fbPages = Meteor.call("facebook-pages-list", args.accountID).data;
      let PagesIDs = fbPages.map(p => p.id);
      console.log("FB_PAGES", PagesIDs);
      let dbPages = SocialAccounts.find({
        type: "page",
        "connection.id": {
          $in: PagesIDs
        }
      }, {
        fields: {
          "connection.id": 1
        }
      }).fetch().map(p => p.connection.id);
      console.log("DB_PAGES", dbPages);
      return fbPages.filter(p => dbPages.indexOf(p.id) === -1);
    }

  },
  Account: {
    manager: account => {
      let user = Meteor.users.findOne({
        _id: account.manager
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    owner: account => {
      let user = Meteor.users.findOne({
        _id: account.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    shares: account => {
      let users = Meteor.users.find({
        _id: {
          $in: account.shares
        }
      }, {
        fields: {
          services: 0
        }
      }).fetch();
      return users;
    },
    campaignsCount: account => {
      //TODO: Add Distinct to this query
      let count = Campaigns.find({
        'information.brands': {
          $in: [account._id]
        }
      }).count();
      return count;
    }
  },
  FBPage: {
    picture: page => page.picture.data.url
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/resolvers/bundle.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let accounts;
module.watch(require("./accounts"), {
  default(v) {
    accounts = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(accounts));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/accounts/schema.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  network: "",
  manager: "",
  type: "account",
  shares: [],
  suspended: false,
  active: false,
  delete: false,
  connection: {},
  settings: {
    type: {
      brand: false,
      influencer: false
    }
  },
  information: {
    name: "",
    lastName: "",
    avatar: "",
    gender: "",
    birthDate: null,
    country: "",
    city: "",
    maritalStatus: "",
    forbiddenSubjects: [],
    sexualOrientation: "",
    likes: [],
    language: "",
    description: "",
    categories: [],
    specialties: [],
    urls: []
  },
  audience: {
    targets: [],
    conquer: [],
    objectives: {
      increaseFollowers: false,
      increaseViews: false,
      increaseShares: false,
      increaseEngagement: false,
      increaseLikes: false,
      increaseTrafficHours: false,
      reachNewMarkets: false,
      increaseSpeaking: false,
      increasePlays: false,
      increaseWebsiteTraffic: false,
      positionTarget: false,
      keepTarget: false,
      presence: false,
      positionNewMarkets: false
    }
  },
  pricing: {
    post: "",
    profilePicture: "",
    coverPhoto: "",
    noPostHour: "",
    noPostDay: "",
    share: "",
    partnership: "",
    ambassador: ""
  },
  gallery: {
    images: [],
    videos: []
  },
  groups: []
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"advertising":{"definitions":{"advertising.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/advertising/definitions/advertising.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let User;
module.watch(require("../../users/definitions/users"), {
  default(v) {
    User = v;
  }

}, 0);
let Campaign;
module.watch(require("../../campaign/definitions/campaign"), {
  default(v) {
    Campaign = v;
  }

}, 1);
const Advertising = `
type Advertising {
    campaign:Campaign
    network:String,
    message:CampaignMessage,
    budget:String
}
`;
module.exportDefault([Advertising, ...Campaign]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/advertising/definitions/bundle.jsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let advertising;
module.watch(require("./advertising"), {
  default(v) {
    advertising = v;
  }

}, 0);
module.exportDefault([...advertising]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"advertising.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/advertising/resolvers/advertising.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {}
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/advertising/resolvers/bundle.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let advertising;
module.watch(require("./advertising"), {
  default(v) {
    advertising = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(advertising));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/advertising/bundle.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"campaign":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign/definitions/bundle.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let campaign;
module.watch(require("./campaign"), {
  default(v) {
    campaign = v;
  }

}, 0);
module.exportDefault([...campaign]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"campaign.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign/definitions/campaign.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Accounts;
module.watch(require("../../accounts/definitions/account"), {
  default(v) {
    Accounts = v;
  }

}, 0);
const Campaign = `
type Campaign {
    _id: String,
    owner: User,
    manager: User,
    shares: [User],
    status: String,
    information: CampaignInformation,
    messages: [CampaignMessage],
    gallery: CampaignGallery
}
`;
const CampaignGallery = `
type CampaignGallery {
    images: [CampaignGalleryFolder],
    videos: [CampaignGalleryFolder]
}
`;
const CampaignGalleryFolder = `
type CampaignGalleryFolder {
    name: String,
    content: [String]
}
`;
const CampaignInformation = `
type CampaignInformation {
    profile: String,
    cover: String,
    name: String,
    brands: [Account],
    conquer: [String],
    dateStart: String,
    dateEnd: String,
    description: String,
    url: String,
    objectives: CampaignInformationObjectives
} 
`;
const CampaignInformationObjectives = `
type CampaignInformationObjectives {
    increaseFollowers: Boolean,
    increaseViews: Boolean,
    increaseShares: Boolean,
    increaseEngagement: Boolean,
    increaseLikes: Boolean,
    increaseTrafficHours: Boolean,
    reachNewMarkets: Boolean,
    increaseSpeaking: Boolean,
    increasePlays: Boolean,
    increaseWebsiteTraffic: Boolean,
    positionTarget: Boolean,
    keepTarget: Boolean,
    presence: Boolean,
    positionNewMarkets: Boolean,
    
}   
`;
const CampaignInformationHashtags = `
type CampaignInformationHashtags {
    main: [String],
    secondary: [String]
}
`;
const CampaignMessage = `
type CampaignMessage {
    _id: String,
    message: String,
    media: String,
    hashtags: [String]
}
`;
module.exportDefault([Campaign, CampaignInformation, CampaignInformationObjectives, CampaignGallery, CampaignGalleryFolder, CampaignInformationHashtags, CampaignMessage, ...Accounts]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign/resolvers/bundle.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let campaign;
module.watch(require("./campaign"), {
  default(v) {
    campaign = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(campaign));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"campaign.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign/resolvers/campaign.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    campaign(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      console.log("CAMPAIGN", args);
      const campaign = Campaigns.findOne({
        _id: args._id
      });

      if (userID === campaign.owner) {
        console.log("IsOwner");
      }

      return campaign;
    },

    campaignsOwn(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        owner: userID
      };
      return Campaigns.find(query).fetch();
    }

  },
  Campaign: {
    owner: account => {
      let user = Meteor.users.findOne({
        _id: account.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    manager: account => {
      let user = Meteor.users.findOne({
        _id: account.manager
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    shares: account => {
      let users = Meteor.users.find({
        _id: {
          $in: account.shares
        }
      }, {
        fields: {
          services: 0
        }
      }).fetch();
      return users;
    }
  },
  CampaignInformation: {
    brands: account => {
      if (!account.brands || account.brands.length === 0) {
        return [];
      }

      let result = SocialAccounts.find({
        _id: {
          $in: account.brands
        }
      }, {
        fields: {
          connection: 0
        }
      }).fetch();
      return result;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign/schema.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  owner: null,
  manager: null,
  shares: [],
  status: "active",
  information: {
    profile: null,
    cover: null,
    name: null,
    brands: [],
    conquer: [],
    dateStart: null,
    dateEnd: null,
    description: null,
    url: null,
    objectives: []
  },
  messages: [],
  gallery: {
    images: [],
    videos: []
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"campaign-invites":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign-invites/definitions/bundle.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let campaignInvites;
module.watch(require("./campaign-invites"), {
  default(v) {
    campaignInvites = v;
  }

}, 0);
module.exportDefault([...campaignInvites]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"campaign-invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign-invites/definitions/campaign-invites.jsx                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const CampaignInvite = `
type CampaignInvite {
    _id: String,
    campaign: Campaign,
    email: String,
    sent: String,
    owner: User,
    status: String,
    type: String
}
`;
module.exportDefault([CampaignInvite]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign-invites/resolvers/bundle.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let campaignInvites;
module.watch(require("./campaign-invites"), {
  default(v) {
    campaignInvites = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(campaignInvites));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"campaign-invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign-invites/resolvers/campaign-invites.jsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    campaignInvite(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        _id: args.inviteID
      };
      return CampaignInvites.findOne(query);
    },

    campaignInvites(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        account: args.campaignID
      };
      return CampaignInvites.find(query).fetch();
    }

  },
  CampaignInvite: {
    owner: account => {
      let user = Meteor.users.findOne({
        _id: account.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    campaign: invite => {
      let campaign = Campaigns.findOne({
        _id: invite.campaign
      }, {
        fields: {
          services: 0
        }
      });
      return campaign;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/campaign-invites/bundle.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"events":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/events/definitions/bundle.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let events;
module.watch(require("./events"), {
  default(v) {
    events = v;
  }

}, 0);
module.exportDefault([...events]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"events.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/events/definitions/events.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const Event = `
type Event {
    _id: String,
    type: String,
    start: String,
    end: String,
    allDay: Boolean,
    title: String,
    preview: String,
    network: String
}
`;
module.exportDefault([Event]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/events/resolvers/bundle.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let events;
module.watch(require("./events"), {
  default(v) {
    events = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(events));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"events.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/events/resolvers/events.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    eventsOwn(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      console.log("EVENTS_OWN", args);
      let posts = [];
      let campaigns = [];

      if (args.posts) {
        posts = Posts.find({
          owner: userID
        }).fetch().map(p => ({
          _id: p._id,
          type: "post",
          allDay: false,
          start: p.date,
          end: moment(new Date(p.date)).add(5, "minutes").toDate(),
          title: (p.account.name || "") + " " + (p.account.lastName || ""),
          preview: p.account.avatar,
          network: p.account.network
        }));
      }

      if (args.all) {
        campaigns = Campaigns.find({
          owner: userID
        }).fetch().map(c => ({
          _id: c._id,
          type: "campaign",
          allDay: true,
          start: c.information.dateStart,
          end: c.information.dateEnd,
          title: c.information.name,
          preview: c.information.profile,
          network: null
        }));
      } //TODO: IMPLEMENT REST OF FILTERS


      return [...posts, ...campaigns];
    },

    eventsCampaign(root, args, context) {
      let query = {
        campaign: args.campaignID
      };

      if (!args.all) {
        let filters = [];
        Object.keys(args).forEach(key => {
          if (args[key]) {
            filters.push(key);
          }
        });
        query.status = {
          $in: filters
        };
      }

      let posts = Posts.find(query).fetch().map(p => ({
        _id: p._id,
        type: "post",
        allDay: false,
        start: p.date,
        end: moment(new Date(p.date)).add(5, "minutes").toDate(),
        title: (p.account.name || "") + " " + (p.account.lastName || ""),
        preview: p.account.avatar,
        network: p.account.network
      }));
      return posts;
    },

    eventsAccount(root, args, context) {
      let query = {
        "account._id": args.accountID
      };

      if (!args.all) {
        let filters = [];
        Object.keys(args).forEach(key => {
          if (args[key]) {
            filters.push(key);
          }
        });
        query.status = {
          $in: filters
        };
      }

      let posts = Posts.find(query).fetch().map(p => ({
        _id: p._id,
        type: "post",
        allDay: false,
        start: p.date,
        end: moment(new Date(p.date)).add(5, "minutes").toDate(),
        title: (p.account.name || "") + " " + (p.account.lastName || ""),
        preview: p.account.avatar,
        network: p.account.network
      }));
      return posts;
    }

  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/events/bundle.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"facebook-ads":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/facebook-ads/definitions/bundle.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let facebook;
module.watch(require("./facebook"), {
  default(v) {
    facebook = v;
  }

}, 0);
module.exportDefault([...facebook]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"facebook.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/facebook-ads/definitions/facebook.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const FacebookAccount = `
type FacebookAccount {
    _id: String,
    status: Int,
    name: String,
    money:FacebookAccountMoney,
    endAdvertiser: FacebookAccountEndAdvertiser,
    created: String,
    business: FacebookAccountBusiness
}
`;
const FacebookAccountMoney = `
type FacebookAccountMoney {
    spent: String,
    balance: String,
    currency: String
}
`;
const FacebookAccountBusiness = `
type FacebookAccountBusiness {
    _id: String,
    name: String
}
`;
const FacebookAccountEndAdvertiser = `
type FacebookAccountEndAdvertiser {
    _id: String,
    name: String
}
`;
const FacebookCampaign = `
type FacebookCampaign {
    _id: String,
    name: String,
    account: FacebookAccount,
    buyingType: String,
    objective: String,
    status: FacebookCampaignStatus,
    created: String,
    updated: String,
    spendCap: String,
    startDate: String,
    endDate: String,
    adSets: [FacebookAdSet]
}
`;
const FacebookCampaignStatus = `
type FacebookCampaignStatus {
    configured: String,
    effective: String,
    status: String
}
`;
const FacebookAdSet = `
type FacebookAdSet {
    _id: String
    name: String,
    account: FacebookAccount,
    campaign: FacebookCampaign,
    created: String,
    updated: String,
    status: FacebookAdSetStatus,
    money: FacebookAdSetMoney,
    billingEvent: String,
    goal: String,
    startDate: String,
    endDate: String,
    recommendations: [FacebookAdSetRecommendation],
    impressions: String,
    promotedObject: FacebookAdSetPromotedObject,
    targeting: FacebookAdSetTarget,
    ads:[FacebookAd]
}
`;
const FacebookAdSetTarget = `
type FacebookAdSetTarget {
    user_os: [String],
    user_device: [String],
    facebook_positions: [String],
    age_max: String,
    age_min: String,
    geo_locations: FacebookAdSetTargetGeoLocations,
    publisher_platforms: [String]
}
`;
const FacebookAdSetTargetGeoLocations = `
type FacebookAdSetTargetGeoLocations {
    countries: [String],
    locationTypes: [String]
}
`;
const FacebookAdSetPromotedObject = `
type FacebookAdSetPromotedObject {
    type: String,
    data: String
}
`;
const FacebookAdSetStatus = `
type FacebookAdSetStatus {
    configured: String,
    effective: String,
    status: String
}
`;
const FacebookAdSetRecommendation = `
type FacebookAdSetRecommendation {
    field: String,
    code: String,
    confidence: String,
    importance: String,
    message: String,
    title: String
}
`;
const FacebookAdSetMoney = `
type FacebookAdSetMoney {
    autoBid: Boolean,
    avgPrizePaceing: Boolean,
    budget: FacebookAdSetMoneyBudget
}
`;
const FacebookAdSetMoneyBudget = `
type FacebookAdSetMoneyBudget {
    daily: String,
    lifetime: String,
    remaining: String
}
`;
const FacebookAd = `
type FacebookAd {
    _id: String
    name: String,
    status: FacebookAdStatus,
    adSet: FacebookAdSet,
    campaign: FacebookCampaign,
    created: String,
    updated: String,
    creative:[FacebookAdCreative],
    reviewFeedback: String
}
`;
const FacebookAdStatus = `
type FacebookAdStatus {
    configured: String,
    effective: String,
    status: String
}
`;
const FacebookAdCreative = `
type FacebookAdCreative {
    _id: String
    title: String,
    body: String,
    image: String,
    link: String,
    object: FacebookAdCreativeObject,
    ctaType: String
}
`;
const FacebookAdCreativeObject = `
type FacebookAdCreativeObject {
    type: String,
    data: String
}
`;
const FacebookAudience = `
type FacebookAudience {
    users: Int,
    estimate_ready: Boolean
}
`;
const FacebookAdsCampaignAudienceEstimateTargetingSpecCountries = `
input FacebookAdsCampaignAudienceEstimateTargetingSpecCountries {
    countries: [String]
}
`;
const FacebookAdsCampaignAudienceEstimateTargetingSpec = `
input FacebookAdsCampaignAudienceEstimateTargetingSpec {
    geo_locations: FacebookAdsCampaignAudienceEstimateTargetingSpecCountries,
    age_min: Int,
    age_max: Int
}
`;
const FacebookAdsCampaignsAudienceEstimate = `
input FacebookAdsCampaignsAudienceEstimate {
    currency: String,
    optimize_for: String,
    targeting_spec: FacebookAdsCampaignAudienceEstimateTargetingSpec
}
`;
const FacebookDeliveryEstimateBind_Est = `
type FacebookDeliveryEstimateBind_Est {
    min_bid: Int,
    median_bid: Int,
    max_bid: Int,
}
`;
const FacebookDeliveryEstimateDaily_out = `
type FacebookDeliveryEstimateDaily_out {
    spend: Int,
    reach: Int,
    impressions: Int,
    actions: Int
}
`;
const FacebookDeliveryEstimate = `
type FacebookDeliveryEstimate {
    bid_estimate: FacebookDeliveryEstimateBind_Est,
    daily_outcomes_curve: [FacebookDeliveryEstimateDaily_out],
    estimate_dau: Int,
    estimate_mau: Int,
    estimate_ready: Boolean
}
`;
const FacebookAdsCampaignsDeliveryEstimateGeolocations = `
input FacebookAdsCampaignsDeliveryEstimateGeolocations {
    country_groups: [String]
}
`;
const FacebookAdsCampaignsDeliveryEstimateTargeting_Spec = `
input FacebookAdsCampaignsDeliveryEstimateTargeting_Spec {
    geo_locations: FacebookAdsCampaignsDeliveryEstimateGeolocations,
    user_device: [String],
    user_os: [String]
}
`;
const FacebookAdsCampaignsDeliveryEstimate = `
input FacebookAdsCampaignsDeliveryEstimate {
    targeting_spec: FacebookAdsCampaignsDeliveryEstimateTargeting_Spec,
    optimization_goal: String
}
`;
module.exportDefault([FacebookAccount, FacebookAccountMoney, FacebookAccountBusiness, FacebookAccountEndAdvertiser, FacebookCampaign, FacebookCampaignStatus, FacebookAdSet, FacebookAdSetTarget, FacebookAdSetTargetGeoLocations, FacebookAdSetPromotedObject, FacebookAdSetStatus, FacebookAdSetRecommendation, FacebookAdSetMoney, FacebookAdSetMoneyBudget, FacebookAd, FacebookAdCreative, FacebookAdCreativeObject, FacebookAdStatus, FacebookAudience, FacebookAdsCampaignsAudienceEstimate, FacebookAdsCampaignAudienceEstimateTargetingSpec, FacebookAdsCampaignAudienceEstimateTargetingSpecCountries, FacebookAdsCampaignsDeliveryEstimateGeolocations, FacebookAdsCampaignsDeliveryEstimateTargeting_Spec, FacebookAdsCampaignsDeliveryEstimate, FacebookDeliveryEstimateBind_Est, FacebookDeliveryEstimateDaily_out, FacebookDeliveryEstimate]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/facebook-ads/resolvers/bundle.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let facebook;
module.watch(require("./facebook"), {
  default(v) {
    facebook = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(facebook));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"facebook.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/facebook-ads/resolvers/facebook.jsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    facebookAdAccounts(root, args, context) {
      let accounts = Meteor.call("fb-marketing-adAccounts-list", args.socialAccountID, args.campaignID);
      return accounts.map(a => {
        let res = {
          _id: a.account_id,
          name: a.name,
          money: {
            spent: a.account_id,
            balance: a.balance,
            currency: a.currency
          },
          endAdvertiser: {
            _id: a.end_advertiser,
            name: a.end_advertiser_name
          },
          created: a.created_time,
          business: {}
        };

        if (a.business && a.business.id) {
          res.business = {
            _id: a.business.id,
            name: a.business.name
          };
        }

        return res;
      });
    },

    facebookAdsCampaign(root, args, context) {
      let c = Meteor.call("fb-marketing-campaigns-read", args.socialAccountID, args.campaignID);
      let res = {
        _id: c.id,
        ibolAccount: args.socialAccountID,
        name: c.name,
        account: c.account_id,
        buyingType: c.buying_type,
        objective: c.objective,
        status: {
          configured: c.configured_status,
          effective: c.effective_status,
          status: c.status
        },
        created: new Date(c.created_time),
        updated: new Date(c.updated_time),
        spendCap: c.spend_cap,
        startDate: new Date(c.start_time),
        endDate: new Date(c.stop_time),
        adsets: []
      };

      if (c.adsets) {
        res.adSets = c.adsets.data.map(a => ({
          _id: a.id,
          ibolAccount: args.socialAccountID
        }));
      }

      return res;
    },

    facebookAdsCampaigns(root, args, context) {
      console.log("facebookAdsCampaigns", args.socialAccountID, args.adAccountID);
      let campaigns = Meteor.call("fb-marketing-campaigns-list", args.socialAccountID, args.adAccountID);
      return campaigns.map(c => {
        let res = {
          _id: c.id,
          ibolAccount: args.socialAccountID,
          name: c.name,
          account: c.account_id,
          buyingType: c.buying_type,
          objective: c.objective,
          status: {
            configured: c.configured_status,
            effective: c.effective_status,
            status: c.status
          },
          created: new Date(c.created_time),
          updated: new Date(c.updated_time),
          spendCap: c.spend_cap,
          startDate: new Date(c.start_time),
          endDate: new Date(c.stop_time),
          adSets: []
        };

        if (c.adsets && c.adsets.data) {
          res.adSets = c.adsets.data.map(a => ({
            _id: a.id,
            ibolAccount: args.socialAccountID
          }));
        }

        return res;
      });
    },

    facebookAdsCampaignsAdSets(root, args, context) {
      let adSets = Meteor.call("fb-marketing-adsets-from-campaign", args.socialAccountID, args.campaignID);
      console.log('facebookAdsCampaignsAdSets', adSets);
      return adSets.map(a => {
        let res = {
          _id: a.id,
          ibolAccount: args.socialAccountID,
          name: a.name,
          account: a.account_id,
          campaign: a.campaign._id,
          created: new Date(a.created_time),
          updated: new Date(a.updated_time),
          billingEvent: a.billing_event,
          goal: a.optimization_goal,
          startDate: new Date(a.start_time),
          endDate: new Date(a.end_time),
          money: {
            autoBid: a.is_autobid,
            avgPrizePaceing: a.is_average_price_pacing,
            budget: {
              daily: a.daily_budget,
              lifetime: a.lifetime_budget,
              remaining: a.budget_remaining
            }
          },
          recommendations: [],
          impressions: a.lifetime_imps,
          status: {
            configured: a.configured_status,
            effective: a.effective_status,
            status: a.status
          },
          promotedObject: {
            type: "Page",
            data: a.promoted_object ? a.promoted_object.page_id : null
          },
          targeting: {
            user_os: a.targeting.user_os,
            user_device: a.targeting.user_device,
            facebook_positions: a.targeting.facebook_positions,
            age_max: a.targeting.age_max,
            age_min: a.targeting.age_min,
            geo_locations: {
              countries: a.targeting.geo_locations.countries,
              locationTypes: a.targeting.geo_locations.location_types,
              publisher_platforms: a.targeting.platforms
            }
          }
        };

        if (a.recommendations) {
          res.recommendations = a.recommendations.map(r => ({
            field: r.blame_field,
            code: r.code,
            confidence: r.confidence,
            importance: r.importance,
            message: r.message,
            title: r.title
          }));
        }

        return res;
      });
    },

    facebookAdsCampaignsAdSetAds(root, args, context) {
      let ads = Meteor.call("fb-marketing-ads-from-adset", args.socialAccountID, args.adSetID);
      return ads.data.map(a => ({
        _id: a.id,
        name: a.name,
        status: {
          configured: a.configured_status,
          effective: a.effective_status,
          status: a.status
        },
        adSet: a.adset_id,
        creative: []
      }));
    },

    facebookAdsCampaignsAdSetAd(root, args, context) {
      let res = Meteor.call("fb-marketing-ads-read", args.socialAccountID, args.adID);
      let reviewFeedback = null;

      if (res.ad_review_feedback) {
        let messages = [];
        Object.keys(res.ad_review_feedback.global).forEach(key => {
          messages.push(res.ad_review_feedback.global[key]);
        });
        reviewFeedback = messages.join(", ");
      }

      return {
        _id: res.id,
        ibolAccount: args.socialAccountID,
        name: res.name,
        status: {
          configured: res.configured_status,
          effective: res.effective_status,
          status: res.status
        },
        adSet: res.adset.id,
        campaign: res.campaign.id,
        created: res.created_time,
        updated: res.updated_time,
        creative: res.adcreatives.data.map(creative => creative.id),
        reviewFeedback
      };
    },

    facebookAdsCampaignsAudienceEstimate: (root, args, context) => {
      let audience = Meteor.call("fb-marketing-campaigns-audience", args.socialAccountID, args.adID, args.data);
      console.log('facebookAdsCampaignsAudienceEstimate', audience);
      return audience.data;
    },
    facebookAdsCampaignsDeliveryEstimate: (root, args, context) => {
      let delivery_es = Meteor.call("fb-marketing-campaigns-delivery-estimate", args.socialAccountID, args.adID, args.data);
      console.log('facebookAdsCampaignsDeliveryEstimate', delivery_es);
      return delivery_es.data[0];
    }
  },
  FacebookCampaign: {
    account: campaign => {
      console.log("FACEBOOK_CAMPAIGN_ACCOUNT", campaign.ibolAccount, campaign.account);
      let a = Meteor.call("fb-marketing-adAccounts-read", campaign.ibolAccount, campaign.account);
      return {
        _id: a.id,
        status: a.account_status,
        money: {
          spent: a.amount_spent,
          balance: a.balance,
          currency: a.currency
        },
        endAdvertiser: {
          _id: a.end_advertiser,
          name: a.end_advertiser_name
        },
        business: {
          _id: a.business.id,
          name: a.business.name
        },
        created: new Date(a.created_time)
      };
    },
    adSets: campaign => {
      let adSets = Meteor.call("fb-marketing-adsets-from-campaign", campaign.ibolAccount, campaign._id);
      return adSets.map(a => ({
        _id: a.id,
        ibolAccount: campaign.ibolAccount,
        name: a.name,
        account: a.account_id,
        campaign: a.campaign._id,
        created: new Date(a.created_time),
        updated: new Date(a.updated_time),
        billingEvent: a.billing_event,
        goal: a.optimization_goal,
        startDate: new Date(a.start_time),
        endDate: new Date(a.end_time),
        money: {
          autoBid: a.is_autobid,
          avgPrizePaceing: a.is_average_price_pacing,
          budget: {
            daily: a.daily_budget,
            lifetime: a.lifetime_budget,
            remaining: a.budget_remaining
          }
        },
        recommendations: a.recommendations.map(r => ({
          field: r.blame_field,
          code: r.code,
          confidence: r.confidence,
          importance: r.importance,
          message: r.message,
          title: r.title
        })),
        impressions: a.lifetime_imps,
        status: {
          configured: a.configured_status,
          effective: a.effective_status,
          status: a.status
        },
        promotedObject: {
          type: "Page",
          data: a.promoted_object.page_id
        },
        target: {
          age: {
            max: a.targeting.age_max,
            min: a.targeting.age_min
          },
          geoLocations: {
            countries: a.targeting.geo_locations.countries,
            locationTypes: a.targeting.geo_locations.location_types
          },
          platforms: a.targeting.platforms
        }
      }));
    }
  },
  FacebookAdSet: {
    ads: adSet => {
      let ads = Meteor.call("fb-marketing-ads-from-adset", adSet.ibolAccount, adSet._id);
      return ads.data.map(a => ({
        _id: a.id,
        name: a.name,
        status: a.status,
        adSet: a.adset_id,
        creative: []
      }));
    }
  },
  FacebookAd: {
    creative: ad => {
      let creatives = Meteor.call("fb-marketing-adCreative-from-ad", ad.ibolAccount, ad._id);
      return creatives.data.map(a => ({
        _id: a.id,
        body: a.body,
        image: a.image_url,
        link: a.link_url,
        ctaType: a.call_to_action_type,
        title: a.title
      }));
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/facebook-ads/bundle.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"invites":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/invites/definitions/bundle.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let invites;
module.watch(require("./invites"), {
  default(v) {
    invites = v;
  }

}, 0);
module.exportDefault([...invites]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/invites/definitions/invites.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Campaign;
module.watch(require("../../campaign/definitions/campaign"), {
  default(v) {
    Campaign = v;
  }

}, 0);
const InviteMessage = `
type InviteMessage {
    message: String,
    media: String,
    date: String,
    quantity: Int,
    location: String
}
`;
const InviteNetworks = `
type InviteNetworks {
    twitter: Boolean,
    facebook: Boolean,
    instagram: Boolean
}
`;
const Invite = `
type Invite {
    _id: String,
    createdAt:String,
    updatedAt:String,
    owner: User,
    campaign: Campaign,
    type: String,
    status: String, 
    deadline: String,
    influencers:[Account],
    teamAttacks: [TeamAttack],
    invitesAvailable:Int,
    budget: String,
    useHashtag: Boolean,
    options:[InviteMessage],
    networks: InviteNetworks
}
`;
module.exportDefault([Invite, InviteMessage, InviteNetworks, ...Campaign]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/invites/resolvers/bundle.jsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let invites;
module.watch(require("./invites"), {
  default(v) {
    invites = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(invites));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"invites.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/invites/resolvers/invites.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    invitesCampaign(root, args, context) {
      console.log("INVITES_CAMPAIGNS", args);
      let invites = Invites.find({
        campaign: args.campaignID
      }).fetch();
      return invites;
    }

  },
  Invite: {
    campaign: invite => {
      let user = Campaigns.findOne({
        _id: invite.campaign
      });
      return user;
    },
    influencers: invite => {
      let members = SocialAccounts.find({
        _id: {
          $in: invite.influencers
        }
      }, {
        fields: {
          connection: 0
        }
      }).fetch();
      return members;
    },
    owner: invite => {
      let user = Meteor.users.findOne({
        _id: invite.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    teamAttacks: invite => {
      return TeamAttack.find({
        _id: {
          $in: invite.teamAttacks
        }
      }).fetch();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/invites/bundle.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/invites/schema.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  createdAt: new Date(),
  updatedAt: new Date(),
  owner: null,
  campaign: null,
  status: "draft",
  influencers: [],
  teamAttacks: [],
  invitesAvailable: 0,
  budget: null,
  deadline: null,
  useHashtag: true,
  type: "post",
  options: [],
  networks: {
    facebook: true,
    twitter: true,
    instagram: true
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"news":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/news/definitions/bundle.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let news;
module.watch(require("./news"), {
  default(v) {
    news = v;
  }

}, 0);
module.exportDefault([...news]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"news.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/news/definitions/news.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const News = `
type News {
    author: String,
    title: String,
    link: String,
    image: String,
    type: String
}
`;
module.exportDefault([News]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/news/resolvers/bundle.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let news;
module.watch(require("./news"), {
  default(v) {
    news = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(news));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"news.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/news/resolvers/news.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    getNews(root, args, context) {
      let path = "http://viralizing.me";
      let tag = "news";

      if (args.lang === "es") {
        path = "http://viralizing.me/es";
        tag = "noticias";
      }

      let blog = Meteor.call("rss-feed", path + "/feed/") || [];
      blog.map(n => Object.assign(n, {
        type: "blog"
      }));
      let news = Meteor.call("rss-feed", path + "/feed/?tag=" + tag) || [];
      news.map(n => Object.assign(n, {
        type: "news"
      }));
      console.log("QUERY_RESULTS", [...blog, ...news]);
      return [...blog, ...news];
    }

  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/news/bundle.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"payments":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/payments/definitions/bundle.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let payments;
module.watch(require("./payments"), {
  default(v) {
    payments = v;
  }

}, 0);
module.exportDefault([...payments]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"payments.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/payments/definitions/payments.jsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const Payment = `
type Payment {
    _id: String,
    from: User,
    to: Account,
    campaign: Campaign,
    amount: String,
    date: String,
    status: String,
    type: String,
    paymentMethod: PaymentMethod,
    post: Post
}
`;
const PaymentMethod = `
type PaymentMethod {
    brand: String,
    last4: String
}
`;
module.exportDefault([Payment, PaymentMethod]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/payments/resolvers/bundle.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let payments;
module.watch(require("./payments"), {
  default(v) {
    payments = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(payments));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"payments.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/payments/resolvers/payments.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let moment;
module.watch(require("moment"), {
  default(v) {
    moment = v;
  }

}, 1);

function getMonthDateRange(year, month) {
  console.log("GET_MONTH_DATE_RANGE_BEFORE", year, month);
  if (typeof year === "string") year = Number(year);
  if (typeof month === "string") month = Number(month);
  console.log("GET_MONTH_DATE_RANGE_After", year, month); // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
  // array is 'year', 'month', 'day', etc

  let startDate = moment([year, month - 1]); // Clone the value before .endOf()

  let endDate = moment(startDate).endOf('month'); // just for demonstration:

  console.log(startDate.toDate());
  console.log(endDate.toDate()); // make sure to call toDate() for plain JavaScript date type

  return {
    $gt: startDate.toDate(),
    $lt: endDate.toDate()
  };
}

module.exportDefault({
  Query: {
    paymentsOwn(root, args, context) {
      let userID = context.userId;
      let {
        year,
        month
      } = args;
      let usersQuery = {
        $or: [{
          owner: userID
        }, {
          manager: userID
        }, {
          shares: {
            $in: [userID]
          }
        }],
        delete: {
          $ne: true
        }
      };
      let userIDs = SocialAccounts.find(usersQuery, {
        fields: {
          _id: 1
        }
      }).fetch().map(u => u._id);
      console.log("USER_IDS", userIDs);
      let query = {
        $or: [{
          from: userID
        }, {
          to: {
            $in: userIDs
          }
        }]
      };

      if (year && month) {
        query.date = getMonthDateRange(year, month);
      }

      console.log("PAYMENTS_OWN", args);
      console.log("PAYPEMTS_OWN_QUERY", query);
      let results = Payments.find(query).fetch().map(p => Object.assign({}, p, {
        type: p.from === userID ? "outgoing" : "incoming"
      }));
      console.log("PAYMENTS_OWN", results.length);
      return results;
    }

  },
  Payment: {
    from: payment => {
      return Meteor.users.findOne({
        _id: payment.from
      }, {
        fields: {
          services: 0
        }
      });
    },
    to: payment => {
      return SocialAccounts.findOne({
        _id: payment.to
      }, {
        fields: {
          services: 0
        }
      });
    },
    campaign: payment => {
      return Campaigns.findOne({
        _id: payment.campaign
      });
    },
    post: payment => {
      return Posts.findOne({
        _id: payment.post
      }) || {};
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/payments/bundle.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/payments/schema.jsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  status: "draft",
  //draft, scheduled, rejected, paid, completed
  from: null,
  to: null,
  campaign: null,
  amount: null,
  date: new Date(),
  paymentMethod: {
    brand: null,
    last4: null
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"posts":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/posts/definitions/bundle.jsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let posts;
module.watch(require("./posts"), {
  default(v) {
    posts = v;
  }

}, 0);
module.exportDefault([...posts]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/posts/definitions/posts.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const PostAccount = `
type PostAccount {
    _id: String,
    name: String,
    lastName: String,
    avatar: String,
    network: String,
    fullProfile: Account
}
`;
const PostData = `
type PostData {
    message: String,
    media: String,
    location: String
}
`;
const Post = `
type Post {
    _id: String,
    status: String,
    type: String,
    date: String,
    deadline: String,
    campaign: String,
    invite: String,
    isPaid: Boolean,
    useHashtag: Boolean
    account: PostAccount,
    owner: User,
    data: PostData
}
`;
module.exportDefault([Post, PostData, PostAccount]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/posts/resolvers/bundle.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let posts;
module.watch(require("./posts"), {
  default(v) {
    posts = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(posts));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/posts/resolvers/posts.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    postsOwn(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      return Posts.find({
        owner: userID
      }).fetch();
    },

    postsInvite(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        campaign: args.campaignID,
        invite: args.inviteID
      };
      let result = Posts.find(query).fetch();
      console.log("POSTS_INVITE", query, result.length);
      return result;
    }

  },
  Post: {
    owner: post => {
      let user = Meteor.users.findOne({
        _id: post.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    }
  },
  PostAccount: {
    fullProfile: account => {
      let user = SocialAccounts.findOne({
        _id: account._id
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/posts/bundle.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/posts/schema.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  status: "draft",
  //draft, pending, sent, accepted, rejected, scheduled, published, completed, cancelled, suspended
  type: "post",
  //post, share, noPost, profile, cover
  date: null,
  campaign: null,
  //Campaign ID
  invite: null,
  //Announcement ID
  isPaid: true,
  account: {
    id: null,
    name: null,
    lastName: null,
    avatar: null,
    network: null
  },
  owner: "",
  data: {
    message: "",
    media: null,
    location: null
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"reports":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/reports/definitions/bundle.jsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let reports;
module.watch(require("./reports"), {
  default(v) {
    reports = v;
  }

}, 0);
module.exportDefault([...reports]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reports.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/reports/definitions/reports.jsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const Report = `
type Report {
    _id: String,
    name: String,
    owner: User
    items: [ReportItem]
}
`;
const ReportItem = `
type ReportItem {
    name: String,
    Description: String,
    type: String,
    size: String,
    source: ReportItemSource
}
`;
const ReportItemSource = `
type ReportItemSource {
    type: String,
    account: Account,
    campaign: Campaign
}
`;
module.exportDefault([Report, ReportItem, ReportItemSource]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/reports/resolvers/bundle.jsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let reports;
module.watch(require("./reports"), {
  default(v) {
    reports = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(reports));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reports.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/reports/resolvers/reports.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    reportsOwn(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        owner: userID
      };
      return Reports.find(query).fetch();
    },

    report(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        _id: args.reportId
      };
      return Reports.findOne(query);
    }

  },
  Report: {
    owner: account => {
      let user = Meteor.users.findOne({
        _id: account.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/reports/bundle.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/reports/schema.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  name: null,
  owner: null,
  items: []
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"search":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/search/definitions/bundle.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let search;
module.watch(require("./search"), {
  default(v) {
    search = v;
  }

}, 0);
module.exportDefault([...search]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/search/definitions/search.jsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const SearchUser = `
type SearchUser {
    name: String,
    screenName: String,
    avatar: String
}
`;
const SearchMedia = `
type SearchMedia {
    type: String,
    url: String,
    preview: String
}
`;
const SearchItem = `
type SearchItem {
    link:String,
    title:String,
    date: String,
    description: String,
    network:String,
    media: SearchMedia,
    user: SearchUser
}
`;
const TwitterTrendingPlace = `
type TwitterTrendingPlace {
    country: String,
    name: String,
    countryCode: String,
    type: String,
    woeid: String,
    parent: String
}
`;
const TwitterTrends = `
type TwitterTrends {
    hashtag: String,
    url: String,
    promoted: String,
    volume: String
}
`;
module.exportDefault([SearchItem, SearchUser, SearchMedia, TwitterTrendingPlace, TwitterTrends]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/search/resolvers/bundle.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let search;
module.watch(require("./search"), {
  default(v) {
    search = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(search));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/search/resolvers/search.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    search(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let results = [];
      console.log("SOCIAL_MEDIA_SEARCH", args);

      if (args.google) {
        console.log("GOOGLE_SEARCH");
        let google = Meteor.call("google-search", args.query);

        if (google.error) {
          console.log("ERROR");
          let newItem = {
            link: "https://viralizing.me",
            title: "Unavailable",
            description: "Google Search is not currently available.",
            date: null,
            network: "google",
            media: {
              type: null,
              url: null,
              preview: null
            },
            user: {
              name: null,
              screenName: null,
              avatar: null
            }
          };
          results.push(newItem);
        } else {
          if (!google.items) {
            console.log("GOOGLE_ERROR", google);
          } else {
            google.items.forEach(item => {
              let newItem = {
                link: item.link,
                title: item.title,
                description: item.snippet,
                date: null,
                network: "google",
                media: {
                  type: null,
                  url: null,
                  preview: null
                },
                user: {
                  name: null,
                  screenName: null,
                  avatar: null
                }
              };
              results.push(newItem);
            });
          }
        }
      }

      if (args.twitter) {
        console.log("TWITTER_SEARCH");
        let twitter = Meteor.call("twitter-search", args.query);
        twitter.statuses.forEach(item => {
          let newItem = {
            link: null,
            title: null,
            description: item.text,
            date: item.created_at,
            network: "twitter",
            media: {},
            user: {
              name: item.user.name,
              screenName: item.user.screen_name,
              avatar: item.user.profile_image_url_https
            }
          };

          if (item.entities && item.entities.media && item.entities.media[0] && item.entities.media[0].media_url_https) {
            let entityMedia = item.entities.media[0];
            newItem.media = {
              type: entityMedia.type,
              url: entityMedia.media_url_https,
              preview: null
            };
          }

          if (item.extended_entities && item.extended_entities.media && item.extended_entities.media[0] && item.extended_entities.media[0].video_info) {
            let video = item.extended_entities.media[0].video_info;
            newItem.media = {
              type: "video",
              url: video.variants[0].url,
              preview: item.entities.media[0].media_url_https
            };
          }

          results.push(newItem);
        });
      }

      return results;
    },

    woeidPlaces(root, args, context) {
      return Meteor.call("twitter-trends-available");
    },

    twitterTrends(root, args, context) {
      if (!args.woeid) {
        return [];
      }

      let res = Meteor.call("twitter-trends-place", args.woeid);
      return res[0].trends;
    }

  },
  TwitterTrendingPlace: {
    parent: function (place) {
      return place.parentid;
    },
    type: function (place) {
      return place.placeType.name;
    }
  },
  TwitterTrends: {
    hashtag: function (trend) {
      return trend.name;
    },
    promoted: function (trend) {
      return trend.promoted_content;
    },
    volume: function (trend) {
      return trend.tweet_volume;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/search/bundle.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"team-attack":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/team-attack/definitions/bundle.jsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let teamAttack;
module.watch(require("./team-attack"), {
  default(v) {
    teamAttack = v;
  }

}, 0);
module.exportDefault([...teamAttack]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"team-attack.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/team-attack/definitions/team-attack.jsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const TeamAttack = `
type TeamAttack {
    _id: String,
    name: String,
    type: String,
    owner: User,
    action: String,
    members: [Account]
}
`;
module.exportDefault([TeamAttack]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/team-attack/resolvers/bundle.jsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let teamAttack;
module.watch(require("./team-attack"), {
  default(v) {
    teamAttack = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(teamAttack));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"team-attack.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/team-attack/resolvers/team-attack.jsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.exportDefault({
  Query: {
    teamAttacksOwn(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        owner: userID
      };
      return TeamAttack.find(query).fetch();
    },

    teamAttack(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      let query = {
        _id: args._id
      };
      return TeamAttack.findOne(query);
    },

    accountsTeamAttack(root, args, context) {
      const userID = context.userId || "zfbP3aTqiP8yAg8NQ";
      console.log("ACCOUNTS_TEAM_ATTACK", args);
      let {
        action_type,
        results_order,
        influencer_gender,
        influencer_age,
        influencer_country,
        influencer_followers,
        audience_gender,
        audience_age,
        audience_nrssg,
        audience_country,
        influencer_networks
      } = args;

      let getBounds = function (bounds, validator) {
        let $gt = bounds.min;
        let $lt = bounds.max;

        if (validator) {
          $gt = validator(bounds.min);
          $lt = validator(bounds.max);
        }

        return {
          $gt,
          $lt
        };
      };

      let query = {
        suspended: {
          $ne: true
        },
        delete: {
          $ne: true
        },
        network: {
          $in: influencer_networks
        }
      };
      let options = {};

      if (results_order && action_type) {
        options.sort = {};

        switch (results_order) {
          case "higherPrice":
            options.sort[`pricing.${action_type}`] = -1;
            break;

          case "lowestPrice":
            options.sort[`pricing.${action_type}`] = 1;
            break;

          case "higherEngagement":
            options.sort["statistics.engagement"] = -1;
            break;

          case "lowerEngagement":
            options.sort["statistics.engagement"] = 1;
            break;
        }
      }

      if (action_type) {
        if (action_type === "post" || action_type === "share") {
          query[`pricing.${action_type}`] = {
            $exists: true,
            $ne: ""
          };
        }
      }

      if (influencer_gender && influencer_gender !== "all") {
        query["information.gender"] = influencer_gender;
      }

      if (influencer_age && influencer_age !== "all") {
        influencer_age = {
          min: influencer_age.max,
          max: influencer_age.min
        };
        query["information.birthDate"] = getBounds(influencer_age, function (value) {
          return moment().subtract(Number(value), "years").toDate();
        });
      }

      console.log("ACCOUNTS_TEAM_ATTACK_QUERY", query, options);
      return SocialAccounts.find(query, options).fetch(); //TODO: ADD FILTER ONLY INFLUENCER ACCOUNTS

      console.log("INFLUENCER_FOLLOWERS", influencer_followers); //ARGS: { gender: 'all', age: 'all', country: 'all', followers: 'all' }

      if (influencer_country && influencer_country !== "all") {
        query["information.country"] = {
          $in: influencer_country
        };
      }

      if (influencer_followers && influencer_followers !== "all") {
        query["statistics.followers"] = getBounds(influencer_followers, Number);
      }

      if (audience_gender && audience_gender !== "all") {
        query["information.audience.gender"] = audience_gender;
      }

      if (audience_nrssg && audience_nrssg !== "all") {
        query["information.audience.nrssg"] = audience_nrssg;
      }

      if (audience_country && audience_country !== "all") {
        query["information.audience.country"] = {
          $in: audience_country
        };
      }

      if (audience_age && audience_age !== "all") {
        let queryValues = [];
        let brackets = ["18-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65"];
        brackets.forEach(bracket => {
          let split = bracket.split("-");
          let minValue = Number(split[0]);
          let maxValue = Number(split[1]);

          if (minValue >= audience_age.min && maxValue <= audience_age.max) {
            queryValues.push(bracket);
          }
        });
        query["information.audience.age"] = {
          $in: queryValues
        };
      }

      console.log("ACCOUNTS_TEAMATTACK", query);
      return SocialAccounts.find(query).fetch();
    }

  },
  TeamAttack: {
    owner: account => {
      let user = Meteor.users.findOne({
        _id: account.owner
      }, {
        fields: {
          services: 0
        }
      });
      return user;
    },
    members: team => {
      if (!team.members || team.members.length === 0) {
        return [];
      }

      let members = SocialAccounts.find({
        _id: {
          $in: team.members
        }
      }, {
        fields: {
          connection: 0
        }
      }).fetch();
      return members;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/team-attack/bundle.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/team-attack/schema.jsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  name: null,
  owner: null,
  members: []
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"users":{"definitions":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/users/definitions/bundle.jsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let User;
module.watch(require("./users"), {
  default(v) {
    User = v;
  }

}, 0);
module.exportDefault([...User]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/users/definitions/users.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const StripeCoupon = `
type StripeCoupon {
    id: String
    amount_off: String
    created: String
    currency: String
    duration: String
    duration_in_months: Int
    percent_off: Int
    redeem_by: String
    times_redeemed: Int
    valid: Boolean
}
`;
const UserCoupon = `
type UserCoupon {
    coupon: StripeCoupon
    start: String,
    end: String,
    subscription: String
}
`;
const StripeCard = `
type StripeCard {
    brand: String,
    country: String,
    id: String,
    last4: String
}
`;
const StripeBankAccount = `
type StripeBankAccount {
    name: String
    type: String,
    bank: String,
    country: String,
    currency: String,
    id: String,
    last4: String
}
`;
const StripeSubscriptionPlan = `
type StripeSubscriptionPlan {
    created: String,
    quantity: String,
    amount: Int,
    currency: String,
    name: String,
    interval: String,
    intervalCount: Int
}
`;
const StripeSubscription = `
type StripeSubscription {
    created: String,
    periodEnd: String,
    periodStart: String,
    id: String,
    quantity: String,
    startDate: String,
    trialStart: String,
    trialEnd: String,
    plans: [StripeSubscriptionPlan]
}
`;
const StripeCharge = `
type StripeCharge {
    id: String,
    amount: Int,
    refunded: Boolean,
    refundedAmount: Int,
    captured: Boolean,
    date: String,
    currency: String,
    description: String,
    dispute: String,
    failureCode: String,
    failureMessage: String,
    paid: Boolean,
    status: String,
    invoice: StripeInvoice
}
`;
const StripeInvoice = `
type StripeInvoice {
  id: String,
  amountDue: Int,
  attempts: Int,
  nextAttempt: String,
  charge: StripeCharge,
  closed: String,
  currency: String,
  date: String,
  description: String,
  discount: String,
  startingBalance: String,
  endingBalance: String,
  forgive: String,
  paid: String,
  periodEnd: String,
  periodStart: String,
  subtotal: Int,
  tax: String,
  taxPercent: Int,
  total: Int
}
`;
const StripeUser = `
type StripeUser {
    id: String, 
    balance: Int,
    created: String,
    currency: String,
    default_source: String,
    delinquent: Boolean,
    description: String,
    discount: UserCoupon,
    defaultCard: StripeCard
    cards: [StripeCard],
    banks: [StripeBankAccount],
    subscriptions: [StripeSubscription],
    invoices: [StripeInvoice],
    charges: [StripeCharge]
}
`;
const ZendeskComment = `
type ZendeskComment {
  id: String,
  author: ZendeskUser,
  body: String,
  channel: String,
  created: String
}
`;
const ZendeskUser = `
type ZendeskUser {
  id: String,
  email: String,
  name: String,
  role: String,
  created: String,
  updated: String,
  tags: String
}
`;
const ZendeskTicket = `
type ZendeskTicket {
  id:String,
  assignee:ZendeskUser,
  collaborators: [String],
  created: String,
  updated: String,
  priority: String,
  requester: ZendeskUser,
  satisfaction: String,
  status: String,
  subject: String,
  description: String,
  tags: [String],
  comments: [ZendeskComment]
}
`;
const UserSupport = `
type UserSupport {
  id: String,
  tickets: [ZendeskTicket]
}
`;
const UserEmail = `
type UserEmail {
  address: String
  verified: Boolean
}
`;
const UserProfile = `
type UserProfile {
    name: String,
    lastName: String,
    avatar: String
}
`;
const MixpanelEventProperties = `
type MixpanelEventProperties {
    browser: String,
    url: String,
    referrer: String
}
`;
const MixpanelEvent = `
type MixpanelEvent {
    id: String,
    name: String,
    created: String,
    properties: MixpanelEventProperties
}
`;
const User = `
type User {
  emails: [UserEmail]
  profile: UserProfile,
  stripe: StripeUser,
  support: UserSupport,
  events: [MixpanelEvent]
  _id: String
}
`;
module.exportDefault([User, UserEmail, UserProfile, StripeUser, UserCoupon, StripeCoupon, StripeCard, StripeBankAccount, StripeSubscription, StripeSubscriptionPlan, StripeCharge, StripeInvoice, UserSupport, ZendeskTicket, ZendeskComment, ZendeskUser, MixpanelEvent, MixpanelEventProperties]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resolvers":{"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/users/resolvers/bundle.jsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let users;
module.watch(require("./users"), {
  default(v) {
    users = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
module.exportDefault(merge(users));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/users/resolvers/users.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let HTTP;
module.watch(require("meteor/http"), {
  HTTP(v) {
    HTTP = v;
  }

}, 1);
module.exportDefault({
  Query: {
    user(root, args, context) {
      const userID = context.userId || "dzibKvJgaFFLskBZW";
      return Meteor.users.findOne(userID);
    }

  },
  User: {
    stripe: user => {
      let data = Meteor.call("stripe_customers_get", user);
      data.balance = data.account_balance;
      return data;
    },
    support: user => {
      return (0, _objectSpread2.default)({}, user);
    },
    events: user => {
      let data = Meteor.call("mixpanel_events_user", user);
      return data.map(e => ({
        id: e.distinct_id,
        name: e.name,
        created: new Date(e.time),
        properties: {
          browser: e.properties.$browser,
          url: e.properties.$current_url,
          referrer: e.properties.$initial_referrer
        }
      }));
    }
  },
  StripeUser: {
    created: user => {
      return new Date(user.created * 1000);
    },
    defaultCard: user => {
      return user.sources.data.filter(s => s.id === user.default_source)[0];
    },
    cards: user => {
      return user.sources.data.filter(s => s.object === "card");
    },
    banks: user => {
      return user.sources.data.filter(s => s.object === "bank_account").map(s => ({
        name: s.account_holder_name,
        type: s.account_holder_type,
        bank: s.bank_name,
        country: s.country,
        currency: s.currency,
        id: s.id,
        last4: s.last4
      }));
    },
    subscriptions: user => {
      return user.subscriptions.data.map(s => ({
        created: new Date(s.created * 1000),
        periodEnd: new Date(s.current_period_end * 1000),
        periodStart: new Date(s.current_period_start * 1000),
        id: s.id,
        quantity: s.quantity,
        startDate: new Date(s.start * 1000),
        trialStart: s.trial_end ? new Date(s.trial_end) : null,
        trialEnd: s.trial_start ? new Date(s.trial_start) : null,
        plans: s.items.data.map(i => ({
          created: new Date(i.created * 1000),
          quantity: i.quantity,
          amount: i.plan.amount,
          currency: i.plan.currency,
          name: i.plan.name,
          interval: i.plan.interval,
          intervalCount: i.plan.interval_count
        }))
      }));
    },
    charges: user => {
      let charges = Meteor.call("stripe_charges_list", {
        customer: user.id,
        limit: 100
      });
      return charges.data.map(c => ({
        id: c.id,
        amount: c.amount,
        refunded: c.refunded,
        refundedAmount: c.amount_refunded,
        captured: c.captured,
        date: new Date(c.created * 1000),
        currency: c.currency,
        description: c.description,
        dispute: c.dispute,
        failureCode: c.failureCode,
        failureMessage: c.failure_message,
        paid: c.paid,
        status: c.status,
        invoice: c.invoice
      }));
    },
    invoices: user => {
      let invoices = Meteor.call("stripe_invoices_list", {
        customer: user.id,
        limit: 100
      });
      return invoices.data.map(i => ({
        id: i.id,
        amountDue: i.amount_due,
        attempts: i.attempt_count,
        nextAttempt: new Date(i.next_payment_attempt * 1000),
        charge: i.charge,
        closed: i.closed,
        currency: i.currency,
        date: new Date(i.date * 1000),
        description: i.description,
        discount: i.discount,
        startingBalance: i.starting_balance,
        endingBalance: i.ending_balance,
        forgive: i.forgiven,
        paid: i.paid,
        periodEnd: new Date(i.period_end * 1000),
        periodStart: new Date(i.period_start * 1000),
        subtotal: i.subtotal,
        tax: i.tax,
        taxPercent: i.tax_percent,
        total: i.total
      }));
    }
  },
  UserCoupon: {
    start: coupon => {
      return new Date(coupon.start * 1000);
    },
    end: coupon => {
      return new Date(coupon.end * 1000);
    }
  },
  UserSupport: {
    tickets: user => {
      let tickets = Meteor.call("zendesk_tickets_get_by_user", user);
      return tickets.map(t => ({
        id: t.id,
        assignee: t.assignee_id,
        collaborators: t.collaborator_ids,
        created: new Date(t.created_at),
        updated: new Date(t.updated_at),
        priority: t.priority,
        requester: t.requester_id,
        satisfaction: t.satisfaction_rating,
        status: t.status,
        subject: t.subject,
        description: t.description,
        tags: t.tags,
        comments: []
      }));
    }
  },
  ZendeskTicket: {
    assignee: ticket => {
      let user = Meteor.call("zendesk_user_get", ticket.assignee);

      if (!user) {
        return null;
      }

      let u = user;
      return {
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        created: new Date(u.created_at),
        updated: new Date(u.updated_at),
        tags: u.tags
      };
    },
    requester: ticket => {
      let user = Meteor.call("zendesk_user_get", ticket.requester);

      if (!user) {
        return null;
      }

      let u = user;
      return {
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        created: new Date(u.created_at),
        updated: new Date(u.updated_at),
        tags: u.tags
      };
    },
    comments: ticket => {
      let comments = Meteor.call("zendesk_tickets_get_comments", ticket.id);
      return comments.comments.map(c => ({
        id: c.id,
        author: c.author_id,
        body: c.body,
        channel: c.via.channel,
        created: new Date(c.created_at)
      }));
    }
  },
  ZendeskComment: {
    author: comment => {
      let user = Meteor.call("zendesk_user_get", comment.author);

      if (!user) {
        return null;
      }

      let u = user;
      return {
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        created: new Date(u.created_at),
        updated: new Date(u.updated_at),
        tags: u.tags
      };
    }
  },
  StripeCharge: {
    invoice: charge => {
      if (!charge.invoice) {
        return null;
      }

      let i = Meteor.call("stripe_invoices_get", charge.invoice);
      return {
        id: i.id,
        amountDue: i.amount_due,
        attempts: i.attempt_count,
        nextAttempt: new Date(i.next_payment_attempt * 1000),
        charge: i.charge,
        closed: i.closed,
        currency: i.currency,
        date: new Date(i.date * 1000),
        description: i.description,
        discount: i.discount,
        startingBalance: i.starting_balance,
        endingBalance: i.ending_balance,
        forgive: i.forgiven,
        paid: i.paid,
        periodEnd: new Date(i.period_end * 1000),
        periodStart: new Date(i.period_start * 1000),
        subtotal: i.subtotal,
        tax: i.tax,
        taxPercent: i.tax_percent,
        total: i.total
      };
    }
  },
  StripeInvoice: {
    charge: invoice => {
      if (!invoice.charge) {
        return null;
      }

      let c = Meteor.call("stripe_charges_get", invoice.charge);
      return {
        id: c.id,
        amount: c.amount,
        refunded: c.refunded,
        refundedAmount: c.amount_refunded,
        captured: c.captured,
        date: new Date(c.created * 1000),
        currency: c.currency,
        description: c.description,
        dispute: c.dispute,
        failureCode: c.failureCode,
        failureMessage: c.failure_message,
        paid: c.paid,
        status: c.status,
        invoice: c.invoice
      };
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/users/bundle.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let definitions;
module.watch(require("./definitions/bundle"), {
  default(v) {
    definitions = v;
  }

}, 0);
let resolvers;
module.watch(require("./resolvers/bundle"), {
  default(v) {
    resolvers = v;
  }

}, 1);
module.exportDefault({
  definitions,
  resolvers
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/bundle.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  typeDefs: () => typeDefs,
  resolvers: () => resolvers
});
let Users;
module.watch(require("./users/bundle"), {
  default(v) {
    Users = v;
  }

}, 0);
let Accounts;
module.watch(require("./accounts/bundle"), {
  default(v) {
    Accounts = v;
  }

}, 1);
let Posts;
module.watch(require("./posts/bundle"), {
  default(v) {
    Posts = v;
  }

}, 2);
let Campaign;
module.watch(require("./campaign/bundle"), {
  default(v) {
    Campaign = v;
  }

}, 3);
let Events;
module.watch(require("./events/bundle"), {
  default(v) {
    Events = v;
  }

}, 4);
let Invites;
module.watch(require("./invites/bundle"), {
  default(v) {
    Invites = v;
  }

}, 5);
let Advertising;
module.watch(require("./advertising/bundle"), {
  default(v) {
    Advertising = v;
  }

}, 6);
let Search;
module.watch(require("./search/bundle"), {
  default(v) {
    Search = v;
  }

}, 7);
let News;
module.watch(require("./news/bundle"), {
  default(v) {
    News = v;
  }

}, 8);
let TeamAttack;
module.watch(require("./team-attack/bundle"), {
  default(v) {
    TeamAttack = v;
  }

}, 9);
let AccountInvites;
module.watch(require("./account-invites/bundle"), {
  default(v) {
    AccountInvites = v;
  }

}, 10);
let CampaignInvites;
module.watch(require("./campaign-invites/bundle"), {
  default(v) {
    CampaignInvites = v;
  }

}, 11);
let Reports;
module.watch(require("./reports/bundle"), {
  default(v) {
    Reports = v;
  }

}, 12);
let FacebookAds;
module.watch(require("./facebook-ads/bundle"), {
  default(v) {
    FacebookAds = v;
  }

}, 13);
let Payments;
module.watch(require("./payments/bundle"), {
  default(v) {
    Payments = v;
  }

}, 14);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 15);
let typeDefs = [...Accounts.definitions, ...Posts.definitions, ...Campaign.definitions, ...Events.definitions, ...Invites.definitions, ...Advertising.definitions, ...Search.definitions, ...News.definitions, ...TeamAttack.definitions, ...AccountInvites.definitions, ...Reports.definitions, ...CampaignInvites.definitions, ...FacebookAds.definitions, ...Payments.definitions];
let resolvers = merge(Accounts.resolvers, Users.resolvers, Posts.resolvers, Campaign.resolvers, Events.resolvers, Invites.resolvers, Advertising.resolvers, Search.resolvers, News.resolvers, TeamAttack.resolvers, AccountInvites.resolvers, Reports.resolvers, CampaignInvites.resolvers, FacebookAds.resolvers, Payments.resolvers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"query.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/query.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const Query = `
type Query {
  user: User
  getNews(lang: String!): [News]
  account(_id: String): Account
  accountsOwnSearch(query: String): [Account]
  accountsByTag(tag: String): [Account]
  accounts: [Account]
  accountInvite(inviteID: String!): AccountInvite
  accountInvites(accountID: String!): [AccountInvite]
  accountFBPages(accountID: String!): [FBPage]
  accountsTeamAttack(action_type: String,results_order: String, influencer_networks: [String], influencer_gender: String, influencer_age: RangeQuery, influencer_country: [String], influencer_languages: String, influencer_city: [String], influencer_likes: RangeQuery, influencer_followers: RangeQuery, influencer_views: RangeQuery, influencer_engagement: RangeQuery, influencer_followers: RangeQuery, audience_gender: String, audience_age: RangeQuery, audience_nrssg: String, audience_country: [String]): [Account]
  postsOwn: [Post]
  reportsOwn: [Report]
  report(reportId: String!): Report
  postsInvite(campaignID: String!, inviteID: String!): [Post]
  campaign(_id: String!): Campaign
  campaignsOwn: [Campaign]
  campaignInvite(inviteID: String!): CampaignInvite
  campaignInvites(campaignID: String!): [CampaignInvite]
  teamAttacksOwn: [TeamAttack]
  teamAttack(_id: String!): TeamAttack
  paymentsOwn(year:String, month:String, accounts:[String]): [Payment]
  woeidPlaces: [TwitterTrendingPlace]
  twitterTrends(woeid: String!): [TwitterTrends]
  eventsOwn(all: Boolean, created:Boolean, paused:Boolean, active:Boolean, drafts:Boolean, posts:Boolean): [Event]
  eventsCampaign(campaignID: String, all: Boolean, draft: Boolean, pending: Boolean, sent: Boolean, accepted: Boolean,  rejected: Boolean, scheduled: Boolean, published: Boolean, completed: Boolean, cancelled: Boolean, suspended: Boolean): [Event]
  eventsAccount(accountID: String, all: Boolean, draft: Boolean, pending: Boolean, sent: Boolean, accepted: Boolean,  rejected: Boolean, scheduled: Boolean, published: Boolean, completed: Boolean, cancelled: Boolean, suspended: Boolean): [Event]
  invitesCampaign(campaignID: String): [Invite]
  search(query:String, twitter: Boolean, instagram: Boolean, google: Boolean): [SearchItem]
  facebookAdAccounts(socialAccountID: String): [FacebookAccount]
  facebookAdsCampaigns(socialAccountID: String, adAccountID: String): [FacebookCampaign]
  facebookAdsCampaign(socialAccountID: String, adAccountID: String, campaignID: String): FacebookCampaign
  facebookAdsCampaignsAdSets(socialAccountID: String, adAccountID: String, campaignID: String): [FacebookAdSet]
  facebookAdsCampaignsAdSetAds(socialAccountID: String, adAccountID: String, campaignID: String, adSetID: String): [FacebookAd]
  facebookAdsCampaignsAdSetAd(socialAccountID: String, adAccountID: String, campaignID: String, adID: String): FacebookAd
  facebookAdsCampaignsAudienceEstimate(socialAccountID: String, adID: String, data: FacebookAdsCampaignsAudienceEstimate): FacebookAudience
  facebookAdsCampaignsDeliveryEstimate(socialAccountID: String, adID: String, data: FacebookAdsCampaignsDeliveryEstimate): FacebookDeliveryEstimate
}
`;
module.exportDefault(Query);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/schemas/schema.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let typeDefs, resolvers;
module.watch(require("./bundle"), {
  typeDefs(v) {
    typeDefs = v;
  },

  resolvers(v) {
    resolvers = v;
  }

}, 0);
let makeExecutableSchema;
module.watch(require("graphql-tools"), {
  makeExecutableSchema(v) {
    makeExecutableSchema = v;
  }

}, 1);
let Query;
module.watch(require("./query"), {
  default(v) {
    Query = v;
  }

}, 2);
const Schema = `
schema {
  query: Query
}
`;
module.exportDefault(makeExecutableSchema({
  typeDefs: [Query, Schema, ...typeDefs],
  resolvers
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bundle.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/server/bundle.jsx                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"constants":{"countries.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/constants/countries.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault(["Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bosnia and Herz.", "Brunei", "Bolivia", "Japan", "Burundi", "Benin", "Bhutan", "Jamaica", "Botswana", "Brazil", "Bahamas", "Belarus", "Belize", "Russia", "Rwanda", "Serbia", "Timor-Leste", "Turkmenistan", "Tajikistan", "Romania", "Guinea-Bissau", "Guatemala", "Greece", "Eq. Guinea", "Guyana", "Georgia", "United Kingdom", "Gabon", "Guinea", "Gambia", "Greenland", "Ghana", "Oman", "Tunisia", "Jordan", "Croatia", "Haiti", "Hungary", "Honduras", "Puerto Rico", "Palestine", "Portugal", "Paraguay", "Panama", "Papua New Guinea", "Peru", "Pakistan", "Philippines", "Poland", "Zambia", "W. Sahara", "Estonia", "Egypt", "South Africa", "Ecuador", "Italy", "Vietnam", "Solomon Is.", "Ethiopia", "Somalia", "Zimbabwe", "Spain", "Eritrea", "Montenegro", "Moldova", "Madagascar", "Morocco", "Uzbekistan", "Myanmar", "Mali", "Mongolia", "Macedonia", "Malawi", "Mauritania", "Uganda", "Malaysia", "Mexico", "Israel", "France", "Somaliland", "Finland", "Fiji", "Falkland Is.", "Nicaragua", "Netherlands", "Norway", "Namibia", "Vanuatu", "New Caledonia", "Niger", "Nigeria", "New Zealand", "Nepal", "Kosovo", "Côte d'Ivoire", "Switzerland", "Colombia", "China", "Cameroon", "Chile", "N. Cyprus", "Canada", "Congo", "Central African Rep.", "Dem. Rep. Congo", "Czech Rep.", "Cyprus", "Costa Rica", "Cuba", "Swaziland", "Syria", "Kyrgyzstan", "Kenya", "S. Sudan", "Suriname", "Cambodia", "El Salvador", "Slovakia", "Korea", "Slovenia", "Dem. Rep. Korea", "Kuwait", "Senegal", "Sierra Leone", "Kazakhstan", "Saudi Arabia", "Sweden", "Sudan", "Dominican Rep.", "Djibouti", "Denmark", "Germany", "Yemen", "Algeria", "United States", "Uruguay", "Lebanon", "Lao PDR", "Taiwan", "Trinidad and Tobago", "Turkey", "Sri Lanka", "Latvia", "Lithuania", "Luxembourg", "Liberia", "Lesotho", "Thailand", "Fr. S. Antarctic Lands", "Togo", "Chad", "Libya", "United Arab Emirates", "Venezuela", "Afghanistan", "Iraq", "Iceland", "Iran", "Armenia", "Albania", "Angola", "Argentina", "Australia", "Austria", "India", "Tanzania", "Azerbaijan", "Ireland", "Indonesia", "Ukraine", "Qatar", "Mozambique"]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"settings.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/settings.jsx                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exportDefault({
  name: "IBOL",
  logo: "https://s3.amazonaws.com/ibol-app-media/logo.png",
  altLogo: "https://s3.amazonaws.com/ibol-app-media/logo-alt.png",
  social: {
    facebook: "",
    twitter: ""
  },
  email: {
    noReply: "no-reply@viralizing.me"
  },
  support: {
    email: "support@viralizing.me"
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"accountInvites.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/accountInvites.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
SocialAccountsInvites = new Meteor.Collection("accountsInvites");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/accounts.jsx                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
SocialAccounts = new Meteor.Collection("accounts");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"advertising.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/advertising.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Advertising = new Meteor.Collection("advertising");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"campaignInvites.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/campaignInvites.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
CampaignInvites = new Meteor.Collection("campaignInvites");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"campaigns.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/campaigns.jsx                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Campaigns = new Meteor.Collection("campaigns");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"invites.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/invites.jsx                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Invites = new Meteor.Collection("invites");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"payments.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/payments.jsx                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Payments = new Meteor.Collection("payments");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/posts.jsx                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Posts = new Meteor.Collection("posts");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reports.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/reports.jsx                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Reports = new Meteor.Collection("reports");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"team-attack.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/team-attack.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TeamAttack = new Meteor.Collection("teamAttack");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notifications":{"notifications.jsx":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// notifications/notifications.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Herald.addCourier('appNotifications', {
  media: {
    onsite: {
      onRun: function () {
        console.log("NOTIFICATION_RUN");
        return this.run();
      } //Send notifications to client, with no custom configuration

    }
  },
  //will be a function on the collection instance, returned from find()
  message: function () {
    return 'There is a new post: "' + this.data.post.name + '"';
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"graphql.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/graphql.jsx                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let createApolloServer;
module.watch(require("meteor/apollo"), {
  createApolloServer(v) {
    createApolloServer = v;
  }

}, 0);
let merge;
module.watch(require("lodash"), {
  merge(v) {
    merge = v;
  }

}, 1);
let schema;
module.watch(require("../imports/server/schemas/schema"), {
  default(v) {
    schema = v;
  }

}, 2);
createApolloServer({
  schema
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("../imports/server/bundle.jsx"));
module.watch(require("../imports/modules/bundles/server.jsx"));
//23xcuCrdu2RP9EgvUccf9vBL9
//aHR0cHM6Ly90d2l0dGVyLmNvbS9yZWdpbmFiaXRh
//aHR0cHM6Ly90d2l0dGVyLmNvbS9jYW1pY29ydG14P2xhbmc9ZW4
//aHR0cHM6Ly9zY29udGVudC5mbWV4Ny0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTc5OTIyNDBfMjI4NDU0MDY2ODQzNzIxMV81NjE2MDE5NTc4NjIwOTMwMjg4X24uanBnP29oPTVjZDY2MjYyMDA2MjkwMzY0MDhkZDFiZWZjNzk5YjQxJm9lPTU5OUM2NTYy
Meteor.startup(function () {
  SyncedCron.start();

  Meteor.users._ensureIndex({
    "services.facebook.id": 1,
    "services.instagram.id": 1,
    "services.google.id": 1,
    "services.twitter.id": 1
  }, {
    name: "usersIndex"
  }); //Teams._ensureIndex({ userId: 1 });
  //Collection.rawCollection.createIndex({ userId: 1 });


  SocialAccounts._ensureIndex({
    "_id": 1,
    "network": 1,
    "manager": 1,
    "owner": 1,
    "shares": 1,
    "connection.id": 1,
    "information.gender": 1,
    "information.birthDate": 1,
    "information.country": 1,
    "audience.age": 1,
    "audience.gender": 1,
    "audience.nrssg": 1,
    "audience.countries": 1,
    "audience.cities": 1,
    "audience.languages": 1,
    "statistics.followers": 1,
    "pricing.post": 1,
    "pricing.photos.profile": 1,
    "pricing.photos.cover": 1,
    "pricing.noPost.hour": 1,
    "pricing.noPost.day": 1,
    "pricing.share": 1
  }, {
    name: "accountsIndex"
  });

  Campaigns._ensureIndex({
    "_id": 1,
    "owner": 1,
    "manager": 1,
    "status": 1,
    "information.dateStart": 1,
    "information.dateEnd": 1
  }, {
    name: "campaignsIndex"
  });

  TeamAttack._ensureIndex({
    "_id": 1,
    "owner": 1,
    "members": 1
  }, {
    name: "teamAttackIndex"
  });

  Posts._ensureIndex({
    "_id": 1,
    "status": 1,
    "type": 1,
    "date": 1,
    "campaign": 1,
    "announcement": 1,
    "isPaid": 1,
    "account": 1,
    "owner": 1
  }, {
    name: "postsIndex"
  });

  let services = Meteor.settings.private.networks;

  let configure = function () {
    if (services) {
      for (let service in services) {
        ServiceConfiguration.configurations.upsert({
          service: service
        }, {
          $set: Object.assign({}, services[service], {
            "loginStyle": "popup"
          })
        });
      }
    }
  };

  configure();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});
require("/collections/accountInvites.jsx");
require("/collections/accounts.jsx");
require("/collections/advertising.jsx");
require("/collections/campaignInvites.jsx");
require("/collections/campaigns.jsx");
require("/collections/invites.jsx");
require("/collections/payments.jsx");
require("/collections/posts.jsx");
require("/collections/reports.jsx");
require("/collections/team-attack.jsx");
require("/notifications/notifications.jsx");
require("/server/graphql.jsx");
require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js