import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const renderLink = function (cell, row) {   // String example
  return <a><i className="icon wb-edit" aria-hidden="true"></i></a>;
};

const renderNetwork = function (cell, row) {   // String example
  return <div className="icon size-35"><i className={'social-icon ' + cell}/></div>;
};

const renderBudget = function (cell, row) {   // String example
  return <span>${cell}</span>;
};

class CampaignAdvertisingList extends React.Component {
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
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty'))
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
            <TableHeaderColumn isKey dataField='_id' dataFormat={renderLink} dataAlign='center' width="110px">
              <Translate value={getTranslation('table.headers.more')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='message' dataSort={true}>
              <Translate value={getTranslation('table.headers.message')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='network' dataFormat={renderNetwork} dataSort={true} width="200px"
                               dataAlign='center'>
              <Translate value={getTranslation('table.headers.network')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='budget' dataFormat={renderBudget} width="150px" dataSort={true}
                               dataAlign='center'>
              <Translate value={getTranslation('table.headers.budget')}/>
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default CampaignAdvertisingList;
