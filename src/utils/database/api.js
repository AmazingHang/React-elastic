import axios from "axios";

import originJobsData from "./origin-data";
import fakeData from "./fake-data";

// 创建 Axios 实例
const instance = axios.create({
  baseURL: "http://localhost:3000/", // 设置请求的基础URL
  timeout: 5000, // 设置请求超时时间
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送前可以对请求进行修改，例如添加请求头
    config.headers.Authorization = "Bearer your_token_here";
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
export const getDataFromDatabase = () => {
  return originJobsData;
};
export const getSearchedData = () =>
  instance.get("/").then(
    data =>
      //dev-设置返回结果
      (data = fakeData)
  );
export const getHitsdData = () =>
  instance.get("/").then(data => {
    //dev-设置返回结果
    const rightSideData = ["前端开发", "后端开发", "上海市", "北京市", "运维"];
    return (data = rightSideData);
  });
export const createPost = postData => instance.post("/posts", postData);
