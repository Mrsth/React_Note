import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import "antd/dist/antd.css";
import "./antnav.css";

const { Header, Content, Footer } = Layout;

const Antfooter = () => {
  return (
    <div>
      <Layout className="layout">
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#001529",
          }}
        >
          <p className="" style={{ color: "white" }}>
            RecordKeeping ©2021 Created by Techrida Inc.
          </p>
        </Footer>
      </Layout>
    </div>
  );
};

export default Antfooter;
