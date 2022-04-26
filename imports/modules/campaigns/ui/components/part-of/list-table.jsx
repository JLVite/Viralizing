import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import _ from 'lodash';
import Modal from 'react-modal';

let getTranslation = (key) => {
  return 'Campaigns.list.' + key;
};

const renderLink = function (cell, row) {   // String example
  return <Link to={'/campaigns/view/' + cell}><i className="icon wb-edit" aria-hidden="true"></i></Link>;
};

const renderStatus = function (cell, row) {
  return (
    <span className={`ibol-label ${cell}`}/>
  );
};

const renderUser = function (cell, row) {   // String example
  //console.log("RENDER_USER", cell);
  if (!cell || !cell.profile) return '-';
  return (
    <Link to={'/campaigns/view/' + row._id}>
      <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50"/>
      <div className="icon-label">
        {cell.profile.name + ' ' + cell.profile.lastName}
      </div>
    </Link>
  );
};

const renderDate = function (cell, row) {   // String example
  return (
    moment(new Date(cell)).format('DD/MM/YY')
  );
};

const renderName = function (cell, row) {   // String example
  return (
    <Link to={'/campaigns/view/' + row._id}>
      {cell}
    </Link>
  );
};

const renderActions = function (cell, row) {   // String example
  return (
    <div>
      -
    </div>
  );
};

const renderBudget = function (cell, row) {   // String example
  return (
    <div>
      -
    </div>
  );
};

const renderNetworks = function (cell, row) {   // String example
  return (
    <div>
      {_.uniq(cell.map(m => m.network)).map((a, i) => (
        <div className="icon" key={i}>
          <i className={'social-icon ' + a}/>
        </div>
      ))}

    </div>
  );
};

const renderInfluencers = function (cell, row) {   // String example
  return (
    <div>
      -
    </div>
  );
};

const renderShares = function (cell, row) {   // String example
  cell = cell || [];

  if (cell.length === 0) {
    return (
      <div>
        -
      </div>
    );
  }

  return (
    <div>
      {cell.map(u => `${u.profile.name} ${u.profile.lastName}`).join(',')}
    </div>
  );
};

class ListTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: undefined,
      sortOrder: undefined,
      modalIsOpen: false,
      list: []
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.onSortChange = this.onSortChange.bind(this);
  }

  openModal(list) {
    let component = this;
    return function () {
      component.setState({ modalIsOpen: true, list });
    };
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder
    });
  }

  render() {

    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty'))
    };

    let { openModal } = this;

    const renderList = function (cell, row) {
      return (
        <div onClick={openModal(cell)}>
          {cell.map((a, i) => (
            <div className="icon" key={i}>
              <SocialAvatar avatar={a.information.avatar}
                            network={a.network}
                            name={a.information.name}
                            size="75"
                            type={a.information.type}/>
            </div>
          ))}
        </div>
      );
    };

    const list = this.props.data.map((c, i) => Object.assign({
      _id: c._id,
      status: c.status,
      manager: c.manager,
      owner: c.owner,
      brands: c.brands
    }, c.information, { index: (i + 1) }));

    return (
      <div>
        <div className="ibol-table">
          <BootstrapTable data={list} options={options} pagination search
                          searchPlaceholder={I18n.t(getTranslation('table.search'))}>
            <TableHeaderColumn isKey dataField='index' dataAlign='center' width="60px"><Translate
              value={getTranslation('table.headers.index')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='status' dataFormat={renderStatus} dataAlign='center' width="80px"><Translate
              value={getTranslation('table.headers.status')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='brands' dataFormat={renderNetworks} dataSort={true} width="280px"><Translate
              value={getTranslation('table.headers.networks')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataFormat={renderName} dataSort={true} width="250px"><Translate
              value={getTranslation('table.headers.name')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='brands' dataFormat={renderList} dataSort={true} width="250px"><Translate
              value={getTranslation('table.headers.brands')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='owner' dataFormat={renderUser} width="200px"><Translate
              value={getTranslation('table.headers.owner')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='manager' dataFormat={renderUser} width="200px"><Translate
              value={getTranslation('table.headers.holder')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='name' dataFormat={renderInfluencers} dataSort={true} width="250px"><Translate
              value={getTranslation('table.headers.myAccounts')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='name' dataFormat={renderActions} dataSort={true} width="150px"><Translate
              value={getTranslation('table.headers.myActions')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='dateStart' dataSort={true} dataFormat={renderDate} dataAlign='center'
                               width="180px"><Translate
              value={getTranslation('table.headers.dateStart')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='dateEnd' dataSort={true} dataFormat={renderDate} dataAlign='center'
                               width="180px"><Translate
              value={getTranslation('table.headers.dateEnd')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataFormat={renderBudget} dataSort={true} width="200px"><Translate
              value={getTranslation('table.headers.utility')}/></TableHeaderColumn>
          </BootstrapTable>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Accounts List"
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <h3><Translate value={getTranslation('table.headers.brands')}/></h3>
          <div style={{ padding: 20 }}>
            {this.state.list.map((a, i) => (
              <div className="icon" key={i} style={{ margin: 15 }}>
                <SocialAvatar avatar={a.information.avatar}
                              network={a.network}
                              name={a.information.name}
                              size="75"
                              type={a.information.type}/>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    );
  }
}

export default ListTable;
