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

export const dateFilter = (checks, totalJobs) => {
  const filteredJobsData = totalJobs.filter(job => {
    let filterFiled = true; // 默认为满足条件
    if (
      checks.includes("百度") ||
      checks.includes("腾讯") ||
      checks.includes("阿里")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.company.includes(check));
    }
    if (
      checks.includes("北京市") ||
      checks.includes("上海市") ||
      checks.includes("深圳市") ||
      checks.includes("大连市") ||
      checks.includes("成都市") ||
      checks.includes("重庆市")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.location.includes(check));
    }
    if (
      checks.includes("校招") ||
      checks.includes("日常") ||
      checks.includes("AIDU项目")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.type.includes(check));
    }
    if (
      checks.includes("技术") ||
      checks.includes("产品") ||
      checks.includes("用户体验") ||
      checks.includes("专业服务和管理支持")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.category.includes(check));
    }
    return filterFiled;
  });

  return filteredJobsData;
};
