export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const selectProduct = (productId) => {
  return {
    type: SELECT_PRODUCT,
    payload: productId
  };
};