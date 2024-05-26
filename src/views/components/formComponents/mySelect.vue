<!-- form表单组件 孙子组件select 2024.05.25 -->
<template>
  <!-- 这里用的是form，原本form就是最外层，传进来接收每个form表单的参数的 -->
  <el-select style="width: 100%;" v-model="form[attr.prop]" @change="selectChanged" class="my-select" clearable>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

<script>

export default {
  name: "MySelect",
  props: {
    attr: {
      type: Object,
      default: () => { }
    },
    form: {
      type: Object,
      default: () => { }
    },
    optionArr: {
      type: Object,
      default: () => { }
    },
    downslot: {
      type: Object,
      default: () => { }
    },
  },
  data() {
    return {
      options: []
    }
  },

  watch: {
    optionArr: {
      handler() {
        this.getOptionArr()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 判断显示需要连接符，如果有连接符就需要处理了
    addJoint(ops, conf) {
      if (!conf?.joiner) return
      if (conf?.joiner == '-') {
        this.options = ops.map(item => {
          return {
            label: `${item.label} - ${item.value}`,
            value: item.value
          }
        })
      }
      if (conf?.joiner == '()') {
        this.options = ops.map(item => {
          return {
            label: `${item.label}(${item.value})`,
            value: item.value
          }
        })
      }
    },
    // 判断是前台传的数据，还是从后台请求回来的数据
    async getOptionArr() {
      const conf = this.optionArr
      if (conf?.font) this.options = conf?.font
      if (conf?.back?.api) {
        let res = await conf?.back.api()
        this.options = (res.data || []).map(item => {
          return {
            value: item[conf.back?.value],
            label: item[conf.back?.label]
          }
        })
      }
      if (conf?.back?.ap) {
        let res = await conf?.back.ap()
        this.options = (res.data || []).map(item => {
          return {
            value: item[conf.back?.value],
            label: item[conf.back?.label]
          }
        })
      }
      this.addJoint(this.options, conf)
    },
    // 选择后触发事件
    selectChanged(val) {
      this.$emit('ev', {
        componentName: 'MySelect',
        propName: this.attr.prop,
        propValue: this.form[this.attr.prop]
      })
    }
  }
};
</script>
<style scoped lang="scss"></style>