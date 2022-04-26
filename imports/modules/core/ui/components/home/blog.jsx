import React from 'react';
import Slider from 'react-slick';
import { Translate, I18n } from 'react-redux-i18n';

class LeftNavButton extends React.Component {
  render() {
    let { className, onClick, style } = this.props;
    style.height = "50px"
    style.width = "50px"
    style.zIndex = "1";
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

class Blog extends React.Component {
  constructor() {
    super();

    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(article,i){
    let getTranslation = (key) => {
      return 'Core.home.news.' + key;
    };
    return (
      <div className='blog-container' key={i}>
        <div className="overlay" style={{ background: 'url(http://viralizing.me' + article.image + ')',
                                          backgroundSize:'cover',
                                          width:'400px',
                                          height:'226px' }}>
          <div className="content">
            <div className="title">
              {article.title}
            </div>
            <div className="author">
              <Translate value={getTranslation('article.by')}/> <span
              className="author">{article.author}</span>
            </div>
            <div className="read-more">
              <a href={article.link} target="_blank">
                <Translate value={getTranslation('article.more')}/>
                <i className="icon wb-chevron-right" aria-hidden="true"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <RightNavButton/>,
      prevArrow: <LeftNavButton/>
    };
    const {data}=this.props;
    return (
      <div>
        <p style={{"fontSize":"25px","marginLeft":"50px","color":"black"}}>Blog</p> 
        <Slider {...settings} className="blog-slider">
          <div className='wrapper-blog'>
            {data.map((article,i)=>this.renderCard(article,i))}
          </div>
        </Slider>
      </div>
    );
  }
}

export default Blog;
