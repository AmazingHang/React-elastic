/* eslint-disable no-unused-vars */
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
export const getDataFromDatabase = async () => {
  try {
    const response = await instance.get("/");
    return response.data || originJobsData;
  } catch (error) {
    // 处理请求错误
    console.error("Error fetching data from database:", error);
    return originJobsData;
  }
};
export const getSearchedData = async searchString => {
  try {
    const response = await instance.get("/", {
      params: {
        key_words: searchString,
      },
    });
    return response.data || fakeData;
  } catch (error) {
    console.error("Error fetching searched data:", error);
    return fakeData;
  }
};

export const getHitsData = async () => {
  try {
    const response = await instance.get("/");
    const rightSideData = ["前端开发", "后端开发", "上海市", "北京市", "运维"];
    return rightSideData;
  } catch (error) {
    console.error("Error fetching hits data:", error);
    return [];
  }
};

export const getFuzzySearchData = async fuzzySearch => {
  try {
    const response = await instance.get("/", {
      params: {
        fuzzySearch: fuzzySearch,
      },
    });
    const fuzzySearchData = [
      "前端开发",
      "后端开发",
      "上海市",
      "北京市",
      "运维",
    ];
    return fuzzySearchData;
  } catch (error) {
    console.error("Error fetching fuzzy search data:", error);
    return [];
  }
};

export const createPost = postData => instance.post("/posts", postData);
