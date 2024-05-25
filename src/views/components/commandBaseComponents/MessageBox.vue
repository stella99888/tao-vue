<!-- 命令式组件:子组件 -->
<template>
  <div class="mark">
    <div class="dialog">
      <div class="body">{{ msg }}</div>
      <div class="footer">
        <el-button @click="$emit('click')">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  }
};
</script>
<style scoped lang="scss">
.mark {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .dialog {
    width: 30%;
    background-color: antiquewhite;
    margin: auto;
    margin-top: 15vh;
    border-radius: 5px;

    .header {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      padding-bottom: 5px;
    }

    .body {
      text-align: left;
      padding: 15px;
    }

    .footer {
      text-align: right;
      padding: 15px;
    }
  }
}
</style>