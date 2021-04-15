import axios from 'axios';
import $ from 'jquery';

// Vue.prototype.$axios = axios;

export const service = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {
    ['Content-Type']: 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
});

service.interceptors.response.use(
  res => res,
  e => {
    console.error('e', e);
    Notification.error({ title: '获取数据接口获取异常!', });
    return Promise.reject(e);
  }
);

export const getJSON = async (...args) => {
  return new Promise((resolve, reject) => {
    $.getJSON(...args)
      .done(resolve)
      .fail(reject);
  });
};

