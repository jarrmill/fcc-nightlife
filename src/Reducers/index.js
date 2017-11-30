import {combineReducers} from 'redux';
import authReducer from './auth_reducer';
import restReducer from './rest_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurants: restReducer,
  errors: errorReducer
});

export default rootReducer;
