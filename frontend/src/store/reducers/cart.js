const INITIAL_STATE = {
  isActive: false,
  products: [],
}

const cartReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        isActive: payload,
      }
    
    case 'ADD_PRODUCT_TO_CART':
      const newProduct = [...state.products, payload]
      return {
        ...state,
        products: newProduct,
      }
    
    case 'EDIT_QUANTITY':
      let cartProducts = state.products;
      return {
        ...state,
        products: cartProducts.map(item => {
          return {...item, quantity: item.quantity + 99}
        })
      }
    
    default:
      return state
  }
}

export default cartReducer;
