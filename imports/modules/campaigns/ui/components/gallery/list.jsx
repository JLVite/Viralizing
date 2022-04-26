import React from 'react';
import Lightbox from 'react-images';
import { Translate } from 'react-redux-i18n';

class CampaignGalleryList extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <li key={i}>
          <div className="widget widget-shadow">
            <figure className="widget-header overlay-hover overlay"
                    onClick={(e) => this.openLightbox(i, e)}>
              <img className="overlay-figure overlay-scale" src={obj.thumbnail} alt="..."/>
              <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                <a className="icon wb-search" href={obj.src}/>
              </figcaption>
            </figure>
            {obj.caption && <h4 className="widget-title">{obj.caption}</h4>}

          </div>
        </li>
      );
    });

    return (
      <ul className="blocks blocks-100 blocks-xlg-4 blocks-md-3 blocks-sm-2 margin-top-20">
        {gallery}
      </ul>
    );
  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.messages.list.' + key;
    };
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary pull-right" type="submit"><Translate
              value={getTranslation('form.newImage')}/></button>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body container-fluid">
            {this.renderGallery()}
          </div>
        </div>


        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}

export default CampaignGalleryList;
