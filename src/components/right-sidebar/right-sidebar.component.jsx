import { selectHitsJobs_SELECTOR } from "../../store/jobs/jobs.selector";
import { useSelector } from "react-redux";
import RightTitles from "./right-titles/right-titles.component";
//-------------------------------------------------------------------------------
import { Layout, Divider, Typography, Space } from "antd";
const { Sider } = Layout;
const { Title } = Typography;
//-------------------------------------------------------------------------------

const RightSidebar = () => {
  const hitsFromRedux = useSelector(selectHitsJobs_SELECTOR);
  return (
    <Sider
      theme="light"
      style={{
        padding: "1%",
        overflow: "auto",
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
      }}
      width={"14%"}>
      <Title level={3} style={{ textAlign: "left", marginLeft: "10%" }}>
        热门搜索
      </Title>
      <Divider />
      {hitsFromRedux && (
        <Space direction="horizontal" wrap>
          {hitsFromRedux.map(key => (
            <RightTitles key={key} title={key} />
          ))}
        </Space>
      )}
    </Sider>
  );
};

export default RightSidebar;
