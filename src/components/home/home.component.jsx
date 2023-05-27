//组件
import FooTer from "../footer/fooTer.component";
import JobItemContent from "../job-item-content/job-item-content.component";
import SearchInput from "../search-input/search-input.component";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import RightSidebar from "../right-sidebar/right-sidebar.component";
import JobCardItem from "../job-card-item/job-card-item.compoent";

//样式
import { Layout, theme, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const HomePage = ({ leftSideData, rightSideData, jobsData }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //生成要展示的数据
  const contentData = Array.from(
    jobsData.map(job => <JobCardItem key={job.id} props={job} />)
  );

  return (
    <>
      <Layout hasSider>
        <LeftSidebar leftSideData={leftSideData} />
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
          <JobItemContent
            colorBgContainer={colorBgContainer}
            contentData={contentData}
          />
          <FooTer />
        </Layout>
        <RightSidebar rightSideData={rightSideData} />
      </Layout>
    </>
  );
};
export default HomePage;
