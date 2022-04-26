import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import notie from 'notie';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import EditCampaign from '../layouts/edit';
import Saving from '../../../core/ui/components/saving';
import Loading from '../../../core/ui/components/loading';

const getTranslation = key => `Campaigns.edit.messages.${key}`;

class EditContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      saving: 'saved',
      tabIndex: 'summary',
    };

    this.saveCampaign = this.saveCampaign.bind(this);
    this.setTab = this.setTab.bind(this);
  }

  setTab(tabIndex) {
    this.setState({ tabIndex });
  }

  componentDidMount() {
    this.savedData = JSON.stringify(this.props.account);
    const component = this;
    this.saveInterval = setInterval(() => {
      if (component.props.form && component.props.form.values) {
        component.saveCampaign(component.props.form.values, true);
        console.log('SAVED')
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.saveInterval);
  }

  saveCampaign(data, silent) {
    if (silent && typeof (silent) === 'boolean') {
      silent = true;
    } else {
      silent = false;
    }

    if (silent && this.savedData === JSON.stringify(data)) {
      this.setState({ saving: 'saved' });
      return;
    }

    this.setState({ saving: 'saving' });
    this.savedData = JSON.stringify(data);
    const component = this;

    // TODO: Validate Data
    Meteor.call('campaigns-save', data, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create post.';
        }

        // console.log("ERROR",err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      component.setState({ saving: 'saved' });
      if (!silent) {
        notie.alert(1, I18n.t(getTranslation('saved')), 3);
      }

      // component.props.refetch();

      // console.log("SERVER_SAVE_POSTS_RESPONSE",res);
    });
  }

  render() {
    const {
      invitesCampaign, teamAttacksOwn, accounts, refetch, accountsOwnSearch, campaign, handleSubmit,
    } = this.props;
    console.log('CAMPAIGN-CONTAINER INVITE',invitesCampaign)
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <EditCampaign
              tabIndex={this.state.tabIndex}
              setTab={this.setTab}
              handleSubmit={handleSubmit}
              initialValues={campaign}
              ownAccounts={accountsOwnSearch}
              refetch={refetch}
              invitesCampaign={invitesCampaign}
              teamAttacks={teamAttacksOwn}
              accounts={accounts}
              onSubmit={this.saveCampaign}
            />
          )}
        <Saving state={this.state.saving} />
      </div>
    );
  }
}

const QUERY = gql`
    query ($_id: String!,  $query: String!){
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
            shares {
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
        accountsOwnSearch(query:$query){
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
              name,
              _id,
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
        accounts{
            _id,
            network,
            information{
                name,
                lastName,
                avatar
            },
        }
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
            },
            name,
            type
        }
    }
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, campaign, accountsOwnSearch, invitesCampaign, teamAttacksOwn, accounts, refetch,
    },
  }) => {
    // console.log("CAMPAIGN_EDIT_CONTAINER",error,campaign);
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      campaign,
      accountsOwnSearch,
      invitesCampaign,
      teamAttacksOwn,
      accounts,
      refetch,
    };
  },
  options: ownProps =>(
    {
      variables: {
        _id: ownProps.params.campaignID,
        query: '',
      },
    }
  )
});

const EditContainerWithData = withData(EditContainer);


export default connect(state => ({
  form: state.form['campaign-edit'],
}))(EditContainerWithData);
