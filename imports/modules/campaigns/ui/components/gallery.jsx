import React from 'react';
import { Field } from 'redux-form';
import InputGallery from '../../../core/ui/components/forms/input-gallery';
import InputVideoGallery from '../../../core/ui/components/forms/input-video-gallery';


class Gallery extends React.Component {
  render() {
    const getTranslationImages = key => `Campaigns.edit.tabs.gallery.images.${key}`;
    const getTranslationVideos = key => `Campaigns.edit.tabs.gallery.videos.${key}`;

    return (
      <div className="content-padding-30">
        <div className="row">
          <div className="col-md-6">
            <Field
              component={InputGallery}
              tabIndex={this.props.tabIndex}
              value="gallery"
              getTranslation={getTranslationImages}
              name="images"
              uploader="campaign-image-upload"
            />
          </div>
          <div className="col-md-6">
            <Field component={InputVideoGallery} value="gallery" getTranslation={getTranslationVideos} name="videos" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
