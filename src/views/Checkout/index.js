import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Checkbox, Button, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import postOrder from "../../actions/order";
import SideNav from "../../components/Sidenav";
import OrderItem from "../../components/OrderItem";
import "./checkout.css";

const { Content, Footer } = Layout;

const ContactDetails = ({ onChange, validateStatus }) => (
  <Form>
    <Form.Item
      name="Name"
      label="Name"
      validateStatus={validateStatus.name ? true : false}
      extra={validateStatus.name}
      rules={[
        {
          required: true,
        },
      ]}
      className="user-name"
    >
      <Input name="name" onChange={(e) => onChange(e)} />
    </Form.Item>
    <Form.Item
      name="Phone"
      label="Phone"
      validateStatus={validateStatus.phone ? true : false}
      extra={validateStatus.phone}
      rules={[
        {
          required: true,
        },
      ]}
      className="user-phone"
    >
      <Input name="phone" onChange={(e) => onChange(e)} type="tel" />
    </Form.Item>
  </Form>
);

class Checkout extends Component {
  state = {
    totalPrice: 0,
    deliveryFee: false,
    validateStatus: {
      phone: "",
      name: "",
    },
    name: "",
    phone: "",
  };

  componentDidMount() {
    const { cart } = this.props;
    const data = this.getCart();
    const totalPrice = cart.totalPrice || data.totalPrice;
    this.setState({ totalPrice });
  }
  getCart = () => {
    const data = localStorage.getItem("CART");
    return JSON.parse(data);
  };

  submitOrder = () => {
    const { deliveryFee, totalPrice, name, phone } = this.state;
    if (name === "") {
      this.setState({ validateStatus: { name: "Name is required" } });
    } else if (phone === "") {
      this.setState({ validateStatus: { phone: "Phone is required" } });
    } else {
      const { placeOrder } = this.props;
      const data = this.getCart();
      data["totalPrice"] = totalPrice;
      data["name"] = name;
      data["phone"] = phone;
      if (deliveryFee) {
        data["deliveryFee"] = true;
      }
      console.log({ order: data });
      placeOrder({ order: data });
    }
  };

  onChange = (e) => {
    console.log("this value", e.target.value);
    this.setState({ validateStatus: { phone: "", name: "" } });
    const { totalPrice, deliveryFee } = this.state;
    if (e.target.name === "deliveryOption") {
      if (e.target.checked && !deliveryFee) {
        let total = totalPrice + 1.2;
        this.setState({ totalPrice: total, deliveryFee: true });
      } else if (!e.target.checked && deliveryFee) {
        let total = totalPrice - 1.2;
        this.setState({ totalPrice: total, deliveryFee: false });
      }
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { cart, isLoading } = this.props;
    const { totalPrice, validateStatus } = this.state;
    const data = cart.items.length > 0 ? cart : this.getCart();
    return (
      <Layout
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideNav />
          <Content style={{ margin: "0 16px" }}>
            <div className="checkout-container">
              <Link to="/" className="back-btn">
                <ArrowLeftOutlined />
              </Link>
              <h2 style={{ marginRight: "10px" }}>Contact Details</h2>
              <ContactDetails
                onChange={this.onChange}
                validateStatus={validateStatus}
              />
              <div style={{ padding: "0 16px", width: "400px" }}>
                {data.items.map((item) => {
                  return <OrderItem key={item.id} item={item} />;
                })}
                <div className="delivery-item">
                  <Checkbox
                    name="deliveryOption"
                    onChange={(e) => this.onChange(e)}
                  >
                    Delivery fee
                  </Checkbox>
                  <span style={{ marginLeft: "auto" }}>£ 1.20</span>
                </div>
                <div className="order-total-item">
                  <span>Total</span>
                  <span className="total-amount">£{totalPrice}.00</span>
                </div>
                <div className="order-button-group">
                  <Button className="cancel-btn" type="primary" size="middle">
                    <Link to="/">Cancel</Link>
                  </Button>
                  <Button
                    className="confirm-btn"
                    type="primary"
                    size="middle"
                    loading={isLoading}
                    onClick={this.submitOrder}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </Content>
        </div>
        <Footer style={{ textAlign: "center" }}>Pizza World ©2020</Footer>
      </Layout>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  placeOrder: (payload) => {
    dispatch(postOrder(payload));
  },
});
const mapStateToProps = ({ cart, order }) => ({
  cart,
  isLoading: order.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
