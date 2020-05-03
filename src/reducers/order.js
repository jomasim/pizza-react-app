import {
  ORDER_REQUEST_FAILURE,
  ORDER_REQUEST_SUCCCESS,
  POST_ORDER_REQUEST,
} from "../actions/order";

const initialState = {
  isLoading: false,
  payload: {},
};

const OrderReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return { ...state, isLoading: true, payload };
    }
    case ORDER_REQUEST_SUCCCESS: {
      return { ...state, isLoading: false, payload };
    }
    case ORDER_REQUEST_FAILURE: {
      return { ...state, isLoading: false, payload };
    }
    default: {
      return state;
    }
  }
};

export default OrderReducer;
