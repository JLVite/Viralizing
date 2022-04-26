import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { setLocale } from 'react-redux-i18n';
import Store from '../../../../../store';
import { languages } from '../../../../../translations';

/*
 let langs=[];
 Object.keys(isoLangs).forEach((code)=>{langs.push(isoLangs[code])})
 console.log("INT_MENU",languages);
 {langs.map((lang,i) => {
 return (
 <MenuItem eventKey={i} key={i} className="dropdown-item" onClick={()=>{this.selectLanguage(lang.code)}}>
 <span className={"flag-icon "+lang.icon}/> {lang.native}
 </MenuItem>
 )
 })}
 * */

class IntMenu extends React.Component {
  constructor(props) {
    super(props);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  selectLanguage(lang = 'es') {
    Store.dispatch(setLocale(lang));
    window.localStorage.setItem('APPLICATION_LANGUAGE', lang);
    this.forceUpdate();
  }

  render() {
    let locale = Store.getState().i18n.locale,
      currentLang = languages.filter((lang) => lang.code === locale)[0];
    return (
      <NavDropdown eventKey={3}
                   title={<span className={'flag-icon ' + (currentLang ? currentLang.icon : 'flag-icon-us')}></span>}
                   id="int-menu-dropdown" className="nav-item no-caret title-case-dropdown">
        {languages.map((lang, i) => {
          return (
            <MenuItem eventKey={i} key={i} className="dropdown-item" onClick={() => {this.selectLanguage(lang.code);}}>
              <span className={'flag-icon ' + lang.icon}/> {lang.native}
            </MenuItem>
          );
        })}
      </NavDropdown>
    );
  }
}

export default IntMenu;
