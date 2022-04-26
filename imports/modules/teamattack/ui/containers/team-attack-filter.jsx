import React from "react";
import {graphql} from "react-apollo";
import Loading from "../../../core/ui/components/loading";
import FilterList from "../components/edit/filter/list";
import {createContainer} from "meteor/react-meteor-data";
import gql from "graphql-tag";

class TeamAttackFilter extends React.Component {
    render() {
        let {value, view, search, updateFilter, updateValue, updateMembers, accountsTeamAttack,setRefetch, filters}=this.props;
        setRefetch(this.props.refetch);
        let data=accountsTeamAttack||[];
        return (
            <div>
                {this.props.loading? <Loading/> :
                    <FilterList data={data}
                                filters={filters}
                                value={value}
                                view={view}
                                search={search}
                                updateFilter={updateFilter}
                                updateValue={updateValue}
                                updateMembers={updateMembers}/>}
            </div>
        )
    }
}

/*
results_order: "higherPrice",
                influencer_networks: ["facebook"],
                influencer_gender: "all",
                influencer_age: {min: 18, max: 100},
                influencer_country: ["Mexico"],
                influencer_languages: null,
                influencer_city: [],
                influencer_likes: {min: 0, max: 50000000},
                influencer_followers: {min: 0, max: 50000000},
                influencer_views: {min: 0, max: 50000000},
                influencer_engagement: {min: 0, max: 50000000},
                audience_gender: "all",
                audience_age: {min: 18, max: 100},
                audience_nrssg: "all",
                audience_country: ["Mexico"]
* */
const QUERY = gql`
query (
    $results_order: String,
    $action_type: String,
    $influencer_networks: [String]!,
    $influencer_gender: String!, 
    $influencer_age: RangeQuery!, 
    $influencer_country: [String]!,
    $influencer_languages: String,
    $influencer_city: [String]!,
    $influencer_likes: RangeQuery!,
    $influencer_followers: RangeQuery!,
    $influencer_views: RangeQuery!,
    $influencer_engagement: RangeQuery!,
    $audience_gender: String!, 
    $audience_age: RangeQuery!, 
    $audience_nrssg: String!, 
    $audience_country: [String]!
){
  accountsTeamAttack(
      action_type:$action_type,
      results_order: $results_order,
      influencer_networks:$influencer_networks,
      influencer_gender:$influencer_gender,
      influencer_age:$influencer_age,
      influencer_country:$influencer_country,
      influencer_languages:$influencer_languages,
      influencer_city:$influencer_city,
      influencer_likes:$influencer_likes,
      influencer_followers:$influencer_followers,
      influencer_views:$influencer_views,
      influencer_engagement:$influencer_engagement,
      audience_gender:$audience_gender,
      audience_age:$audience_age,
      audience_nrssg:$audience_nrssg,
      audience_country:$audience_country
  ){
		_id,
    network,
      information {
          name
          lastName
          avatar
          gender
          birthDate
          country
          city
          maritalStatus
          forbiddenSubjects
          sexualOrientation
          likes
          language
          description
          categories
          specialties
          urls
      },
      statistics {
          retweets
          retweetsPerPost
          favorites
          favoritesPerPost
          comments
          commentsPerPost
          likes
          likesPerPost
          shares
          sharesPerPost
          engagement
          followers
          following
          profileLikes
          posts
          postsPerDay
      },
    pricing {
        post
        share
        partnership
        ambassador,
        profilePicture,
        coverPhoto,
        noPostHour,
        noPostDay,
    }
  }
}
`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, accountsTeamAttack, refetch}}) => {
        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            accountsTeamAttack,
            refetch,
        };
    },
    options: (ownProps) => (
        {
            pollInterval: 150000,
            variables: ownProps.filters
        }
    ),
});

const TeamAttackFilterrWithData = withData(TeamAttackFilter);

export default TeamAttackFilterrWithData;