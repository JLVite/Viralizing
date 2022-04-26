import React from 'react';
import { graphql } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';
import { I18n } from 'react-redux-i18n';
import gql from 'graphql-tag';
import notie from 'notie';
import EditAccount from '../layouts/edit';
import Loading from '../../../core/ui/components/loading';
import Saving from '../../../core/ui/components/saving';

class EditContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      saving: 'saved',
    };

    this.saveAccount = this.saveAccount.bind(this);
  }

  componentDidMount() {
    this.savedData = JSON.stringify(this.props.account);
    const component = this;
    this.saveInterval = setInterval(() => {
      if (component.props.form && component.props.form.values) {
        component.saveAccount(component.props.form.values, true);
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.saveInterval);
  }

  saveAccount(data, silent) {
    const getTranslation = key => `Accounts.edit.${key}`;
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
    Meteor.call('profiles-save', data, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create post.';
        }
        console.error('ERROR_SAVING_ACCOUNT', err);
        component.setState({ saving: 'saved' });
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      component.setState({ saving: 'saved' });
      if (!silent) {
        notie.alert(1, I18n.t(getTranslation('saveMessage')), 3);
      }
    });
  }

  render() {
    const {
      history, refetch, account, userId, campaignInviteSentCount,
    } = this.props;
    return (
      <div>
        {this.props.loading ? <Loading />
          : (
            <EditAccount
              campaignInviteSentCount={campaignInviteSentCount}
              initialValues={account}
              userId={userId}
              refetch={refetch}
              history={history}
              onSubmit={this.saveAccount}
            />
          )}
        <Saving state={this.state.saving} />
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
            campaignsCount,
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
        campaignInviteSentCount(_id:$_id)
    }
`;

const withData = graphql(QUERY, {
  props: ({
    data: {
      error, loading, account, refetch, campaignInviteSentCount,
    },
  }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };
    return {
      loading,
      account,
      refetch,
      campaignInviteSentCount,
    };
  },
  options: ownProps => (
    {
      variables: {
        _id: ownProps.params.accountID,
      },
    }
  ),
});

const EditContainerWithData = withData(EditContainer);

const EditContainerWithUserId = createContainer(() => ({
  userId: Meteor.userId() || '',
}), EditContainerWithData);

export default EditContainerWithUserId;
