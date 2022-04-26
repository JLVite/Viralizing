import React from 'react';
import { graphql } from 'react-apollo';
import Loading from '../../../core/ui/components/loading';
import InvitesEditModal from '../components/invites/edit-modal';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class CampaignTeamAttackContainer extends React.Component {
  render() {
    let { input, onSubmit, setEditType, closeModal, initialValues, campaign, teamAttacksOwn, refetch } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <InvitesEditModal teamAttacks={teamAttacksOwn}
                            input={input}
                            refetch={refetch}
                            onSubmit={onSubmit}
                            setEditType={setEditType}
                            close={closeModal}
                            initialValues={initialValues}
                            campaign={campaign}/>}
      </div>
    );
  }
}

const QUERY = gql`
query{
  teamAttacksOwn{
    _id,
    owner {
      _id
    },
    members {
      _id,
        network,
        information{
          name,
          lastName,
          avatar,
          birthDate,
          country,
          gender
        }
    },
    name
  }
}
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, teamAttacksOwn, refetch } }) => {
    //console.log("ERROR_TEAMATTACK", error);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      teamAttacksOwn,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      pollInterval: 150000
    }
  ),
});

const CampaignTeamAttackContainerWithData = withData(CampaignTeamAttackContainer);

export default CampaignTeamAttackContainerWithData;
