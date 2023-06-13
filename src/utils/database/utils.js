export const leftSideData = [
  {
    title: "公司",
    list: ["阿里", "百度", "快手", "哔哩哔哩", "蚂蚁集团", "字节跳动"],
  },
  {
    title: "位置",
    list: ["北京", "上海", "深圳", "大连", "成都", "重庆"],
  },
  { title: "类别", list: ["正式", "校招", "日常", "全职"] },
  {
    title: "种类",
    list: ["技术", "产品", "研发", "运营"],
  },
];

export const dateFilter = (checks, totalJobs) => {
  const filteredJobsData = totalJobs.filter(job => {
    let filterFiled = true; // 默认为满足条件
    if (
      checks.includes("快手") ||
      checks.includes("阿里") ||
      checks.includes("百度") ||
      checks.includes("哔哩哔哩") ||
      checks.includes("蚂蚁集团") ||
      checks.includes("字节跳动")
    ) {
      filterFiled =
        filterFiled &&
        job.company &&
        checks.some(check => job.company.includes(check));
    }
    if (
      checks.includes("北京") ||
      checks.includes("上海") ||
      checks.includes("深圳") ||
      checks.includes("大连") ||
      checks.includes("成都") ||
      checks.includes("重庆")
    ) {
      filterFiled =
        filterFiled &&
        job.location &&
        checks.some(check => job.location.includes(check));
    }
    if (
      checks.includes("正式") ||
      checks.includes("校招") ||
      checks.includes("日常") ||
      checks.includes("全职")
    ) {
      filterFiled =
        filterFiled &&
        job.type &&
        checks.some(check => job.type.includes(check));
    }
    if (
      checks.includes("技术") ||
      checks.includes("产品") ||
      checks.includes("研发") ||
      checks.includes("运营")
    ) {
      filterFiled =
        filterFiled &&
        job.category &&
        checks.some(check => job.category.includes(check));
    }
    return filterFiled;
  });

  return filteredJobsData;
};
