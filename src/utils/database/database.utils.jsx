import jobsData from "./data";

export const leftSideData = [
  { title: "公司", list: ["字节跳动", "腾讯", "阿里"] },
  { title: "位置", list: ["北京", "杭州", "上海"] },
  { title: "类别", list: ["实习生", "应届生"] },
  { title: "职位", list: ["研发", "运营", "产品", "市场", "销售"] },
];

export const rightSideData = ["前端开发", "后端开发", "北京", "运维"];

export const getDataFromDatabase = () => {
  return jobsData;
};
