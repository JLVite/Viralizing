import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import swal from 'sweetalert2';

const getTranslation = key => `Accounts.edit.tabs.information.form.proposal.${key}`;

class SpecialtyProposal extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'specialty',
      category: '',
      specialty: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(key) {
    const component = this;
    return function (e) {
      const val = e.target.value;
      const newState = { ...component.state };
      newState[key] = val;
      component.setState(newState);
    };
  }

  submitForm() {
    // console.log("FORM_SUBMISSION", this.state);
    const component = this;
    const { accountID } = this.props;
    Meteor.call('account-category-invite-proposal', accountID, this.state, (err, res) => {
      if (err) {
        // console.log("ERROR", err);
        swal(
          I18n.t(getTranslation('modals.error.title')),
          I18n.t(getTranslation('modals.error.description')),
          'error',
        );
        return;
      }
      component.setState({});
      swal(
        I18n.t(getTranslation('modals.done.title')),
        I18n.t(getTranslation('modals.done.description')),
        'success',
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="informationPoliticalIdeas">
              <Translate value={getTranslation('specialties.label')} />
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="informationPoliticalIdeas">
              &nbsp;
            </label>
            <div className="input-group">

              <input
                type="text"
                className="form-control"
                value={this.state.specialty}
                onChange={this.updateValue('specialty')}
                placeholder={I18n.t(getTranslation('specialties.placeholder'))}
              />
              <span className="input-group-btn">
                <button className="btn btn-success" type="button" onClick={this.submitForm}>
                  <i className="fa fa-check" aria-hidden="true" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialtyProposal;
