import React from 'react';

class Advanced extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <h1>Advanced</h1>
        {React.cloneElement(this.props.children, filter(this.props))}
      </div>
    );
  }
}

export default Advanced;
