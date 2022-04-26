import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

class InputGeolocation extends Component {
  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */

  onSuggestSelect(suggest, onChange) {
    const val = {
      label: suggest.label,
      location: suggest.location,
    };

    this.props.input.onChange(val);
  }

  render() {
    const { input: { value, onChange } } = this.props;

    const geoLabel = this.props.input.value ? this.props.input.value.location : 'Enter Location';
    return (
      <div>
        <Geosuggest
          initialValue={value ? value.location : null}
          placeholder={geoLabel}
          types={this.props.types}
          onSuggestSelect={val => onChange(val)}
        />
      </div>
    );
  }
}

export default InputGeolocation;

// TO-DO RELOAD LOCATIONS ON EVENTS
