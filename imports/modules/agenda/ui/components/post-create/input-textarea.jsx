import React from 'react';
import { Meteor } from 'meteor/meteor';

re = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

class InputTextarea extends React.Component {
  constructor() {
    super();

    this.isFree = true;

    this.onChange = this.onChange.bind(this);
    this.getURL = _.debounce(this.getURL, 2000);
  }

  getURL(url, component) {
    Meteor.call('post-get-short-url', url, function (err, res) {
      if (res) {
        let value = component.props.input.value.replace(re, res);
        component.props.input.onChange(value);
      }
    });
  }

  onChange(e) {
    let val = e.target.value;
    if (re.exec(val)) {
      this.getURL(re.exec(val)[0], this);
    }

    this.props.input.onChange(val);
  }

  render() {
    /*let reIbol=re=/#ibol/;
    if(!reIbol.exec(value) && component.isFree){
        value +=" #ibol";
    }*/
    let max = 140;
    if (this.isFree) {
      max = 134;
    }
    let count = this.props.input.value.length;
    return (
      <div className="form-input">
        <textarea onChange={this.onChange} value={this.props.input.value} placeholder={this.props.placeholder || ''}/>
        <div className={'counter ' + (count / max > 1 ? 'exceeded' : '')}>
          {count + '/' + max}
        </div>
      </div>
    );
  }
}

export default InputTextarea;
