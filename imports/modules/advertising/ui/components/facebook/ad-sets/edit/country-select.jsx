import React from 'react';
import Select from 'react-select';
import { Translate, I18n } from 'react-redux-i18n';

export default class FetchCountries extends React.Component {
  constructor() {
    super();

    this.getCountries = this.getCountries.bind(this);
  }

  getCountries(input, callback) {
    console.log(input);
    Meteor.call('fb-marketing-targeting-fields', 'vsRxw2iuDfednsYx8',
      {
        'type': 'adgeolocation',
        'location_types': ['country'],
        'q': input
      }, (err, res) => {
        if (res) {
          let keyName = {};
          let arr = res.data.map(obj => ({
            key: obj.key,
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
        <AsyncComponent multi={true} value={value} onChange={onChange} valueKey="key"
                        labelKey="name" loadOptions={this.getCountries} backspaceRemoves={true}
                        placeholder={<Translate value={getTranslation('select')}/>}/>
      </div>
    );
  }
}

