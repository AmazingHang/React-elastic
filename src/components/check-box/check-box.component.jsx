import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setChecks } from "../../store/checkbox/checkbox.action";
import { selectChecks } from "../../store/checkbox/checkbox.selector";

const CheckBox = ({ list, ...otherProps }) => {
  const { setFalse } = otherProps;
  const crurrentChecks = useSelector(selectChecks);
  const dispatch = useDispatch();
  const [checkedList, setCheckedList] = useState(crurrentChecks);

  const onChange = async list => {
    setCheckedList(list);
  };
  //我们使用了一个名为 updateChecks 的回调函数来确保在 useEffect 中使用最新的 checkedList 值。这样，无论异步操作是否完成，都会正确地传递最新的 checkedList 值给 dispatch。
  useEffect(() => {
    const updateChecks = () => {
      dispatch(setChecks(checkedList));
    };
    updateChecks();
  }, [checkedList, dispatch]);

  useEffect(() => {
    setCheckedList([]);
  }, [setFalse]);

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

// eslint-disable-next-line no-lone-blocks
{
  /* {checks.map(check => (
        <Col span="auto" key={check}>
          <Checkbox key={check} value={check} style={{ fontSize: "1px" }}>
            {`${check}()`}
          </Checkbox>
        </Col>
      ))} */
}
