import React from 'react';
import InputGallery from '../../../core/ui/components/forms/input-gallery';
import InputVideoGallery from '../../../core/ui/components/forms/input-video-gallery';
import { Field } from 'redux-form';

class Gallery extends React.Component {
  render() {
    let getTranslationImages = (key) => {
      return 'Accounts.edit.tabs.gallery.images.' + key;
    };
    let getTranslationVideos = (key) => {
      return 'Accounts.edit.tabs.gallery.videos.' + key;
    };
    const {refetch, userId, tabIndex} = this.props;
    return (
      <div className="content-padding-30">
        <div className="row">
          <div className="col-md-6">
            <Field component={InputGallery} tabIndex={tabIndex} account={this.props.account} value="gallery" getTranslation={getTranslationImages}
                   name="images"
                   uploader="account-image-upload" 
                   setTab={this.props.setTab}
                   refetch={this.props.refetch}/>
          </div>
          <div className="col-md-6">
            <Field component={InputVideoGallery} account={this.props.account} value="gallery" getTranslation={getTranslationVideos} 
                    name="videos"
                    setTab={this.props.setTab}
                    refetch={this.props.refetch}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
