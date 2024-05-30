import AboutView from '../views/AboutView.vue'
import Text from '../views/Text.vue'
const routerArr = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ '../views/AboutView.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/myForm',
    name: 'myForm',
    component: () => import(/* webpackChunkName: 'about' */ '../views/Form.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/layload',
    name: 'layload',
    component: () => import('../views/LayLoad.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/amap',
    name: 'amap',
    component: () => import('../views/Amap.vue'),
    meta: {
      title: '地图',
      keepAlive: false,
    }
  },
  {
    path: '/text',
    name: 'text',
    component: () => import('../views/Text.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../views/Loading.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/getDoc',
    name: 'getDoc',
    component: () => import('../views/GetDoc.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/isComponent',
    name: 'isComponent',
    component: () => import('../views/IsComponent.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/mergeTable',
    name: 'mergeTable',
    component: () => import('../views/MergeTable.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/testAnchorPoint',
    name: 'testAnchorPoint',
    component: () => import('../views/TestAnchorPoint.vue'),
    meta: {
      title: '考试锚点定位',
      keepAlive: false,
    }
  },
  {
    path: '/commandBaseComponent',
    name: 'commandBaseComponent',
    component: () => import('../views/CommandBaseComponent.vue'),
    meta: {
      title: '命令式组件封装',
      keepAlive: false,
    }
  },
  {
    path: '/requestAnimationFrame',
    name: 'requestAnimationFrame',
    component: () => import('../views/RequestAnimationFrame.vue'),
    meta: {
      title: '动画requestAnimationFrame',
      keepAlive: false,
    }
  },
]
export default routerArr
