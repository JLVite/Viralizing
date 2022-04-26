import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import Loading from '../../../core/ui/components/loading';
import ViewAccount from '../layouts/view';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

class ViewContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? <Loading/> :
          <ViewAccount account={this.props.account}/>}
      </div>
    );
  }
}

const QUERY = gql`
    query ($_id: String!){
        account(_id:$_id){
            _id,
            active,
            suspended,
            delete,
            network,
            manager {
                _id
                profile {
                    name
                    lastName
                    avatar
                }
                emails {
                    address
                }
            },
            owner {
                _id
                profile {
                    name
                    lastName
                    avatar
                }
                emails {
                    address
                }
            },
            shares {
                _id
                profile {
                    name
                    lastName
                    avatar
                }
                emails {
                    address
                }
            },
            settings{
                type {
                    brand
                    influencer
                }
            },
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
            audience {
                targets {
                    name,
                    age,
                    gender,
                    nrssg,
                    countries,
                    cities,
                    languages,
                    description
                },
                conquer,
                objectives {
                    increaseFollowers,
                    increaseViews,
                    increaseShares,
                    increaseEngagement,
                    increaseLikes,
                    increaseTrafficHours,
                    reachNewMarkets,
                    increaseSpeaking,
                    increasePlays,
                    increaseWebsiteTraffic,
                    positionTarget,
                    keepTarget,
                    presence,
                    positionNewMarkets,
                }
            }
            pricing {
                post
                share
                partnership
                ambassador,
                profilePicture,
                coverPhoto,
                noPostHour,
                noPostDay,
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
            gallery {
                images{
                    name,
                    content
                },
                videos{
                    name,
                    content
                }
            },
            groups
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({ data: { error, loading, account, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      account,
      refetch,
    };
  },
  options: (ownProps) => (
    {
      variables: {
        _id: ownProps.params.accountID
      }
    }
  ),
});

export default withData(ViewContainer);
