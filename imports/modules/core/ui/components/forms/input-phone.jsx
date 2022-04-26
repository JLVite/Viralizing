import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';

class InputPhone extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(phone) {
    this.props.input.onChange(phone);
  }

  render() {
    return (
      <div>
        <ReactPhoneInput defaultCountry={"mx"} value={this.props.input.value} onChange={this.handleChange}/>
      </div>
    );

  }
}

export default InputPhone;
