import React from 'react';
import Select from 'react-select';
import { Translate, I18n } from 'react-redux-i18n';

const PLATFORMS = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'messenger', label: 'Messenger' },
  { value: 'audience network', label: 'Audience network' }
];

export default class PublisherFetch extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { input: { value, onChange } } = this.props;
    let getTranslation = (key) => {
      return 'Advertising.edit.' + key;
    };
    return (
      <div className="section">
        <Select multi={true} value={value} onChange={onChange} options={PLATFORMS} removeSelected={true}
                placeholder={<Translate value={getTranslation('select')}/>}/>
      </div>
    );
  }
}

