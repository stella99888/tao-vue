<template>
  <div>
    <!-- <a href="http://ashuai.work/zhou/getDoc" download="test">下载文件</a> -->
    <!-- <el-button @click="downloadFile('http://ashuai.work/api/getDoc', 'wa.doc')">xml下载文件</el-button> -->
    <!-- xml能做的事情，axios基本都有封装，包括上传下载进度 -->
    <el-button @click="down">axios下载文件</el-button>
    <el-progress :stroke-width="16" :percentage="percent"></el-progress>
  </div>
</template>

<script>
import { downLoadFile } from "@/auth/download";
export default {
  name: 'GetDoc',
  data() {
    return {
      percent: 0
    }
  },
  methods: {
    // 进度多少了，使用cb高阶函数传回来。
    // 有没有下完，异步函数，包一层new Promise，下完后将res结果resolve出去。
    // 下完之后执行什么操作，就在组件里面执行了。
    async down() {
      // 传入一个函数
      let res = await downLoadFile('/getDoc', this.cb)
      console.log('res', res);
      // ToDo 下载文件逻辑
    },
    cb(val) {
      this.percent = val
    }
  }
}
</script>
