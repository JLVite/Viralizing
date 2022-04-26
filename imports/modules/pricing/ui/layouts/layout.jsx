import React from 'react';
import PricingTable from '../components/table/index';

class Layout extends React.Component {
  render() {
    let getTranslation = (key) => {
      return 'Pricing.table.' + key;
    };
    return (
      <div>
        <PricingTable/>
      </div>
    );
  }
}

export default Layout;
