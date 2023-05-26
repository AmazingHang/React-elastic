import { Layout, List } from "antd";
const { Content } = Layout;

const ConTent = ({ colorBgContainer, contentData }) => {
  return (
    <Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
      }}>
      {contentData && (
        <List
          pagination={{
            defaultPageSize: 5,
            position: "bottom",
            align: "center",
            defaultCurrent: 1,
            pageSizeOptions: [5, 10, 20, 30, 50],
          }}
          style={{
            padding: 24,
            textAlign: "center",
            background: colorBgContainer,
          }}
          dataSource={contentData}
          renderItem={(item, index) => {
            return <List.Item>{item}</List.Item>;
          }}></List>
      )}
    </Content>
  );
};
export default ConTent;
