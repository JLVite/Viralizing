import React from 'react';
import swal from 'sweetalert2';
import { Translate } from 'react-redux-i18n';

class AccountPagesLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: []
    };

    this.selectPage = this.selectPage.bind(this);
    this.connectPages = this.connectPages.bind(this);
  }

  selectPage(page) {
    let component = this;
    return function () {
      console.log('SELECT_PAGE');
      let newState = { ...component.state };
      let index = newState.selected.indexOf(page);
      if (index === -1) {
        newState.selected.push(page);
      } else {
        newState.selected.splice(page, 1);
      }
      component.setState(newState);
    };
  }

  connectPages() {
    let { accountID } = this.props;
    let component = this;
    let pages = this.state.selected.map((p) => p.id);
    console.log('CONNECT_PAGES', accountID, pages);
    Meteor.call('connect-facebook-pages', accountID, pages, function (err, res) {
      console.log('CONNECT_WITH_CALLBACK', arguments);
      if (err) {
        if (err.error === 500) {
          err.error = 'Failed to connect account.';
        }
        notie.alert(3, err.error, 3);
        return;
      }
      console.log('CONNECTION_SUCCESFUL', res);
      component.props.refetch().then(function () {
        component.props.close();
        //component.props.history.push("/accounts/edit/" + res);
      });
    });
  }

  render() {
    let { pages, groups } = this.props;
    return (
      <div>
        <div className="row pages-list">
          {[...pages, ...groups].map((page) => (
            <div className={'col-md-6 list-group-item ' + (this.state.selected.indexOf(page) == -1 ? '' : 'active')}
                 key={page.id} onClick={this.selectPage(page)}>
              <div className="selected">
                <i className="icon wb-check"/>
              </div>
              <div className="media">
                <div className="media-left">
                  <a className="avatar" href="javascript:void(0)">
                    <img className="img-fluid" src={page.picture ? page.picture : page.icon} alt="..."/>
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{page.name}</h4>
                  <small>{page.category}</small>
                </div>
                <div className="media-right">

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <a className="btn btn-primary pull-right" onClick={this.connectPages}>Connect Pages</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPagesLayout;
