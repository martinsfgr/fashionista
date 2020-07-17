import { formatProductPrice, convertToBRL } from '../../utils';

const INITIAL_STATE = {
  isActive: false,
  products: [],
  subtotal: '',
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

    case 'GET_SUBTOTAL':
      const subtotalOrder = state.products.reduce((accumulator, item) => {
        let productTotalPrice = formatProductPrice(item.product.actual_price) * item.quantity;
        return accumulator + productTotalPrice;
      }, 0); 

      return {
        ...state,
        subtotal: convertToBRL(subtotalOrder),
      }
    
    default:
      return state
  }
}

export default cartReducer;
