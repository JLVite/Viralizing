import React from "react";
import {graphql} from "react-apollo";
import Loading from "../../../core/ui/components/loading";
import SearchList from "../components/search-list";
import {createContainer} from "meteor/react-meteor-data";
import gql from "graphql-tag";
import Trends from "../components/trends/trends";

class TrendsContainer extends React.Component {
    render() {
        let {twitterTrends,refetch,createSearch}=this.props;
        return (
            <div>
                {this.props.loading ? <Loading/> :
                    <Trends trends={twitterTrends}
                            createSearch={createSearch}/>
                }
            </div>
        )
    }
}

const QUERY = gql`
query($woeid:String!) {
  twitterTrends(woeid:$woeid){
    hashtag,
    promoted,
    volume
  }
}
`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, twitterTrends, refetch}}) => {
        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            twitterTrends,
            refetch,
        };
    },
    options: (ownProps) => (
        {
            pollInterval: 150000,
            variables: {
                woeid: ownProps.woeid
            }
        }
    ),
});

const TrendsContainerWithData = withData(TrendsContainer);


export default TrendsContainerWithData;