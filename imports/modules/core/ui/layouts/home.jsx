import React from 'react';
import { connect } from 'react-redux';
import ListsContainer from '../container/news';
import PromotedAccountsContainer from '../container/promoted-accounts';
import BlogContainer from '../container/blog';
import AvailableCampaignsContainer from '../container/campaigns';

class Home extends React.Component {
  render() {
    return (
      <div className="home page-content container-fluid">
        <ListsContainer locale={this.props.locale}/>
        <BlogContainer locale={this.props.locale}/>
        <PromotedAccountsContainer/>
        <AvailableCampaignsContainer/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    locale: state.i18n.locale
  };
})(Home);
