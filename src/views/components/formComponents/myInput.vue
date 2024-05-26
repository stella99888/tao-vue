<!-- form表单组件 孙子组件input 2024.05.25 -->
<template>
  <!-- 进行多个参数传递 -->
  <el-input clearable @input="(params, val) => {
    getChange(params, 'input')
  }" @focus="(params, val) => {
    getChange(params, 'focus')
  }" @blur="(params, val) => {
    getChange(params, 'blur')
  }" style="width: 100%;" v-bind="attr" v-model="form[attr.prop]" class="my-input">
    <span slot="prepend"></span>
    <!-- <slot v-for="(item, index) in slotName" :key="index" slot="prepend"></slot> -->
    <!-- <slot name="age"></slot> -->
    <!-- <slot :name="slotName"></slot> -->
  </el-input>

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
    },
    downslot: {
      type: Object,
      default: () => { }
    },
  },
  methods: {
    // 把值都丢出去，在最外层做一定的操作
    getChange(params, eventName) {
      this.$emit('ev', {
        componentName: 'MyInput',
        eventName: eventName,
        propName: this.attr.prop,
        propValue: this.form[this.attr.prop],
      })
    },
    // 把事件都丢出去，在最外层做一定的操作
    // setBorder() {
    //   this.$emit('ev', {
    //     setBorder: this.setBorder,
    //   })
    // },
    // 把事件都丢出去，在最外层做一定的操作
    // cancelBorder() {
    //   this.$emit('ev', {
    //     cancelBorder: this.cancelBorder
    //   })
    // },
  }
};
</script>
<style scoped lang="scss"></style>