import React from 'react';
import { reduxForm } from 'redux-form';
import Controls from '../components/edit/controls/container';
import Report from '../components/edit/report';

class EditReport extends React.Component {
  render() {
    return (
      <div className="reporter-report padding-15">
        <div className="row">
          <Report/>
          <Controls/>
        </div>
      </div>
    );
  }
}

EditReport = reduxForm({
  form: 'report-edit',
  enableReinitialize: true
})(EditReport);

export default EditReport;
