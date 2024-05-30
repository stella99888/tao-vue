<template>
  <div class="cc">
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
.cc {
  background-color: rgb(224, 248, 188);
  margin: 10px auto;
  width: 500px;
  height: 300px;
}
</style>