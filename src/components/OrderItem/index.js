import React from "react";

const OrderItem = ({ item }) => {
  const total = item.count && item.price ? item.count * item.price : 0;
  return (
    <div className="order-item">
      <div className="item-detail">
        <span>{item.name}</span>
        <span className="item-count">
          {item.count}x{item.price}
        </span>
      </div>
      <span className="order-item-amount">£{total}.00</span>
    </div>
  );
};

export default OrderItem;
