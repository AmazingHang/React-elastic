import { useDispatch } from "react-redux";
import { Button } from "antd";
//改变redux中的数据
import {
  setIsFuzzySearch_ACTION,
  setFuzzySearch_ACTION,
} from "../../../store/search/search.action";
import { fetchSearchedJobsStartAsync } from "../../../store/jobs/jobs.action";
//-----------------------------------------------------------------------------
const FuzzySearchItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("模糊搜索的结果");
    dispatch(setFuzzySearch_ACTION(item)); //改变内置搜索值
    dispatch(setIsFuzzySearch_ACTION(false));
    dispatch(fetchSearchedJobsStartAsync(item));
  };

  return (
    <Button
      block
      type="ghost"
      style={{ textAlign: "left", color: "grey" }}
      onClick={onClickHandler}>
      {item}
    </Button>
  );
};

export default FuzzySearchItem;
