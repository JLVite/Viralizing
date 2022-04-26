import React from 'react';
import Select from 'react-select';
import { Translate, I18n } from 'react-redux-i18n';

export default class UserDevFetch extends React.Component {
  constructor() {
    super();

    this.getDevices = this.getDevices.bind(this);
  }

  getDevices(input, callback) {
    console.log(input);
    Meteor.call('fb-marketing-targeting-fields', 'vsRxw2iuDfednsYx8',
      {
        'type': 'adTargetingCategory',
        'class': 'user_device',
        'location_types': ['country'],
        'q': input
      }, (err, res) => {
        if (res) {
          let keyName = {};
          let arr = res.data.map(obj => ({
            key: obj.description,
            name: obj.name
          }));
          callback(err, { options: arr });
        }
      });

  }

  render() {
    let { input: { value, onChange } } = this.props;
    const AsyncComponent = Select.Async;
    let getTranslation = (key) => {
      return 'Advertising.edit.' + key;
    };

    return (
      <div className="section">
        <AsyncComponent multi={true} value={value} onChange={onChange} valueKey="key" labelKey="name"
                        loadOptions={this.getDevices} backspaceRemoves={true}
                        placeholder={<Translate value={getTranslation('select')}/>}/>
      </div>
    );
  }
}

