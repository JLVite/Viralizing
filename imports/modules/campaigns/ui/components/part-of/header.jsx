import React from 'react';
import { Translate } from 'react-redux-i18n';

class Header extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.information.' + key;
    };
    let { campaign } = this.props;
    let { information } = campaign;
    return (
      <div className="campaign-information">
        <div className="header">
          <div className="cover">
            <div className="back" style={{ background: (information.cover ? 'url(' + information.cover + ')' : '') }}/>
          </div>

          <div className="profile">
            <div className="back"
                 style={{ background: (information.profile ? 'url(' + information.profile + ')' : '') }}/>
          </div>
          <div className="name">
            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="campaignName">
                    <Translate value={getTranslation('form.name')}/>
                  </label>
                  <p className="form-control-static">{information.name || '-'}</p>
                </div>
              </div>
              <div className="col-md-5 align-center">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="campaignName">
                        <Translate value={getTranslation('form.dateStart')}/>
                      </label>
                      <p
                        className="form-control-static">{moment(new Date(information.dateStart)).format('DD/MM/YYYY')}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="campaignName">
                        <Translate value={getTranslation('form.dateEnd')}/>
                      </label>
                      <p
                        className="form-control-static">{moment(new Date(information.dateEnd)).format('DD/MM/YYYY')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
