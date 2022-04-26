import React from 'react';
import InvitesSummary from '../invites/table-view/container';
import Header from './header';

class Invites extends React.Component {
  render() {
    let { invites, campaign } = this.props;
    return (
      <div>
        <Header campaign={campaign}/>
        <div className="content-padding-30">
          <InvitesSummary invites={invites}
                          hasAccounts={true}
                          campaign={campaign}/>
        </div>
      </div>

    );
  }
}

export default Invites;
