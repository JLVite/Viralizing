import React from 'react';
import { Link } from 'react-router';
import AppSettings from '../../../../settings';
import { Translate } from 'react-redux-i18n';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentYear = moment().get('year');
    let getTranslation = (key) => {
      return 'Core.notFound.' + key;
    };
    return (
      <div className="page-error">
        <div className="page-content vertical-align-middle">
          <header>
            <h1 className="animation-slide-top">404</h1>
            <p><Translate value={getTranslation('title')}/></p>
          </header>
          <p className="error-advise"><Translate value={getTranslation('description')}/></p>
          <Link className="btn btn-primary btn-round" to="/"><Translate value={getTranslation('button')}/></Link>

          <footer className="page-copyright">
            <p>{AppSettings.name}</p>
            <p>© {currentYear}. <Translate value={getTranslation('copyright')}/></p>
            <div className="social">
              <a href="javascript:void(0)">
                <i className="icon bd-twitter" aria-hidden="true"/>
              </a>
              <a href="javascript:void(0)">
                <i className="icon bd-facebook" aria-hidden="true"/>
              </a>
              <a href="javascript:void(0)">
                <i className="icon bd-dribbble" aria-hidden="true"/>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export { NotFound } ;
