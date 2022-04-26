import React from 'react';
import Dropzone from 'react-dropzone';
import { Translate, I18n } from 'react-redux-i18n';
import notie from 'notie';

const getTranslation = key => `Core.controls.inputFileUpload.${key}`;

class InputFileUpload extends React.Component {
  constructor() {
    super();

    this.state = {
      files: [],
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    const files = [];
    const component = this;
    acceptedFiles.forEach((file) => {
      const uploader = new Slingshot.Upload(component.props.uploader);

      uploader.send(file, (error, downloadUrl) => {
        if (error) {
          // Log service detailed response
          notie.alert(3, 'Error uploading image.', 3);
          console.error('Error uploading', error);
        } else {
          component.props.input.onChange(downloadUrl);
          if (component.props.callback) {
            component.props.callback(downloadUrl);
          }
        }
      });

      uploader.progressVal = 0;

      Tracker.autorun(() => {
        const progress = uploader.progress();
        if (progress) {
          const uploaderPosition = component.state.files.indexOf(uploader);
          if (uploaderPosition !== -1) {
            const newFiles = [...component.state.files];
            newFiles[uploaderPosition].progressVal = progress * 100;
            component.setState({
              files: newFiles,
            });
          }
        }
      });

      files.push(uploader);
    });

    this.setState({
      files,
    });
    notie.alert(1, I18n.t(getTranslation('success')), 2);
  }

  render() {
    const {
      multiple, maxSize, className, activeClassName, accept,
    } = this.props.settings;
    const { tabIndex, action } = this.props;
    let styles = action && (action.type === 'profile' || action && action.type === 'cover')? { height: '270px', width: '61%', margin: '0 auto' }: {};
    
    if(action && action.media)
    styles.display = 'none';
    else
    styles.position = (this.state.files.length > 0) && tabIndex === 'invites' || action && tabIndex === 'invites' && ( action.media && action.type === 'profile' || action.media && action.type === 'cover')?'relative': '';
    return (
      <div>
        <Dropzone
          style={styles}
          onDrop={this.onDrop}
          onDropRejected={() => notie.alert(3, I18n.t(getTranslation('rejected')), 3)}
          disableClick={!(tabIndex === 'information' || tabIndex === 'invites' || tabIndex === 'calendar' || tabIndex === 'gallery')}
          multiple={multiple || false}
          maxSize={maxSize || 15 * 1024 * 1024}
          className={className}
          activeClassName={activeClassName}
          accept={accept || 'image/png, image/jpeg, image/gif'}
        >
          {this.props.content || 'Drop zone'}
          {this.state.files.length > 0 ? (
            <div className="upload-progress">
              {this.state.files.map((file, i) => (
                <div className={`progress-bar ${(file.progressVal === 100) ? 'done' : ''}`} key={i}>
                  <div className="bar" style={{ width: `${file.progressVal}%` }} />
                </div>
              ))}
            </div>
          ) : null}
        </Dropzone>

      </div>
    );
  }
}

export default InputFileUpload;
