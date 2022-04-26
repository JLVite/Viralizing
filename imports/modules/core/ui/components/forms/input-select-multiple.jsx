import React from 'react';
import Select from 'react-select';

class InputSelectMultiple extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(val) {
    const { input: { onChange } } = this.props;
    let value = val.map((v) => v.value);
    onChange(value);
  }

  render() {
    const { input: { value, onChange }, options, placeholder } = this.props;
    return (
      <Select
        placeholder={placeholder}
        name="form-field-name"
        value={value}
        options={options}
        onChange={this.onChange}
        multi={true}
      />
    );
  }
}

export default InputSelectMultiple;
