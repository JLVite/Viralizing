import React from 'react';
import AdSetsListItem from './list-item';
import Modal from 'react-modal';
import AdSetsEdit from './edit';
import notie from 'notie';
import moment from 'moment';

class AdSetsList extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      current: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editAdSet = this.editAdSet.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, current: null });
  }

  editAdSet(adSet) {
    let component = this;
    return function () {
      component.setState({ modalIsOpen: true, current: adSet });
    };
  }

  formSubmit(values) {
    let { accountID, adAccountID, campaignID } = this.props;
    let { name, adlabels, startDate, endDate, targeting, billingEvent } = values;
    let countries_array = targeting.countries.map(c => c.key);
    let user_device_array = targeting.user_device.map(dev => dev.key);
    let user_os_array = targeting.user_os.map(os => os.key);
    console.log(targeting);
    let platforms_array = targeting.publisher.map(pl => pl.value);
    let options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    console.log('type', typeof (campaignID));
    let obj = {
      'name': name,
      'adLabels': adlabels,
      'daily_budget': 2000,
      'bid_amount': 2,
      'start_time': moment(startDate).format('DD-MM-YYYY h:mm'),
      'end_time': moment(endDate).format('DD-MM-YYYY h:mm'),
      'billing_event': billingEvent,
      'campaign_id': campaignID,
      'status': 'PAUSED',
      'targeting': {
        'user_device': user_device_array,
        'user_os': user_os_array,
        'geo_locations': { 'countries': countries_array },
        'publisher_platforms': platforms_array
      }
    };
    console.log('FORM_SUBMITED', obj);
    Meteor.call('fb-marketing-adsets-create', accountID, adAccountID, obj, function (err, res) {
      console.log('RESPONSE', err, res);
      if (err) {
        notie(3, err.message, 3);
        return;
      }
      // What to do when success
    });
  }

  render() {
    let { adSets, setAdSet, active } = this.props;
    console.log('AdSetsList', adSets);

    return (
      <div>
        <div className="title">
          Ad Groups
          <button className="advertising-button" onClick={this.openModal}>
            <i className="fa fa-plus-circle" aria-hidden="true"/>
          </button>
        </div>
        <div className="list">
          {adSets.map((a, i) => <AdSetsListItem key={i} adSet={a} setAdSet={setAdSet} active={active}
                                                select={this.editAdSet}/>)}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="advertising-modal"
          closeTimeoutMS={800}
          contentLabel="Example Modal"
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <AdSetsEdit close={this.closeModal}
                      onSubmit={this.formSubmit}
                      initialValues={this.state.current}/>
        </Modal>
      </div>
    );
  }
}

export default AdSetsList;


