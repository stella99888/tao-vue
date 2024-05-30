<!-- 公共动态子组件 compB.vue -->
<template>
  <div class="bb">
    {{ data }}
  </div>
</template>

<script>
export default {
  name: "compB",
  props: {
    data: {
      type: String,
      default: ''
    }
  },
};
</script>

<style>
.bb {
  background-color: rgb(181, 200, 244);
  margin: 10px auto;
  width: 500px;
  height: 300px;
}
</style>