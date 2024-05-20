<!-- 
  1.组件html结构，遮罩，头，内容，脚；
  2.插槽，传显示插槽内容，不传则使用默认片段,$slot
  3.传值去控制遮罩是否显示，关闭按钮是否显示,需要控制冒泡事件，否则点击弹出层也会关闭
  4.如何打开弹窗，哪些地方可以关闭弹窗，关闭是否需要用户再次确定
  5.是否注册成全局组件
 -->
<!-- 全局的弹窗 -->
<template>
  <!-- :style="{ backgroundColor: (0 ? 'rgba(0, 0, 0, 0)' : 'rgba(0,0,0,0.5)') }" -->
  <div class="zh-dialog-mark" :style="styleFn(markVisible)" v-if="dialogVisible" ref="dialogMarkRef"
    @click.prevent="closeDialog">
    <!-- 在这里需要禁止事件冒泡❤ -->
    <div class="zh-dialog" @click.stop>
      <div class="zh-dialog-header">
        <div>{{ title }}</div>
        <i class="el-icon-close" @click="closeDialog"></i>
      </div>
      <div class="zh-dialog-body">
        <slot></slot>
      </div>
      <div class="zh-dialog-footer">
        <!-- 判断传入与不传入的时候，展示不同内容 -->
        <slot v-if="$slots.footer" name="footer"></slot>
        <span v-else>
          <el-button @click="closeDialog">取消</el-button>
          <el-button type="primary" @click="closeDialog">确定</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZhDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    markVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    styleFn(val) {
      if (val) {
        return { 'backgroundColor': 'rgba(0,0,0,0)' }
      } else {
        return { 'backgroundColor': 'rgba(0,0,0,0.5)' }
      }
    },
    closeDialog() {
      // 这是传递给父组件方法，值为false
      // 要用.sync，update需要连接visible的变量
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>
<style scoped lang="scss">
.zh-dialog-mark {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.3);

  .zh-dialog {
    width: 30%;
    background-color: antiquewhite;
    margin: auto;
    margin-top: 15vh;
    border-radius: 5px;

    .zh-dialog-header {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      padding-bottom: 5px;
    }

    .zh-dialog-body {
      text-align: left;
      padding: 15px;
    }

    .zh-dialog-footer {
      text-align: right;
      padding: 15px;
    }
  }
}
</style>