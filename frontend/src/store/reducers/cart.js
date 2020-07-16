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
      return {
        ...state,
        products: state.products.map(item => {
          if (payload.product.name === item.product.name && payload.size === item.size) {
            return { ...item, quantity: item.quantity + payload.quantity }
          }

          return { ...item }
        })
      }

    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(item => {
          return item.size !== payload.size && item.name !== payload.product.style;   
        }),
      }
    
    default:
      return state
  }
}

export default cartReducer;
