import axios from "axios";

import originJobsData from "./origin-data";
import fakeData from "./fake-data";
//baseURL: "http://10.28.218.94:8000",
// 创建 Axios 实例
const instance = axios.create({
  // 设置请求的基础URL
  baseURL: "http://localhost:3000",
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送前可以对请求进行修改，例如添加请求头

    return config;
  },
  error => {
    // 请求发送失败时的处理
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据进行处理，例如统一处理错误信息
    if (response.data && response.data.error) {
      console.error("API Error:", response.data.error);
    }
    return response.data;
  },
  error => {
    // 响应错误时的处理
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

// 封装请求函数
export const getDataFromDatabase = () =>
  instance.get("/").then(data => {
    return (data = originJobsData);
  });
export const getSearchedData = () =>
  instance.get("/").then(data => {
    return (data = fakeData);
  });
export const getHitsdData = () =>
  instance.get("/").then(data => {
    //dev-设置返回结果
    const rightSideData = ["前端开发", "后端开发", "上海市", "北京市", "运维"];
    return (data = rightSideData);
  });

export const getFuzzySearchData = () =>
  instance.get("/").then(data => {
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
export const createPost = postData => instance.post("/posts", postData);
