import { SET_PRODUCTS, SELECT_PRODUCT } from '../actions/ProductActions';

const initialState = {
  products: [],
  selectedProductId: '',
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProductId: action.payload,
      };
    default:
      return state;
  }
};