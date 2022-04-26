import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router';
import Select2 from 'react-select2-wrapper';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

const renderLink = function (cell, row) {   // String example
  return <Link to={'/accounts/edit/' + cell}><i className="icon wb-edit" aria-hidden="true"></i></Link>;
};

class ListTable extends React.Component {
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
    let { selectAccount } = this.props;
    let getTranslation = (key) => {
      return 'Accounts.list.' + key;
    };
    const renderName = function (cell, row) {   // String example
      return (
        <div onClick={selectAccount(row)}>
          <SocialAvatar avatar={cell.avatar} name={cell.name} size="50" page={row.type === 'page'}/>
          <div className="icon-label">
            {cell.name + ' ' + cell.lastName}
          </div>
        </div>
      );
    };

    const renderOwner = function (cell, row) {   // String example
      return (
        <div onClick={selectAccount(row)}>
          <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50"/>
          <div className="icon-label">
            {cell.profile.name + ' ' + cell.profile.lastName}
          </div>
        </div>
      );
    };

    const renderManager = function (cell, row) {   // String example
      return (
        <div onClick={selectAccount(row)}>
          <SocialAvatar avatar={cell.profile.avatar} name={cell.profile.name} size="50"/>
          <div className="icon-label">
            {cell.profile.name + ' ' + cell.profile.lastName}
          </div>
        </div>
      );
    };

    const renderNetwork = function (cell, row) {   // String example
      return (
        <div>
          <div className="icon">
            <i className={'social-icon ' + cell}/>
          </div>
        </div>
      );
    };

    const renderCampaigns = function (cell, row) {   // String example
      return (
        <div>
          {cell || '-'}
        </div>
      );
    };

    const renderTags = function (cell, row) {   // String example
      const tagsList = function () {
        return (
          cell.map((tag, i) => { return <div className="tag" key={i}>{tag}</div>; })
        );
      };
      return (
        <div className="tag-list">
          {cell.length ? tagsList() : '-'}
        </div>
      );
    };
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: I18n.t(getTranslation('table.empty'))
    };
    let data = this.props.data.filter(i => i.type === 'account' && i.network !== 'instagram').map((i, index) => Object.assign({}, i, { index: (index + 1) }));
    return (
      <div>

        <div className="ibol-table">
          <BootstrapTable data={data} options={options} pagination search
                          searchPlaceholder={I18n.t(getTranslation('table.search'))}>
            <TableHeaderColumn isKey dataField='index' dataAlign='center' width="60px"><Translate
              value={getTranslation('table.headers.index')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='owner' dataFormat={renderOwner} dataSort={true}><Translate
              value={getTranslation('table.headers.owner')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='manager' dataFormat={renderManager} dataSort={true}><Translate
              value={getTranslation('table.headers.manager')}/></TableHeaderColumn>

            <TableHeaderColumn dataField='network' dataFormat={renderNetwork} dataAlign='center' dataSort={true}
                               width="110px"><Translate
              value={getTranslation('table.headers.network')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='information' dataFormat={renderName} dataSort={true}><Translate
              value={getTranslation('table.headers.account')}/></TableHeaderColumn>
            <TableHeaderColumn dataField='groups' dataFormat={renderTags}><Translate
              value={getTranslation('table.headers.tags')}/></TableHeaderColumn>
          </BootstrapTable>
        </div>

      </div>
    );
  }
}

export default ListTable;
