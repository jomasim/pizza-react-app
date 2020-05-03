import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import order from "./order";

export default combineReducers({
  products,
  cart,
  order,
});
