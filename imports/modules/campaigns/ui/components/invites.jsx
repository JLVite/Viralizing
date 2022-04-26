import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import notie from 'notie';
import CampaignInvitesHeader from './invites/header';
import CampaignListView from './invites/list-view/container';
import CampaignTableView from './invites/table-view/container';
import ListEmpty from '../../../core/ui/components/list-empty';

const getTranslation = key => `Campaigns.edit.tabs.invites.${key}`;

class CampaignInvites extends React.Component {
  constructor() {
    super();

    this.state = {
      invites: [],
      actionIndex: 0,
      currentOption: null,
      saving: 'saved',
      view: 'list',
    };

    this.deleteInvite = this.deleteInvite.bind(this);
    this.createInvite = this.createInvite.bind(this);
    this.updateInvite = this.updateInvite.bind(this);
    this.goToAction = this.goToAction.bind(this);
    this.updateInviteValue = this.updateInviteValue.bind(this);
    this.toggleNetwork = this.toggleNetwork.bind(this);
    this.addInviteOption = this.addInviteOption.bind(this);
    this.saveInvites = this.saveInvites.bind(this);
    this.deleteInviteOption = this.deleteInviteOption.bind(this);
    this.updateViewType = this.updateViewType.bind(this);
    this.sendInvites = this.sendInvites.bind(this);
  }

  sendInvites(currentInvite) {
    const { campaign } = this.props;
    currentInvite.influencers.map(influencer => Meteor.call('campaigns-invite-sent',
      influencer, campaign, currentInvite.options, (err, res) => notie.alert(1, I18n.t(getTranslation('invitesSent')), 3)));
  }

  toggleNetwork(network) {
    const component = this;
    return function () {
      const newState = { ...component.state };
      newState.invites = [...newState.invites];
      const newInvite = { ...newState.invites[newState.actionIndex] };
      newInvite.networks = { ...newInvite.networks };
      newInvite.networks[network] = !newInvite.networks[network];
      newState.invites.splice(newState.actionIndex, 1, newInvite);
      component.setState(newState);
    };
  }

  goToAction(action) {
    const component = this;
    return function (e) {
      let val;
      if (action === 'goTo') {
        val = Number(e.target.value);
      }
      if (action === 'previous') {
        if (component.state.actionIndex === 0) return;
        val = component.state.actionIndex - 1;
      }
      if (action === 'next') {
        if (component.state.actionIndex === (component.props.invites.length - 1)) return;
        val = component.state.actionIndex + 1;
      }
      component.setState({ actionIndex: val });
    };
  }

  updateInviteValue(key) {
    const component = this;
    return function (e) {
      const val = e.target ? e.target.value : e;
      const newState = { ...component.state };
      const newInvite = { ...newState.invites[newState.actionIndex] };
      newInvite[key] = val;
      // console.log("NEW_INVITE",key,val);
      newState.invites = [...newState.invites];
      newState.invites.splice(newState.actionIndex, 1, newInvite);

      component.setState(newState);
    };
  }

  addInviteOption(option) {
    console.log('addInviteOption',option)
    const newState = { ...this.state };
    const newInvite = { ...newState.invites[newState.actionIndex] };
    newInvite.options = [...newInvite.options];
    newInvite.options.push(option);
    newState.invites.splice(newState.actionIndex, 1, newInvite);

    // console.log("ADD_INVITE_OPTION", newState);
    this.setState(newState);
  }

  deleteInviteOption(option) {
    delete option.index;
    const newState = { ...this.state };
    const newInvite = { ...newState.invites[newState.actionIndex] };
    newInvite.options = [...newInvite.options];
    option = newInvite.options.filter(o => o.date === option.date && o.media === option.media && o.message === option.message)[0];
    const indexOfOption = newInvite.options.indexOf(option);
    newInvite.options.splice(indexOfOption, 1);
    console.log('DELETE_OPTION', newInvite, option);
    this.setState(newState);
  }

  createInvite() {
    const component = this;
    const { campaign, invites } = this.props;
    const data = { campaign };
    const { actionIndex } = this.state;
    const currentInvite = this.state.invites[actionIndex];
    
    let newObject = Object.assign({},data, {teamAttacks: currentInvite?currentInvite.teamAttacks:[]})
    
    
    console.log('CURRENT-INVITE',newObject, data)
    Meteor.call('invite-create', newObject, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = I18n.t(getTranslation('messages.error'));
        }

        // console.log("ERROR", err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      notie.alert(1, I18n.t(getTranslation('messages.saved')), 3);

      setTimeout(() => {
        console.log('SERVER_CRETE_INVITE_RESPONSE', res);

        component.props.refetch({ date: new Date() });
        component.props.setTab('invites');
      }, 500);
    });
  }

  updateInvite(data) {
    // console.log("CREATE!");
    const component = this;
    Meteor.call('invite-update', data, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = I18n.t(getTranslation('messages.error'));
        }

        // console.log("ERROR", err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      notie.alert(1, I18n.t(getTranslation('messages.updated')), 3);

      // component.props.refetch();
      component.closeModal();

      // console.log("SERVER_UPDATE_INVITE_RESPONSE", res);
    });
  }

  deleteInvite(element) {
    const component = this;
    return function () {
      swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(() => {
        const newState = component.state;
        newState.invites = [...newState.invites];
        let indexOfMatch = null;
        const match = newState.invites.filter((t, i) => {
          if (t._id === element._id) {
            indexOfMatch = i;
          }
          return t._id === element._id;
        })[0];
        if (match) {
          newState.invites.splice(indexOfMatch, 1);
          component.setState(newState);
          component.save();
        } else {
          console.error('SOMETHING WENT WRONG');
        }
      });
    };
  }

  saveInvites(silent) {
    const component = this;
    const { campaign } = this.props;
    const { invites } = this.state;
    this.saving = true;
    if (silent && typeof (silent) === 'boolean') {
      silent = true;
    } else {
      silent = false;
    }

    if (silent && this.savedData === JSON.stringify(invites)) {
      this.setState({ saving: 'saved' });
      return;
    }
    this.setState({ saving: 'saving' });
    this.savedData = JSON.stringify(invites);
    Meteor.call('invite-save-multiple', invites, campaign._id, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = I18n.t(getTranslation('messages.error'));
        }

        // console.log("ERROR", err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      component.setState({ saving: 'saved' });
      if (!silent) {
        notie.alert(1, I18n.t(getTranslation('messages.saved')), 3);
      }

      /*
      component.props.refetch({
          "campaignID": component.props.campaign._id
      });
      * */

      // console.log("SERVER_SAVE_INVITE_RESPONSE", res);
    });
  }

  componentWillMount() {
    const { invites } = this.props;

    // console.log("WILL_MOINT", invites);
    this.setState({ invites: [...invites] });
  }

  /* componentWillReceiveProps() {
    const { invites } = this.props;

    // this.setState({invites:[...invites]})
  } */

  componentDidUpdate() {
    const { invites } = this.props;
    if (this.state.invites.length === 0 || invites.length > this.state.invites.length || this.saving) {
      // this.setState({invites:[...invites]});
      this.saving = false;
    }
  }

  componentDidMount() {
    this.savedData = JSON.stringify(this.props.invites);
    const component = this;
    this.saveInterval = setInterval(() => {
      if (component.state.invites && component.state.invites.length > 0) {
        /* component.saveInvites(true); */
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.saveInterval);
  }

  updateViewType(view) {
    const component = this;
    return function () {
      component.setState({ view });
    };
  }

  render() {
    const {
      campaign, accounts, teamAttacks, tabIndex, refetch
    } = this.props;
    const { invites, view, actionIndex } = this.state;
    const {
      updateViewType, toggleNetwork, updateInviteValue, addInviteOption, goToAction, createInvite, saveInvites, deleteInviteOption,
      sendInvites,
    } = this;
    const currentInvite = this.state.invites[actionIndex];
    if (invites.length === 0) {
      return (
        <ListEmpty
          message={<Translate value={getTranslation('empty.message')} />}
          button={<Translate value={getTranslation('empty.button')} />}
          callback={createInvite}
        />
      );
    }
    return (
      <div className="content-padding-30 invite-actions">
        <CampaignInvitesHeader campaign={campaign} updateViewType={updateViewType} />
        <div className="spacer-20" />
        {view === 'list' ? (
          <CampaignListView
              refetch={refetch}
            tabIndex={tabIndex}
            invites={invites}
            accounts={accounts}
            teamAttacks={teamAttacks}
            currentInvite={currentInvite}
            actionIndex={actionIndex}
            toggleNetwork={toggleNetwork}
            updateInviteValue={updateInviteValue}
            addInviteOption={addInviteOption}
            deleteInviteOption={deleteInviteOption}
            goToAction={goToAction}
            createInvite={createInvite}
            saveInvites={saveInvites}
            sendInvites={sendInvites}
          />
        ) : (
          <CampaignTableView

            // invites={invites}
            hasTotal
            campaign={campaign}
          />
        )}
        {/* <Saving state={this.state.saving} /> */}
      </div>
    );
  }
}

export default CampaignInvites;

/*= reduxForm({
  form: 'invite-action',
})(CampaignInvites); */
