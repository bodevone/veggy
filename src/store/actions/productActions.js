import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, SEARCH_PRODUCTS } from './types';

export const getProducts = () => (dispatch, getState, axios) => {
  const url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
  axios.get(url).then(res => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data
    })
  });
};

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    product: product
  })
}

export const removeFromCart = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    product: product
  })
}

export const searchProduct = (term) => (dispatch) => {
  dispatch({
    type: SEARCH_PRODUCTS,
    term: term
  })
}