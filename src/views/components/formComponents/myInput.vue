<!-- form表单组件 孙子组件input 2024.05.25 -->
<template>
  <el-input clearable @input="getChange" @focus="setBorder" @blur="cancelBorder" style="width: 100%;" v-bind="attr"
    v-model="form[attr.prop]" class="my-input"></el-input>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    attr: {
      type: Object,
      default: () => { }
    },
    form: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    // 把值都丢出去，在最外层做一定的操作
    getChange() {
      this.$emit('ev', {
        componentName: 'MyInput',
        propName: this.attr.prop,
        propValue: this.form[this.attr.prop],
      })
    },
    // 把事件都丢出去，在最外层做一定的操作
    setBorder() {
      this.$emit('ev', {
        setBorder: this.setBorder,
      })
    },
    // 把事件都丢出去，在最外层做一定的操作
    cancelBorder() {
      this.$emit('ev', {
        cancelBorder: this.cancelBorder
      })
    },
  }
};
</script>
<style scoped lang="scss"></style>