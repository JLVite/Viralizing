import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router';
import swal from 'sweetalert2';
import SocialAvatar from '../../../core/ui/components/social-avatar';
import GridView from './gridView';

const renderName = function (cell, row) { // String example
  return (
    <Link to={`/accounts/edit/${row._id}`}>
      <SocialAvatar avatar={cell.avatar} name={cell.name} size="50" page={row.type === 'page'} />
      <div className="icon-label">
        {`${cell.name} `}
        {cell.lastName}
      </div>
    </Link>
  );
};

const renderOwner = function (cell, row) { // String example
  return (
    <Link to={`/accounts/edit/${row._id}`}>
      <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50" />
      <div className="icon-label">
        {`${cell.profile.name} `}
        {cell.profile.lastName}
      </div>
    </Link>
  );
  TableHeaderColumn;
};

const renderManager = function (cell, row) { // String example
  return (
    <Link to={`/accounts/edit/${row._id}`}>
      <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50" />
      <div className="icon-label">
        {`${cell.profile.name} `}
        {cell.profile.lastName}
      </div>
    </Link>
  );
};

const renderCollaborators = function (cell, row) { // String example
  return (
    <Link to={`/accounts/edit/${row._id}`}>
      {cell.length === 0 && '-'}
      {cell.map(m => (
        <SocialAvatar key={m._id} avatar={m.profile.avatar} name={m.profile.name} size="50" />
      ))}
    </Link>
  );
};

const renderNetwork = function (cell, row) { // String example
  return (
    <div>
      <div className="icon">
        <i className={`social-icon ${cell}`} />
      </div>
    </div>
  );
};

const isBrand = function (cell, row) { // String example
  return <i className={`icon circle brand ${cell.type.brand ? 'wb-check' : 'wb-close not'}`} aria-hidden="true" />;
};

const isInfluencer = function (cell, row) { // String example
  return (
    <i
      className={`icon circle influencer ${cell.type.influencer ? 'wb-check' : 'wb-close not'}`}
      aria-hidden="true"
    />
  );
};

const renderCampaigns = function (cell, row) { // String example
  return (
    <div>
      {cell || '-'}
    </div>
  );
};

const renderLicenses = function (cell, row) { // String example
  let color;
  if (row.manager._id === Meteor.userId() && row.owner._id === Meteor.userId()) {
    color = { backgroundColor: 'white' };
  } else if (row.manager._id !== Meteor.userId() && row.owner._id === Meteor.userId()) {
    color = { backgroundColor: '#d79d0a' };
  } else if (row.manager._id === Meteor.userId() && row.owner._id !== Meteor.userId()) {
    color = { backgroundColor: '#a608cf' };
  }

  return <i className="icon circle " style={color} aria-hidden="true" />;
};

const renderRatings = function (cell, row) { // String example
  return (
    <div>
      {cell || '-'}
    </div>
  );
};

const renderTags = function (cell, row) { // String example
  const tagsList = function () {
    return (
      cell.map((tag, i) => <div className="tag" key={i}>{tag}</div>)
    );
  };
  return (
    <div className="tag-list">
      {cell.length ? tagsList() : '-'}
    </div>
  );
};

class ListTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: undefined,
      sortOrder: undefined,
      toggle: false,
    };

    this.onSortChange = this.onSortChange.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.showGrid = this.showGrid.bind(this);
    this.showList = this.showList.bind(this);
  }

  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder,
    });
  }

  confirmDelete(account) {
    const component = this;
    return function () {
      const getTranslation = key => `Accounts.edit.tabs.settings.${key}`;
      swal({
        title: I18n.t(getTranslation('delete.main.title')),
        text: I18n.t(getTranslation('delete.main.description')),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: I18n.t(getTranslation('delete.main.confirm')),
        cancelButtonText: I18n.t(getTranslation('delete.main.cancel')),
      }).then(() => {
        Meteor.call('profiles-mark-delete', account, (err, res) => {
          // console.log("DELETE_ACCOUNT", err,res);
          if (err) {
            swal(
              I18n.t(getTranslation('delete.error.title')),
              I18n.t(getTranslation('delete.error.description')),
              'error',
            );
            return;
          }
          swal(
            I18n.t(getTranslation('delete.done.title')),
            I18n.t(getTranslation('delete.done.description')),
            'success',
          );
        });
      });
    };
  }

  showGrid() {
    this.setState({ toggle: true });
  }

  showList() {
    this.setState({ toggle: false });
  }

  render() {
    const getTranslation = key => `Accounts.list.${key}`;
    const { confirmDelete } = this;
    const renderDelete = function (cell, row) { // String example
      return (
        <div style={{ color: 'red', cursor: 'pointer' }} onClick={confirmDelete(row)}>
          -
        </div>
      );
    };
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty')),
    };
    window.userList = this.props.data;
    const data = this.props.data.map((i, index) => Object.assign({}, i, { index: (index + 1) }));
    return (
      <div>
        <div className="row">
          <div className="col-md-12">

            <button className="btn btn-primary table-button" onClick={this.props.new}>

              <Translate value={getTranslation('new')} />
            </button>
          </div>
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
        </div>
        {
          this.state.toggle
            ? <GridView data={data} />
            : (
              <div className="ibol-table">
                <BootstrapTable
                  className="list-dropdown"
                  data={data}
                  options={options}
                  pagination
                  search
                  searchPlaceholder={I18n.t(getTranslation('table.search'))}
                >
                  <TableHeaderColumn dataField="_id" dataFormat={renderDelete} dataAlign="center" width="60px">
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                    />
                  </TableHeaderColumn>
                  <TableHeaderColumn isKey dataField="index" dataAlign="center" width="60px">
                    <Translate
                      value={getTranslation('table.headers.index')}
                    />
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="license"
                    dataFormat={renderLicenses}
                    dataAlign="center"
                    dataSort
                    width="110px"
                  >
                    <Translate
                      value={getTranslation('table.headers.license')}
                    />
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="network"
                    dataFormat={renderNetwork}
                    dataAlign="center"
                    dataSort
                    width="110px"
                  >
                    <Translate
                      value={getTranslation('table.headers.network')}
                    />
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="rating"
                    dataFormat={renderRatings}
                    dataAlign="center"
                    dataSort
                    width="110px"
                  >
                    <Translate value={getTranslation('table.headers.rating')} />
                    <img src="/images/star.png" height="15" width="15" style={{ margin: '0 0 5px 2px' }} />
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="information"
                    dataFormat={renderName}
                    dataSort
                    width="250px"
                  >
                    <Translate value={getTranslation('table.headers.account')} />
                    <img
                      className="fan-page"
                      src="https://s3.amazonaws.com/ibol-app-media/icons/fan-page.svg"
                      alt="Fan Page"
                      style={{ height: '1em', marginLeft: 5 }}
                    />
                  </TableHeaderColumn>

                  <TableHeaderColumn dataField="owner" dataFormat={renderOwner} dataSort width="200px">
                    <Translate
                      value={getTranslation('table.headers.owner')}
                    />
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="manager"
                    dataFormat={renderManager}
                    dataSort
                    width="200px"
                  >
                    <Translate
                      value={getTranslation('table.headers.manager')}
                    />
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="shares"
                    dataFormat={renderCollaborators}
                    dataSort
                    width="200px"
                  >
                    <Translate
                      value={getTranslation('table.headers.collaborators')}
                    />
                  </TableHeaderColumn>

                  <TableHeaderColumn dataField="settings" dataFormat={isBrand} dataAlign="center" width="110px">
                    <Translate
                      value={getTranslation('table.headers.brand')}
                    />
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="settings"
                    dataFormat={isInfluencer}
                    dataAlign="center"
                    width="110px"
                  >
                    <Translate
                      value={getTranslation('table.headers.influencer')}
                    />
                  </TableHeaderColumn>

                  <TableHeaderColumn dataField="groups" dataFormat={renderTags} width="200px">
                    <Translate
                      value={getTranslation('table.headers.tags')}
                    />
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="campaignsCount"
                    dataFormat={renderCampaigns}
                    dataAlign="center"
                    dataSort
                    width="200px"
                  >
                    <Translate
                      value={getTranslation('table.headers.campaigns')}
                    />
                  </TableHeaderColumn>
                </BootstrapTable>
              </div>
            )
        }
        <div className="profile-colors">
          <div>
            <i style={{ backgroundColor: 'white' }} aria-hidden="true" />
            <p>Perfiles donde soy Titular y Administrador</p>
          </div>
          <div>
            <i style={{ backgroundColor: '#d79d0a' }} aria-hidden="true" />
            <p>Perfiles donde soy Titular</p>
          </div>
          <div>
            <i style={{ backgroundColor: '#a608cf' }} aria-hidden="true" />
            <p>Perfiles donde soy Administrador</p>
          </div>
          <div>
            <i style={{ backgroundColor: '#e99ef9' }} aria-hidden="true" />
            <p>Perfiles donde sólo soy Colaborador</p>
          </div>

        </div>
      </div>
    );
  }
}

export default ListTable;

/*
 <Select2
 multiple
 defaultValue={[1, 4]}
 data={[
 { text: 'bug', id: 1 },
 { text: 'feature', id: 2 },
 { text: 'documents', id: 3 },
 { text: 'discussion', id: 4 },
 ]}
 options={{
 placeholder: 'search by tags',
 }}
 />
* */
