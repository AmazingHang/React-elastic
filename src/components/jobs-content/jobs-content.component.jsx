import JobCardItem from "./job-card-item/job-card-item.component";
import useJobs from "../../hooks/currentJobs";
import { Layout, List } from "antd";
const { Content } = Layout;

const JobsContent = () => {
  const { currentJobs } = useJobs();
  const contentData = Array.from(
    currentJobs.map(job => <JobCardItem key={job.id} props={job} />)
  );
  return (
    <Content
      style={{
        margin: "0% 1% ",
        overflow: "initial",
      }}>
      {contentData && (
        <List
          pagination={{
            defaultPageSize: 5,
            position: "bottom",
            align: "center",
            defaultCurrent: 1,
            pageSizeOptions: [5, 10, 25],
          }}
          style={{
            padding: "2%",
            background: "#526D82",
            textAlign: "center",
          }}
          dataSource={contentData}
          renderItem={(item, index) => (
            <List.Item style={{ padding: "2%" }}>{item}</List.Item>
          )}></List>
      )}
    </Content>
  );
};
export default JobsContent;
