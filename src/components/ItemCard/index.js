import React, { Component } from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./item-card.css";

class ItemCard extends Component {
  render() {
    const { data, addToCart } = this.props;
    return (
      <Card
        style={{ width: 240, marginRight: "15px" }}
        cover={<img  src={data.imageUrl} alt=""  />}
      >
        <div className="ant-card-meta-detail meta-details">
          <span className="card-title">{data.name}</span>
          <span className="card-item-amount">£{data.price}.00</span>
        </div>
        <Button
          type="primary"
          shape="round"
          icon={<ShoppingCartOutlined />}
          size={"small"}
          className="order-button"
          onClick={() => addToCart(data)}
        >
          Order now
        </Button>
      </Card>
    );
  }
}
export default ItemCard;
