import React from 'react';
import { Translate, Localize } from 'react-redux-i18n';

class AnalyticsFollows extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.status.follows.' + key;
    };
    let render = true;
    let columns = 'col-sm-4';
    let { data } = this.props;
    let values = Object.keys(data).filter((key) => {
      let val = data[key];
      return typeof (val) === 'string';
    });

    if (values.length === 0) {
      render = false;
    }
    if (values.length < 3) {
      columns = 'col-sm-6';
    }
    if (!render) {
      return <div/>;
    }
    return (
      <div className="col-lg-6 col-md-12">
        <div className="widget">
          <div className="widget-content padding-30 bg-white">
            <div className="row no-space">
              <div className={columns}>
                <div className="counter counter-lg text-left padding-left-20">
                  <span className="counter-number"><Localize value={Number(data.followers)}
                                                             options={{ maximumFractionDigits: 0 }}/></span>
                  <div className="counter-label text-uppercase"><Translate value={getTranslation('followers')}/></div>
                </div>
              </div>
              <div className={columns}>
                <div className="counter counter-lg text-left padding-left-20">
                  <span className="counter-number"><Localize value={Number(data.following)}
                                                             options={{ maximumFractionDigits: 2 }}/></span>
                  <div className="counter-label text-uppercase"><Translate value={getTranslation('following')}/></div>
                </div>
              </div>
              {data.profileLikes && (
                <div className={columns}>
                  <div className="counter counter-lg text-left padding-left-20">
                    <span className="counter-number"><Localize value={Number(data.profileLikes)}
                                                               options={{ maximumFractionDigits: 2 }}/></span>
                    <div className="counter-label text-uppercase"><Translate value={getTranslation('profileLikes')}/>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnalyticsFollows;
