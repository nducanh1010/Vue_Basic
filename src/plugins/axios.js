import axios from 'axios';
// import queryString from 'query-string';
// import router from '@/router';
// import { removeAuthenticated } from '@/utils/auth';
// import { createApp} from "vue";
import { authHeaders } from '@/utils/auth';

const options = {
  arrayFormat: 'bracket',
};

// set up default config for http requests
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  // paramsSerializer: params => queryString.stringify(params, options),

  
});

// add a request interceptor
http.interceptors.request.use(
  config => {
    config.headers=authHeaders();
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// add a response interceptor
http.interceptors.response.use(
  response => {
    return response?.data;
  },
  error => {
    // if (error.response && error.response.status === 401) {
    //   removeAuthenticated(); // remove authentication in local storage   
    //   setTimeout(() => {
    //     router.push('/login');
    //   });
    // }
    // return Promise.reject(error);
  },
);

export default http; //import global in main.js
