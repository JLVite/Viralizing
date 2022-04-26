import React from 'react';
import { reduxForm } from 'redux-form';
import Tabs from '../components/tabs';

class EditCampaign extends React.Component {
  render() {
    const {
      handleSubmit, initialValues, refetch, invitesCampaign, teamAttacks, accounts, ownAccounts, tabIndex, setTab,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Tabs
          tabIndex={tabIndex}
          setTab={setTab}
          campaign={initialValues}
          refetch={refetch}
          invitesCampaign={invitesCampaign}
          teamAttacks={teamAttacks}
          accounts={accounts}
          ownAccounts={ownAccounts}
        />
      </form>
    );
  }
}

EditCampaign = reduxForm({
  form: 'campaign-edit',
  enableReinitialize: true,
})(EditCampaign);

export default EditCampaign;
