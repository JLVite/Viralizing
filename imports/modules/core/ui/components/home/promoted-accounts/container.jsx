import React from 'react';
import Block from './block/container';
import Slider from 'react-slick';
import { Translate, I18n } from 'react-redux-i18n';
import _ from 'lodash';

class LeftNavButton extends React.Component {
  render() {
    let { className, onClick, style } = this.props;
    style.height = "50px"
    style.width = "50px"
    return <div className={className} onClick={onClick} style={style}><img src="/images/ios-arrow-back.svg"/></div>;
  }
}

class RightNavButton extends React.Component {
  render() {
    let { className, onClick, style } = this.props;
    style.height = "50px"
    style.width = "50px"
    return <div className={className} onClick={onClick} style={style}><img src="/images/ios-arrow-forward.svg"/></div>;
  }
}

class PromotedAccounts extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.home.influencers.' + key;
    };

    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <RightNavButton/>,
      prevArrow: <LeftNavButton/>
    };
    let { data } = this.props;
    let accounts1 = _.sampleSize(data, 3);
    let accounts2 = _.sampleSize(data, 3);
    let accounts3 = _.sampleSize(data, 3);
    return (
      <div className="panel promoted-accounts-slider">
        <div className="panel-body container-fluid">
          <h3 className="panel-title"><Translate value={getTranslation('title')}/></h3>
          <Slider {...settings} className="promoted-slider">
            <div className="block">
              <Block accounts={accounts1}
                     title={`${I18n.t(getTranslation('section.for'))} Deporte`}/>
            </div>
            <div className="block">
              <Block accounts={accounts2}
                     title={`${I18n.t(getTranslation('section.for'))} Comida`}/>
            </div>
            <div className="block">
              <Block accounts={accounts3}
                     title={`${I18n.t(getTranslation('section.for'))} Música`}/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default PromotedAccounts;

