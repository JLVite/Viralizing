import React from 'react';
import SocialAvatar from './social-avatar';
import StarRatingComponent from 'react-star-rating-component';

class PromotedBlock extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.' + key;
    };
    let { accounts, title } = this.props;
    return (
      <div>
        <div className="promoted-block">
          <div className="title">
            {title}
          </div>
          <div className="list">
            {accounts.map(a => (
              <div className="avatar-wrapper" key={a._id}>
                <SocialAvatar avatar={a.information.avatar}
                              network={a.network}
                              name={a.information.name}
                              size="75"
                              type={a.information.type}/>
                <div style={{"marginLeft":"16px"}}>
                  <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={5}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{"marginLeft":"20px"}}>
          <p style={{"fontSize":"12px","display":"inline"}}>Ver más</p>
          <img src="/images/ios-arrow-forward.png" 
              style={{"height":"12px","width":"8px","color":"#c28c58","display":"inline","marginLeft":"5px"}}/>
        </div>
      </div>
    );
  }
}

export default PromotedBlock;

