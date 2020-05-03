import { notification } from "antd";
import api from "../utils/api";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const ORDER_REQUEST_SUCCCESS = "ORDER_REQUEST_SUCCCESS";
export const ORDER_REQUEST_FAILURE = "ORDER_REQUEST_FAILURE";

export const postOrderRequest = (payload) => ({
  type: POST_ORDER_REQUEST,
  payload,
});

export const orderRequestFailure = (payload) => ({
  type: ORDER_REQUEST_FAILURE,
  payload,
});

export const orderRequestSuccess = (payload) => ({
  type: ORDER_REQUEST_SUCCCESS,
  payload,
});

const postOrder = (payload) => (dispatch) => {
  dispatch(postOrderRequest(payload));
  api
    .postOrder(payload)
    .then((response) => {
      dispatch(orderRequestSuccess(response.data));
      notification.success({
        message: "Order Request",
        description: "Your order was successful!",
      });
    })
    .catch((err) => {
      dispatch(orderRequestFailure(err));
      notification.error({
        message: "Request Error",
        description: "An error occured while submitting",
      });
    });
};

export default postOrder;
