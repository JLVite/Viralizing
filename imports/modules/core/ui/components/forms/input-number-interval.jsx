import React from 'react';

class InputNumberIntervat extends React.Component {
  constructor() {
    super();

    this.state = {
      min: 0,
      max: 40
    };

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(key) {
    let component = this;
    return function (e) {
      let val = e.target.value;
      let newState = { ...component.state };
      newState[key] = Number(val);
      component.setState(newState);
      component.props.input.onChange(newState);
    };
  }

  componentWillMount() {
    this.setState(this.props.input.value);
  }

  render() {
    let { value, onChange } = this.props;
    return (
      <div className="row">
        <div className="col-xs-6">
          <input className="form-control" type="text" onChange={this.updateInput('min')} value={this.state.min}/>
        </div>
        <div className="col-xs-6">
          <input className="form-control" type="text" onChange={this.updateInput('max')} value={this.state.max}/>
        </div>
      </div>
    );

  }
}

export default InputNumberIntervat;
