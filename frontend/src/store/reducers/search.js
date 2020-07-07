const INITIAL_STATE = {
  isActive: false,
  products: [],
}

const searchReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        isActive: payload,
      }
    
    case 'SEARCH_PRODUCTS':
      return {
        ...state,
        products: payload
      }
      
    
    default:
      return state
  }
}

export default searchReducer;
