import React from 'react';
import ListEmpty from '../../../../../core/ui/components/list-empty';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const renderDate = function (cell, row) {
  return (
    moment(new Date(cell)).format('DD/MM/YY')
  );
};

const renderTime = function (cell, row) {
  return (
    moment(new Date(cell)).format('HH:MM A')
  );
};

const renderMedia = function (cell, row) {
  return (
    <div style={{ padding: 6 }}>
      <img src={cell} alt="" style={{ maxHeight: 150, maxWidth: '100%' }}/>
    </div>
  );
};

class CampaignTableViewOptions extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.invites.edit.tables.options.' + key;
    };
    let { invite, actionIndex } = this.props;
    if (invite.options.length === 0) {
      return (
        <ListEmpty message={<Translate value={getTranslation('empty.message')}/>}/>
      );
    }
    let list = invite.options.map((invite, index) => Object.assign({}, invite, { index: (index + 1) }));
    return (
      <div className="panel">
        <div className="panel-body">
          <div className="action-list">
            <h4><Translate value={getTranslation('table.title')}/></h4>
            <div className="ibol-table">
              <BootstrapTable data={list}>
                <TableHeaderColumn isKey dataField='index' dataAlign='center' width="60px"><Translate
                  value={getTranslation('table.headers.index')}/></TableHeaderColumn>
                <TableHeaderColumn dataField='message' width="350px"><Translate
                  value={getTranslation('table.headers.message')}/></TableHeaderColumn>
                <TableHeaderColumn dataField='media' dataFormat={renderMedia} width="200px"><Translate
                  value={getTranslation('table.headers.media')}/></TableHeaderColumn>
                <TableHeaderColumn dataField='date' dataFormat={renderDate} width="150px"><Translate
                  value={getTranslation('table.headers.date')}/></TableHeaderColumn>
                <TableHeaderColumn dataField='date' dataFormat={renderTime} width="150px"><Translate
                  value={getTranslation('table.headers.time')}/></TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignTableViewOptions;

