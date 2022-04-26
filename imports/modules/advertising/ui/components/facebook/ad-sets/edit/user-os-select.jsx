import React from 'react';
import Select from 'react-select';
import { Translate, I18n } from 'react-redux-i18n';

export default class UserOsFetch extends React.Component {
  constructor() {
    super();

    this.getOS = this.getOS.bind(this);
  }

  getOS(input, callback) {
    console.log(input);
    Meteor.call('fb-marketing-targeting-fields', 'vsRxw2iuDfednsYx8',
      {
        'type': 'adTargetingCategory',
        'class': 'user_os',
        'location_types': ['country'],
        'q': input
      }, (err, res) => {
        if (res) {
          let keyName = {};
          let arr = res.data.map(obj => ({
            key: obj.platform,
            name: obj.platform
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
                        loadOptions={this.getOS} backspaceRemoves={true}
                        placeholder={<Translate value={getTranslation('select')}/>}/>
      </div>
    );
  }
}

