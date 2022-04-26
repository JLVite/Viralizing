import React from 'react';
import { I18n } from 'react-redux-i18n';
import ProfileForm from './form';
import notie from 'notie';

let getTranslation = (key) => {
  return 'Core.modals.profile.messages.' + key;
};

class ProfileData extends React.Component {
  constructor() {
    super();

    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    //Meteor.call("users-update-flag", "askedProfileData", true);
  }

  submitForm(data) {
    if (data.phone) data.phone = data.phone.split(' ').join('').split('-').join('').split('(').join('').split(')').join('');
    if (data.mobile) data.mobile = data.mobile.split(' ').join('').split('-').join('').split('(').join('').split(')').join('');

    //console.log("PROFILE_SUBMIT", data);
    let component = this;
    Meteor.call('users-update-modal-profile', data, function (err, res) {
      if (err) {
        notie.alert(1, I18n.t(getTranslation('error')), 3);
        return;
      }
      Meteor.call('users-update-flag', 'askedProfileData', true);
      notie.alert(1, I18n.t(getTranslation('success')), 3);
      component.props.close();
    });
  }

  render() {
    return (
      <div>
        <ProfileForm onSubmit={this.submitForm}/>
      </div>
    );
  }
}

export default ProfileData;

