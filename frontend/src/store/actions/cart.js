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
