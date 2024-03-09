import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
});
