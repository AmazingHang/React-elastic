import axios from "axios";

// 创建 Axios 实例
const instance = axios.create({
  // 设置请求的基础URL
  baseURL: "http://10.28.218.94:8000",
});

// 封装请求函数
export const getDataFromDatabase = async () => {
  try {
    const response = await instance.get("/");
    return response.data["data"];
  } catch (error) {
    // 处理请求错误
    console.error("Error fetching data from database:", error);
    return Promise.reject(error);
  }
};
export const getSearchedData = async searchString => {
  try {
    const response = await instance.get("/search", {
      params: {
        key_words: searchString,
      },
    });
    return response.data["data"];
  } catch (error) {
    console.error("Error fetching searched data:", error);
    return Promise.reject(error);
  }
};

export const getHitsData = async () => {
  try {
    const response = (await instance.get("/top-searches")).data;
    // 将对象转换为数组
    const entries = Object.entries(response);
    // 按值进行排序
    entries.sort((a, b) => b[1] - a[1]);
    return entries;
  } catch (error) {
    console.error("Error fetching hits data:", error);
    return error;
  }
};

export const getFuzzySearchData = async fuzzySearch => {
  try {
    const response = await instance.get("/fuzzy", {
      params: {
        keyword: fuzzySearch,
      },
    });
    return response.data["data"];
  } catch (error) {
    console.error("Error fetching fuzzy search data:", error);
    return Promise.reject(error);
  }
};

export const createPost = postData => instance.post("/posts", postData);
