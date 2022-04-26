import React from 'react';
import SocialAvatar from './social-avatar';

class PromotedBlock extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Core.' + key;
    };
    let { campaigns, title } = this.props;
    return (
      <div>
        <div className="available-block">
          <div className="list">
            {campaigns.map(a => (
                <div className="avatar-wrapper" key={a._id}>
                    <SocialAvatar 
                                  id={a._id}
                                  avatar={a.information.profile}
                                  name={a.information.name}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PromotedBlock;

