import React from 'react';
import { Translate, I18n, Localize } from 'react-redux-i18n';
import SocialAvatar from '../../../../../core/ui/components/social-avatar';

class TotalBreakdown extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.invites.edit.form.total.' + key;
    };
    let getPrice = function (influencer, invite) {
      if (invite.budget === 'full') {
        switch (invite.type) {
          case 'post':
            return influencer.pricing.post;
          case 'profile':
            return influencer.pricing.profilePicture;
          case 'cover':
            return influencer.pricing.coverPhoto;
          case 'hourNoPost':
            return influencer.pricing.noPostHour;
          case 'dayNoPost':
            return influencer.pricing.noPostDay;
          case 'share':
            return influencer.pricing.share;
        }
      } else {
        return Number(invite.budget);
      }

    };
    let { currentInvite, values, commissions } = this.props;
    return (
      <div className="invite-total">
        <table className="table">
          <thead>
          <tr>
            <th><Translate value={getTranslation('breakdown.table.headers.concept')}/></th>
            <th><Translate value={getTranslation('breakdown.table.headers.amount')}/></th>
          </tr>
          </thead>
          <tbody>

          {values.paidInfluencers.map((influencer, i) => (
            <tr key={i}>
              <td>
                <SocialAvatar avatar={influencer.information.avatar}
                              network={influencer.network}
                              name={(influencer.information.name || '') + ' ' + (influencer.information.lastName || '')}
                              size="50"/>
                {(influencer.information.name || '') + ' ' + (influencer.information.lastName || '')}
              </td>
              <td>
                <Localize value={getPrice(influencer, currentInvite)} options={{
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }}/> USD
              </td>
            </tr>
          ))}

          <tr className="bold">
            <td><strong><Translate value={getTranslation('subtotal')}/></strong></td>
            <td>
              <Localize value={values.subtotal} options={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }}/> USD
            </td>
          </tr>
          <tr className="bold">
            <td><strong>#Viralizing:</strong></td>
            <td>
              {commissions.hashtagCommission * 100}%
            </td>
          </tr>
          <tr className="bold">
            <td><strong><Translate value={getTranslation('commission')}/></strong></td>
            <td>
              {commissions.appCommission * 100}%
            </td>
          </tr>
          <tr className="bold">
            <td><strong><Translate value={getTranslation('total')}/></strong></td>
            <td>
              <Localize value={values.total} options={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }}/> USD
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default TotalBreakdown;
