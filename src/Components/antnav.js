import React, { useState } from "react";
import { Layout, Menu, UserOutlined, VideoCameraOutlined, UploadOutlined } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { FaHome, FaSalesforce, FaRegNewspaper, FaBoxOpen } from 'react-icons/fa'
// import "./antnav.css";

const { Header, Content, Sider, Footer } = Layout;
const Antnav = ({ collapsed }) => {
  return (
    <Sider trigger={null} breakpoint="lg" collapsible collapsed={collapsed}>
      <div className="logo" />
      <div className="logo">
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/"><FaHome /> Home</Link>
        </Menu.Item>
        <Menu.Item key="2" >
          <Link to="/antsales"><FaSalesforce /> Sales</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/antpurchase"><FaBoxOpen /> Purchase</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/form"><FaRegNewspaper /> Purchase Form</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/purchasePending"><FaRegNewspaper /> Purchase Pending</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/dff"><FaRegNewspaper /> BalanceSheet</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Antnav;
