//import
import React, { useState } from "react";

import { Card, Layout, Divider, Typography, Button } from "antd";

import CheckBox from "../check-box/check-box.component";
//
const { Sider } = Layout;
const { Title } = Typography;

const onRightClickHandler = checkedValues => {
  console.log("checked = ", checkedValues);
};

const Sidebar = ({ title, items, style, TYPE, ...otherProps }) => {
  //clear理清楚按钮的实现
  const { clear } = otherProps;
  const [checked, setChecked] = useState(true);

  const onClearHandler = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Sider theme="light" style={style}>
        <Title level={3} style={{ textAlign: "left", marginLeft: "10%" }}>
          {title}
          {clear && (
            <Button
              type="primary"
              size="small"
              onClick={onClearHandler}
              style={{ marginLeft: "40%", border: "0px" }}
              ghost>
              清除
            </Button>
          )}
        </Title>

        <Divider />

        {TYPE === "left" &&
          items &&
          items.map(item => (
            <Card
              key={item.title}
              title={item.title}
              style={{ width: "auto", height: "auto", margin: 7 }}>
              <CheckBox setFalse={checked} list={item.list} />
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
