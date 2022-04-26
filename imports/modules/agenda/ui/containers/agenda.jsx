import React from 'react';
import { graphql } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import notie from 'notie';
import Agenda from '../layouts/agenda';
import Loading from '../../../core/ui/components/loading';

class AgendaContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      all: true,
      created: true,
      paused: true,
      active: true,
      drafts: true,
      posts: true,
      accounts: [],
      networks: ['facebook'],
      tabIndex: 'calendar',
    };

    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(key) {
    const component = this;
    return function (e, useVal) {
      const newState = component.state;
      newState[key] = !newState[key];
      if (useVal) {
        newState[key] = e;
      }
      console.log('UPDATE', newState);
      component.setState(newState);
      component.props.refetch(newState);
    };
  }

  render() {
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <Agenda
              tabIndex={this.state.tabIndex}
              events={this.props.eventsOwn}
              accounts={this.props.accountsOwnSearch}
              refetch={this.props.refetch}
              filters={this.state}
              update={this.filterUpdate}
            />
          )}
      </div>
    );
  }
}

const QUERY = gql`
query ($all: Boolean, $created: Boolean, $paused: Boolean, $active: Boolean, $drafts: Boolean, $posts: Boolean, $networks: [String], $query: String!){
  eventsOwn(all:$all, created:$created, paused:$paused, active:$active, drafts:$drafts, posts:$posts, networks:$networks){
    _id,
    type,
    start,
    end,
    title,
    allDay,
    preview,
    network,
    accountId
  },
    accountsOwnSearch(query:$query){
        _id,
        network,
        information{
            name,
            lastName,
            avatar
        }
    }
}
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, eventsOwn, accountsOwnSearch, refetch,
    },
  }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      eventsOwn,
      accountsOwnSearch,
      refetch,
    };
  },
  options: ownProps => (
    {
      pollInterval: 150000,
      variables: {
        all: true,
        created: true,
        paused: true,
        active: true,
        drafts: true,
        posts: true,
        networks: ['facebook'],
        query: '',
      },
    }
  ),
});

const AgendaContainerWithData = withData(AgendaContainer);

export default AgendaContainerWithData;
