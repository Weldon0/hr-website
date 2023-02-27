// import axios from '../lib/axios.js';
import axios from '../component/layui/axios.js'
const request = axios.create({
  baseURL: 'http://weldon.net.cn:3001/api',
});

request.interceptors.request.use(function (config) {
  // 注入token
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  // Do something before request is sent
  return config;
});

request.interceptors.response.use(
  function (response) {
    // 进行错误处理
    if (response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      return Promise.reject(response);
    }

    if (response.data.success === true) {
      return response.data.data;
    }

    // Do something with response data
    return Promise.reject(response);
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;
