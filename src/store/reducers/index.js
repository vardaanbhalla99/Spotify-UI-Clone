import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loaderReducer from './loaderReducer';
import listReducer from './listReducer';

export default combineReducers({
  loginReducer,
  loaderReducer,
  listReducer,
});
