import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import _customersReducer from './reducers';

const initialState = {};
const customerReducers = combineReducers({ customers: _customersReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(customerReducers, initialState, composeEnhancers(applyMiddleware(promiseMiddleware)));

export { store };
