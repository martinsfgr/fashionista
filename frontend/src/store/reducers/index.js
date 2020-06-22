import { combineReducers } from 'redux';

import productsReducer from './products';
import cartReducer from './cart';
import searchReducer from './search';

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  search: searchReducer,
});

export default reducers;
