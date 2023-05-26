import jobsData from "./data";

export const leftSideData = [
  { title: "公司", list: ["百度", "腾讯", "阿里"] },
  {
    title: "位置",
    list: ["北京市", "上海市", "深圳市", "大连市", "成都市", "重庆市"],
  },
  { title: "类别", list: ["校招", "日常", "AIDU项目"] },
  {
    title: "职位",
    list: ["技术", "产品", "用户体验", "专业服务和管理支持"],
  },
];

export const rightSideData = ["前端开发", "后端开发", "北京", "运维"];

export const getDataFromDatabase = () => {
  return jobsData;
};
