const INITIAL_STATE = {
  isActive: false,
}

const cartReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        isActive: payload,
      }
    
    default:
      return state
  }
}

export default cartReducer;
