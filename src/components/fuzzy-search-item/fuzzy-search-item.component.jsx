import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "antd";

import { selectIsFuzzySearch_SELECTOR } from "../../store/search/search.selector";
//改变redux中的数据
import {
  setSearch_ACTION,
  setIsFuzzySearch_ACTION,
} from "../../store/search/search.action";

const FuzzySearchItem = ({ item }) => {
  const dispatch = useDispatch();
  const isDropDownOpenFromRedux = useSelector(selectIsFuzzySearch_SELECTOR);
  const [isSubmit, setIsSubmit] = useState(isDropDownOpenFromRedux);

  const onClickHandler = () => {
    setIsSubmit(!isSubmit);
  };

  useEffect(() => {
    const trrigerSubmit = () => {
      dispatch(setSearch_ACTION(item)); //////
      dispatch(setIsFuzzySearch_ACTION(isSubmit));
    };
    //只有本组件内可以改变isSubmit
    !isSubmit && trrigerSubmit();
  }, [dispatch, isSubmit, item]);

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
