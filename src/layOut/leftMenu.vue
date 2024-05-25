<template>
  <div>
    <div class="title-center">
      <img :src="src" alt="" class="headerImg">
      <span>周小姐</span>
    </div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="1" :router='true' class="el-menu-vertical-demo" @open="handleOpen"
          @close="handleClose">
          <el-menu-item :index="item.index" v-for="item in menuArr" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require('@/assets/logo.png'),
      menuArr: [
        {
          index: '/home',
          title: '首页',
          icon: 'el-icon-location'
        },
        {
          index: '/about',
          title: '关于',
          icon: 'el-icon-location'
        },
        {
          index: '/myForm',
          title: '表单封装',
          icon: 'el-icon-location'
        },
        {
          index: '/layload',
          title: '懒加载',
          icon: 'el-icon-location'
        }, {
          index: '/random',
          title: '随机数',
          icon: 'el-icon-location'
        },
        {
          index: '/text',
          title: '文字展示',
          icon: 'el-icon-location'
        },
        {
          index: '/loading',
          title: '加载中...',
          icon: 'el-icon-location'
        },
        {
          index: '/getDoc',
          title: '下载文件',
          icon: 'el-icon-location'
        },
        {
          index: '/isComponent',
          title: '公共动态路由',
          icon: 'el-icon-location'
        },
        {
          index: '/mergeTable',
          title: '表格表体合并',
          icon: 'el-icon-location'
        },
        {
          index: '/testAnchorPoint',
          title: '试题组件锚点定位',
          icon: 'el-icon-location'
        },
        {
          index: '/commandBaseComponent',
          title: '命令式组件封装',
          icon: 'el-icon-location'
        },
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped lang="scss">
// 头像旋转
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.headerImg {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  vertical-align: middle;
  margin-right: 5px;
  animation: donut-spin 5s linear infinite;
}

.headerImg:hover {
  cursor: pointer;
  animation-play-state: paused; //滚动动画暂停
}



.title-center {
  margin-top: 15px;
  width: 200px;
  text-align: left;
  padding-left: 20px;
  line-height: 30px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}

.el-menu-vertical-demo[data-v-8431c9bc]:not(.el-menu--collapse) {
  border: 0;
}
</style>