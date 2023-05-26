import Sidebar from "../sidebar/sidebar.component";
const LeftSideBar = ({ leftSideData }) => (
  <Sidebar
    clear="true"
    TYPE="left"
    title="筛选"
    items={leftSideData}
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
    }}
  />
);

export default LeftSideBar;
