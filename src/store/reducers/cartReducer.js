import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, SEARCH_PRODUCTS, SHOW_SEARCH, CHANGE_CATEGORY } from '../actions/types'

const cart = JSON.parse(localStorage.getItem('cart')) || {}
const price = localStorage.getItem('totalPrice') || 0
const items = localStorage.getItem('totalItems') || 0

const initState = {
  products: [],
  cart: cart,
  totalItems: items,
  totalPrice: price,
  searchTerm: '',
  showSearch: true,
  category: 'all'
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

      localStorage.setItem('cart', JSON.stringify(currCart))
      localStorage.setItem('totalPrice', newTotalPrice)
      localStorage.setItem('totalItems', newTotalItems)

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

      localStorage.setItem('cart', JSON.stringify(currCart))
      localStorage.setItem('totalPrice', newTotalPrice)
      localStorage.setItem('totalItems', newTotalItems)

      return {
        ...state,
        cart: currCart,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }

    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchTerm: action.term
      }
    case SHOW_SEARCH:
      return {
        ...state,
        showSearch: action.value
      }
    
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.value
      }


    default:
      return state;
  }
}

export default cartReducer;