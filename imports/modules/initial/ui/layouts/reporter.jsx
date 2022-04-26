import React from 'react';

class Reporter extends React.Component {
  render() {
    let filter = (obj) => {
      let newProps = {};
      let key;
      for (key in obj) {
        if (key !== 'children') {
          newProps[key] = obj[key];
        }
      }
      return newProps;
    };
    return (
      <div className="page-content container-fluid">
        <h1>Reporter</h1>
        {React.cloneElement(this.props.children, filter(this.props))}
      </div>
    );
  }
}

export default Reporter;
