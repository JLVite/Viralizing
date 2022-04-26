import React from 'react';
import { Translate, I18n, Localize } from 'react-redux-i18n';
import Modal from 'react-modal';
import TotalBreakdown from '../total/breakdown';

class CampaignTableViewTotal extends React.Component {
  constructor() {
    super();

    this.state = {
      modal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    let newState = this.state;
    newState.modal = false;
    this.setState(newState);
  }

  openModal() {
    let newState = this.state;
    newState.modal = true;
    this.setState(newState);
  }

  calculateTotal(invite, hashtagCommission, appCommission) {
    let available = invite.invitesAvailable;
    available = available - invite.influencers.length;

    let res = {
      subtotal: 0,
      total: 0,
      paidInfluencers: []
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
    let teamAttackMembers = [].concat.apply([], invite.teamAttacks.map(t => t.members));
    if (available > 0) {
      for (let i = 0; i < available; i++) {
        let influencer = teamAttackMembers[i];
        res.paidInfluencers.push(influencer);
        res.subtotal += Number(getPrice(influencer, invite));
      }
    }
    res.total = res.subtotal + (res.subtotal * hashtagCommission) + (res.subtotal * appCommission);

    return res;
  }

  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.invites.edit.form.total.' + key;
    };
    let hashtagCommission = 0.10;
    let appCommission = 0.18;
    let { currentInvite } = this.props;
    let values = this.calculateTotal(currentInvite, hashtagCommission, appCommission);
    return (
      <div className="panel invite-total">
        <div className="panel-heading">
          <h3 className="panel-title">
            <Translate value={getTranslation('title')}/> <i
            className="fa fa-expand pull-right cursor-pointer" onClick={this.openModal} aria-hidden="true"/>
          </h3>
        </div>
        <div className="panel-body container-fluid">
          <table className="table">
            <tbody>
            <tr>
              <td><Translate value={getTranslation('influencers')}/>:</td>
              <td>
                <Localize value={values.subtotal} options={{
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }}/> USD
              </td>
            </tr>
            <tr>
              <td>#Viralizing</td>
              <td>10%</td>
            </tr>
            <tr>
              <td><Translate value={getTranslation('commission')}/></td>
              <td>18%</td>
            </tr>
            <tr>
              <td><Translate value={getTranslation('total')}/></td>
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
        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Example Modal">
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true"/>
          </button>
          <TotalBreakdown currentInvite={currentInvite}
                          values={values}
                          commissions={{ appCommission, hashtagCommission }}/>
        </Modal>
      </div>
    );
  }
}

export default CampaignTableViewTotal;
