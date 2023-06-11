import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
//-----------------------------------------------------------------------------
import { selectIsFuzzySearch_SELECTOR } from "../../store/search/search.selector";
//改变redux中的数据
import {
  setSearch_ACTION,
  setIsFuzzySearch_ACTION,
} from "../../store/search/search.action";
//-----------------------------------------------------------------------------
const FuzzySearchItem = ({ item }) => {
  const dispatch = useDispatch();
  const isDropDownOpenFromRedux = useSelector(selectIsFuzzySearch_SELECTOR);

  const onClickHandler = () => {
    dispatch(setSearch_ACTION(item)); //改变内置搜索值
    dispatch(setIsFuzzySearch_ACTION(!isDropDownOpenFromRedux));
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
