import React from 'react';
import { Translate } from 'react-redux-i18n';
import InputFileUpload from '../../../../../../../core/ui/components/forms/input-file-upload';

class ActionFileUpload extends React.Component {
  render() {
    const getTranslation = key => `Campaigns.edit.tabs.invites.edit.form.actions.fileUpload.${key}`;
    const dropZone = (
      <div className="drop-zone">
        <i className="icon fa-photo" aria-hidden="true" />
        <span>
          <Translate value={getTranslation('label')} />
        </span>
      </div>
    );
    const { updateActionValue, tabIndex, action } = this.props;
    return (
      <div>
          <div>
        <InputFileUpload
          action={action}
          tabIndex={tabIndex}
          content={dropZone}
          settings={{
            multiple: false, maxSize: 3 * 1024 * 1024, className: 'icon-drop-zone', activeClassName: 'icon-drop-zone-active', accept: 'image/png, image/jpeg, image/gif',
          }}
          uploader="campaign-image-upload"
          callback={() => {}}
          input={{ onChange: updateActionValue('media'), value: null }}
        />
          {action.media && (
              <div className="media" style={{backgroundImage:`url(${action.media})`,
                  backgroundRepeat:'no-repeat',
                  backgroundSize: '370px',
                  backgroundPosition: 'center',
                  height: '250px',
                  marginBottom: '10px'}}>
                  {/* <img src={action.media} alt=""/> */}
              </div>
          )}
          </div>
      </div>
    );
  }
}

export default ActionFileUpload;
