import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import _ from 'lodash';


class LeftNavButton extends React.Component {
  render() {
    const { className, onClick, style } = this.props;
    style.height = '50px';
    style.width = '50px';
    return <div className={className} onClick={onClick} style={style}><img src="/images/ios-arrow-back.svg" /></div>;
  }
}

class RightNavButton extends React.Component {
  render() {
    const { className, onClick, style } = this.props;
    style.height = '50px';
    style.width = '50px';
    return <div className={className} onClick={onClick} style={style}><img src="/images/ios-arrow-forward.svg" /></div>;
  }
}

class GridViewItem extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 0,
    };
  }

  componentDidMount() {
    if (this.wrapper && this.wrapper.offsetWidth) {
      this.setState({ size: this.wrapper.offsetWidth });
    }
  }

  render() {
    const { data } = this.props;
    const {
      manager, owner, brands, dateEnd, dateStart, profile,
    } = data;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />,

    };
    console.log('DATA',data)

    const SocialAvatar = (props) => {
      return (
          <div className={`social-avatar`} style={{height:props.size,width:props.size}}>
            <img src={props.avatar} alt={props.name}/>
          </div>
      );
    }

    const campStart = moment.utc(dateStart).format('DD-MM-YYYY');
    const campEnd = moment.utc(dateEnd).format('DD-MM-YYYY');

    let networkArray = _.uniq(brands.map(info=>info.network))
    return (
      <div ref={el => this.wrapper = el} className="campaign-card card-account col-md-2 col-md-offset-1">
        <div className="hearder-card">
          <p>
Titular:
            {manager.profile.name}
            {' '}
            {manager.profile.lastName}
          </p>
          <span className="ibol-label active" />
        </div>
        <div className="container-img">
          <div className="container-sliders">
            <Link to={`/campaigns/edit/${data._id}`}>
              <div style={{ height: '310px', width: '100%' }}>
                  <img src={profile} alt=""/>
              </div>
            </Link>
            <div className="tag">
              <SocialAvatar avatar={data.owner.profile.avatar} name={data.owner.profile.name} size={'45px'} />
              <img className="aproval" src="/images/aproval.png" />
              <div className="row names-title">
                <p className="col-md-12" style={{fontSize:'14px'}}>{data.name}</p>
                <p className="col-md-12">{owner.profile.name} {owner.profile.lastName}</p>
              </div>
            </div>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>Administrador</th>
                <th>Redes sociales</th>
                <th>Influencers</th>
              </tr>
              <tr>
                <td>
                  {manager.profile.name}
                  {' '}
                  {manager.profile.lastName}
                </td>
                <td>
                  {
                    networkArray.map((icon,i)=><i key={i} className={`social-icon ${icon}`}/>)
                  }
                </td>
                <td>
                    {
                        brands.slice(0, 2).map((data, i) => <SocialAvatar key={i} avatar={data.information.avatar} name={data.information.name} size={'30px'} />)
                    }
                </td>
              </tr>
              <tr>
                <th>Conjunto de anuncios</th>
                <th>Propuestas de anuncios</th>
                <th>Anuncios confirmados</th>
              </tr>
              <tr>
                <td>32</td>
                <td>244</td>
                <td>150</td>
              </tr>
              <tr>
                <th>Inicio de campaña</th>
                <th>Final de campaña</th>
                <th>Presupuesto total</th>
              </tr>
              <tr>
                <td>{campStart}</td>
                <td>{campEnd}</td>
                <td><p style={{ color: 'rgb(210, 147, 32)' }}>$  134.000 USD</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GridViewItem;
