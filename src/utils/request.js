import.meta.env.VITE_BASE_API;
import axios from 'axios';
import store from '@/store';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
});


// 请求拦截

// 响应处理
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      // deal error handle
    } else return res;
  },
  (e) => {
    console.log('err:', e);

    return Promise.reject(e);
  }
);

export default service;
