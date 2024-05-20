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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
