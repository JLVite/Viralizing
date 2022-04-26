module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '3.94.251.54',
	    username: 'ubuntu',
	    pem: 'IbolApp.pem'
    }
  },

  app: {
    // TODO: change app name and path
    name: 'viralizing',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
	    ROOT_URL: 'http://app-dev.viralizing.com',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
	    MAIL_URL: "smtp://AKIAI4TZNRLJPL2QIQPA:ArfuKo+wHYpTnz8KwaF5ZROkyyAf3EIViCiAE5NKhjND@email-smtp.us-east-1.amazonaws.com:587"
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
     domains: 'app-dev.viralizing.com',

     ssl: {
       // Enable Let's Encrypt
       letsEncryptEmail: 'hello@viralizing.com'
     }
   }
};
