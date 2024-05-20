<template>
  <div>
    <el-button @click="openLoading">打开loading</el-button>
    <div>222</div>
    <!-- <zh-loading></zh-loading> -->
  </div>
</template>
<script>

export default {
  data() {
    return {

    };
  },
  mounted() {
    console.log('1--', this.$el); // template里面的div所有内容
    console.log(this, '----');
  },
  methods: {
    openLoading() {
      this.$showDialog({
        text: "浏览器在加载哇...",
      });
      setTimeout(() => {
        this.$hideDialog();
      }, 1500);
    }
  }
};
</script>
<style scoped lang="scss"></style>