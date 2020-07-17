export const toggleCart = (status) => {
  return {
    type: 'TOGGLE_CART',
    payload: status,
  }
}

export const addToCart = (product={}) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: product,
  }
}

export const editProductQuantity = (product={}) => {
  return {
    type: 'EDIT_QUANTITY',
    payload: product,
  }
}

export const removeProduct = (product={}) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product,
  }
}

export const getSubtotal = () => {
  return {
    type: 'GET_SUBTOTAL',
  }
}
