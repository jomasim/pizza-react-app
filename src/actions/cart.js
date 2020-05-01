export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const updateCartSuccess = (payload) => ({
  type: UPDATE_CART,
  payload,
});

export const removeFromCartSuccess = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const updateCart = (payload) => {
  const { items } = payload;
  const total = items.reduce((total, obj) => total + obj.count, 0);
  const totalPrice = items.reduce((totalPrice, obj) => totalPrice + (obj.count * obj.price), 0);
  localStorage.setItem("CART", JSON.stringify({ items, total, totalPrice}));
  return updateCartSuccess({ items, total, totalPrice });
};

export const RemoveItemsFromCart = (payload) => removeFromCartSuccess(payload);
