import React from 'react';
import NumberFormat from 'react-number-format';

class InputMaskedNumber extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number) {
    const { input: { onChange } } = this.props;
    console.log('VALUE', number);
    let value = number.floatValue;
    onChange(value);
  }

  render() {
    const { input: { value }, className } = this.props;
    return (
      <div>
        <NumberFormat value={value}
                      className={className || ''}
                      onValueChange={this.handleChange}
                      thousandSeparator={true}/>
      </div>
    );

  }
}

export default InputMaskedNumber;
