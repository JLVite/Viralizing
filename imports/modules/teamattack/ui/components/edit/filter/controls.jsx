import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import Audience from './controls/audience';
import Location from './controls/location';
import Profile from './controls/profile';
import ProfileExtended from './controls/extended-profile';
import Ranges from './controls/ranges';
import InputSocialNetwork from '../../../../../core/ui/components/forms/input-social-network';
import TAList from './controls/ta-list';

class FilterControls extends React.Component {
  constructor() {
    super();

    this.state = {
      influencer_age: null,
      influencer_followers: null,
      audience_age: null
    };

    this.updateSlider = this.updateSlider.bind(this);
  }

  updateSlider(key) {
    let component = this;
    return function (val) {
      let newState = { ...component.state };
      newState[key] = val;
      component.setState(newState);
    };
  }

  componentWillMount() {
    let { influencer_age, influencer_followers, audience_age } = this.props.values;
    this.setState({ influencer_age, influencer_followers, audience_age });
  }

  render() {
    let getTranslation = (key) => {
      return 'TeamAttack.edit.' + key;
    };
    let { values, updateFilter, toggleMap, teamAttacks } = this.props;

    return (
      <div className="col-md-3">
        {teamAttacks && teamAttacks.length && (
          <TAList teamAttacks={teamAttacks}/>
        )}
        <div className="panel">
          <div className="panel-body slim container-fluid">
            <h4><Translate value={getTranslation('search.panel.influencer.title')}/></h4>
            <InputSocialNetwork input={{
              value: values.influencer_networks,
              onChange: updateFilter('influencer_networks')
            }}/>
            <Location values={values} updateFilter={updateFilter} toggleMap={toggleMap}/>
            <Profile values={values} updateFilter={updateFilter}/>
            <Ranges values={values} updateFilter={updateFilter}/>
            <ProfileExtended values={values} updateFilter={updateFilter}/>
          </div>
        </div>

        <Audience values={values} updateFilter={updateFilter} toggleMap={toggleMap}/>


      </div>
    );
  }
}

export default FilterControls;
