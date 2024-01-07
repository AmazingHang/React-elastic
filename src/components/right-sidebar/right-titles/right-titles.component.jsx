import { useDispatch } from "react-redux";
//-----------------------------------------------------------------------------
import {
  setFuzzySearch_ACTION,
  setIsFuzzySearch_ACTION,
} from "../../../store/search/search.action";
//-----------------------------------------------------------------------------
import { Button } from "antd";
//-----------------------------------------------------------------------------
const RightTitles = ({ title }) => {
  const dispatch = useDispatch();

  const onClickHandler = e => {
    console.log("热门搜索中");
    const selected = e.target.innerText;
    const title = selected.split(":")[0].trim();
    title.length !== 0 &&
      dispatch(setFuzzySearch_ACTION(title)) &&
      dispatch(setIsFuzzySearch_ACTION(true));
  };

  return (
    <Button size="large" type="text" onClick={onClickHandler}>
      {title}
    </Button>
  );
};

export default RightTitles;
