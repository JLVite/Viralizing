import React from 'react';

class InputRadio extends React.Component {
  render() {
    const { input: { value, onChange } } = this.props;
    return (
      <div value={value} onChange={onChange} className={this.props.className ? this.props.className : ''}>
        {this.props.options.map((c, i) => {
          let { label, value } = c;
          if (typeof c === 'string') {
            label = c;
            value = c;
          }
          return <span><input type="radio" name="gender" value={value}/>{label}</span>;
        })}
      </div>
    );
  }
}

export default InputRadio;
