import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setChecks,
  reduceChecks,
  clearChecks,
} from "../../store/checkbox/checkbox.action";
import { selectChecks } from "../../store/checkbox/checkbox.selector";

const CheckBox = ({ list, ...otherProps }) => {
  const { setFalse } = otherProps;
  const crurrentChecks = useSelector(selectChecks);

  const dispatch = useDispatch();
  const [checkedList, setCheckedList] = useState(crurrentChecks);
  const [lastChecks, setLastChecks] = useState(checkedList);

  const onChange = list => {
    setCheckedList(list);
  };
  //我们使用了一个名为 updateChecks 的回调函数来确保在 useEffect 中使用最新的 checkedList 值。这样，无论异步操作是否完成，都会正确地传递最新的 checkedList 值给 dispatch。
  useEffect(() => {
    const updateChecks = () => {
      console.log("More!!!");
      const newChecks = Array.from(
        new Set([...crurrentChecks, ...checkedList])
      );
      dispatch(setChecks(newChecks));
      setLastChecks(checkedList);
    };
    if (lastChecks.length > checkedList.length) {
      console.log("Less!!!");
      //注意diff是一个数组
      const diff = lastChecks.filter(item => !checkedList.includes(item));
      //diff 是一个数组，而不是一个单独的元素，所以在 reducedChecks 的筛选过程中，你不能直接将 item 与 diff 进行比较。
      dispatch(reduceChecks(diff));
      setLastChecks(checkedList);
    }
    if (checkedList.length !== 0 && lastChecks.length <= checkedList.length) {
      updateChecks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedList, dispatch]);

  useEffect(() => {
    setCheckedList([]);
    dispatch(clearChecks());
  }, [dispatch, setFalse]);

  return (
    <Checkbox.Group
      options={list}
      value={checkedList}
      style={{
        width: "100%",
      }}
      onChange={onChange}></Checkbox.Group>
  );
};
export default CheckBox;
