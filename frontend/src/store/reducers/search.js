const INITIAL_STATE = {
  isActive: false,
}

const searchReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        isActive: payload,
      }
    
    default:
      return state
  }
}

export default searchReducer;
