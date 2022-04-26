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
    style.zIndex = "1"
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

class AvailableCampaigns extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.home.campaigns.' + key;
    };

    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightNavButton/>,
      prevArrow: <LeftNavButton/>
    };
    let { data } = this.props;
    console.log("CAMPAIGNS",data)
    let campaign1 = _.sampleSize(data, 3);
    
    return (
      <div className="panel available-campaigns-slider">
        <div className="panel-body container-fluid">
          <h3 className="panel-title"><Translate value={getTranslation('title')}/></h3>
          <Slider {...settings} className="campaigns-slider">
            <div className="block">
              <Block campaigns={campaign1}/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default AvailableCampaigns;

