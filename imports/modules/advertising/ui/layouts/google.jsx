import React from 'react';

class Google extends React.Component {
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
      <div>
        {React.cloneElement(this.props.children, filter(this.props))}
      </div>
    );
  }
}

export default Google;
