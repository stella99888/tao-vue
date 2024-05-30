<!-- 公共动态子组件 compA.vue -->
<template>
  <div class="aa">
    {{ data }}
    <br>
    <el-input class="inp" v-model="formA"></el-input>
  </div>
</template>

<script>
export default {
  name: "compA",
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      formA: ''
    }
  }
};
</script>
<style>
.aa {
  background-color: rgb(250, 203, 211);
  margin: 10px auto;
  width: 500px;
  height: 300px;
}

.inp {
  width: 100px;
}
</style>