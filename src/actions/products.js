
import api from "../utils/api";

export const FETCH_PRODUCTS_REQUEST = "FETHC_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCCES";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsRequest = payload => ({
  type: FETCH_PRODUCTS_REQUEST,
  payload
});

export const fetchProductsFailure = payload => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload
});

export const fetchproductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload
});

const fetchProducts = payload => dispatch => {
  dispatch(fetchProductsRequest(payload));
  api
    .fetchProducts(payload)
    .then(response => {
      dispatch(fetchproductsSuccess(response.data));
    })
    .catch(err => {
      dispatch(fetchProductsFailure(err));
    });
};

export default fetchProducts;