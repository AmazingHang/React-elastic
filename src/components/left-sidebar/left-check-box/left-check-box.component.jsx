import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//-----------------------------------------------------------------------------
import {
  setChecks_ACTION,
  reduceChecks_ACTION,
} from "../../../store/checkbox/checkbox.action";
import { selectChecks_SELECTOR } from "../../../store/checkbox/checkbox.selector";
//-----------------------------------------------------------------------------
const LeftCheckBox = ({ list }) => {
  const dispatch = useDispatch();
  //redux记录的checks
  const crurrentChecks = useSelector(selectChecks_SELECTOR);

  //本地记录的checks
  const [checkedList, setCheckedList] = useState(crurrentChecks);
  //lastChecks用来辅助判断checks数组的增减
  const [lastChecks, setLastChecks] = useState(checkedList);

  const onChange = list => {
    setCheckedList(list);
  };
  //-----------------------------------------------------------------------------
  //使用了一个名为 updateChecks 的回调函数来确保在 useEffect 中使用最新的 checkedList 值。这样，无论异步操作是否完成，都会正确地传递最新的 checkedList 值给 dispatch。
  useEffect(() => {
    const updateAddedChecks = () => {
      //把当前的checks添加到已保存的checks中
      const newChecks = Array.from(
        new Set([...crurrentChecks, ...checkedList])
      );
      dispatch(setChecks_ACTION(newChecks));
      setLastChecks(checkedList);
    };
    const updateReducedChecks = () => {
      //注意diff是一个数组 ，而不是一个单独的元素，
      //所以在 reducedChecks 的筛选过程中，不能直接将 item 与 diff 进行比较。
      const diff = lastChecks.filter(item => !checkedList.includes(item));
      dispatch(reduceChecks_ACTION(diff));
      setLastChecks(checkedList);
    };
    lastChecks.length > checkedList.length && updateReducedChecks();
    lastChecks.length <= checkedList.length &&
      checkedList.length !== 0 &&
      updateAddedChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedList, dispatch]);
  //重新初始化数据
  useEffect(() => {
    crurrentChecks.length === 0 && setCheckedList([]);
  }, [dispatch, crurrentChecks]);
  //-----------------------------------------------------------------------------
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
export default LeftCheckBox;
