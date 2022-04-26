import React from 'react';
import Slider from 'react-slick';
import { Translate, I18n } from 'react-redux-i18n';

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

class NewsList extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.home.news.' + key;
    };
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightNavButton/>,
      prevArrow: <LeftNavButton/>
    };
    let { data } = this.props;
    return (
      <div>
        <div className="news">
          <div className="container-fluid">
            <p style={{ fontSize: "25px",
                        marginLeft: "30px",
                        color: "black"}}><Translate value={getTranslation('news')}/></p>
            <Slider {...settings} className="news-slider">
              {data.map((article, i) => (
                <div className="news-article" key={i}>
                  <div className="overlay" style={{ background: 'url(http://viralizing.me' + article.image + ')' }}>
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
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsList;
