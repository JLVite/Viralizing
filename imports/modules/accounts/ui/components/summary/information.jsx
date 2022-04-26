import React from 'react';
import { Translate } from 'react-redux-i18n';
import uuid from 'uuid';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

class SummaryInformation extends React.Component {
  render() {
    const getTranslation = key => `Accounts.edit.tabs.${key}`;
    const getTooltip = title => (
      <Tooltip id={uuid.v4()}>
        {title}
      </Tooltip>
    );
    const {
      settings, information, campaignsCount, campaignInviteSentCount,
    } = this.props;
    const titleStyle = {
      width: '70px',
      transform: 'translateY(10px)',
    };
    return (
      <div className="col-md-5 account-summary-profile">
        <div className="panel">
          <div className="panel-body slim">
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12">
                    <h4><Translate value={getTranslation('summary.information.profile')} /></h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-avatar">
                      <SocialAvatar
                        avatar={information.avatar}
                        name={`${information.name || ''} ${information.lastName || ''}`}
                        size="50"
                      />
                      <div className="title" style={titleStyle}>
                        {`${information.name || ''} ${information.lastName || ''}`}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="informationName">
                        <Translate value={getTranslation('settings.form.accountIs.title')} />
                      </label>
                      <div className="form-control-static">
                        <OverlayTrigger
                          placement="top"
                          overlay={getTooltip(<Translate
                            value={getTranslation('settings.form.accountIs.brand')}
                          />)}
                        >
                          <div
                            className={`account-type-icon ${settings.type.brand ? (settings.type.influencer ? 'both' : 'brand') : 'not'}`}
                          >
                            {settings.type.brand ? (
                              <Translate
                                value={getTranslation('settings.form.accountIs.badges.brand')}
                              />
                            ) : (
                              <i
                                className="wb-close"
                              />
                            )}
                            <div className="name">
                              <Translate value={getTranslation('settings.form.accountIs.brand')} />
                            </div>
                          </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={getTooltip(<Translate
                            value={getTranslation('settings.form.accountIs.influencer')}
                          />)}
                        >
                          <div
                            className={`account-type-icon ${settings.type.influencer ? (settings.type.brand ? 'both' : 'influencer') : 'not'}`}
                          >
                            {settings.type.influencer ? (
                              <Translate
                                value={getTranslation('settings.form.accountIs.badges.influencer')}
                              />
                            ) : (
                              <i
                                className="wb-close"
                              />
                            )}
                            <div className="name">
                              <Translate value={getTranslation('settings.form.accountIs.influencer')} />
                            </div>
                          </div>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">
                <h4><Translate value={getTranslation('summary.information.campaigns.title')} /></h4>
                <div className="row campaigns" style={{ marginRight: '15px' }}>
                  <div className="col-md-4">
                    <div className="count">
                      {campaignsCount + campaignInviteSentCount}
                      <div className="title">
                        <Translate value={getTranslation('summary.information.campaigns.labels.total')} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="count">
                      {campaignsCount}
                      <div className="title">
                        <Translate value={getTranslation('summary.information.campaigns.labels.created')} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="count">
                      {campaignInviteSentCount}
                      <div className="title">
                        <Translate value={getTranslation('summary.information.campaigns.labels.partOf')} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h4><Translate value={getTranslation('summary.information.areas')} /></h4>
                <div className="category-list" />
              </div>
              <div className="col-md-4">
                <h4><Translate value={getTranslation('summary.information.categories')} /></h4>
                <div className="category-list" />
              </div>
              <div className="col-md-4">
                <h4><Translate value={getTranslation('summary.information.specialty')} /></h4>
                <div className="category-list" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryInformation;
