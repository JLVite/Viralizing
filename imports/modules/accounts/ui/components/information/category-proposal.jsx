import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import swal from 'sweetalert2';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.information.form.proposal.' + key;
};

class CategoryProposal extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'category',
      category: ''
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(key) {
    let component = this;
    return function (e) {
      let val = e.target.value;
      let newState = { ...component.state };
      newState[key] = val;
      component.setState(newState);
    };
  }

  submitForm() {
    //console.log("FORM_SUBMISSION", this.state);
    let component = this;
    let { accountID } = this.props;
    Meteor.call('account-category-invite-proposal', accountID, this.state, function (err, res) {
      if (err) {
        //console.log("ERROR", err);
        swal(
          I18n.t(getTranslation('modals.error.title')),
          I18n.t(getTranslation('modals.error.description')),
          'error'
        );
        return;
      }
      component.setState({});
      swal(
        I18n.t(getTranslation('modals.done.title')),
        I18n.t(getTranslation('modals.done.description')),
        'success'
      );

    });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="informationPoliticalIdeas">
          <Translate value={getTranslation('categories.label')}/>
        </label>
        <div className="input-group">

          <input type="text"
                 className="form-control"
                 value={this.state.category}
                 onChange={this.updateValue('category')}
                 placeholder={I18n.t(getTranslation('categories.placeholder'))}/>
          <span className="input-group-btn">
                                <button className="btn btn-success" type="button" onClick={this.submitForm}>
                                    <i className="fa fa-check" aria-hidden="true"/>
                                </button>
                            </span>
        </div>
      </div>
    );
  }
}

export default CategoryProposal;
