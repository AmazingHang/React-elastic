import { Button } from "antd";

const ClearButton = ({ onClearHandler }) => {
  return (
    <Button
      type="primary"
      size="large"
      onClick={onClearHandler}
      style={{
        position: "absolute",
        textAlign: "right",
        marginLeft: "20%",
        border: "0",
      }}
      ghost>
      清除
    </Button>
  );
};
export default ClearButton;
