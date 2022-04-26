import React from 'react';
import swal from 'sweetalert2';
import { withRouter } from 'react-router';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import InputTags from '../../../core/ui/components/forms/input-tags';
import InputLabelCheckbox from '../../../core/ui/components/forms/input-label-checkbox';
import AccountInviteContainer from '../containers/account-invite';
import PropTypes from 'prop-types';
import SocialAvatar from '../../../core/ui/components/social-avatar';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.settings.' + key;
};

class AccountSettings extends React.Component {
  constructor() {
    super();

    this.state = {
      manager: {
        form: false
      }
    };
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  confirmDelete() {
    let component = this;
    swal({
      title: I18n.t(getTranslation('delete.main.title')),
      text: I18n.t(getTranslation('delete.main.description')),
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: I18n.t(getTranslation('delete.main.confirm')),
      cancelButtonText: I18n.t(getTranslation('delete.main.cancel'))
    }).then(function () {
      Meteor.call('profiles-mark-delete', component.props.account, function (err, res) {
        //console.log("DELETE_ACCOUNT", err,res);
        if (err) {
          swal(
            I18n.t(getTranslation('delete.error.title')),
            I18n.t(getTranslation('delete.error.description')),
            'error'
          );
          return;
        }
        swal(
          I18n.t(getTranslation('delete.done.title')),
          I18n.t(getTranslation('delete.done.description')),
          'success'
        );
        component.props.router.push('/accounts');
      });

    });
  }

  render() {
    let manager = this.props.account.manager;
    let owner = this.props.account.owner;
    let { account, userId } = this.props;
    let ownerName = (owner.profile.name || '') + ' ' + (owner.profile.lastName || '');

    return (
      <div className="content-padding-30 account-settings">
        {/*<h4><Translate value={getTranslation("instructions")}/></h4>*/}
        <div className="row">
          <div className="col-md-6">
            <h4>Titular</h4>
            <div className="form-avatar">
              <SocialAvatar avatar={owner.profile.avatar}
                            name={ownerName}
                            size="50"/>
              <div className="title">
                {ownerName}
              </div>
            </div>
            <div className="spacer-20"/>
            <AccountInviteContainer manager={manager} userId={userId} account={account}/>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="informationName">
                <Translate value={getTranslation('form.accountIs.title')}/>
              </label>
              <div className="form-control no-back">
                <Field component={InputLabelCheckbox} name="settings.type.brand"
                       label={<Translate value={getTranslation('form.accountIs.brand')}/>} iconChecked="icon wb-check"
                       iconUnchecked="icon wb-close not" className="brand"/>

                <Field component={InputLabelCheckbox} name="settings.type.influencer"
                       label={<Translate value={getTranslation('form.accountIs.influencer')}/>}
                       iconChecked="icon wb-check" iconUnchecked="icon wb-close not" className="influencer"/>
              </div>
            </div>
            <div className="form-group" style={{ marginTop: 65 }}>
              <label htmlFor="exampleInputEmail1">
                <Translate value={getTranslation('form.groups.label')}/>
              </label>
              <Field component={InputTags} name="groups" placeholder={I18n.t(getTranslation('form.groups.placeholder'))}
                     className="form-control"/>
            </div>
          </div>
        </div>
        {/*
                <div className="row margin-top-40">
                    <div className="col-md-12">
                        <a className="btn btn-danger pull-right" onClick={this.confirmDelete}>
                            <Translate value={getTranslation("form.deleteAccount")}/>
                        </a>
                    </div>
                </div>
                */}

      </div>
    );
  }
}

AccountSettings.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(AccountSettings);
