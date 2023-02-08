// // 对axios进行二次封装
// import axios from "axios";
// // 引入进度条
// import nprogress from "nprogress";
// // 引入进度条样式
// import "nprogress/nprogress.css"
// import storageService from "../service/storageService";

// // 1、利用axios对象的方法create，创建一个axios实例
// const requests = axios.create({
//     // 配置对象
//     // 基础路径，发请求的时候，路径中会出现api
//     // baseURL: process.env.VUE_APP_BASE_URL,
//     baseURL: "http://localhost:8081/api",
//     // 请求超时的时间
//     timeout: 5000,
//     // headers: {
//     //     Authorization: 'Bearer ' + storageService.get(storageService.USER_TOKEN)
//     // }
// })

// // 请求拦截器：在发请求之前，请求拦截器可以检测并作一些业务
// requests.interceptors.request.use(config => {
//     // config：配置对象，对象里面的headers请求头很重要
//     // 进度条开始
//     nprogress.start()
//     // 请求之前修改header
//     Object.assign(config.headers, {
//         Authorization: 'Bearer ' + storageService.get(storageService.USER_TOKEN)
//     })
//     return config
// })

// // 响应拦截器
// requests.interceptors.response.use(res => {
//     // 成功的回调函数
//     // 进度条结束
//     nprogress.done()
//     return res.data
// }), (err) => {
//     // 响应失败的回调函数
//     return Promise.reject(new Error("faile", err))
// }

// export default requests