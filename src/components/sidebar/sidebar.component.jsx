//import
import React from "react";

import { Card, Layout, Divider, Typography } from "antd";

import CheckBox from "../check-box/check-box.component";
//
const { Sider } = Layout;
const { Title } = Typography;

const onRightClickHandler = checkedValues => {
  console.log("checked = ", checkedValues);
};

const Sidebar = ({ title, items, style, TYPE, ...otherprops }) => {
  return (
    <>
      <Sider theme="light" style={style}>
        <Title level={3} style={{ textAlign: "center" }}>
          {title}
        </Title>
        <Divider />
        {TYPE === "left" &&
          items &&
          items.map(item => (
            <Card
              key={item.title}
              title={item.title}
              style={{ width: "auto", height: "auto", margin: 7 }}>
              <CheckBox list={item.list} />
            </Card>
          ))}
        {TYPE === "right" &&
          items &&
          items.map(item => (
            <Title
              key={item}
              level={5}
              style={{ textAlign: "center" }}
              onClick={onRightClickHandler}>
              {item}
            </Title>
          ))}
      </Sider>
    </>
  );
};
export default Sidebar;
