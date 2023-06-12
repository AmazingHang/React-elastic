import { useSelector } from "react-redux";
import LayoutFooter from "../layout-footer/layout-footer.component";
import JobItemContent from "../job-item-content/job-item-content.component";
import SearchFrom from "../search-form/search-form.component";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import RightSidebar from "../right-sidebar/right-sidebar.component";
import JobCardItem from "../job-card-item/job-card-item.compoent";
import FuzzySearchItem from "../fuzzy-search-item/fuzzy-search-item.component";
import Spinner from "../../components/spinner/spinner.component";
//-----------------------------------------------------------------------------
import { selectIsJobsLoading } from "../../store/jobs/jobs.selector";
//-----------------------------------------------------------------------------
import { Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
const { Header } = Layout;
const { Title } = Typography;
//-----------------------------------------------------------------------------
const HomePage = ({
  leftSideData,
  rightSideData,
  jobsData,
  fuzzySearchFiled,
}) => {
  const isJobsLoading = useSelector(selectIsJobsLoading);
  const contentData = Array.from(
    jobsData.map(job => <JobCardItem key={job.id} props={job} />)
  );
  const fuzzyFiledData = Array.from(
    fuzzySearchFiled.map(item => <FuzzySearchItem item={item} />)
  );
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
      </style>
      <Layout hasSider>
        <LeftSidebar leftSideData={leftSideData} />
        <Layout
          className="site-layout"
          style={{
            marginLeft: "15.5%",
            marginRight: "13%",
          }}>
          <Header
            style={{
              height: "auto",
              margin: "0% 1%",
              background: "#27374D",
            }}>
            <Title
              style={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: "30px",
                textAlign: "center",
                color: "white",
              }}>
              Welcome to use JobFinder APP !
            </Title>
            <SearchFrom fuzzyFiledData={fuzzyFiledData} />
          </Header>
          {isJobsLoading ? (
            <Content>
              <Spinner />
            </Content>
          ) : (
            <JobItemContent contentData={contentData} />
          )}
          <LayoutFooter />
        </Layout>
        <RightSidebar rightSideData={rightSideData} />
      </Layout>
    </>
  );
};
export default HomePage;
