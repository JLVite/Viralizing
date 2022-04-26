import React from 'react';
import InputRange from 'react-input-range';

class InputNumberRange extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(phone) {
    this.props.input.onChange(phone);
  }

  render() {
    let { value, onChange } = this.props;
    return (
      <InputRange
        maxValue={this.props.max || 10}
        formatLabel={value => `${value} ` + (this.props.helper || '')}
        minValue={this.props.min || 0}
        value={value}
        onChange={onChange}/>
    );

  }
}

export default InputNumberRange;
