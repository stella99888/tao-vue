// 意思是从loading里面把loading的方法和变量继承下来，绑定到vue（全局上面），这样我们可以直接通过this去使用
// 相对于普通组件和全局组件，不需要引入组件html部分，可以直接调用方法传入值
/**
 * 1.vue继承组件的方法，拿到组件的变量和方法
 * 2.原型上绑定方法
 */
// 引入vue
import Vue from 'vue'

// 引入loading组件
import zhLoading from './ZhLoading';
console.log('zhLoading---', zhLoading);
// 通过Vue的extend方法继承这个引入的loading组件，继承后会返回一个vue子类，需要使用实例化即可??
// vue.extend传入数据，进行处理后，多了很多东西
const Dialog = Vue.extend(zhLoading);

// 创建实例并且挂载到一个div上？？
// 相当于new 一个person，new Dialog()构造函数，挂到一个DOM上面
const app = new Dialog().$mount(document.createElement('div'))

// 打开弹框函数
function showDialog(options) {
  // 初始化调用传递过来的参数赋值更改组件内内部值
  for (let key in options) {
    // 把值传进来提取出来，然后赋值给实例上面
    app[key] = options[key];
  }
  // 让其显示
  app.loadingVisible = true
  // app就是一个vueComponent一个组件,相当于组件里面的this
  console.log('app--', app);
  // 并将其插入body中，$el用于获取app的所有的DOM元素
  document.body.appendChild(app.$el);
}

// 关闭弹框函数
function hideDialog() {
  // 因为是v-if去控制，所以将标识showLoading置为false，就会自动把弹框dom删掉
  app.loadingVisible = false
}

// 将打开函数和关闭函数都挂载到Vue原型prototype上，方便我们调用
Vue.prototype.$showDialog = showDialog;
Vue.prototype.$hideDialog = hideDialog;
Vue.prototype.$aaa = '周小姐'
