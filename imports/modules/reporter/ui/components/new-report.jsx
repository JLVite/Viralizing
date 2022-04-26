import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Translate } from 'react-redux-i18n';

class NewReport extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Reporter.new.' + key;
    };
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h2><Translate value={getTranslation('title')}/></h2>
        <div className="padding-20">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">

                <Field component="input" name="name" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary pull-right"><Translate value={getTranslation('button')}/>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

NewReport = reduxForm({
  form: 'report-create'
})(NewReport);

export default NewReport;
