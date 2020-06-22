export const toggleCart = (status) => {
  return {
    type: 'TOGGLE_CART',
    payload: status,
  }
}
