<template>
  <div class="about">9999
    <h1 v-taohtml="str1" @click="getNextPage">This is an about page</h1>
    <!-- 弹窗 -->
    <el-button @click="openDialog">打开弹窗</el-button>
    <zh-dialog :dialogVisible.sync="dialogVisible" :markVisible="true">
      <template v-slot:default>
        <h2>这是content内容</h2>
      </template>
      <template v-slot:footer>
        <!-- <el-button>签约</el-button> -->
        <div></div>
      </template>
    </zh-dialog>


  </div>
</template>
<script>

export default {
  data() {
    return {
      str1: '12242ehjsjdljkl1',
      dialogVisible: false,
    };
  },
  mounted() {

  },
  methods: {
    getNextPage() {
      // 1. 通常需要自己写方法，例如清空路由或实例化VueRouter
      // this.$router.resetRouter()
      // 2. 解析一个位置到一个可跳转的URL
      // let route2 = this.$router.resolve({
      //   name: 'text',  //这里是跳转页面的name
      //   query: {
      //     id: 1   //要传的参数
      //   }
      // })
      // //打开新的页面
      // window.open(route2.href, '_blank')
      // 3.路由的3个钩子
      // beforeRouteLeave 表单填写，离开时，是否需要暂存
      // beforeRouteEnter 进入路由页面时，权限
      // beforeEach 判断是否携带token，是否有机构树，权限树
    },
    openDialog() {
      // console.log(this.$router);
      // route路由信息，名词；query是查询字符串
      // console.log(this.$route);
      this.dialogVisible = !this.dialogVisible
    },
    // closeDialog(val) {
    //   this.dialogVisible = val
    // }
  }
};
</script>
<style>
.pink {
  background-color: pink;
  width: 30px;
  height: 30px;
  margin-top: 900px;
}
</style>