import Sidebar from "../sidebar/sidebar.component";
const RightSidebar = ({ rightSideData }) => (
  <Sidebar
    TYPE="right"
    title="热门搜索"
    items={rightSideData}
    style={{
      padding: "1%",
      overflow: "auto",
      position: "fixed",
      right: 0,
      top: 0,
      bottom: 0,
    }}
  />
);

export default RightSidebar;
