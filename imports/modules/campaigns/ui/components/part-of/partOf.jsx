import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { reduxForm } from 'redux-form';
import InputSelect from '../../../../core/ui/components/forms/input-checkbox';
import SocialAvatar from '../../../../core/ui/components/social-avatar';
import moment from 'moment';
import notie from 'notie';

const getTranslation = key => `Campaigns.edit.tabs.invites.edit.tables.action.${key}`;

const renderIndex = function (cell, row) {
  return (
    <div>
      {cell || '-'}
    </div>
  );
};

const renderDate = function (cell, row) {
  return (
    <div>
      <ul style={{ display: 'contents' }}>
        <li>{cell[0].date ? moment(cell[0].date).format('DD/MM/YY') : '-'}</li>
      </ul>
    </div>
  );
};

const renderHour = function (cell, row) {
  return (
    <div>
      <ul style={{ display: 'contents' }}>
        <li>{cell[0].date ? moment(cell[0].date).format('hh:mm') : '-'}</li>
      </ul>
    </div>
  );
};

const renderMessages = function (cell, row) {
  return (
    <div>
      <ul style={{ display: 'contents' }}>
        <li>{cell[0].message || '-'}</li>
      </ul>
    </div>
  );
};

const renderStatus = function (cell, row) {
  return (
    <div>
      {<Translate value={getTranslation(cell)} /> || '-'}
    </div>
  );
};

const renderMedia = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li><a href={cell[0].media} target="_blank">{cell[0].media || '-'}</a></li>
        </ul>
      </div>
    </div>
  );
};

const renderLocation = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell[0].location || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderType = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell[0].type || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderShare = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderAvailable = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderPostPay = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderPostAd = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderPostTotalPay = function (cell, row) {
  return (
    <div>
      <div>
        <ul style={{ display: 'contents' }}>
          <li>{cell || '-'}</li>
        </ul>
      </div>
    </div>
  );
};

const renderInfluencers = function (cell, row) {
    return (
        <div>
            <SocialAvatar size={50} avatar={cell.information.avatar} network={cell.information.network} />
        </div>
    );
}

class PartOf extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: [],
        data: [],
    };


    this.selectInvites = this.selectInvites.bind(this);
    this.acceptInvites = this.acceptInvites.bind(this);
    this.refuseInvites = this.refuseInvites.bind(this);
  }

  refuseInvites(){
      const component = this;
    Meteor.call('campaigns-invite-update',this.state.checked, 'refused', (err, res) => location.reload());
  }

  acceptInvites(){
      const component = this;
      console.log('this.state.checked',this.state.checked)
      Meteor.call('campaigns-invite-update', this.state.checked, 'accepted', (err, res) => {
          Meteor.call('posts-scheduler-convocatories', this.state.checked, (err, res) => location.reload())
      });
  }

  selectInvites(i, row) {

    let newState = this.state.checked;
    if(i === true){
      newState.push(row);
    }else{
      newState = newState.filter(item=>item._id!==row._id)
    }
    this.setState({checked: newState});

  }

    componentDidMount() {
        const {campaignInviteSentOwn} = this.props;
        const component = this;
        console.log('campaignInviteSentOwn',campaignInviteSentOwn)
        if(campaignInviteSentOwn){
            Meteor.call('campaign-get-account', campaignInviteSentOwn, (err, res) => component.setState({data: res}))
        }
    }


    render() {
    const { data } = this.state;

    const renderCheckbox = (cell, row) => {
      return (
          <div>
            <InputSelect input={{onChange:(i) => this.selectInvites(i, row)}} />
          </div>

      );
    }

    return (
      <div className="action-specs">
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <h4 style={{marginTop: '0'}}>
            <Translate
              value={getTranslation('title')}
            />
          </h4>
          <h4 style={{marginTop: '0'}}>
            Total: {data.length}
          </h4>
        </div>
        <div className="ibol-table">
          <BootstrapTable
              data={data}
              height={'380px'}
              options={{ noDataText: I18n.t(getTranslation('table.noDataText')) }}>
            <TableHeaderColumn
                dataField="index"
                dataAlign="center"
                width="60px"
                dataFormat={renderCheckbox}
            >
            </TableHeaderColumn>
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
            <TableHeaderColumn
              dataField="status"
              dataAlign="center"
              width="100px"
              dataFormat={renderStatus}
            >
              <Translate
                value={getTranslation('table.headers.status')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="messages"
              dataAlign="center"
              width="100px"
              dataFormat={renderDate}
            >
              <Translate
                value={getTranslation('table.headers.deadline')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="messages"
              dataAlign="center"
              width="100px"
              dataFormat={renderHour}
            >
              <Translate
                value={getTranslation('table.headers.hour')}
              />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="messages"
              dataAlign="center"
              width="200px"
              dataFormat={renderType}
            >
              <Translate value={getTranslation('table.headers.type')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="messages"
              dataAlign="center"
              width="200px"
              dataFormat={renderMessages}
            >
              <Translate value={getTranslation('table.headers.message')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="messages"
              dataAlign="center"
              width="200px"
              dataFormat={renderMedia}
            >
              <Translate value={getTranslation('table.headers.media')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="messages"
              dataAlign="center"
              width="200px"
              dataFormat={renderLocation}
            >
              <Translate value={getTranslation('table.headers.location')} />
            </TableHeaderColumn>
              <TableHeaderColumn
                  dataField="account"
                  dataAlign="center"
                  width="200px"
                  dataFormat={renderInfluencers}
              >
                  <Translate value={getTranslation('table.headers.account')} />
              </TableHeaderColumn>
            <TableHeaderColumn
              dataField="share"
              dataAlign="center"
              width="200px"
              dataFormat={renderShare}
            >
              <Translate value={getTranslation('table.headers.share')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="available"
              dataAlign="center"
              width="250px"
              dataFormat={renderAvailable}
            >
              <Translate value={getTranslation('table.headers.available')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="postPay"
              dataAlign="center"
              width="200px"
              dataFormat={renderPostPay}
            >
              <Translate value={getTranslation('table.headers.postPay')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="postAd"
              dataAlign="center"
              width="200px"
              dataFormat={renderPostAd}
            >
              <Translate value={getTranslation('table.headers.postAd')} />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="postTotalPay"
              dataAlign="center"
              width="200px"
              dataFormat={renderPostTotalPay}
            >
              <Translate value={getTranslation('table.headers.postTotalPay')} />
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
        <a className="btn btn-primary pull-right" onClick={this.acceptInvites}><Translate value={getTranslation('accept')} /></a>
        <a className="btn btn-danger pull-right" style={{marginRight:"10px"}} onClick={this.refuseInvites}><Translate value={getTranslation('refuse')} /></a>
      </div>
    );
  }
}

export default reduxForm({
  form: 'accept-invites',
})(PartOf);
