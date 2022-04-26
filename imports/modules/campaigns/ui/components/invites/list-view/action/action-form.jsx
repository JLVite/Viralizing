import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, NavDropdown } from 'react-bootstrap';
import Actions from './actions/actions';
import ActionPost from "./actions/post";
import ActionFileUpload from "./actions/file-upload";
import ActionTimeWithout from "./actions/time-without";
import ActionShare from "./actions/share";
import notie from "notie";

class DropdownControl extends React.Component {

    handleSelect=(key) => {
    const { input: { onChange }, updateActionValue, clean } = this.props;
    return () => {
      onChange(key);
      updateActionValue('type')(key);
      clean();
    };
  }

  render() {
    const { input: { value }, getTranslation } = this.props;

    return (
      <NavDropdown id="dropdown" title={value ? I18n.t(getTranslation(`form.action.values.${value}`)) : I18n.t(getTranslation('form.action.label'))} name="dropdown" className="dropdown-modal pull-left">
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('post')}>
          <Translate value={getTranslation('form.action.values.post')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('profile')}>
          <Translate value={getTranslation('form.action.values.profile')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('cover')}>
          <Translate value={getTranslation('form.action.values.cover')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('hourNoPost')}>
          <Translate value={getTranslation('form.action.values.hourNoPost')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('dayNoPost')}>
          <Translate value={getTranslation('form.action.values.dayNoPost')} />
        </MenuItem>
        <MenuItem className="dropdown-item" onSelect={this.handleSelect('share')}>
          <Translate value={getTranslation('form.action.values.share')} />
        </MenuItem>
      </NavDropdown>
    );
  }
}


class ActionForm extends React.Component {
    constructor() {
        super();

        this.state = {
            view: 'action',
            action: {
                type: '',
                message: '',
                media: null,
                date: null,
                quantity: null,
                location: null,
            },
        };

        this.toggleTime = this.toggleTime.bind(this);
        this.toggleLocation = this.toggleLocation.bind(this);
        this.updateActionValue = this.updateActionValue.bind(this);
        this.saveOption = this.saveOption.bind(this);
        this.clean = this.clean.bind(this);
    }

    clean(){
        this.setState({action: {
                ...this.state.action,
                media: null,
            },},)
    }

    updateActionValue(key) {
        const component = this;
        return function (e) {
            let val = e;
            if (e.target) {
                val = e.target.value;
            }
            const newState = { ...component.state };
            newState.action[key] = val;

            component.setState(newState);
        };
    }

    toggleTime() {
        const nextView = this.state.view === 'action' ? 'date' : 'action';

        // console.log("TOGGLE_TIME",this.state.view,"=>",nextView);

        const component = this;
        setTimeout(() => {
            component.setState({
                view: nextView,
            });
        }, 50);
    }

    toggleLocation() {
        const nextView = this.state.view === 'action' ? 'location' : 'action';

        // console.log("TOGGLE_TIME",this.state.view,"=>",nextView);

        const component = this;
        setTimeout(() => {
            component.setState({
                view: nextView,
            });
        }, 50);
    }

    getView(type, action, updateActionValue, tabIndex) {
        switch (type) {
            case '':
                return <ActionPost updateActionValue={updateActionValue} action={action} />;
            case 'post':
                return <ActionPost updateActionValue={updateActionValue} action={action} />;
            case 'profile':
                return <ActionFileUpload tabIndex={tabIndex} updateActionValue={updateActionValue} action={action} />;
            case 'cover':
                return <ActionFileUpload tabIndex={tabIndex} updateActionValue={updateActionValue} action={action} />;
            case 'hourNoPost':
                return <ActionTimeWithout updateActionValue={updateActionValue} action={action} type={type} />;
            case 'dayNoPost':
                return <ActionTimeWithout updateActionValue={updateActionValue} action={action} type={type} />;
            case 'share':
                return <ActionShare updateActionValue={updateActionValue} action={action} />;
        }
    }

    saveOption() {
        const getTranslation = key => `Campaigns.edit.tabs.invites.edit.form.action.${key}`;
        const { location, type, message, media, date, quantity } = this.state.action;
        if(!this.state.action.type){
            notie.alert(3, I18n.t(getTranslation('required.type')), 3);
            return null;
        }
        if(!this.state.action.date){
            notie.alert(3, I18n.t(getTranslation('required.date')), 3);
            return null;
        }

        switch(type){
            case 'post':
                this.props.addInviteOption(this.state.action);
                break;
            case 'profile':
                this.props.addInviteOption({media,type,date});
                break;
            case 'cover':
                this.props.addInviteOption({media,type,date});
                break;
            case 'hourNoPost':
                this.props.addInviteOption({message,type,date});
                break;
            case 'dayNoPost':
                this.props.addInviteOption({message,type,date});
                break;

        }

        this.setState({
            action: {
                location: '',
                type,
                message: '',
                media: null,
                date: null,
                quantity: null,
            },
        });

    }


  render() {
    const getTranslation = key => `Campaigns.edit.tabs.invites.edit.${key}`;
    const {
      currentInvite, updateInviteValue, addInviteOption, tabIndex, refetch
    } = this.props;
    const disabled = currentInvite.options.length > 0;
    return (
      <div className="panel">
        <div className="panel-body container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <Field
                    name="type"
                    component={DropdownControl}
                    clean={this.clean}
                    refetch={refetch}
                    getTranslation={getTranslation}
                    updateActionValue={this.updateActionValue}
                    clean={this.clean}
                    disabled={disabled} />
              </div>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <div className="checkbox-custom checkbox-primary pull-xs-right margin-right-20">
                <input
                  type="checkbox"
                  id="inviteAll"
                  onChange={e => updateInviteValue('useHashtag')(e.target.checked)}
                  checked={currentInvite.useHashtag}
                />
                <label htmlFor="inviteAll"><Translate value={getTranslation('form.useHashtag')} /></label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Actions
                  tabIndex={tabIndex}
                  refetch={refetch}
                  type={this.state.action.type}
                  addInviteOption={addInviteOption}
                  getView={this.getView}
                  updateActionValue={this.updateActionValue}
                  toggleTime={this.toggleTime}
                  toggleLocation={this.toggleLocation}
                  saveOption={this.saveOption}
                  media={this.state.action.media}
                  date={this.state.action.date}
                  view={this.state.view}
                  action={this.state.action}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default reduxForm({
  form: 'invite-action',
})(ActionForm);

