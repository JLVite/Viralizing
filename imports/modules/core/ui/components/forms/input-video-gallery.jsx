import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import ListEmpty from '../list-empty';
import swal from 'sweetalert2';
import ReactPlayer from 'react-player';
import { Button, ButtonGroup, DropdownButton, MenuItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

const crateTooltip = (message) => {
  return <Tooltip id={(Number(new Date()) * Math.random() * 1000)}>{message}</Tooltip>;
};

class InputVideoGallery extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentVideo: null,
      currentAlbum: 0
    };

    this.addVideo = this.addVideo.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
    this.togglePlayVideo = this.togglePlayVideo.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
    this.updateCurrentAlbum = this.updateCurrentAlbum.bind(this);
  }

  renderGallery() {
    const { getTranslation, readOnly, input: { value } } = this.props;
    const albums = value;
    const { currentAlbum, currentVideo } = this.state;
    const album = albums[currentAlbum];

    if (!album || album.content.length === 0) return (
      <ListEmpty message={<Translate value={getTranslation('empty.message')}/>} button={false}
                 callback={this.openModal}/>
    );

    const gallery = album.content.map((video, i) => {
      return (
        <li key={i}>
          <div className="widget widget-shadow">
            <figure className="widget-header overlay-hover overlay">
              <ReactPlayer url={video} controls={false} playing={currentVideo === i}/>
              <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                <a className={'icon ' + (currentVideo === i ? 'fa-pause' : 'fa-play')}
                   onClick={(e) => this.togglePlayVideo(i, e)}/>
                {readOnly && <a className="icon wb-trash" onClick={(e) => this.deleteVideo(i, e)}/>}
              </figcaption>
            </figure>
          </div>
        </li>
      );
    });

    return (
      <ul className="blocks blocks-100 blocks-xlg-3 blocks-md-3 blocks-sm-3 margin-top-20">
        {gallery}
      </ul>
    );
  }

  togglePlayVideo(index, event) {
    event.preventDefault();
    let { currentVideo } = this.state;
    if (typeof currentVideo === 'number') {
      index = null;
    }
    this.setState({ currentVideo: index });
  }

  deleteVideo(index, event) {
    event.preventDefault();
    const { getTranslation, input: { value, onChange } } = this.props;
    const albums = [...value];
    const { currentAlbum } = this.state;
    let component = this;
    swal({
      title: I18n.t(getTranslation('delete.title')),
      text: I18n.t(getTranslation('delete.title')),
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: I18n.t(getTranslation('delete.cancel')),
      confirmButtonText: I18n.t(getTranslation('delete.confirm'))
    }).then(function () {
      component.setState({ currentVideo: null }, function () {
        albums[currentAlbum] = { ...albums[currentAlbum] };
        albums[currentAlbum].content = albums[currentAlbum].content.filter((a, i) => i !== index);
        onChange(albums);
      });
    });
  }

  addVideo() {
    let component = this;
    swal({
      title: I18n.t(component.props.getTranslation('new.title')),
      input: 'text',
      showCancelButton: true,
      confirmButtonText: I18n.t(component.props.getTranslation('new.confirm')),
      cancelButtonText: I18n.t(component.props.getTranslation('new.cancel')),
    }).then(function (video) {
      const { input: { value, onChange } } = component.props;
      const { currentAlbum } = component.state;
      const albums = [...value];

      albums[currentAlbum] = { ...albums[currentAlbum] };
      albums[currentAlbum].content = [...albums[currentAlbum].content, video];
      onChange(albums);
    });
  }

  addAlbum() {
    const { getTranslation, input: { value, onChange } } = this.props;
    const albums = [...value];
    let component = this;
    swal({
      title: I18n.t(getTranslation('newAlbum.title')),
      input: 'text',
      showCancelButton: true,
      confirmButtonText: I18n.t(getTranslation('newAlbum.confirm')),
      cancelButtonText: I18n.t(getTranslation('newAlbum.cancel')),
    }).then(function (name) {
      let newAlbum = {
        name,
        content: []
      };
      component.setState({ currentVideo: null }, function () {
        onChange([...albums, newAlbum]);
      });
    });

  }

  deleteAlbum() {
    event.preventDefault();
    const { router, userId, getTranslation, input: { value, onChange } } = this.props;
    const albums = [...value];
    const { currentAlbum } = this.state;
    let component = this;
    swal({
      title: I18n.t(getTranslation('delete.title')),
      text: I18n.t(getTranslation('delete.title')),
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: I18n.t(getTranslation('delete.cancel')),
      confirmButtonText: I18n.t(getTranslation('delete.confirm'))
    }).then(function () {
      albums.splice(currentAlbum, 1);
      if(currentAlbum !== 0){
        component.setState({ currentAlbum: (component.state.currentAlbum - 1) }, function () {
          onChange(albums);
          // component.props.refetch();
          component.props.setTab('gallery')
        });DropdownButton
      }else{
        onChange(albums);
        // component.props.refetch();
        component.props.setTab('gallery')
      }
    });
  }

  updateCurrentAlbum(currentAlbum) {
    let component = this;
    return function () {
      component.setState({ currentAlbum, currentVideo: null });
    };
  }

  render() {
    const { getTranslation, readOnly, input: { value } } = this.props;
    const albums = value;
    const { currentAlbum } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4><Translate value={getTranslation('title')}/></h4>
          </div>
          {!readOnly && (
            <div className="col-md-8">
              <ButtonGroup bsClass="pull-right">
                <OverlayTrigger placement="top"
                                overlay={crateTooltip(<Translate value={getTranslation('list.newVideo')}/>)}>
                  <Button bsStyle="primary" onClick={this.addVideo}>
                    <i className="fa fa-cloud-upload" aria-hidden="true"/>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={crateTooltip(<Translate
                  value={getTranslation('delete.albumHelper')}/>)}>
                  <Button bsStyle="primary" onClick={this.deleteAlbum}>
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                  </Button>
                </OverlayTrigger>
                {albums[currentAlbum] ? (
                  <DropdownButton pullRight bsStyle="primary" title={albums[currentAlbum].name}
                                  id="bg-nested-dropdown">
                    {albums.map((a, i) => (
                      <MenuItem key={i}
                                eventKey={i}
                                className="dropdown-item"
                                onClick={this.updateCurrentAlbum(i)}>{a.name}</MenuItem>
                    ))}
                    <MenuItem eventKey={'new'} className="dropdown-item" onClick={this.addAlbum}>
                      <i className="fa fa-plus-circle"
                         style={{ marginRight: 5 }}
                         aria-hidden="true"/>
                      <Translate value={getTranslation('newAlbum.confirm')}/>
                    </MenuItem>

                  </DropdownButton>
                ) : (
                  <Button bsStyle="primary" onClick={this.addAlbum}>
                    <i className="fa fa-plus-circle"
                       style={{ marginRight: 5 }}
                       aria-hidden="true"/>
                    <Translate
                      value={getTranslation('newAlbum.confirm')}/>
                  </Button>
                )}

              </ButtonGroup>
            </div>
          )}
        </div>
        <div className="spacer-20"/>
        <div className="panel">
          <div className="panel-body container-fluid">
            {this.renderGallery()}
          </div>
        </div>
      </div>
    );
  }
}

export default InputVideoGallery;
