<template>
  <div class="dd">
    {{ data }}
  </div>
</template>

<script>
export default {
  name: "compC",
  props: {
    data: {
      type: String,
      default: ''
    }
  },
};
</script>
<style>
.dd {
  background-color: rgb(215, 250, 249);
  margin: 10px auto;
  width: 500px;
  height: 300px;
}
</style>