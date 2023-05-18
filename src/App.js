import React from "react";
import Sidebar from "./components/sidebar/sidebar.component";
import FooTer from "./components/footer/fooTer.component";
import ConTent from "./components/content/content.component";
import SearchInput from "./components/search/search.component";

import { Layout, theme, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
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
    </Layout>
  );
};
export default App;
