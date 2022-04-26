import React from 'react';
import { I18n } from 'react-redux-i18n';
import ProfileForm from './profile/form';
import ProfilePassword from './profile/password';
import ProfileAvatar from './profile/avatar';
import notie from 'notie';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.saveProfile = this.saveProfile.bind(this);
  }

  saveProfile(values){
    let getTranslation = (key) => {
      return 'Settings.tabs.profile.form.' + key;
    };
    
    delete values['address1']
    delete values['address2']
    delete values['city']
    delete values['country']
    delete values['state']
    delete values['zipCode']
    Meteor.call('update-user-profile',Meteor.userId(),values.profile)
    notie.alert(1, I18n.t(getTranslation('saved')), 3);
  }

  render() {

    let getTranslation = (key) => {
      return 'Settings.tabs.profile.' + key;
    };
    return (
      <div className="content-padding-30 row">
        <div className="col-md-12">
          <ProfileForm onSubmit={this.saveProfile}/>
        </div>
      </div>
    );
  }
}

export default Profile;
