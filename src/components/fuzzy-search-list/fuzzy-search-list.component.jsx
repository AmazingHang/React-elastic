import { List } from "antd";
const FuzzySearchList = ({ fuzzyFiledData }) => {
  return (
    <List
      bordered
      style={{
        background: "white",
        marginBottom: "3%",
      }}
      dataSource={fuzzyFiledData}
      renderItem={(item, index) => {
        return <List.Item style={{ padding: "1%" }}>{item}</List.Item>;
      }}></List>
  );
};

export default FuzzySearchList;
