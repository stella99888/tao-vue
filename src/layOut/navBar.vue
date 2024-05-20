<template>
  <div class="nav-bar">
    <div>首页</div>
    {{ navBarTitle }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarTitle: '首页'
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