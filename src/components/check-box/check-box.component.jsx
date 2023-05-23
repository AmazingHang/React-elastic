import { Checkbox, Col } from "antd";

const onChange = checkedValues => {
  console.log("checked = ", checkedValues);
};

const CheckBox = ({ list }) => {
  const checks = list;
  return (
    <Checkbox.Group
      style={{
        width: "100%",
      }}
      onChange={onChange}>
      {checks.map(check => (
        <Col span="auto" key={check}>
          <Checkbox key={check} value={check} style={{ fontSize: "1px" }}>
            {`${check}()`}
          </Checkbox>
        </Col>
      ))}
    </Checkbox.Group>
  );
};
export default CheckBox;
