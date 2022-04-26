const PATH_NAME = 'https://s3.amazonaws.com/ibol-app-media';

const AssetsApp = {
    logo: PATH_NAME + '/app/logo.png',
    alert: PATH_NAME + '/app/alert.png',
    search: PATH_NAME + '/app/search.png',
    edit: PATH_NAME + '/app/edit.png',
    cancel: PATH_NAME + '/app/cancel.png'
  },
  AssetsSocial = {
    facebook: PATH_NAME + '/social/facebook.png',
    twitter: PATH_NAME + '/social/twitter.png',
    google: PATH_NAME + '/social/google.png',
    instagram: PATH_NAME + '/social/instagram.png'
  },
  AssetsLetter = {};

export { AssetsApp, AssetsEditor, AssetsSocial, AssetsLetter };
