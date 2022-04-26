import React from "react";
import {graphql} from "react-apollo";
import Loading from "../../../core/ui/components/loading";
import List from "../layouts/list";
import {createContainer} from "meteor/react-meteor-data";
import gql from "graphql-tag";

class ListContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.loading ? <Loading/> :
                    <List data={this.props.teamAttacksOwn} refetch={this.props.refetch} history={this.props.history}/>}
            </div>
        )
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
            name,
            type
        }
    }
`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, teamAttacksOwn, refetch}}) => {
        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            teamAttacksOwn,
            refetch,
        };
    },
    options: (ownProps) => (
        {pollInterval: 150000}
    ),
});

const ListContainerWithData = withData(ListContainer);

// This container brings in Tracker-enabled Meteor data
const ListContainerWithUserId = createContainer(() => {
    return {
        userId: Meteor.userId() || '',
    };
}, ListContainerWithData);

export default ListContainerWithUserId;