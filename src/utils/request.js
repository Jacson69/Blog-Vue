import axios from 'axios';

const axiosInst = axios.create({
  baseURL: 'http://localhost:8081/api',
  timeout: 5000,
});

axiosInst.interceptors.request.use(
  (config) => {
    Object.assign(config.headers, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('TOKEN')).token}`,
    });

    // console.log(config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInst.interceptors.response.use(
  (response) => {
    const { code, data, msg } = response.data;
    if (code === 200) {
      return data;
    } else {
      window.msg.error(msg);
      throw new Error(msg);
    }
  },
  (error) => Promise.reject(error)
);

const request = (config) => axiosInst.request(config);

export default request;
