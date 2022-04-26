import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import _ from 'lodash';
import SocialAvatar from '../../../../../core/ui/components/social-avatar';

const getTranslation = key => `Campaigns.edit.tabs.invites.edit.tables.action.${key}`;

const renderNetworks = function (cell, row) { // String example
  const teamAttackMembers = [].concat.apply([], row.teamAttacks.map(t => t.members));
  return (
    <div>
      {_.uniq([...teamAttackMembers, ...row.influencers].map(m => m.network)).map((a, i) => (
        <div className="icon" key={i}>
          <i className={`social-icon ${a}`} />
        </div>
      ))}

    </div>
  );
};

const renderMembers = function (cell, row) {
  const teamAttackMembers = [].concat.apply([], row.teamAttacks.map(t => t.members));
  return (
    <div>
      {_.slice([...teamAttackMembers, ...row.influencers], 0, 3).map((a, i) => (
        <div className="icon" key={i}>
          <SocialAvatar
            avatar={a.information.avatar}
            network={a.network}
            name={a.information.name}
            size="75"
            type={a.information.type}
          />
        </div>
      ))}
    </div>
  );
};

const renderIndex = function (cell, row) { // String example
  return (
    <div>
      1
    </div>
  );
};

const renderText = function (cell, row) { // String example
  return (
    <div>
      {cell || '-'}
    </div>
  );
};

const renderDate = function (cell, row) { // String example
  return (
    moment(new Date(cell)).format('DD/MM/YY')
  );
};

const renderHashtag = function (cell, row) { // String example
  return <i className={`icon circle brand ${cell ? 'wb-check' : 'wb-close not'}`} aria-hidden="true" />;
};

const renderStatus = function (cell, row) {
  return (
    <span className={`ibol-label ${cell}`} />
  );
};

class CampaignTableViewActions extends React.Component {
  render() {
    const { invite } = this.props;

    const list = [{ ...invite, index: 1 }];
    return (
      <div className="action-specs">
        <h4><Translate value={getTranslation('table.title')} /></h4>
        <div className="ibol-table">
          <BootstrapTable data={list}>
            <TableHeaderColumn
              isKey
              dataField="index"
              dataAlign="center"
              width="60px"
              dataFormat={renderIndex}
            >
              <Translate
                value={getTranslation('table.headers.index')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="status" dataFormat={renderStatus} dataAlign="center" width="60px">
              <Translate
                value={getTranslation('table.headers.status')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="members"
              dataAlign="center"
              width="200px"
              dataFormat={renderNetworks}
            >
              <Translate value={getTranslation('table.headers.networks')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="members"
              dataAlign="center"
              width="200px"
              dataFormat={renderMembers}
            >
              <Translate
                value={getTranslation('table.headers.members')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="invitesAvailable"
              dataAlign="center"
              width="100px"
              dataFormat={renderText}
            >
              <Translate
                value={getTranslation('table.headers.vacants')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="confirmed" dataAlign="center" width="100px" dataFormat={renderText}>
              <Translate
                value={getTranslation('table.headers.confirmed')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="type" dataAlign="center" width="200px">
              <Translate
                value={getTranslation('table.headers.type')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="deadline" dataAlign="center" width="200px" dataFormat={renderDate}>
              <Translate
                value={getTranslation('table.headers.deadline')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="useHashtag"
              dataAlign="center"
              width="100px"
              dataFormat={renderHashtag}
            >
              <Translate
                value={getTranslation('table.headers.useHashtag')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="budget" dataAlign="center" width="150px">
              <Translate
                value={getTranslation('table.headers.budget')}
              />
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default CampaignTableViewActions;
