import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import GalleryItem from './gallery-item';

class SummaryGallery extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.summary.gallery.' + key;
    };
    let { images, videos } = this.props.gallery;
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="panel">
            <div className="panel-body slim">
              <h4><Translate value={getTranslation('images')}/></h4>
              {images.length > 0 && (
                <GalleryItem type="image"
                             elements={images[0].content}/>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel">
            <div className="panel-body slim">
              <h4><Translate value={getTranslation('video')}/></h4>
              {videos.length > 0 && (
                <GalleryItem type="video"
                             elements={videos[0].content}/>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryGallery;
