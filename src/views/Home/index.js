import React, { Component } from "react";
import "./home.css";
import { Layout } from "antd";
import SideNav from "../../components/Sidenav";
import ItemCard from "../../components/ItemCard";
const { Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideNav />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ItemCard />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Pizza World ©2020</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
