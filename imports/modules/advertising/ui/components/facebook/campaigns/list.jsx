import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router';

const renderDate = function (cell, row) {   // String example
  if (cell === 'Invalid Date') return 'Ongoing';
  return (
    moment(new Date(cell)).format('DD/MM/YY')
  );
};

class CampaignList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: undefined,
      sortOrder: undefined
    };

    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder
    });
  }

  render() {
    let getTranslation = (key) => {
      return 'Advertising.list.' + key;
    };
    let { data, accountID, adAccountID } = this.props;
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty'))
    };

    const renderLink = function (cell, row) {   // String example
      return <Link to={`/advertising/facebook/${accountID}/${adAccountID}/${row._id}`}>{cell}</Link>;
    };

    const renderStatus = function (cell, row) {   // String example
      return (
        <Link to={`/advertising/facebook/${accountID}/${adAccountID}/${row._id}`}>
          <div className={'status ' + cell}/>
        </Link>
      );
    };

    return (
      <div className="page-content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <a className="btn btn-primary table-button" onClick={this.props.new}><Translate
              value={getTranslation('new')}/></a>
          </div>
        </div>
        <div className="spacer-30"></div>

        <div className="ibol-table">
          <BootstrapTable data={data} options={options} pagination search
                          searchPlaceholder={I18n.t(getTranslation('table.search'))}>
            <TableHeaderColumn isKey dataField='_id' dataFormat={renderStatus} dataAlign='center' width="110px">
              <Translate value={getTranslation('table.headers.status')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataFormat={renderLink} dataSort={true}>
              <Translate value={getTranslation('table.headers.name')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='startDate' dataFormat={renderDate} dataSort={true} width="150px"
                               dataAlign='center'>
              <Translate value={getTranslation('table.headers.startDate')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='endDate' dataFormat={renderDate} width="150px" dataSort={true}
                               dataAlign='center'>
              <Translate value={getTranslation('table.headers.endDate')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='objective' width="200px" dataSort={true} dataAlign='center'>
              <Translate value={getTranslation('table.headers.objective')}/>
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default CampaignList;
