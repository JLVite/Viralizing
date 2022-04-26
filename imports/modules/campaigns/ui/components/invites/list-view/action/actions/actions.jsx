import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import PostTimeDate from '../../../../../../../agenda/ui/components/post-create/time-date';
import PostLocation from '../../../../../../../agenda/ui/components/post-create/location';
import InputFileUpload from '../../../../../../../core/ui/components/forms/input-file-upload';



class Actions extends React.Component {

  render() {
      const getTranslation = key => `Campaigns.edit.tabs.invites.edit.form.action.${key}`;
      const { type, tabIndex, action } = this.props;
      const hasImage = type === 'post' || type === '';
    return (
    <div className="action-form">
    {this.props.view === 'action' && (
    <div>
      {this.props.getView(type, action, this.props.updateActionValue, tabIndex)}
      <div className="row" style={{ position: 'inherit' }}>
        <div className="col-md-9" style={{ position: 'inherit' }}>
          <ul className="controls">
            {hasImage && (
            <li>
              <Field
                name="media"
                component={InputFileUpload}
                tabIndex={tabIndex}
                content={<i className="icon fa-photo" aria-hidden="true" />}
                settings={{
                  multiple: false, maxSize: 3 * 1024 * 1024, className: 'icon-drop-zone', activeClassName: 'icon-drop-zone-active', accept: 'image/png, image/jpeg, image/gif',
                }}
                uploader="campaign-image-upload"
                callback={() => {}}
                input={{ onChange: this.props.updateActionValue('media'), value: this.props.media || null }}
              />
            </li>
            )}
            <li>
              <i className="icon fa-calendar" aria-hidden="true" onClick={this.props.toggleTime} />
            </li>
            {type === 'post' || type === ''?
                <li>
                  <i className="icon fa-location-arrow" aria-hidden="true" onClick={this.props.toggleLocation} />
                </li>
                :
                null
            }
          </ul>
        </div>
        <div className="col-md-3">
          <a className="btn btn-default pull-right" onClick={this.props.saveOption}><Translate value={getTranslation('save')} /></a>
        </div>
      </div>
    </div>
    )}


    {this.props.view === 'date' && (
    <Field
      name="date"
      component={PostTimeDate}
      input={{ onChange: this.props.updateActionValue('date'), value: this.props.date || new Date() }}
      open={this.props.view}
      close={this.props.toggleTime}
    />
    )}
    {this.props.view === 'location' && (
    <Field
      name="location"
      component={PostLocation}
      input={{ onChange: a => this.props.updateActionValue('location')(a.location) }}
      open={this.props.view}
      close={this.props.toggleLocation}
    />
    )}

    </div>
    );
    }
}

 export default Actions;
