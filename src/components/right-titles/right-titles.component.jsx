import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setFuzzySearch_ACTION } from "../../store/search/search.action";

import { Button } from "antd";

const RightTitles = ({ item }) => {
  const dispatch = useDispatch();
  const [hitSelected, setHitSelected] = useState("");
  const onClickHandler = e => {
    const selected = e.target.innerText;
    setHitSelected(selected);
  };

  //把热门搜索里的值录入redux中的热门搜索
  useEffect(() => {
    const submitHitSelected = () => {
      dispatch(setFuzzySearch_ACTION(hitSelected)); /////
      //重制hitSelected，来接受更新的选择
      setHitSelected("");
    };
    hitSelected.length !== 0 && submitHitSelected();
  }, [dispatch, hitSelected]);

  return (
    <Button size="large" type="text" key={item} onClick={onClickHandler}>
      {item}
    </Button>
  );
};

export default RightTitles;
