import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import StarRatingComponent from 'react-star-rating-component';

class ProfileAvatar extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(name, nextValue);
    this.setState({ rating: nextValue });
  }

  render() {
    let getTranslation = (key) => {
      return 'Core.modals.profile.' + key;
    };
    let { user } = this.props;
    if (!user) return null;
    let profile = user.profile;
    let emailAddress = (user.emails && user.emails[0]) ? user.emails[0].address : 'User';
    return (
      <div style={{ textAlign: 'left' }}>
        <div className="panel-body container-fluid">
          <a className="avatar avatar-lg" href="javascript:void(0)">
            <img src={user.profile.avatar} alt="..." style={{ marginLeft: '50px' }}/>
          </a>
          <h4 className="profile-user">
            {(profile.name && profile.lastName) ? (profile.name + ' ' + profile.lastName) : emailAddress}
          </h4>
          <div style={{ marginLeft: '40px' }}>
            <StarRatingComponent
              name="Rating"
              starCount={5}
              value={this.rating}
              onStarClick={this.onStarClick}
            />
          </div>

        </div>
      </div>
    );
  }
}

const AvatarMenuWithUserId = createContainer(() => {
  return {
    user: Meteor.user() || '',
  };
}, ProfileAvatar);

export default AvatarMenuWithUserId;

