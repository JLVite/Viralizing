import React from 'react';
import { Translate } from 'react-redux-i18n';
import SocialAvatar from '../../../../core/ui/components/social-avatar';

class Brands extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Campaigns.edit.tabs.summary.' + key;
    };

    let { brands, tilte } = this.props;
    return (
      <div className="brands-list">
        {tilte === false && (
          <h4>Brnads</h4>
        )}

        <div className="list">
          {brands.map((b) => (
            <SocialAvatar
              key={b._id}
              avatar={b.information.avatar}
              network={b.network}
              name={b.information.name}
              size="50"
              type={b.information.type}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Brands;
