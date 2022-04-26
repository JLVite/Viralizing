import React from 'react';
import AdsListItem from './list-item';
import Modal from 'react-modal';
import AdEdit from './edit';

class AdList extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  formSubmit(data) {
    let component = this;
    let { adAccountID, accountID, adSetID, campaignID, refetch } = this.props;
    let IDs = { adAccountID, accountID, adSetID, campaignID };
    console.log('AD_SET_SUBMIT', data, IDs);
    Meteor.call('advertising-facebook-create-compound-ad', IDs, data, function (err, res) {
      console.log('AD_CREATE', err, res);
      refetch({});
      component.closeModal();
    });
  }

  render() {
    let { ads, setAd, active } = this.props;
    console.log('adsList', ads);
    return (
      <div>
        <div className="title">
          Ads
          <button className="advertising-button" onClick={this.openModal}>
            <i className="fa fa-plus-circle" aria-hidden="true"/>
          </button>
        </div>
        <div className="list">
          {ads.map((a, i) => <AdsListItem key={i} ad={a} setAd={setAd} active={active}/>)}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="advertising-modal"
          closeTimeoutMS={800}
          contentLabel="Ad Modal"
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <AdEdit close={this.closeModal}
                  onSubmit={this.formSubmit}
                  initialValues={this.state.current}/>

        </Modal>
      </div>
    );
  }
}

export default AdList;


