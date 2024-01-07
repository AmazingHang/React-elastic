import { useDispatch, useSelector } from "react-redux";
import LayoutFooter from "../layout-footer/layout-footer.component";
import JobsContent from "../jobs-content/jobs-content.component";
import SearchFrom from "../search-form/search-form.component";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import RightSidebar from "../right-sidebar/right-sidebar.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  fetchHitsJobsStartAsync,
  fetchTotalJobsStartAsync,
} from "../../store/jobs/jobs.action";
//-----------------------------------------------------------------------------
import { selectIsJobsLoading } from "../../store/jobs/jobs.selector";
//-----------------------------------------------------------------------------
import { Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";
const { Header } = Layout;
const { Title } = Typography;
//-----------------------------------------------------------------------------
const HomePage = () => {
  const dispatch = useDispatch();
  const isJobsLoading = useSelector(selectIsJobsLoading);
  //进入主页时从后端获得数据
  useEffect(() => {
    console.log("首次渲染");
    dispatch(fetchTotalJobsStartAsync()).then(() =>
      dispatch(fetchHitsJobsStartAsync())
    );
  }, [dispatch]);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
      </style>
      <Layout hasSider>
        <LeftSidebar />
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
            <SearchFrom />
          </Header>

          {isJobsLoading ? (
            <Content>
              <Spinner />
            </Content>
          ) : (
            <JobsContent />
          )}

          <LayoutFooter />
        </Layout>
        <RightSidebar />
      </Layout>
    </>
  );
};
export default HomePage;
