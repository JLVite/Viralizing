import React from 'react';
import Switch from 'react-switchery';
import { Translate } from 'react-redux-i18n';

class ActionBudget extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'budget',
    };

    this.typeChange = this.typeChange.bind(this);
  }

  typeChange(val) {
    let type = 'budget';
    if (val.target) {
      val = val.target.checked;
    }
    if (val) {
      type = 'full';
    }
    const { updateInviteValue } = this.props;
    updateInviteValue('budget')({
      target: { value: 'full' },
    });
    this.setState({ type });
  }

  componentWillReceiveProps() {
    const { currentInvite } = this.props;
    const { type } = this.state;
    if (currentInvite && type !== currentInvite.budget) {
      this.setState({ type: currentInvite.budget === 'full' ? 'full' : 'budget' });
    }
  }

  render() {
    const getTranslation = key => `Campaigns.edit.tabs.invites.edit.form.budget.${key}`;
    const { type } = this.state;
    const { currentInvite, updateInviteValue } = this.props;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="informationName">
            <i className="fa fa-angle-up" aria-hidden="true" />
            {' '}
            <Translate value={getTranslation('budget')} />
          </label>
          <input
            type="number"
            className="form-control"
            disabled={type !== 'budget'}
            onChange={updateInviteValue('budget')}
            value={(currentInvite.budget && (currentInvite.budget !== 'full')) ? currentInvite.budget : ''}
          />
        </div>
        <div>
          <div className="checkbox-custom checkbox-primary">
            <input
              type="checkbox"
              id="directPay"
              onChange={this.typeChange}
              checked={type === 'full'}
            />
            <label htmlFor="directPay"><Translate value={getTranslation('direct')} /></label>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionBudget;
