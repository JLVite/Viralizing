import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import gql from 'graphql-tag';
import Loading from '../../../core/ui/components/loading';
import ViewCampaign from '../layouts/view';

const getTranslation = key => `Campaigns.edit.messages.${key}`;

class ViewContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      invitesCampaign, refetch, history, campaign, campaignInviteSentOwn,
    } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <ViewCampaign
              campaign={campaign}
              invitesCampaign={invitesCampaign}
              refetch={refetch}
              history={history}
              campaignInviteSentOwn={campaignInviteSentOwn}
            />
          )}
      </div>
    );
  }
}

const QUERY = gql`
    query ($_id: String!){
        campaign(_id:$_id){
            _id,
            owner {
                _id,
                profile{
                    name,
                    lastName,
                    avatar
                }
            },
            manager {
                _id,
                profile{
                    name,
                    lastName,
                    avatar
                }
            },
            information {
                brands{
                    _id,
                    network,
                    information{
                        name,
                        lastName,
                        avatar
                    }
                }
                profile
                cover
                name
                conquer
                dateStart
                dateEnd
                description
                url
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
                },
            },
            messages {
                _id
                message
                hashtags
                media
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
            }
        }
        campaignInviteSentOwn{
            _id
            campaignId
            accountId
            ownerId
            status
            messages{
                message
                media
                date
                quantity
                location
                type
            }
        }
        invitesCampaign(campaignID: $_id){
            _id,
            type,
            status,
            deadline,
            budget,
            useHashtag,
            invitesAvailable,
            networks{
                facebook,
                twitter,
                instagram
            }
            options{
                message,
                media,
                date,
                quantity
            },
            influencers {
                _id
                network
                information{
                    name,
                    lastName,
                    avatar
                }
            },
            teamAttacks{
              _id,
              name,
              type,
              action,
              members{
                _id
                network
                information{
                    name,
                    lastName,
                    avatar
                }
                pricing{
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
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, campaign, invitesCampaign, refetch, campaignInviteSentOwn,
    },
  }) => {
    console.log('CAMPAIGN_ERROR', error, campaign);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      campaign,
      invitesCampaign,
      refetch,
      campaignInviteSentOwn,
    };
  },
  options: ownProps => (
    {
      variables: {
        _id: ownProps.params.campaignID,
      },
    }
  ),
});

const ViewContainerWithData = withData(ViewContainer);

export default connect(state => ({
  form: state.form['campaign-edit'],
}))(ViewContainerWithData);
