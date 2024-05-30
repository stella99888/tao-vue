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
    <slo :propKey="attr.prop" :propName='slotName' :slot='slotNameFn(slotName)' v-for="(_, slotName) in $slots">
      <template v-slot:[slot] v-for="(_, slot) in $slots">
        <slot :name="slot"></slot>
      </template>
    </slo>
  </el-input>

</template>

<script>
import slo from "./slo.vue";
export default {
  name: "MyInput",
  components: { slo },
  props: {
    attr: {
      type: Object,
      default: () => { }
    },
    form: {
      type: Object,
      default: () => { }
    },
    slotName: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    slotNameFn(slotName) {
      return slotName.split('&')[1]
    },
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