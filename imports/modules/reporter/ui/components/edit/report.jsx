import React from 'react';
import { FormSection, Field, FieldArray } from 'redux-form';
import ElementsEdit from './elements/container';

class Report extends React.Component {
  render() {
    return (
      <div className="report col-md-9">
        <Field component="input" name="name" className="name"/>

        <FieldArray component={ElementsEdit} name="targets"/>
      </div>
    );
  }
}

export default Report;
