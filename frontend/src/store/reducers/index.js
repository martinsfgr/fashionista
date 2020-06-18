import { combineReducers } from 'redux';

import productsReducer from './products';

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;
