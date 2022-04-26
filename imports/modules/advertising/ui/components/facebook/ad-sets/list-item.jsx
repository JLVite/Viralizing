import React from 'react';
import { Translate, Localize } from 'react-redux-i18n';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function getToltip(tooltip) {
  return <Tooltip id={String(Number(new Date()))}>{tooltip}</Tooltip>;
}

class AdSetsListItem extends React.Component {
  render() {
    function formatDate(date) {
      if (date === 'Invalid Date') return 'Ongoing';
      return moment(new Date(date)).format('DD/MM/YYYY');
    }

    let { adSet, setAdSet, active, select } = this.props;
    return (
      <div className={'item ' + (active === adSet._id ? 'active' : '')} onClick={setAdSet(adSet._id)}>
        <div className="title">
          <div className="name">
            {adSet.name}
          </div>
          <OverlayTrigger placement="left" overlay={getToltip(adSet.status.effective)}>
            <div className={'status ' + adSet.status.effective.toLowerCase()}/>
          </OverlayTrigger>
        </div>
        <div className="content">
          <div className="row opposite-align">
            <div className="col-md-7">
              <div className="date">
                {formatDate(adSet.startDate)} - {formatDate(adSet.endDate)}
              </div>
            </div>
            <div className="col-md-5">
              <div className="budget">
                <Localize value={Number(adSet.money.budget.daily) / 100} options={{
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }}/> USD
              </div>
            </div>
          </div>
          <div className="row align-center">
            <div className="col-md-3">
              <div className="billingEvent">
                <OverlayTrigger placement="top" overlay={getToltip(adSet.billingEvent)}>
                  <i className="fa fa-money" aria-hidden="true"/>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-md-3">
              <div className="goal">
                <OverlayTrigger placement="top" overlay={getToltip(adSet.goal)}>
                  <i className="fa fa-bullseye" aria-hidden="true"/>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-md-3">
              <div className="impressions">
                <OverlayTrigger placement="top" overlay={getToltip(adSet.impressions + ' Impressions')}>
                  <i className="fa fa-eye" aria-hidden="true"/>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-md-3">
              <div className="impressions">
                <OverlayTrigger placement="top" overlay={getToltip('Edit')}>
                  <i className="fa fa-pencil" aria-hidden="true" onClick={select(adSet)}/>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdSetsListItem;


