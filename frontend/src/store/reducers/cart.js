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
      return {
        ...state,
        products: payload,
      }  
    
    default:
      return state
  }
}

export default cartReducer;
