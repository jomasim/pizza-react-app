import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import "./sidenav.css";
import logo from "./logo.svg";

const { Sider } = Layout;

class SideNav extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        className="sidenav"
      >
        <div className="logo">
          <img src={logo} alt="logo here ..." />
        </div>
        <div className="menu-header">
          <h2>Menu</h2>
        </div>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <Link style={{ color: "#fff" }} to="/">
              Pizza
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <PieChartOutlined />
            <span>Salads</span>
          </Menu.Item>
          <Menu.Item key="3">
            <PieChartOutlined />
            <span>Burgers</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideNav;
