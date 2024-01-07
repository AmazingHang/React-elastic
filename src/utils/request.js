import axios from "axios";
// 创建 Axios 实例
const request = axios.create({
  baseURL: "http://localhost:3000/", // 设置请求的基础URL
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
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
request.interceptors.response.use(
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

export default request;
