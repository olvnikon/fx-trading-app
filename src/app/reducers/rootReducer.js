// @flow
import { combineReducers } from 'redux';
import homeReducer from '../../pages/Home/homeReducers';

const combinedReducer = combineReducers({
  ...homeReducer,
});

export default combinedReducer;
