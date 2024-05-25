<!-- 命令式组件:父组件 -->
<template>
  <div>
    <el-button @click="showMsgDialog">显示提示框</el-button>
  </div>
</template>

<script>
import { showMsg } from "./components/commandBaseComponents/showMsg";
export default {
  methods: {
    showMsgDialog() {
      console.log(1);
      showMsg('123')
    }
  }
};
</script>
<style scoped lang="scss"></style>