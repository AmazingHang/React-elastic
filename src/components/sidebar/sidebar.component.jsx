//import
import React from "react";

import { Card, Layout, Divider, Typography } from "antd";

import CheckBox from "../check-box.compoent.jsx/check-box.component";
//
const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  return (
    <>
      <Sider
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}>
        <Title level={3} style={{ textAlign: "center" }}>
          筛选
        </Title>
        <Divider />

        <Card title="公司" style={{ width: "auto", height: "auto", margin: 7 }}>
          <CheckBox list={["字节跳动", "腾讯", "阿里"]} />
        </Card>
        <Card title="位置" style={{ width: "auto", height: "auto", margin: 7 }}>
          <CheckBox list={["北京", "杭州", "上海"]} />
        </Card>
        <Card title="类别" style={{ width: "auto", height: "auto", margin: 7 }}>
          <CheckBox list={["实习生", "应届生"]} />
        </Card>
        <Card title="职位" style={{ width: "auto", height: "auto", margin: 7 }}>
          <CheckBox list={["研发", "运营", "产品", "市场", "销售"]} />
        </Card>
      </Sider>
    </>
  );
};
export default Sidebar;
