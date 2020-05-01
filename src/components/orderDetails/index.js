import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import "./order.css";
import orderImage from "./order-image.svg";
import OrderItem from "../OrderItem";

class OrderDetails extends Component {
  render() {
    const { cart, history } = this.props;
    console.log('this', this.props)
    return (
      <div className="right-sidebar">
        <img src={orderImage} alt="order details" className="order-image" />
        <div style={{ padding: "0 16px" }}>
          {cart.items.map((item) => {
            return <OrderItem key={item.id} item={item} />;
          })}
          <hr className="divider"></hr>
          <div className="order-total-item">
            <span>Total</span>
            <span className="total-amount">£{cart.totalPrice}.00</span>
          </div>
          <Button
            type="primary"
            shape="round"
            size={"small"}
            className="order-button done-button"
            onClick={() => history.push("/checkout")}
          >
            Done
          </Button>
          <Button
            type="primary"
            shape="round"
            size={"small"}
            className="cancel-button"
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(OrderDetails);
