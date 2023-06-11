//import
import React, { useState } from "react";
import { Card, Layout, Divider, Typography, Space } from "antd";
import LeftCheckBox from "../left-check-box/left-check-box.component";
import RightTitles from "../right-titles/right-titles.component";
import ClearButton from "../clear-button/clear-button.component";
//样式
const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = ({ title, items, style, TYPE, ...otherProps }) => {
  //clear理清楚按钮的实现
  const { clear } = otherProps;
  const [checked, setChecked] = useState(true);

  const onClearHandler = () => {
    console.log("Clearing checkbox");
    setChecked(!checked);
  };

  return (
    <>
      <Sider theme="light" style={style}>
        <Title level={3} style={{ textAlign: "left", marginLeft: "10%" }}>
          {title}
          {clear && <ClearButton onClearHandler={onClearHandler} />}
        </Title>
        <Divider />
        {TYPE === "left" &&
          items &&
          items.map(item => (
            <Card
              key={item.title}
              title={item.title}
              style={{ width: "auto", height: "auto", margin: 7 }}>
              <LeftCheckBox setChecked={checked} list={item.list} />
            </Card>
          ))}
        {TYPE === "right" && items && (
          <Space direction="horizontal" wrap>
            {items.map(item => (
              <RightTitles key={item} item={item} />
            ))}
          </Space>
        )}
      </Sider>
    </>
  );
};

export default Sidebar;
