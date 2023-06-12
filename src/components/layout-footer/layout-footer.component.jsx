import { Layout } from "antd";
const { Footer } = Layout;

const LayoutFooter = () => (
  <Footer
    style={{
      margin: "0 1% ",
      color: "white",
      background: "#9DB2BF",
      textAlign: "center",
    }}>
    React & Django & Scrapy & Elasticsearch @2023
  </Footer>
);

export default LayoutFooter;
