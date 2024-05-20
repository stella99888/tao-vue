import request from "./request";

// 获取信息
export function getPersonMsg() {
  return request({
    url: "/getPersonMsg",
    method: "get",
  });
}

// export function getDoc() {
//   return request({
//     url: "/getDoc",
//     method: "get",
//   });
// }

// // 登录
// export function authCodeLogin(params) {
//   return request({
//     url: baseUrl + "/authCodeLogin/" + params.code,
//     method: "get",
//   });
// }
// //退出
// export function authLogout(params) {
//   return request({
//     url: baseUrl + "/logout",
//     method: "get",
//   });
// }
// //获取用户数据
// export function getUserInfo(params) {
//   return request({
//     url: baseUrl + "/getUserInfo",
//     method: "get",
//     params: qs.stringfy(params)
//   });
// }

//其实，也不一定就是params，也可以是 query 还有 data 的呀！
//params是添加到url的请求字符串中的，用于get请求。会将参数加到 url后面。所以，传递的都是字符串。无法传递参数中含有json格式的数据
//而data是添加到请求体（body）中的， 用于post请求。添加到请求体（body）中，json 格式也是可以的。