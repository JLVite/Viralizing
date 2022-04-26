import React from "react";
import {graphql} from "react-apollo";
import Loading from "../../../core/ui/components/loading";
import SearchList from "../components/search-list";
import {createContainer} from "meteor/react-meteor-data";
import gql from "graphql-tag";

class QueryContainer extends React.Component {
    render() {
        let {search,query,refetch,twitter,instagram,google}=this.props;
        return (
            <div>
                {this.props.loading ? <Loading/> :
                    <SearchList data={search}
                                query={query}
                                refetch={refetch}
                                twitter={twitter}
                                google={google}
                                instagram={instagram}/>}
            </div>
        )
    }
}

const QUERY = gql`
query($query:String!, $twitter: Boolean, $instagram: Boolean, $google: Boolean){
  search(query:$query, twitter:$twitter, instagram:$instagram, google:$google){
    link,
    title,
    description,
    date,
    network,
    media{
      type,
      url,
      preview
    },
    user{
      name,
      screenName,
      avatar
    }
  }
}
`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, search, refetch}}) => {

        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            search,
            refetch,
        };
    },
    options: (ownProps) => (
        {
            pollInterval: 150000,
            variables: {
                "query": ownProps.query,
                "twitter": ownProps.twitter,
                "instagram": ownProps.instagram,
                "google": ownProps.google
            }
        }
    ),
});

const QueryContainerWithData = withData(QueryContainer);


export default QueryContainerWithData;