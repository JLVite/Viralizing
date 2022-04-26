import React from 'react';
import SocialAvatarProfile from '../../../core/ui/components/social-avatar-profile';
import HeaderGroups from '../containers/header-groups';
import StarRatingComponent from 'react-star-rating-component';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  getRating(followers) {
    if (followers <= 20000) {
      return <div className="followers">
        <i className="fa fa-star-half-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 20000 && followers <= 50000) {
      return <div>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 50000 && followers <= 100000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-half-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 100000 && followers <= 250000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 250000 && followers <= 500000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-half-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 500000 && followers <= 1000000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>profile
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 1000000 && followers <= 2000000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-half-o" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 2000000 && followers <= 5000000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-o" aria-hidden="true"/>
      </div>;
    }
    SocialAvatar;
    if (followers > 5000000 && followers <= 10000000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star-half-o" aria-hidden="true"/>
      </div>;
    }
    if (followers > 10000000 && followers <= 20000000) {
      return <div className="followers">
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
        <i className="fa fa-star" aria-hidden="true"/>
      </div>;
    }
    if (followers > 20000000 && followers <= 50000000) {
      return <div className="followers"><i className="fa fa-gift" aria-hidden="true"/></div>;
    }
    if (followers > 50000000) {
      return <div className="followers"><i className="fa fa-diamond" aria-hidden="true"/></div>;
    }
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(name, nextValue);
    this.setState({ rating: nextValue });
  }

  render() {
    let { information, statistics } = this.props.account;
    const profile = {
      name: (information.name || '') + ' ' + (information.lastName || ''),
      avatar: information.avatar,
      network: this.props.account.network,
      location: (information.city ? information.city + ',' : '') + ' ' + (information.country || ''),
      age: information.age
    };
    return (
      <div className="row account-header">
        <div className="col-md-6 profile"/>
        <div className="col-md-6">
          {this.props.account.groups[0] && this.props.boolean && (
            <HeaderGroups groups={this.props.account.groups}/>
          )}
        </div>
        <div className="col-md-12">
          <SocialAvatarProfile avatar={profile.avatar} network={profile.network} name={profile.name} size="100"/>
          <div className="col-md-10 data">
            <h2>{profile.name}</h2>
            <StarRatingComponent
              name="Rating"
              starCount={5}
              value={this.rating}
              onStarClick={this.onStarClick}
            />
            <span>{profile.location}</span>
            <span>{profile.date}</span>
            <span>{statistics && this.getRating(statistics.followers)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
