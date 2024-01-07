import { useDispatch, useSelector } from "react-redux";
import FuzzySearchItem from "./fuzzy-search-item/fuzzy-search-item.component";
import { selectFuzzySearchArray_SELECTOR } from "../../store/search/search.selector";
import { setIsFuzzySearch_ACTION } from "../../store/search/search.action";
import { List } from "antd";
const FuzzySearchList = () => {
  const dispatch = useDispatch();

  const fuzzySearchFiled = useSelector(selectFuzzySearchArray_SELECTOR);
  const fuzzyFiledData = Array.from(
    fuzzySearchFiled.map(item => <FuzzySearchItem item={item} />)
  );
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
