import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { FormSection, Field, FieldArray } from 'redux-form';
import TargetsEdit from './target/targets-edit';
import TargetConquer from './target/conquer';
import TargetObjectives from './target/objectives';
import ObjectiveProposal from './target/objective-proposal';

class Concept extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.target.' + key;
    };

    let { tabIndex, accountID } = this.props;

    return (
      <div className="content-padding-30 account-target">
        <FieldArray component={TargetsEdit} name="targets"/>

        <Field component={TargetConquer} name="conquer" className="form-control" active={tabIndex}
               label="Región a consquistar"/>

        <FormSection name="objectives">
          <TargetObjectives/>
        </FormSection>
        <div className="row">
          <div className="col-md-4" style={{ marginTop: 20 }}>
            <ObjectiveProposal accountID={accountID}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
