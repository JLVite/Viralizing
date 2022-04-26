import React from 'react';

class EmptyColumn extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <div className="empty-column">
        <img src="https://s3.amazonaws.com/ibol-app-media/icons/viralizing.svg" alt="Viralizing"/>
        <div className="title">
          Por favor selecciona un {item}.
        </div>
      </div>
    );
  }
}

export default EmptyColumn;
