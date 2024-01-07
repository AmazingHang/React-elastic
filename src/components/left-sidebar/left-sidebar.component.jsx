import { useDispatch } from "react-redux";
import leftSideData from "../../database/left-side-data";
import ClearButton from "../clear-button/clear-button.component";
import LeftCheckBox from "./left-check-box/left-check-box.component";
import { clearChecks_ACTION } from "../../store/checkbox/checkbox.action";
//-------------------------------------------------------------------------------
import { Card, Layout, Divider, Typography } from "antd";
const { Sider } = Layout;
const { Title } = Typography;

//-------------------------------------------------------------------------------
const LeftSideBar = () => {
  const dispatch = useDispatch();
  //clear理清楚按钮的实现
  const onClearHandler = () => {
    dispatch(clearChecks_ACTION());
  };

  return (
    <Sider
      theme="light"
      style={{
        overflow: "auto",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"16%"}>
      <Title level={3} style={{ textAlign: "left", marginLeft: "10%" }}>
        筛选
        <ClearButton onClearHandler={onClearHandler} />
      </Title>

      <Divider />
      {leftSideData &&
        leftSideData.map(item => (
          <Card
            key={item.title}
            title={item.title}
            style={{ width: "auto", height: "auto", margin: 7 }}>
            <LeftCheckBox list={item.list} />
          </Card>
        ))}
    </Sider>
  );
};

export default LeftSideBar;
