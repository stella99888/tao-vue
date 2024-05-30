<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-bar></nav-bar>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import leftMenu from '@/layOut/leftMenu.vue'
import navBar from '@/layOut/navBar.vue'
export default {
  components: {
    navBar,
    leftMenu,
  }
}
</script>
<style>
body {
  margin: 0;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* background-color: pink; */
}

.el-header {
  background-color: #ed7574;
  text-align: center;
}

.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}

body>.el-container {
  margin-bottom: 40px;
  height: auto;
}

/* 滚动条 */
.el-aside::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

.el-aside::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  /* border-radius: 5px; */
  height: 10px;
  /* background: #E5E5E5; */
}

.el-aside::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* border-radius: 10px; */
  background: #ffffff;
}
</style>
