import { useDispatch } from "react-redux";
import { setIsFuzzySearch_ACTION } from "../../store/search/search.action";
import { List } from "antd";
const FuzzySearchList = ({ fuzzyFiledData }) => {
  const dispatch = useDispatch();
  const onBlurHandler = () => {
    dispatch(setIsFuzzySearch_ACTION(false));
  };
  return (
    <List
      bordered
      style={{
        background: "white",
        marginBottom: "3%",
      }}
      dataSource={fuzzyFiledData}
      renderItem={(item, index) => {
        return (
          <List.Item onBlur={onBlurHandler} style={{ padding: "1%" }}>
            {item}
          </List.Item>
        );
      }}></List>
  );
};

export default FuzzySearchList;
