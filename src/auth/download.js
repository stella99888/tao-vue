import axios from 'axios';
const QIANURL = 'http://ashuai.work'
/***
 * 1.该方法是在组件内写好之后，再提出来封装的逻辑
 * 2.首先会遇到data变量无法进行赋值，选择通过传入回调函数的方式，把值传出去
 * 3.因为下载文件是异步操作，需要等待，new promise实例，return出去，在.then通过resolve将下载文件的结果丢出去，在外面通过async await方式获取最终结果
 * */
export function downLoadFile(houApi, cb) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      responseType: "blob", // 流文件为blob类型
      url: QIANURL + "/api" + houApi,
      // axios提供的下载进度方法，也有上传进度方法
      onDownloadProgress: (ProgressEvent) => {
        // console.log(this);
        // console.log('进度事件', ProgressEvent.loaded, ProgressEvent.total, _this);
        let percent = Number((ProgressEvent.loaded / ProgressEvent.total * 100).toFixed(2))
        cb(percent)
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

}

/**
    * xml将url静态资源文件下载到本地
    * @param fileUrl {String} 文件链接
    * @param fileName {String} 文件名字
    * @return void
    */
// async downloadFile(fileUrl, fileName) {
//   let blob = await this.getBlob(fileUrl);
//   this.saveFile(blob, fileName);
// },
// getBlob(fileUrl) {
//   const _this = this
//   return new Promise(resolve => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', fileUrl, true);
//     //监听进度事件
//     xhr.addEventListener(
//       'progress',
//       function (evt) {
//         if (evt.lengthComputable) {
//           let percentComplete = evt.loaded / evt.total;
//           // percentage是当前下载进度，可根据自己的需求自行处理
//           // 注意此处this不是vue 的this了❤
//           _this.percent = Number((percentComplete * 100)).toFixed(2);
//           console.log('this.percent', _this.percent);
//         }
//       },
//       false
//     );
//     xhr.responseType = 'blob';
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(xhr.response);
//       }
//     };
//     xhr.send();
//   });
// },
// saveFile(blob, fileName) {
//   // ie的下载
//   if (window.navigator.msSaveOrOpenBlob) {
//     navigator.msSaveBlob(blob, filename);
//   } else {
//     // 非ie的下载
//     const link = document.createElement('a');
//     const body = document.querySelector('body');

//     link.href = window.URL.createObjectURL(blob);
//     link.download = fileName;

//     // fix Firefox
//     link.style.display = 'none';
//     body.appendChild(link);

//     link.click();
//     body.removeChild(link);

//     window.URL.revokeObjectURL(link.href);
//   }
// }
// 静态资源下载，无法监听到进度
// getDoc() {
//   var a = document.createElement("a"); //创建一个<a></a>标签
//   a.href = "http://ashuai.work/api/getDoc"; // 给a标签的href属性值加上地址，注意，这里是绝对路径，不用加 点.
//   a.download = "下载啦.xlsx"; //设置下载文件文件名，这里加上.xlsx指定文件类型，pdf文件就指定.fpd即可
//   a.style.display = "none"; // 障眼法藏起来a标签
//   document.body.appendChild(a); // 将a标签追加到文档对象中
//   a.click(); // 模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
//   a.remove(); // 一次性的，用完就删除a标签
// }