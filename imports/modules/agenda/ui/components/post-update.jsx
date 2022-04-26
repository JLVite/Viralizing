import React from 'react';
import { connect } from 'react-redux';
import { Translate, I18n } from 'react-redux-i18n';
import { Field, reduxForm, change } from 'redux-form';
import notie from 'notie';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import PostTimeDate from './post-create/time-date';
import PostUpdatePreview from './post-update/preview';
import PostLocation from './post-create/location';
import PostCreateControls from './post-create/controls';

import store from '../../../../store';
import InputTextarea from './post-create/input-textarea';

class DropdownControl extends React.Component {
  handleSelect = (key) => {
    const { input: { onChange } } = this.props;
    return () => {
      onChange(key);
    };
  };

  render() {
    const { input: { value } } = this.props;
    const getTranslation = key => `Agenda.publish.modal.${key}`;

    return (
      <NavDropdown
        id="dropdown"
        title={value ? I18n.t(getTranslation(`write.controls.items.${value}`)) : I18n.t(getTranslation('write.controls.items.type'))}
        name="dropdown"
        className="dropdown-modal pull-left"
      >
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('post')}>
          <Translate value={getTranslation('write.controls.items.post')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('profile')}>
          <Translate value={getTranslation('write.controls.items.profile')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('cover')}>
          <Translate value={getTranslation('write.controls.items.cover')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('share')}>
          <Translate value={getTranslation('write.controls.items.share')} />
        </MenuItem>
      </NavDropdown>
    );
  }
}

class PostUpdate extends React.Component {
  constructor() {
    super();

    this.state = {
      ui: {
        timeDate: false,
        preview: false,
        location: false,
      },
      message: null,
      media: null,
      type: null,
      date: null,
      location: null,
    };
    this.store = store;
    this.openUIModal = this.openUIModal.bind(this);
    this.closeUIModal = this.closeUIModal.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.setImage = this.setImage.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.watchUser = this.watchUser.bind(this);
    this.loadFormData = this.loadFormData.bind(this);
  }

  handleTags(tags) {
    const validatedTags = tags.map(tag => (tag.split('#').length > 1 ? tag : `#${tag}`));

    if (validatedTags.indexOf('#ibol') === -1) {
      validatedTags.push('#ibol');
    }
    return validatedTags;
  }

  setImage(media) {
    this.setState({ media });
  }

  openUIModal(modal) {
    const component = this;
    return function () {
      const newState = component.state;
      newState.ui[modal] = true;
      component.setState(newState);
    };
  }

  closeUIModal(modal) {
    return function () {
      const newState = this.state;
      newState.ui[modal] = false;
      this.setState(newState);
    };
  }

  removeAll() {
    const getTranslation = key => `Agenda.publish.modal.${key}`;
    const { refetch } = this.props;
    const time = new Date();
    this.props.dispatch(change('post-update', 'message', ''));
    this.props.dispatch(change('post-update', 'media', ''));
    this.props.dispatch(change('post-update', 'date', time));
    this.props.dispatch(change('post-update', 'location', ''));
    this.props.dispatch(change('post-update', 'type', I18n.t(getTranslation('write.controls.items.type'))));
    this.setState({
      message: null,
      media: null,
      type: null,
      date: time,
      location: null,
    });
    refetch();
    console.log('NEW-DATE',this.state.time)
  }


  componentWillMount() {
    Meteor.call('request-event', this.props.event._id, (err, res) => {
      this.setState({
        message: res.data.message,
        media: res.data.media,
        type: res.type,
        date: res.date,
        location: res.data.location,
      }, () => this.loadFormData());
    });
  }

  loadFormData() {
    const {
      media, message, type, date, location,
    } = this.state;
    const { initialize } = this.props;

    initialize({
      media,
      message,
      type,
      date,
      location,
    });
  }

  componentDidMount() {
    this.watchUser();
  }

  watchUser() {
    Tracker.autorun(() => {
      Meteor.call('request-event', this.props.event._id, (err, res) => this.setState(res.data, () => this.loadFormData()));
    });
  }

  render() {
    const {
      handleSubmit, pristine, reset, submitting, controls, data, refetch, update, event, tabIndex,
    } = this.props;
    const getTranslation = key => `Agenda.publish.modal.${key}`;

    // let values= this.props.form.values;
    console.log('MOUNTING-STATE',this.state.ui)
    return (
      <form className="post-create" onSubmit={handleSubmit(data => this.props.savePosts(data, 'scheduled'))}>
        <div className="row" style={{ display: 'flex', margin: '0' }}>
          <Field name="type" component={DropdownControl} className="col-md-12" />
        </div>
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body container-fluid padding-20">
              <div className="post-write">
                <div className={`image ${this.state.media ? 'on' : ''}`}>
                  {this.state.media
                  && <img src={this.state.media} style={{ height: '100px', width: '100%' }} alt="" />}
                </div>
                <Field
                  component={InputTextarea}
                  name="message"
                  placeholder={I18n.t(getTranslation('write.placeholder'))}
                />
                <div className="row">
                  <div className="col-md-8">
                    <PostCreateControls
                      tabIndex={tabIndex}
                      removeAll={this.removeAll}
                      setImage={this.setImage}
                      openUIModal={this.openUIModal}
                      settings={controls}
                      savePosts={this.props.savePosts}
                      handleSubmit={handleSubmit}
                    />


                  </div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary pull-right">
                      <Translate value={getTranslation('write.controls.schedule')} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Field
          name="date"
          component={PostTimeDate}
          open={this.state.ui.timeDate}
          event={event}
          close={this.closeUIModal('timeDate').bind(this)}
          store={this.store}
        />

        <Field
          name="location"
          component={PostLocation}
          open={this.state.ui.location}
          location={this.state.location}
          close={this.closeUIModal('location').bind(this)}
          store={this.store}
        />

        <PostUpdatePreview
          formName="postUpdate"
          open={this.state.ui.preview}
          closeButton={<Translate value={getTranslation('write.close')} />}
          close={this.closeUIModal('preview').bind(this)}
        />
      </form>
    );
  }
}

PostUpdate = reduxForm({
  form: 'post-update',
  keepDirtyOnReinitialize: true,
})(PostUpdate);

export default PostUpdate;
