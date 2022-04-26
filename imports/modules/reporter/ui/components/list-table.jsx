import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router';
import SocialAvatar from '../../../core/ui/components/social-avatar';
import swal from 'sweetalert2';

let getTranslation = (key) => {
  return 'Reporter.list.' + key;
};

const renderLink = function (cell, row) {   // String example
  return <Link to={'/reporter/edit/' + cell}><i className="icon wb-edit" aria-hidden="true"/></Link>;
};

class ListTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: undefined,
      sortOrder: undefined
    };

    this.onSortChange = this.onSortChange.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder
    });
  }

  confirmDelete(report) {
    let component = this;
    return function () {
      let getTranslation = (key) => {
        return 'Reporter.list.' + key;
      };
      swal({
        title: I18n.t(getTranslation('title')),
        text: I18n.t(getTranslation('description')),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: I18n.t(getTranslation('confirm')),
        cancelButtonText: I18n.t(getTranslation('cancel'))
      }).then(function () {
        Meteor.call('report-delete', report, function (err, res) {
          //console.log("DELETE_ACCOUNT", err,res);
          if (err) {
            swal(
              I18n.t(getTranslation('error.title')),
              I18n.t(getTranslation('error.description')),
              'error'
            );
            return;
          }
          swal(
            I18n.t(getTranslation('done.title')),
            I18n.t(getTranslation('done.description')),
            'success'
          );
        });

      });
    };
  }

  render() {

    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty'))
    };
    const list = this.props.data;
    let confirmDelete = this.confirmDelete;
    const renderDelete = function (cell, row) {   // String example
      return (
        <div style={{ color: 'red', cursor: 'pointer' }} onClick={confirmDelete(row)}>
          -
        </div>
      );
    };
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary table-button" onClick={this.props.new}>
              <Translate value={getTranslation('new')}/>
            </button>
          </div>
        </div>
        <div className="ibol-table">
          <BootstrapTable data={list} options={options} pagination search
                          searchPlaceholder={I18n.t(getTranslation('table.search'))}>
            <TableHeaderColumn dataField='_id' dataFormat={renderDelete} dataAlign='center' width="60px"><i
                  className="fa fa-trash" aria-hidden="true"/></TableHeaderColumn>
            <TableHeaderColumn isKey dataField='_id' dataFormat={renderLink} dataAlign='center' width="110px"><Translate
              value={getTranslation('table.headers.edit')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={true}><Translate
              value={getTranslation('table.headers.name')}/></TableHeaderColumn>
          </BootstrapTable>
        </div>

      </div>
    );
  }
}

export default ListTable;
