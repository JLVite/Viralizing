import React from 'react';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const renderDate = function (cell, row) {
  return (
    moment(new Date(cell)).format('DD/MM/YY')
  );
};

const renderList = function (cell, row) {
  return (
    <div>
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

class CampaignInvitesList extends React.Component {
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
    let component = this;
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.messages.invites.list.' + key;
    };
    const renderLink = function (cell, row) {   // String example
      return <a onClick={component.props.editInvite(row)}><i
        className={'icon ' + (row.status === 'draft' ? 'wb-edit' : 'wb-eye')} aria-hidden="true"></i></a>;
    };
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty'))
    };
    let { invites } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <a className="btn btn-primary pull-right" onClick={this.props.new}><Translate
              value={getTranslation('new')}/></a>
          </div>
        </div>
        <div className="spacer-30"></div>

        <div className="ibol-table">
          <BootstrapTable data={invites} options={options} pagination search
                          searchPlaceholder={I18n.t(getTranslation('table.search'))}>
            <TableHeaderColumn isKey dataField='_id' dataFormat={renderLink} dataAlign='center' width="110px">
              <Translate value={getTranslation('table.headers.more')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={true} width="300px">
              <Translate value={getTranslation('table.headers.name')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='deadline' dataFormat={renderDate} dataSort={true} width="150px">
              <Translate value={getTranslation('table.headers.deadline')}/>
            </TableHeaderColumn>
            <TableHeaderColumn dataField='teamAttack' dataFormat={renderList}>
              <Translate value={getTranslation('table.headers.list')}/>
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default CampaignInvitesList;
