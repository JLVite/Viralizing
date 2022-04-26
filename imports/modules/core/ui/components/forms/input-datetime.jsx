import React from 'react';
import DateTime from 'react-datetime';

class InputDateTime extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(val) {
    this.props.input.onChange(moment(val).toDate());
  }

  render() {
    const { input: { value } } = this.props;
    return (
      <DateTime
        value={value ? moment(new Date(value)) : null}
        onChange={this.change}
        minDate={this.props.minDate || moment('1900-01-01')}

        inputProps={{
          placeholder: this.props.placeholder || '',
          className: 'form-control'
        }}
      />
    );
  }
}

export default InputDateTime;
