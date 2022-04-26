import React from 'react';
import uuidv4 from'uuid/v4';

class InputSelect extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.input.onChange(e.target.checked);
  }

  render() {
    const { input: { value }, label, readOnly } = this.props;
    const id = uuidv4();
    return (
      <div className="checkbox-custom checkbox-primary">
        <input type="checkbox"
               disabled={!!readOnly}
               id={id}
               onChange={this.change}
               value={value || ''}
               checked={value}/>
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default InputSelect;
