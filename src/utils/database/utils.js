export const leftSideData = [
  {
    title: "公司",
    list: ["百度", "哔哩哔哩", "蚂蚁集团"],
  },
  {
    title: "位置",
    list: ["北京", "上海", "深圳", "重庆"],
  },
  { title: "类别", list: ["校招", "日常", "全职"] },
  {
    title: "种类",
    list: ["技术", "产品", "专业服务和管理支持", "用户体验"],
  },
];
export const dateFilter = (checks, totalJobs) => {
  // 创建一个对象来存储筛选条件
  const filters = {
    company: ["百度", "哔哩哔哩", "蚂蚁集团"],
    location: ["北京", "上海", "深圳", "重庆"],
    type: ["校招", "日常", "全职"],
    category: ["技术", "产品", "专业服务和管理支持", "用户体验"],
  };
  const filteredJobsData = totalJobs.filter(job => {
    // 对每个筛选条件检查是否满足
    return Object.keys(filters).every(key => {
      // 如果没有该筛选条件或筛选条件为空，返回 true
      if (!checks.some(check => filters[key].includes(check))) return true;
      // 否则，检查 job 的属性是否包含筛选条件中的任何一个
      return checks.some(check => {
        return job[key] && job[key].includes(check);
      });
    });
  });
  return filteredJobsData;
};
