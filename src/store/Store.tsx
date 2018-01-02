import * as Redux from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/mainReducer';

const enhancer = Redux.applyMiddleware(thunk, logger);

const store = Redux.createStore(reducer, {}, enhancer);

export default store;