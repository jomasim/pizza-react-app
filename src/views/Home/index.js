import React, { Component } from "react";
import { connect } from "react-redux";
import fetchProducts from "../../actions/products";
import { updateCart } from "../../actions/cart";
import "./home.css";
import { Layout } from "antd";
import SideNav from "../../components/Sidenav";
import ItemCard from "../../components/ItemCard";
import OrderDetails from "../../components/orderDetails";

const { Footer } = Layout;

class Home extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts({});
  }
  componentDidUpdate() {
    const { isLoading, products } = this.props;
    const { products: items } = this.state;
    if (!isLoading && items.length === 0 && products.length > 0) {
      this.setState({ products: products });
    }
  }

  addToCart = (item) => {
    const { updateCart, cart } = this.props;
    const { items } = cart;
    const data = items.slice();
    const index = data.findIndex((obj) => obj.id === item.id);
    if (index > -1) {
      const count = data[index].count + item.count;
      data[index] = { ...data[index], count };
    } else {
      data.push(item);
    }
    updateCart({ items: data });
  };
  removeFromCart = () => {};
  render() {
    const { products } = this.state;
    return (
      <Layout className="site-layout">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideNav />
          <div className="products-container">
            {products.length === 0 ? (
              <h2>No products available</h2>
            ) : (
              products.map((item) => {
                item["count"] = 1;
                return (
                  <ItemCard
                    key={item.id}
                    data={item}
                    addToCart={this.addToCart}
                  />
                );
              })
            )}
          </div>
          <OrderDetails />
        </div>
        <Footer style={{ textAlign: "center" }}>Pizza World ©2020</Footer>
      </Layout>
    );
  }
}
const mapStateToProps = ({ products, cart }) => ({
  products: products.data,
  cart,
  isLoading: products.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (payload) => dispatch(fetchProducts(payload)),
  updateCart: (items) => dispatch(updateCart(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
