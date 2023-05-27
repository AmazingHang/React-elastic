import { Button } from "antd";

const ClearButton = ({ onClearHandler }) => {
  return (
    <Button
      type="primary"
      size="small"
      onClick={onClearHandler}
      style={{ marginLeft: "40%", border: "0px" }}
      ghost>
      清除
    </Button>
  );
};
export default ClearButton;
