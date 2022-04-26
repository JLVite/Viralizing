import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import notie from 'notie';

import PropTypes from 'prop-types';
import ListEmpty from '../../../core/ui/components/list-empty';
import NewReport from '../components/new-report';
import ListTable from '../components/list-table';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createReport = this.createReport.bind(this);
  }

  createReport(data) {
    // console.log("SAVE_REPORT",data);
    const component = this;
    Meteor.call('report-create', data, (err, res) => {
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to create report.';
        }

        // console.log("ERROR",err);
        notie.alert(3, err.reason || err.error, 3);
        return;
      }
      component.closeModal();
      component.props.refetch().then(() => {
        // console.log("SERVER_SAVE_Report_RESPONSE",res,component);
        component.props.router.push(`/reporter/edit/${res}`);
      });
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const getTranslation = key => `Reporter.${key}`;
    return (
      <div className="page-content container-fluid">
        {(this.props.data && this.props.data.length) ? <ListTable data={this.props.data} new={this.openModal} />
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
          <NewReport onSubmit={this.createReport} />
        </Modal>

      </div>
    );
  }
}

const ListWithRouter = withRouter(List);

List.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListWithRouter;
