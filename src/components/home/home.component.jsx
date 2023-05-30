//组件
import LayoutFooter from "../layout-footer/layout-footer.component";
import JobItemContent from "../job-item-content/job-item-content.component";
import SearchFrom from "../search-form/search-form.component";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import RightSidebar from "../right-sidebar/right-sidebar.component";
import JobCardItem from "../job-card-item/job-card-item.compoent";
import FuzzySearchItem from "../fuzzy-search-item/fuzzy-search-item.component";
//样式
import { Layout, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const HomePage = ({
  leftSideData,
  rightSideData,
  jobsData,
  fuzzySearchFiled,
}) => {
  //生成要展示的数据
  const contentData = Array.from(
    jobsData.map(job => <JobCardItem key={job.id} props={job} />)
  );
  const fuzzyFiledData = Array.from(
    fuzzySearchFiled.map(item => <FuzzySearchItem item={item} />)
  );
  return (
    <>
      <Layout hasSider>
        <LeftSidebar leftSideData={leftSideData} />
        <Layout
          className="site-layout"
          style={{
            marginLeft: 193,
            marginRight: 193,
          }}>
          <Header
            style={{
              height: "auto",
              margin: "0% 1%",
              background: "#F6F1F1",
            }}>
            <Title>Welcome to use JobFinder APP !</Title>
            <SearchFrom fuzzyFiledData={fuzzyFiledData} />
          </Header>
          <JobItemContent contentData={contentData} />
          <LayoutFooter />
        </Layout>
        <RightSidebar rightSideData={rightSideData} />
      </Layout>
    </>
  );
};
export default HomePage;
