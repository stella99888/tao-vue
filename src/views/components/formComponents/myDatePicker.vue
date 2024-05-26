<!-- form表单组件 孙子组件date-picker 2024.05.25 -->
<template>
  <el-date-picker @change="getChange" style="width: 100%;" v-bind="attr" v-model="form[attr.prop]"
    class="my-data-picker"></el-date-picker>
</template>

<script>
export default {
  name: "MyDataPicker",
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
    getChange() {
      this.$emit('ev', {
        componentName: 'MyDataPicker',
        propName: this.attr.prop,
        propValue: this.form[this.attr.prop]
      })
    }
  }
};
</script>
<style scoped lang="scss"></style>