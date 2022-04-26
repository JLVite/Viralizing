import React from 'react';
import { Translate, Localize } from 'react-redux-i18n';

class AnalyticsPosts extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Accounts.edit.tabs.status.posts.' + key;
    };
    let render = true;
    let { data } = this.props;
    let values = Object.keys(data).filter((key) => {
      let val = data[key];
      return typeof (val) === 'string';
    });

    if (values.length === 0) {
      render = false;
    }
    if (!render) {
      return <div/>;
    }
    return (
      <div className="col-lg-6 col-md-12">
        {/* Widget */}
        <div className="widget">
          <div className="widget-content padding-30 bg-white">
            <div className="row no-space">
              <div className="col-sm-6">
                <div className="counter counter-lg text-left padding-left-20">
                  <span className="counter-number"><Localize value={Number(data.posts)}
                                                             options={{ maximumFractionDigits: 0 }}/></span>
                  <div className="counter-label text-uppercase"><Translate value={getTranslation('posts')}/></div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter counter-lg text-left padding-left-20">
                  <span className="counter-number"><Localize value={Number(data.postsPerDay)}
                                                             options={{ maximumFractionDigits: 2 }}/></span>
                  <div className="counter-label text-uppercase"><Translate value={getTranslation('postsPerDay')}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Widget */}
      </div>
    );
  }
}

export default AnalyticsPosts;
