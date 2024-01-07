import homeJobsData from "../database/home-jobs-data";
import fakeSearchData from "../database/fake-search-data";
import request from "../utils/request";

// home data
export const getDataFromDatabase = () => {
  return homeJobsData;
};

// search data
export const getSearchedData = () =>
  request.get("/").then(
    data =>
      //dev-设置返回结果
      (data = fakeSearchData)
  );

// left data
export const getHitsData = () =>
  request.get("/").then(data => {
    //dev-设置返回结果
    const rightSideData = ["前端开发", "后端开发", "上海市", "北京市", "运维"];
    return (data = rightSideData);
  });

// fuzzy search data
export const getFuzzySearchData = () =>
  request.get("/").then(data => {
    //dev-设置返回结果
    const fuzzySearchData = [
      "前端开发",
      "后端开发",
      "上海市",
      "北京市",
      "运维",
    ];
    return (data = fuzzySearchData);
  });

export const createPost = postData => request.post("/posts", postData);
