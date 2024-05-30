import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 引入并使用自定义指令
import install from './directives'
Vue.use(install)

// 注册全局组件
import ZhDialog from "./components/ZhDialog.vue";
Vue.component('ZhDialog', ZhDialog)
// 全局引入，这样就可以在全局.this调用了
import './components/zhLoading/index.js'

// 高德地图配置
import VueAMap from "vue-amap"; // 引入插件
Vue.use(VueAMap); // 使用插件
VueAMap.initAMapApiLoader({ // 初始化插件
  key: "8d2e63d9c1a1ae29ed6ebc7314101119", // 高德key，自己官网申请即可，这里是我申请的
  plugin: ["AMap.Geocoder"],  // 插件集合，这里只有一个定位功能，所以就只放一个AMap.Geocoder
  uiVersion: "1.0.11", // 不加会报错，加上吧
  v: "1.4.15", // 不加也不会影响，顺手加上吧
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
