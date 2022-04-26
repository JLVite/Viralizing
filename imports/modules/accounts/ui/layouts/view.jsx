import React from 'react';
import Header from '../components/header';
import Tabs from '../components/view/tabs';

class ViewAccount extends React.Component {
  render() {
    const { account } = this.props;
    return (
      <div>
        <Header account={account} boolean={false}/>
        <Tabs account={account}/>
      </div>
    );
  }
}

export default ViewAccount;
