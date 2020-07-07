export const toggleSearch = (status) => {
  return {
    type: 'TOGGLE_SEARCH',
    payload: status,
  }
}

export const searchProducts = (products) => {
  return {
    type: 'SEARCH_PRODUCTS',
    payload: products,
  }
}
