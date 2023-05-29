import { List } from "antd";
const FuzzySearchField = ({ fuzzyFiledData }) => {
  return (
    <List
      style={{
        display: "block",
        textAlign: "center",
        background: "white",
      }}
      dataSource={fuzzyFiledData}
      renderItem={(item, index) => {
        return <List.Item style={{ padding: "1%" }}>{item}</List.Item>;
      }}></List>
  );
};

export default FuzzySearchField;
