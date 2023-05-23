//组件
import Sidebar from "../sidebar/sidebar.component";
import FooTer from "../footer/fooTer.component";
import ConTent from "../content/content.component";
import SearchInput from "../search/search.component";

//样式
import { Layout, theme, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const HomePage = ({ leftSideData, rightSideData, contentData }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout hasSider>
        <Sidebar
          clear="true"
          TYPE="left"
          title="筛选"
          items={leftSideData}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
            marginRight: 200,
          }}>
          <Header
            style={{
              height: "auto",
              margin: "24px 16px 0",
              background: colorBgContainer,
            }}>
            <Title>Welcome to use JobFinder APP !</Title>
            <SearchInput />
          </Header>
          <ConTent
            colorBgContainer={colorBgContainer}
            contentData={contentData}
          />
          <FooTer />
        </Layout>
        <Sidebar
          TYPE="right"
          title="热门搜索"
          items={rightSideData}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </Layout>
    </>
  );
};
export default HomePage;
