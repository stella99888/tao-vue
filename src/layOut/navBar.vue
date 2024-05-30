<template>
  <div class="nav-bar">
    <div>首页/</div>
    {{ navBarTitle }}
  </div>
</template>

<script>
const Dict = {
  '/home': '首页',
  '/about': '关于',
  '/myForm': '表单封装',
  '/layload': '懒加载',
  '/amap': '地图',
  '/text': '文字展示',
  '/loading': '加载中...',
  '/getDoc': '下载文件',
  '/isComponent': '公共动态路由',
  '/mergeTable': '表格表体合并',
  '/testAnchorPoint': '试题组件锚点定位',
  '/commandBaseComponent': '命令式组件封装',
  '/requestAnimationFrame': '动画requestAnimationFrame',
}
export default {
  data() {
    return {
      navBarTitle: Dict['/about']
    }
  },
  watch: {
    $route: {
      handler: function (newRoute, oldRoute) {
        this.navBarTitle = Dict[newRoute.path]
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>
<style scoped lang="scss">
.nav-bar {
  line-height: 60px;
  color: #fff;
  display: flex;
}
</style>