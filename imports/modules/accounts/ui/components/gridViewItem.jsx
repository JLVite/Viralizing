import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

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
    const { size } = this.state;
    const { d } = this.props;
    let color = '';
    if (d.manager._id === Meteor.userId() && d.owner._id === Meteor.userId()) {
      color = 'rgba(255,255,255, 0.4)';
    } else if (d.manager._id !== Meteor.userId() && d.owner._id === Meteor.userId()) {
      color = 'rgba(215,157,10, 0.4)';
    } else if (d.manager._id === Meteor.userId() && d.owner._id !== Meteor.userId()) {
      color = 'rgba(166, 8, 207, 0.4)';
    }
    return (
      <div
        ref={el => this.wrapper = el}
        className="profile-card card-account col-md-2 col-md-offset-1"
        style={{ marginLeft: '25px', height: '465px' }}
      >
        <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'flex-end' }}>
          <p style={{
            margin: '8px 45px 8px 8px',
            fontWeight: 'bold',
            position: 'absolute',
            left: '0',
          }}
          >
Titular:
            {' '}
            {d.owner.profile.name}
            {' '}
            {d.owner.profile.lastName}

          </p>
          <img
            src="/images/influencer.png"
            style={{
              height: '20px',
              width: '20px',
              margin: '5px',
            }}
          />
          <img
            src="/images/marca.png"
            style={{
              height: '20px',
              width: '20px',
              margin: '5px',
            }}
          />
        </div>
        <div className="container-img" style={{ height: '100%' }}>
          <div style={{ height: size, position: 'relative' }}>
            <Link to={`/accounts/edit/${d._id}`}>
              <div style={{
                backgroundImage: `url(${d.information.avatar})`,
                height: size,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '245px 235px',
              }}
              />
            </Link>
            <div className="tag" style={{ backgroundColor: color }}>
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      <i className={`social-icon ${d.network}`} />
                    </th>
                    <th style={{ color: 'white' }}>
                      <img
                        className="fan-page"
                        src="https://s3.amazonaws.com/ibol-app-media/icons/fan-page.svg"
                        style={{ height: '20px', width: '20px' }}
                      />
                      {d.information.name}
                      {' '}
                      {d.information.lastName}
                    </th>
                    <th style={{ display: 'inline-flex' }}>
                      <p style={{ fontWeight: 'bold' }}>4.20</p>
                      <img src="/images/star.png" style={{ height: '15px', width: '15px' }} />
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>Administrador</th>
                <th>N. de campañas</th>
                <th>Costo por publicación</th>
              </tr>
              <tr>
                <td>
                  {d.manager.profile.name}
                  {' '}
                  {d.manager.profile.lastName}
                </td>
                <td>{d.campaignsCount || 0}</td>
                <td>
                  <p style={{ color: 'rgb(210, 147, 32)' }}>
$
                    {' '}
                    {d.pricing.post || 0}
                    {' '}
USD
                  </p>

                </td>
              </tr>
              <tr>
                <th><img src="/images/like.png" /></th>
                <th><img src="/images/alcance.png" /></th>
                <th><img src="/images/magnet.png" /></th>
              </tr>
              <tr>
                <td>100K</td>
                <td>14K</td>
                <td>200K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GridViewItem;
