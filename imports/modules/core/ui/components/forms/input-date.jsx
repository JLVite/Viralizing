import React from 'react';
import DatePicker from 'react-datepicker';

class InputDate extends React.Component {
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
      <DatePicker
        disabled={this.props.disabled}
        selected={value ? moment(new Date(value)) : null}
        onChange={this.change}
        minDate={this.props.minDate || moment('1900-01-01')}
        className="form-control"
        placeholderText={this.props.placeholder || ''}/>
    );
  }
}

export default InputDate;
