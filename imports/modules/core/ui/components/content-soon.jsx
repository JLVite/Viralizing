import React from 'react';

class ContentSoon extends React.Component {
  render() {
    return (
      <div className="content-soon">
        <div className="content">
          <i className={this.props.icon || 'icon wb-time'} aria-hidden="true"/>
          <h3>{this.props.content || 'Content coming soon.'}</h3>
        </div>
      </div>
    );
  }
}

export default ContentSoon;

