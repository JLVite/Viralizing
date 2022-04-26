import React from 'react';

class ListEmpty extends React.Component {
  render() {
    return (
      <div className="list-empty">
        <div className="content">
          <i className="icon wb-alert-circle" aria-hidden="true"/>
          <p>{this.props.message}</p>
          {this.props.button && <a className="btn btn-primary" onClick={this.props.callback}>{this.props.button}</a>}
        </div>
      </div>
    );
  }
}

export default ListEmpty;
