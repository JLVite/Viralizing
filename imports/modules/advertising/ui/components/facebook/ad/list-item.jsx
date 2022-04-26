import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function getToltip(tooltip) {
  return <Tooltip id={String(Number(new Date()))}>{tooltip}</Tooltip>;
}

class AdListItem extends React.Component {
  render() {
    let { ad, setAd, active } = this.props;
    return (
      <div className={'item ' + (active === ad._id ? 'active' : '')} onClick={setAd(ad._id)}>
        <div className="name">
          <div className="title">
            <div className="name">{ad.name}</div>
            <OverlayTrigger placement="left" overlay={getToltip(ad.status.effective)}>
              <div className={'status ' + ad.status.effective.toLowerCase()}/>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    );
  }
}

export default AdListItem;


