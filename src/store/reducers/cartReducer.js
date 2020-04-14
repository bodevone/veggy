import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

const initState = {
  products: [],
  cart: {},
  totalItems: 0,
  totalPrice: 0
}

const cartReducer = (state = initState, action) => {
  let currCart
  let productID
  let newTotalItems
  let newTotalPrice

  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_TO_CART:
      let addedProduct = action.product
      currCart = state.cart
      productID = addedProduct.id

      let exists = currCart[productID]

      if (!exists) {
        addedProduct.quantity = 0
        currCart[productID] = addedProduct
      }

      currCart[productID].quantity += 1

      newTotalItems = 0
      newTotalPrice = 0

      for (const product of Object.values(currCart)) {
        newTotalPrice += product.price * parseInt(product.quantity)
      }

      newTotalItems = Object.keys(currCart).length

      return {
        ...state,
        cart: currCart,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }
      
    case REMOVE_FROM_CART:
      let removedProduct = action.product
      currCart = state.cart
      productID = removedProduct.id

      currCart[productID].quantity -= 1
      if (currCart[productID].quantity <= 0) {
        delete currCart[productID]
      }

      newTotalItems = 0
      newTotalPrice = 0

      if (currCart) {
        for (const product of Object.values(currCart)) {
          newTotalPrice += product.price * parseInt(product.quantity)
        }
        newTotalItems = Object.keys(currCart).length
      }

      return {
        ...state,
        cart: currCart,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }

    default:
      return state;
  }
}

export default cartReducer;