import React from "react";
import {graphql} from "react-apollo";
import Loading from "../../../core/ui/components/loading";
import SearchList from "../components/search-list";
import {createContainer} from "meteor/react-meteor-data";
import gql from "graphql-tag";
import Places from "../components/trends/places";

class PlacesContainer extends React.Component {
    render() {
        let {woeidPlaces,refetch, input}=this.props;
        return (
            <div>
                {this.props.loading ? <Loading/> :
                    <Places places={woeidPlaces} input={input}/>
                }
            </div>
        )
    }
}

const QUERY = gql`
query {
	woeidPlaces{
    woeid,
    name,
    type,
    parent,
    country
  }   
}
`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, woeidPlaces, refetch}}) => {

        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            woeidPlaces,
            refetch,
        };
    },
    options: (ownProps) => (
        {
            pollInterval: 150000,
            variables: {

            }
        }
    ),
});

const PlacesContainerWithData = withData(PlacesContainer);


export default PlacesContainerWithData;