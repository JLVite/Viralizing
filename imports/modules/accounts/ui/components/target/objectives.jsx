import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import InputSelect from '../../../../core/ui/components/forms/input-checkbox';

class TargetObjectives extends React.Component {
  render() {
    let objectiveKeys = [
      'increaseFollowers',
      'increaseViews',
      'increaseShares',
      'increaseEngagement',
      'increaseLikes',
      'increaseTrafficHours',
      'reachNewMarkets',
      'increaseSpeaking',
      'increasePlays',
      'increaseWebsiteTraffic',
      'positionTarget',
      'keepTarget',
      'presence',
      'positionNewMarkets'
    ];
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.target.form.objectives.' + key;
    };
    return (
      <div>
        <h3>Metas</h3>
        <div className="row">
          {objectiveKeys.map((key, i) => (
            <div className="col-md-4" key={i}>
              <Field component={InputSelect}
                     name={key}
                     className="form-control"
                     label={<Translate value={getTranslation(key)}/>}/>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default TargetObjectives;

