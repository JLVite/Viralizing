import React from 'react';
import { Link } from 'react-router';
import { Translate } from 'react-redux-i18n';
import NoAccounts from './no-accounts';

class AccountsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    let getTranslation = (key) => {
      return 'Core.loading.' + key;
    };
    let { accounts, socialAccountID } = this.props;
    if (accounts.length === 0) return <NoAccounts/>;
    return (
      <div className="advertising-accounts">
        <div className="row pages-list">
          {accounts.map((a) => (
            <div className="col-md-6 list-group-item" key={a._id}>
              <div className="media">
                <Link to={`/advertising/facebook/${socialAccountID}/act_${a._id}`}>
                  <div className="media-left">
                    <a className="avatar" href="javascript:void(0)">
                      <img className="img-fluid"
                           src="https://s3.amazonaws.com/ibol-app-media/icons/facebook-ad-account.png" alt="..."/>
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{a.name}</h4>
                    <small>{a.endAdvertiser.name ? a.endAdvertiser.name : '-'}</small>
                  </div>
                  <div className="media-right">

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AccountsList;

