import React from "react";
import CardItem from "../card/card-item.compoent";

import { Layout, Space } from "antd";
const { Content } = Layout;

const ConTent = ({ colorBgContainer }) => (
  <Content
    style={{
      margin: "24px 16px 0",
      overflow: "initial",
    }}>
    <div
      style={{
        padding: 24,
        textAlign: "center",
        background: colorBgContainer,
      }}>
      {
        // indicates very long content
        Array.from(
          {
            length: 100,
          },
          (_, index) => (
            <Space
              key={index}
              direction="vertical"
              size="middle"
              style={{
                margin: "15px",
                display: "flex",
              }}>
              <CardItem key={index} />
            </Space>
          )
        )
      }
    </div>
  </Content>
);
export default ConTent;
