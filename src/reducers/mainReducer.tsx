import * as Redux from 'redux';
import counterReducer from './counterReducer';

export default Redux.combineReducers ({
  count: counterReducer,
});