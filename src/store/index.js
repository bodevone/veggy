import { createStore, applyMiddleware } from 'redux';
import cartReducer from './reducers/cartReducer';
import axios from 'axios'
import thunk from 'redux-thunk';


const store = createStore(
  cartReducer,
  applyMiddleware(thunk.withExtraArgument(axios))
);

export default store;
