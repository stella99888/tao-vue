import axios from "axios";
import { Message } from 'element-ui';
const instance = axios.create({
  // 公共接口,baseURL一般是一个标识
  baseURL: '/zhou',
  // 超时时间
  timeout: 3 * 1000,
});
// 请求拦截器
instance.interceptors.request.use((config) => {
  // 数据转换，可以用json
  config.data = JSON.stringify(config.data)
  // 配置请求头
  config.headers = { 'Content-Type': 'application/json' }
  // 如果有，且需要添加token
  // const token = getCookie('token')
  // if (token) {
  //   config.params = { 'token': token } //携带到参数里面
  //   config.headers.token = token //如果携带到请求头里面
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((res) => {
  // 请求成功，就全局loading关闭这样的，或者进行一些数据共有的处理
  if (res.data.code == 1) {
  }
  return res;
}, (error) => {
  // 有的公司不需要做一个接口精细化的控制，直接报错就可以了
  // 如果需要，也可以做dict字典这样的形式
  // 接收到数据异常开始处理
  Message.error(error.message)
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
});


export default instance