import React from "react";
import { Outlet } from "react-router-dom";

//组件
import Sidebar from "../../components/sidebar/sidebar.component";
import FooTer from "../../components/footer/fooTer.component";
import ConTent from "../../components/content/content.component";
import SearchInput from "../../components/search/search.component";

//数据
import { LeftSideData } from "../../utils/left-side.data";
import { RightSideData } from "../../utils/right-side.data";

//样式
import { Layout, theme, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Outlet />
      <Layout hasSider>
        <Sidebar
          TYPE="left"
          title="筛选"
          items={LeftSideData}
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
          <ConTent colorBgContainer={colorBgContainer} />
          <FooTer />
        </Layout>
        <Sidebar
          TYPE="right"
          title="热门搜索"
          items={RightSideData}
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
export default Home;
