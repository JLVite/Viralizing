import React from 'react';

class InputSelect extends React.Component {
  render() {
    const { input: { value, onChange } } = this.props;
    return (
      <select value={value} onChange={onChange} className={this.props.className ? this.props.className : ''} disabled={this.props.disabled}>
        {this.props.options.map((c, i) => {
          let { label, value } = c;
          if (typeof c === 'string') {
            label = c;
            value = c;
          }
          return <option value={value} key={i}>{label}</option>;
        })}
      </select>
    );
  }
}

export default InputSelect;
