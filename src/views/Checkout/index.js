import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import SideNav from "../../components/Sidenav";
import OrderItem from "../../components/OrderItem";
import "./checkout.css";

const { Content, Footer } = Layout;

class Checkout extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Layout
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideNav />
          <h2>Checkout here</h2>
          <Content style={{ margin: "0 16px" }}>
            <div className="checkout-container">
              <div style={{ padding: "0 16px" }}>
                {cart.items.map((item) => {
                  return <OrderItem key={item.id} item={item} />;
                })}
              </div>
            </div>
          </Content>
        </div>
        <Footer style={{ textAlign: "center" }}>Pizza World ©2020</Footer>
      </Layout>
    );
  }
}
const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(Checkout);
