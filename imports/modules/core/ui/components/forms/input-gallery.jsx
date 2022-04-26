import React from 'react';
import Lightbox from 'react-images';
import { I18n, Translate } from 'react-redux-i18n';
import swal from 'sweetalert2';
import {
  Button, ButtonGroup, DropdownButton, MenuItem, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import ListEmpty from '../list-empty';
import InputFileUpload from './input-file-upload';

const crateTooltip = message => <Tooltip id={(Number(new Date()) * Math.random() * 1000)}>{message}</Tooltip>;

class InputGallery extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      currentAlbum: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
    this.updateCurrentAlbum = this.updateCurrentAlbum.bind(this);
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
    const { getTranslation, readOnly, input: { value } } = this.props;
    const albums = value;
    const { currentAlbum } = this.state;
    const album = albums[currentAlbum];

    if (!album || album.content.length === 0) {
      return (
        <ListEmpty
          message={<Translate value={getTranslation('empty.message')} />}
          button={false}
          callback={this.openModal}
        />
      );
    }

    const gallery = album.content.map((image, i) => (
      <li key={i}>
        <div className="widget widget-shadow">
          <figure className="widget-header overlay-hover overlay">
            <div
              className="overlay-figure overlay-scale"
              style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
              }}
              alt="..."
            />
            <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
              <a className="icon wb-search" href={image} onClick={e => this.openLightbox(i, e)} />
              {!readOnly
                && <a className="icon wb-trash" href={image} onClick={e => this.deleteImage(i, e)} />}
            </figcaption>
          </figure>
        </div>
      </li>
    ));

    return (
      <ul className="blocks blocks-100 blocks-xlg-3 blocks-md-3 blocks-sm-3 margin-top-20">
        {gallery}
      </ul>
    );
  }

  deleteImage(index, event) {
    event.preventDefault();
    const { getTranslation, input: { value, onChange } } = this.props;
    const albums = [...value];
    const { currentAlbum } = this.state;
    swal({
      title: I18n.t(getTranslation('delete.title')),
      text: I18n.t(getTranslation('delete.title')),
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: I18n.t(getTranslation('delete.cancel')),
      confirmButtonText: I18n.t(getTranslation('delete.confirm')),
    }).then(() => {
      albums[currentAlbum] = { ...albums[currentAlbum] };
      albums[currentAlbum].content = albums[currentAlbum].content.filter((a, i) => i !== index);
      onChange(albums);
    });
  }

  addImage(image) {
    const { input: { value, onChange } } = this.props;
    const { currentAlbum } = this.state;
    const albums = [...value];

    albums[currentAlbum] = { ...albums[currentAlbum] };
    albums[currentAlbum].content = [...albums[currentAlbum].content, image];
    onChange(albums);
  }

  addAlbum() {
    const { getTranslation, input: { value, onChange } } = this.props;
    const albums = [...value];
    swal({
      title: I18n.t(getTranslation('newAlbum.title')),
      input: 'text',
      showCancelButton: true,
      confirmButtonText: I18n.t(getTranslation('newAlbum.confirm')),
      cancelButtonText: I18n.t(getTranslation('newAlbum.cancel')),
    }).then((name) => {
      const newAlbum = {
        name,
        content: [],
      };
      onChange([...albums, newAlbum]);
    });
  }

  deleteAlbum() {
    event.preventDefault();
    const { getTranslation, input: { value, onChange } } = this.props;
    const albums = [...value];
    const { currentAlbum } = this.state;
    const component = this;
    swal({
      title: I18n.t(getTranslation('delete.title')),
      text: I18n.t(getTranslation('delete.title')),
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: I18n.t(getTranslation('delete.cancel')),
      confirmButtonText: I18n.t(getTranslation('delete.confirm')),
    }).then(() => {
      albums.splice(currentAlbum, 1);
      if (currentAlbum !== 0) {
        component.setState({ currentAlbum: (component.state.currentAlbum - 1) }, () => {
          onChange(albums);

          // component.props.refetch();
          component.props.setTab('gallery');
        });
      } else {
        onChange(albums);

        // component.props.refetch();
        component.props.setTab('gallery');
      }
    });
  }

  updateCurrentAlbum(currentAlbum) {
    const component = this;
    return function () {
      component.setState({ currentAlbum });
    };
  }

  render() {
    const { getTranslation, readOnly, input: { value } } = this.props;
    const albums = value;
    const { lightboxIsOpen, currentImage, currentAlbum } = this.state;
    const album = albums[currentAlbum];
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4><Translate value={getTranslation('title')} /></h4>
          </div>
          {!readOnly && (
            <div className="col-md-8">
              <ButtonGroup bsClass="pull-right">
                <OverlayTrigger
                  placement="top"
                  overlay={crateTooltip(<Translate value={getTranslation('list.newImage')} />)}
                >
                  <Button bsStyle="primary">
                    <InputFileUpload
                      tabIndex={this.props.tabIndex}
                      content={<i className="fa fa-cloud-upload" aria-hidden="true" />}
                      uploader={this.props.uploader}
                      input={{ onChange: this.addImage }}
                      settings={{
                        multiple: false,
                        maxSize: 3 * 1024 * 1024,
                        className: 'button-drop-zone pull-right',
                        activeClassName: 'button-drop-zone-active',
                        accept: 'image/png, image/jpeg, image/gif',
                      }}
                    />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="top"
                  overlay={crateTooltip(<Translate
                    value={getTranslation('delete.albumHelper')}
                  />)}
                >
                  <Button bsStyle="primary" onClick={this.deleteAlbum}>
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </Button>
                </OverlayTrigger>
                {albums[currentAlbum] ? (
                  <DropdownButton
                    bsStyle="primary"
                    pullRight
                    title={albums[currentAlbum] ? albums[currentAlbum].name : (
                      <Translate
                        value={getTranslation('list.newAlbum')}
                      />
                    )}
                    id="bg-nested-dropdown"
                  >
                    {albums.map((a, i) => (
                      <MenuItem
                        key={i}
                        eventKey={i}
                        className="dropdown-item"
                        onClick={this.updateCurrentAlbum(i)}
                      >
                        {a.name}

                      </MenuItem>
                    ))}
                    <MenuItem eventKey="new" className="dropdown-item" onClick={this.addAlbum}>
                      <i
                        className="fa fa-plus-circle"
                        style={{ marginRight: 5 }}
                        aria-hidden="true"
                      />
                      <Translate
                        value={getTranslation('list.newAlbum')}
                      />
                    </MenuItem>

                  </DropdownButton>
                ) : (
                  <Button bsStyle="primary" onClick={this.addAlbum}>
                    <i
                      className="fa fa-plus-circle"
                      style={{ marginRight: 5 }}
                      aria-hidden="true"
                    />
                    <Translate
                      value={getTranslation('list.newAlbum')}
                    />
                  </Button>
                )}

              </ButtonGroup>
            </div>
          )}
        </div>
        <div className="spacer-20" />
        <div className="panel">
          <div className="panel-body container-fluid">
            {this.renderGallery()}
          </div>
        </div>

        {album && (
          <Lightbox
            currentImage={currentImage}
            images={album.content.map(i => ({ src: i }))}
            isOpen={lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
          />
        )}
      </div>
    );
  }
}

export default InputGallery;
