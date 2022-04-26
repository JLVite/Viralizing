import Routes from './routes';
import Reducers from '../reducers/bundle';
import Actions from '../actions/bundle';
import Translations from './translations';
import './social-connect';
import './permissions';

export default {
  reducers: Reducers,
  routes: Routes,
  actions: Actions,
  translations: Translations
};
