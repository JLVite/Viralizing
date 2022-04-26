import React from 'react';
import SocialAvatar from '../../../../../core/ui/components/social-avatar';
import { Translate, Localize } from 'react-redux-i18n';

class CampaignHeader extends React.Component {
  render() {
    let { campaign, socialAccount } = this.props;
    let { name, buyingType, startDate, endDate, spendCap, status } = campaign;
    let profile = {
      avatar: socialAccount.information.avatar,
      network: socialAccount.network,
      name: socialAccount.information.name
    };
    return (
      <div className="row campaign-header">
        <div className="col-md-6 profile">
          <SocialAvatar avatar={profile.avatar} network={profile.network} name={profile.name} size="75"/>
          <div className="data">
            <h2>{name}</h2>
            <span>{buyingType}</span>
            <span>{status.effective}</span>
          </div>
        </div>

        <div className="col-md-6 metrics">
          <div className="spend-cap">
            <div className="form-group">
              <label htmlFor="campaignName">
                Presupuesto
              </label>
              <p className="form-control-static">
                <Localize value={Number(spendCap) / 100} options={{
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }}/> USD
              </p>
            </div>
          </div>
          <div className="dates row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="campaignName">
                  Fecha de Inicio
                </label>
                <p className="form-control-static">{moment(new Date(startDate)).format('DD/MM/YYYY hh:mm A')}</p>
              </div>

            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="campaignName">
                  Fecha de Fin
                </label>
                <p className="form-control-static">{moment(new Date(endDate)).format('DD/MM/YYYY hh:mm A')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default CampaignHeader;
