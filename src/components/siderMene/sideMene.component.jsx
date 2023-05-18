import {
  FilterOutlined,
  EnvironmentOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Company", "sub1", <FilterOutlined />, [
    getItem("字节跳动", "1"),
    getItem("腾讯", "2"),
    getItem("阿里", "2"),
  ]),
  getItem(
    "Category",
    "2",
    <BarsOutlined />,
    [getItem("实习生", "3")]
    //  [ getItem("Option 5", "5"),
    // getItem("Option 6", "6"),
    // getItem("Submenu", "sub3", null, [
    //   getItem("Option 7", "7"),
    //   getItem("Option 8", "8"),
    // ]),]
  ),
  getItem("Location", "3", <EnvironmentOutlined />),
];
const SideMene = () => {
  const [current, setCurrent] = useState("1");

  const onClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        theme="Light"
        onClick={onClick}
        defaultSelectedKeys={["2"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default SideMene;
