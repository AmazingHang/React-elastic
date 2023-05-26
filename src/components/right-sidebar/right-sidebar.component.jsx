import Sidebar from "../sidebar/sidebar.component";
const RightSidebar = ({ rightSideData }) => (
  <Sidebar
    TYPE="right"
    title="热门搜索"
    items={rightSideData}
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      right: 0,
      top: 0,
      bottom: 0,
    }}
  />
);

export default RightSidebar;
