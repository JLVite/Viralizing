import React from 'react';
import { reduxForm } from 'redux-form';
import { Translate } from 'react-redux-i18n';
import Header from '../components/header';
import Tabs from '../components/tabs';

class EditAccount extends React.Component {
  render() {
    const {
      handleSubmit, pristine, reset, submitting, refetch, campaignInviteSentCount,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Tabs account={this.props.initialValues} userId={this.props.userId} refetch={this.props.refetch} campaignInviteSentCount={campaignInviteSentCount}>
          <Header account={this.props.initialValues} boolean />
        </Tabs>
        {/*
                <div className="content-padding-30">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary pull-right"><Translate value="Accounts.edit.saveButton"/></button>
                        </div>
                    </div>
                </div>
                */}
      </form>
    );
  }
}

EditAccount = reduxForm({
  form: 'account-edit',
  enableReinitialize: true,
})(EditAccount);

export default EditAccount;
