const INITIAL_STATE = {
  products: []
}

const productsReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: payload.data
      }
    
    default:
      return state
  }
}

export default productsReducer;
