import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const ISSERVER = typeof window === "undefined";
    const token = !ISSERVER ? localStorage.getItem(process.env.TOKEN_KEY) : "";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosConfig;
