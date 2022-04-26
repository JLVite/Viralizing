import React from 'react';

class SocialAvatar extends React.Component {
  render() {
    let size = this.props.size ? 'size-' + this.props.size : '';
    if (this.props.type) {
      size += ' border ' + this.props.type;
    }
    return (
      <div className={'social-avatar ' + size}>
        <img src={this.props.avatar} alt={this.props.name}/>
        {this.props.network && <i className={'social-icon ' + this.props.network}/>}
        {this.props.page &&
        <img className="fan-page" src="https://s3.amazonaws.com/ibol-app-media/icons/fan-page.svg" alt="Fan Page"/>}
      </div>
    );
  }
}

export default SocialAvatar;
