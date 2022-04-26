import React from 'react';
import TagsInput from 'react-tagsinput';

class InputTags extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.input.value && !Array.isArray(this.props.input.value)) {
      this.props.input.onChange([]);
    }
  }

  handleChange(tags) {
    let validatedTags = tags;
    if (this.props.validation) {
      validatedTags = this.props.validation(tags);
    }
    this.props.input.onChange(validatedTags);
  }

  render() {
    return (
      <div>
        <TagsInput value={this.props.input.value || []}
                   onChange={this.handleChange}
                   inputProps={{ placeholder: this.props.placeholder || '' }}
                   disabled={this.props.disabled}/>
      </div>
    );

  }
}

export default InputTags;
