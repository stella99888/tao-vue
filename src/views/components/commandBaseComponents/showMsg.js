// 命令式组件:js文件
// 引入子组件
import MessageBox from "./MessageBox.vue";
// 引入Vue
import Vue from 'vue'

export function showMsg(msg, confirm, cancel) {
  // 使用Vue.extend创建一个组件构造器，相当于拷贝了一份组件
  const MessageBoxConstructor = Vue.extend(MessageBox);
  // 创建组件实例，进行传参
  const instance = new MessageBoxConstructor({
    // 传递数据
    propsData: {
      msg: msg, // 假设MessageBox组件需要一个msg，子组件用prop接收
      onClick: (clickType) => { // 方法也传给子组件，子组件用prop接收
        if (clickType === 'onComfirm') {
          confirm()
        } else if (clickType === 'onCancle') {
          cancel()
        }
      }
    },
  });

  // 创建一个新的div元素
  const div = document.createElement('div');
  // 将div添加到body中
  document.body.appendChild(div);

  // 挂载组件实例到div上
  instance.$mount(div);
  return () => {
    // 如果你的组件是一个对话框或类似需要手动关闭的，你可能还需要处理它的生命周期或提供一个关闭方法
    // 例如，你可以在这里监听组件的某些事件来决定何时卸载它
    instance.$el.remove(); // 关闭时从DOM中移除div
    instance.$destroy(); // 销毁Vue实例
  }

}