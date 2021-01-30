import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./antnav.css";

const { Header, Content, Footer } = Layout;
const Antnav = () => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="/">
              <Link to="/">Techrida</Link>
            </Menu.Item>
            <Menu.Item key="/antsales" style={{ float: "right" }}>
              <Link to="/antsales">Sales</Link>
            </Menu.Item>
            <Menu.Item key="/antpurchase" style={{ float: "right" }}>
              <Link to="/antpurchase">Purchase</Link>
            </Menu.Item>
            <Menu.Item key="/bs" style={{ float: "right" }}>
              <Link to="/bs">BalanceSheet</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/* <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          BALANCE SHEET©2021 Created by Techrida Inc.
        </Footer> */}
      </Layout>
    </div>
  );
};

export default Antnav;
