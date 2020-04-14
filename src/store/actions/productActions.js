import { FETCH_PRODUCTS } from './types';

export const getProducts = () => (dispatch, getState, axios) => {
  const url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
  axios.get(url).then(res => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data
    })
  });
};