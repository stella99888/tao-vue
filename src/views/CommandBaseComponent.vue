<!-- 命令式组件:父组件 -->
<template>
  <div>
    <el-button @click="clickHandler">显示提示框</el-button>
  </div>
</template>

<script>
import { showMsg } from "./components/commandBaseComponents/showMsg";
export default {
  methods: {
    clickHandler() {
      // 调用js文件方法并传参
      const close = showMsg('确认要提交该信息吗？',
        () => {
          // ToDo一些请求
          this.uploadMsg()
          close()
        },
        () => {
          close()
        })
    },
    uploadMsg() {
      console.log('uploadMsg');
    }

  }
};
</script>
<style scoped lang="scss"></style>