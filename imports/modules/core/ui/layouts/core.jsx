import { AppBundle } from '../../appBundle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './app';

let actions = {};

Object.keys(AppBundle).forEach(function (key) {
  let AppModule = AppBundle[key] || {};
  let moduleActions = AppModule.actions || false;
  if (moduleActions) {
    Object.keys(moduleActions).forEach(function (mkey) {
      actions[mkey] = moduleActions[mkey];
    });
  }
});

function mapStateToProps(state) {
  return {
    ui: state.ui,
    forms: state.form
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(App);
