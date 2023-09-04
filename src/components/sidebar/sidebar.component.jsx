import { useDispatch } from "react-redux";
//-------------------------------------------------------------------------------
import { clearChecks_ACTION } from "../../store/checkbox/checkbox.action";
//-------------------------------------------------------------------------------
import { Card, Layout, Divider, Typography, Space } from "antd";
import LeftCheckBox from "../left-check-box/left-check-box.component";
import RightTitles from "../right-titles/right-titles.component";
import ClearButton from "../clear-button/clear-button.component";
//-------------------------------------------------------------------------------
const { Sider } = Layout;
const { Title } = Typography;
//-------------------------------------------------------------------------------
const Sidebar = ({ title, items, style, TYPE, ...otherProps }) => {
  const dispatch = useDispatch();
  //对左侧数据的处理
  if (TYPE === "left") {
    //clear理清楚按钮的实现
    const { clear } = otherProps;
    const onClearHandler = () => {
      dispatch(clearChecks_ACTION());
    };

    return (
      <Sider theme="light" style={style} width={"16%"}>
        <Title level={3} style={{ textAlign: "left", marginLeft: "10%" }}>
          {title}
          {clear && <ClearButton onClearHandler={onClearHandler} />}
        </Title>

        <Divider />
        {items &&
          items.map(item => (
            <Card
              key={item.title}
              title={item.title}
              style={{ width: "auto", height: "auto", margin: 7 }}>
              <LeftCheckBox list={item.list} />
            </Card>
          ))}
      </Sider>
    );
  }
  //对右侧数据的处理
  if (TYPE === "right") {
    return (
      <>
        <Sider theme="light" style={style} width={"14%"}>
          <Title level={3} style={{ textAlign: "left", marginLeft: "10%" }}>
            {title}
          </Title>
          <Divider />
          {items && (
            <Space direction="horizontal" wrap>
              {items.map(key => (
                <RightTitles key={key} title={key} />
              ))}
            </Space>
          )}
        </Sider>
      </>
    );
  }
};

export default Sidebar;
