// 命令式组件:js文件

import MessageBox from "./MessageBox.vue";

import Vue from 'vue'

export function showMsg(msg) {
  // 使用Vue.extend创建一个组件构造器
  const MessageBoxConstructor = Vue.extend(MessageBox);
  // 创建组件实例
  const instance = new MessageBoxConstructor({
    // 传递props数据（如果有）
    propsData: {
      msg: msg, // 假设MessageBox组件需要一个message prop
    },
  });

  // 创建一个新的div元素
  const div = document.createElement('div');
  // 将div添加到body中
  document.body.appendChild(div);

  // 挂载组件实例到div上
  instance.$mount(div);
}