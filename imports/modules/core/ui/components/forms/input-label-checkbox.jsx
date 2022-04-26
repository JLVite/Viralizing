import React from 'react';
import uuid from 'uuid';

class InputLabelCheckbox extends React.Component {
  render() {
    let { value, onChange } = this.props.input;
    let { iconChecked, iconUnchecked, className } = this.props;
    let inputID = uuid.v4();
    return (
      <label className={'label-checkbox ' + (value ? 'checked' : '') + ' ' + (className ? className : '')}
             htmlFor={inputID}>
        <input type="checkbox" id={inputID} value={value} onChange={onChange}/>
        <i className={value ? iconChecked : iconUnchecked}/>
        <div className="label">
          {this.props.label || ''}
        </div>
      </label>
    );

  }
}

export default InputLabelCheckbox;
