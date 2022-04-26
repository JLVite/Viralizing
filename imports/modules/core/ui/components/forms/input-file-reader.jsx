import React from 'react';
import Dropzone from 'react-dropzone';
import notie from 'notie';

class InputFileReader extends React.Component {
  constructor() {
    super();

    this.state = {
      files: []
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    let files = [];
    let component = this;
    acceptedFiles.forEach(function (file) {

      window.demoFile = file;
      let reader = new FileReader();
      reader.onloadend = function () {
        component.props.input.onChange(reader.result);
        if (component.props.callback) {
          component.props.callback(reader.result);
        }
      };
      reader.readAsDataURL(file, 'UTF8');

    });

    this.setState({
      files: files
    });
  }

  render() {
    let { multiple, maxSize, className, activeClassName, accept } = this.props.settings;
    return (
      <div>
        <Dropzone onDrop={this.onDrop}
                  multiple={multiple || false}
                  maxSize={maxSize || 15 * 1024 * 1024}
                  className={className}
                  activeClassName={activeClassName}
                  accept={accept || 'image/png, image/jpeg, image/gif'}>
          {this.props.content || 'Drop zone'}
          {this.state.files.length > 0 ? <div className="upload-progress">
            {this.state.files.map((file, i) => (
              <div className={'progress-bar ' + ((file.progressVal === 100) ? 'done' : '')} key={i}>
                <div className="bar" style={{ width: file.progressVal + '%' }}/>
              </div>
            ))}
          </div> : null}
        </Dropzone>

      </div>
    );
  }
}

export default InputFileReader;
