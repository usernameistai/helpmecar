import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import reg from './reg';

export default combineReducers({
  alert,
  auth,
  reg,
  profile,
  post
});