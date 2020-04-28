import React, { Component } from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import pizzaImage from "./tomato-pizza.jpg";
import "./item-card.css";
const { Meta } = Card;

class ItemCard extends Component {
  render() {
    return (
      <Card
        style={{ width: 240 }}
        cover={<img alt="example" src={pizzaImage} />}
      >
        <Meta
          title="Deluxe Veggie   £120.00"
          description="This is the description"
        />
        <Button
          type="primary"
          shape="round"
          icon={<ShoppingCartOutlined />}
          size={"small"}
          className="order-button"
        >
          Order now
        </Button>
      </Card>
    );
  }
}
export default ItemCard;
