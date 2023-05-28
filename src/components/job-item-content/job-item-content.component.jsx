import { Layout, List } from "antd";
const { Content } = Layout;

const JobItemContent = ({ contentData }) => {
  return (
    <Content
      style={{
        margin: "0% 1.35% ",
        overflow: "initial",
      }}>
      {contentData && (
        <List
          pagination={{
            defaultPageSize: 5,
            position: "bottom",
            align: "center",
            defaultCurrent: 1,
            pageSizeOptions: [5, 10, 25, 50],
          }}
          style={{
            padding: "2%",
            background: "#AFD3E2",
            textAlign: "center",
          }}
          dataSource={contentData}
          renderItem={(item, index) => {
            return <List.Item style={{ padding: "2%" }}>{item}</List.Item>;
          }}></List>
      )}
    </Content>
  );
};
export default JobItemContent;
