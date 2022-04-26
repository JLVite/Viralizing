import React from 'react';

class Tables extends React.Component {
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
        <h1>Tables</h1>
        {React.cloneElement(this.props.children, filter(this.props))}
      </div>
    );
  }
}

export default Tables;
