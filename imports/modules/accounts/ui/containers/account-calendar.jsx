import React from 'react';
import { graphql } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import AccountCalendar from '../components/calendar';
import Loading from '../../../core/ui/components/loading';

class AccountCalendarContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      all: true,
      draft: true,
      pending: true,
      sent: true,
      accepted: true,
      rejected: true,
      scheduled: true,
      published: true,
      completed: true,
      cancelled: true,
      suspended: true,
    };

    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(key) {
    const component = this;
    return function (e) {
      const newState = component.state;
      if (key === 'all' && !newState[key] === true) {
        if (!newState[key]) {
          Object.keys(newState).forEach((oKey) => {
            newState[oKey] = true;
          });
        }
      } else {
        newState[key] = !newState[key];
      }

      component.setState(newState);
      component.props.refetch(newState);
    };
  }

  render() {
    const {
      account, refetch, eventsAccount, controls, readOnly, setTab, tabIndex,
    } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <AccountCalendar
              tabIndex={tabIndex}
              setTab={setTab}
              events={eventsAccount}
              readOnly={readOnly}
              refetch={refetch}
              account={account}
              filters={this.state}
              update={this.filterUpdate}
              controls={controls}
            />
          )}
      </div>
    );
  }
}

const QUERY = gql`
query($accountID: String, $all: Boolean, $draft: Boolean, $pending: Boolean, $sent: Boolean, $accepted: Boolean,  $rejected: Boolean, $scheduled: Boolean, $published: Boolean, $completed: Boolean, $cancelled: Boolean, $suspended: Boolean){
  eventsAccount(accountID:$ accountID, all: $all, draft: $draft, pending: $pending, sent: $sent, accepted: $accepted,  rejected: $rejected, scheduled: $scheduled, published: $published, completed: $completed, cancelled: $cancelled, suspended: $suspended){
    _id,
    type,
    start,
    end,
    title,
    allDay,
    preview,
    network
  }
}
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, eventsAccount, refetch,
    },
  }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      eventsAccount,
      refetch,
    };
  },
  options: ownProps => (
    {
      pollInterval: 150000,
      variables: {
        accountID: ownProps.account ? ownProps.account._id : '',
        all: true,
        draft: true,
        pending: true,
        sent: true,
        accepted: true,
        rejected: true,
        scheduled: true,
        published: true,
        completed: true,
        cancelled: true,
        suspended: true,
      },
    }
  ),
});

const AccountCalendarContainerWithData = withData(AccountCalendarContainer);

export default AccountCalendarContainerWithData;
