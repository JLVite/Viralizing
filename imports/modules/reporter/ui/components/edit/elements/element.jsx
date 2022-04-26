import React from 'react';
import { Field, FormSection } from 'redux-form';

class Element extends React.Component {
  render() {
    let { size } = this.props;
    return (
      <div className={`element ${size}`}>Content</div>
    );
  }
}

export default Element;
