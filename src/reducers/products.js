import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from "../actions/products";
  
  const initialState = {
    isLoading: false
  };
  
  const ProductsReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST: {
        return { ...state, isLoading: true, ...payload };
      }
      case FETCH_PRODUCTS_SUCCESS: {
        return { ...state, isLoading: false, ...payload };
      }
      case FETCH_PRODUCTS_FAILURE: {
        return { ...state, isLoading: false, ...payload };
      }
      default: {
        return state;
      }
    }
  };
  
  export default ProductsReducer;