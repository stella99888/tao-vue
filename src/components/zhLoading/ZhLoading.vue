<!-- 手写全局loading组件 -->
<template>
  <!-- 添加name属性，以添加样式
  Transition 主要做一个淡入淡出的 -->
  <Transition name="zhLoading">
    <div v-if="loadingVisible" class="zh-loading-mark" :style="{ background: bgColor }">
      <div class="zh-loading-body">
        <i class="el-icon-loading"></i>
        <div>
          {{ text }}
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>

export default {
  // name: 'ZhLoading',
  data() {
    return {
      text: '浏览器数据加载中...',
      loadingVisible: false,
      bgColor: 'rgba(43, 41, 39, 0.276)'
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>
<style scoped lang="scss">
.zh-loading-mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .zh-loading-body {
    margin: auto;
    margin-top: 35vh;
  }

  // transition标签样式添加
  .zhLoading-enter,
  .zhLoading-leave-to {
    opacity: 0;
  }

  .zhLoading-enter-active,
  .zhLoading-leave-active {
    transition: opacity 0.6s;
  }
}
</style>