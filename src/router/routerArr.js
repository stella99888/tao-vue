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
    path: '/layload',
    name: 'layload',
    component: () => import('../views/LayLoad.vue'),
    meta: {
      title: '前端多线程',
      keepAlive: false,
    }
  },
  {
    path: '/random',
    name: 'random',
    component: () => import('../views/Random.vue'),
    meta: {
      title: '前端多线程',
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
      title: '前端多线程',
      keepAlive: false,
    }
  },
]
export default routerArr
