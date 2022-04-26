import React from 'react';
import InputGallery from '../../../../core/ui/components/forms/input-gallery';
import InputVideoGallery from '../../../../core/ui/components/forms/input-video-gallery';

class Gallery extends React.Component {
  render() {
    let getTranslationImages = (key) => {
      return 'Accounts.edit.tabs.gallery.images.' + key;
    };
    let getTranslationVideos = (key) => {
      return 'Accounts.edit.tabs.gallery.videos.' + key;
    };

    let { account } = this.props;
    return (
      <div className="content-padding-30">
        <div className="row">
          <div className="col-md-6">
            <InputGallery getTranslation={getTranslationImages}
                          readOnly={true}
                          input={{ value: account.gallery.images, onChange: () => {} }}/>
          </div>
          <div className="col-md-6">
            <InputVideoGallery getTranslation={getTranslationVideos}
                               readOnly={true}
                               input={{ value: account.gallery.videos, onChange: () => {} }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
