import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Translate, I18n } from 'react-redux-i18n';
import { Field, reduxForm } from 'redux-form';
import InputFileUpload from '../../../../core/ui/components/forms/input-file-upload';


class PostCreateControls extends React.Component {
  tooltipContent(content) {
    return <Tooltip id="tooltip_content">{content}</Tooltip>;
  }


  render() {
    const getTranslation = key => `Agenda.publish.modal.${key}`;
    const {
      openUIModal, setMedia, removeAll, handleSubmit, tabIndex,
    } = this.props;
    const {
      media, date, location, preview, discard, draft,
    } = this.props.settings;

    return (
      <ul className="controls">
        {media && (
          <li>
            <OverlayTrigger
              placement="top"
              overlay={this.tooltipContent(<Translate
                value={getTranslation('write.controls.picture')}
              />)}
            >
              <Field
                id="photoInput"
                name="media"
                content={<i className="icon fa-photo" aria-hidden="true" />}
                settings={{
                  multiple: false,
                  maxSize: 3 * 1024 * 1024,
                  className: 'icon-drop-zone',
                  activeClassName: 'icon-drop-zone-active',
                  accept: 'image/png, image/jpeg, image/gif',
                }}
                uploader="campaign-image-upload"
                component={InputFileUpload}
                callback={setMedia}
                tabIndex={tabIndex}
              />
            </OverlayTrigger>
          </li>
        )}
        {date && (
          <li onClick={openUIModal('timeDate').bind(this)}>
            <OverlayTrigger
              placement="top"
              overlay={this.tooltipContent(<Translate value={getTranslation('write.controls.time')} />)}
            >
              <button type="button" style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }}>
                <i className="icon fa-calendar" aria-hidden="true" />
              </button>
            </OverlayTrigger>
          </li>
        )}
        {location && (
          <li onClick={openUIModal('location').bind(this)}>
            <OverlayTrigger
              placement="top"
              overlay={this.tooltipContent(<Translate
                value={getTranslation('write.controls.location')}
              />)}
            >
              <button type="button" style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }}>
                <i className="icon fa-location-arrow" aria-hidden="true" />
              </button>
            </OverlayTrigger>
          </li>
        )}
        {preview && (
          <li onClick={openUIModal('preview').bind(this)}>
            <OverlayTrigger
              placement="top"
              overlay={this.tooltipContent(<Translate
                value={getTranslation('write.controls.preview')}
              />)}
            >
              <button type="button" style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }}>
                <i className="icon fa-eye" aria-hidden="true" />
              </button>
            </OverlayTrigger>
          </li>
        )}
        {discard && (
          <li>
            <OverlayTrigger
              placement="top"
              overlay={this.tooltipContent(<Translate
                value={getTranslation('write.controls.discard')}
              />)}
            >
              <button type="button" style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }} onClick={removeAll}>
                <i className="icon fa-trash-o" aria-hidden="true" />
              </button>
            </OverlayTrigger>
          </li>
        )}
        {draft && (
          <li>
            <OverlayTrigger
              placement="top"
              overlay={this.tooltipContent(<Translate value={getTranslation('write.controls.draft')} />)}
              onClick={handleSubmit(data => this.props.savePosts(data, 'draft'))}
            >
              <button type="button" style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }}>
                <i className="icon fa-save" aria-hidden="true" />
              </button>
            </OverlayTrigger>
          </li>
        )}
      </ul>
    );
  }
}

export default PostCreateControls;
