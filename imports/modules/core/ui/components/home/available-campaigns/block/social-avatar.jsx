import React from 'react';
import { Link } from 'react-router';

class SocialAvatar extends React.Component {
  render() {
    // let size = this.props.size ? 'size-' + this.props.size : '';
    // if (this.props.type) {
    //   size += ' border ' + this.props.type;
    // }
    return (
      <div className={'social-avatar 65 text-center'}>
        <Link to={'/campaigns/view/'+this.props.id}>
          <img src={this.props.avatar} alt={this.props.name}/>
        </Link>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default SocialAvatar;
