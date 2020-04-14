import { FETCH_PRODUCTS } from '../actions/types'

const initState = {
  products: [],
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}

export default cartReducer;