import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

class LeftNavButton extends React.Component {
  render() {
    let { className, onClick, style } = this.props;
    return <div className={className} onClick={onClick} style={style}><i className="icon fa-chevron-left"
                                                                         aria-hidden="true"/></div>;
  }
}

class RightNavButton extends React.Component {
  render() {
    let { className, onClick, style } = this.props;
    return <div className={className} onClick={onClick} style={style}><i className="icon fa-chevron-right"
                                                                         aria-hidden="true"/></div>;
  }
}

class GalleryItem extends React.Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightNavButton/>,
      prevArrow: <LeftNavButton/>
    };
    let { elements, type } = this.props;
    let getItem = (item) => {
      if (type === 'image') {
        return (
          <img src={item} alt=""/>
        );
      } else {
        return <ReactPlayer url={item} controls={true}/>;
      }
      return item;
    };
    if(elements.length === 0){
      return null;
    }
    return (
      <div className="gallery-item">
        <Slider {...settings} className="gallery-slider">
          {elements.filter(e=>e).map((e, i) => (
            <div key={i} className="element" key={i}>
              {getItem(e)}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default GalleryItem;

