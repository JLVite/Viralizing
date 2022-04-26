import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import ListEmpty from '../../../core/ui/components/list-empty';
import ListTable from '../components/list-table';
import CampaignTypes from '../components/campaign-types';
import CampaignCreateContainer from '../containers/campaign-create';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      toggle: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showGrid = this.showGrid.bind(this);
    this.showList = this.showList.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  showGrid() {
    this.setState({ toggle: true });
  }

  showList() {
    this.setState({ toggle: false });
  }

  render() {
    const getTranslation = key => `Campaigns.${key}`;
    return (
      <div className="page-content container-fluid">
        <div className="pull-right">
          <ul style={{ listStyle: 'none', display: 'inline-flex', marginRight: '20px' }}>
            <li>
              <button onClick={this.showList} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                <img src="/images/h_menu.png" style={{ height: '20px', width: '20px' }} />
              </button>
            </li>
            <li>
              <button onClick={this.showGrid} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                <img src="/images/grid.png" style={{ height: '20px', width: '20px' }} />
              </button>
            </li>
          </ul>
        </div>
        <CampaignTypes />
        {(this.props.data && this.props.data.length) ? <ListTable toggle={this.state.toggle} data={this.props.data} new={this.openModal} />
          : (
            <ListEmpty
              message={<Translate value={getTranslation('empty.message')} />}
              button={<Translate value={getTranslation('empty.button')} />}
              callback={this.openModal}
            />
          )}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true" />
          </button>
          <CampaignCreateContainer close={this.closeModal} reloadCampaigns={this.props.refetch} />

        </Modal>
      </div>
    );
  }
}

export default List;
