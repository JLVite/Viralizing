import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';

class SearchOverlap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let getTranslation = (key) => {
      return 'Core.navBar.search.' + key;
    };
    return (
      <div className={'collapse navbar-search-overlap ' + (this.props.open ? 'in' : '')} id="site-navbar-search">
        <form role="search">
          <div className="form-group">
            <div className="input-search">
              <i className="input-search-icon wb-search" aria-hidden="true"/>
              <input type="text" className="form-control" name="site-search"
                     placeholder={I18n.t(getTranslation('placeholder'))}/>
              <button type="button"
                      className="input-search-close icon wb-close"
                      onClick={this.props.toggle}
                      aria-label="Close"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchOverlap;
