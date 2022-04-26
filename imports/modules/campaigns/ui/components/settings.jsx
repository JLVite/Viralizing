import React from 'react';
import swal from 'sweetalert2';
import { withRouter } from 'react-router';
import { Translate, I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import CampaignHeader from './campaign-header';
import AccountInviteContainer from '../containers/campaign-user-invite';
import SocialAvatar from '../../../core/ui/components/social-avatar';
import AccountSearch from '../../../core/ui/components/forms/account-search';

const getTranslation = key => `Campaigns.edit.tabs.settings.${key}`;

class CampaignSettings extends React.Component {
  constructor() {
    super();

    this.state = {
      manager: {
        form: false,
      },
    };
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  confirmDelete() {
    const component = this;
    console.log('PROPS-CAMPAIGN', this.props);
    swal({
      title: I18n.t(getTranslation('delete.main.title')),
      text: I18n.t(getTranslation('delete.main.description')),
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: I18n.t(getTranslation('delete.main.confirm')),
      cancelButtonText: I18n.t(getTranslation('delete.main.cancel')),
    }).then(() => {
      Meteor.call('campaign-mark-delete', component.props.campaign, (err, res) => {
        // console.log("DELETE_ACCOUNT", err,res);
        if (err) {
          swal(
            I18n.t(getTranslation('delete.error.title')),
            I18n.t(getTranslation('delete.error.description')),
            'error',
          );
          return;
        }
        swal(
          I18n.t(getTranslation('delete.done.title')),
          I18n.t(getTranslation('delete.done.description')),
          'success',
        );
        component.props.router.push('/campaigns');
        location.reload();
      });
    });
  }

  render() {
    const { manager, owner, information } = this.props.campaign;
    const { campaign, userId, tabIndex } = this.props;
    const ownerName = `${owner.profile.name || ''} ${owner.profile.lastName || ''}`;

    return (
      <div>
        <CampaignHeader tabIndex={tabIndex} information={information} />
        <div className="content-padding-30 account-settings">
          {/* <h4><Translate value={getTranslation("instructions")}/></h4> */}
          <div className="row">
            <div className="col-md-6">
              <h4>Titular</h4>
              <div className="form-avatar">
                <SocialAvatar
                  avatar={owner.profile.avatar}
                  name={ownerName}
                  size="50"
                />
                <div className="title">
                  {ownerName}
                </div>
              </div>
              <div className="spacer-20" />
              <AccountInviteContainer manager={manager} userId={userId} campaign={campaign} />
            </div>
            <div className="col-md-6">
              <FormSection name="information">
                <div className="form-group">
                  <label htmlFor="campaignName">
                    <Translate value="Campaigns.edit.tabs.information.form.brand" />
                  </label>
                  <Field
                    component={AccountSearch}
                    name="brands"
                    data={this.props.ownAccounts}
                    multi
                    className="test-class"
                  />
                </div>
              </FormSection>
            </div>
          </div>
          <div className="row margin-top-40">
            <div className="col-md-12">
              <a className="btn btn-danger pull-right" onClick={this.confirmDelete}>
                <Translate value={getTranslation('deleteAccount')} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CampaignSettings.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(CampaignSettings);
