import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import EditAccount from '../layouts/edit';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import HeaderGroupsComponent from '../components/header-groups';

class HeaderGroups extends React.Component {
  render() {
    return (
      <div className="groups">
        {this.props.loading ? <Loading/> :
          <HeaderGroupsComponent groups={this.props.groups} accounts={this.props.accountsByTag}
                                 refetch={this.props.refetch}/>}
      </div>
    );
  }
}

const QUERY = gql`
query($tag: String!){
  accountsByTag(tag:$tag){
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
  props: ({ data: { error, loading, accountsByTag, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      accountsByTag,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        tag: ownProps.groups[0]
      }
    }
  ),
});

const HeaderGroupsWithData = withData(HeaderGroups);

export default HeaderGroupsWithData;
