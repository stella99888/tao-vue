<!-- form表单组件 父组件 2024.05.25 -->
<template>
  <div class="my-form">
    <!-- rules是不需要传到第三层的 -->
    <el-form :model="form" v-bind="cFormAttr" :rules="rules">
      <el-row>
        <!-- v-for搭配，可以实现一行多列 -->
        <el-col :span="item.span ? item.span : 8" v-for="item in cCompArr">
          <template>
            <el-form-item style="width: 100%;" v-if="item.isShow" :key="item.id" :label="item.name"
              :prop="item.attr.prop">
              <!-- 通过is去确定渲染哪个表单，通过attr把数据传递下去，给el-input、el-select之类的组件使用的属性 -->
              <!-- optionArr传递下去给mySelect使用 -->
              <component :is="item.type" :form="form" :attr="item.attr" :downslot="$slots" :optionArr="item.optionArr"
                v-on="$listeners">
              </component>
            </el-form-item>
          </template>
        </el-col>
      </el-row>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
      <span v-else>
        <el-button v-for="item in btns" :key="item.id" :type="item.type">{{ item.btnName }}</el-button>
      </span>
    </el-form>
  </div>
</template>

<script>
import MyInput from "../components/formComponents/myInput.vue";
import MyDataPicker from "../components/formComponents/myDatePicker.vue";
import MySelect from "../components/formComponents/mySelect.vue";
import { cloneDeep } from 'lodash'
export default {
  inheritAttrs: false,
  name: "MyForm",
  components: { MyInput, MyDataPicker, MySelect },
  props: {
    formAttr: {
      type: Object,
      default: () => { }
    },
    form: {
      type: Object,
      default: () => { }
    },
    rules: {
      type: Object,
      default: () => { }
    },
    compArr: {
      type: Array,
      default: () => []
    },
    btns: {
      type: Array,
      default: () => {
        return [
          { id: 1, btnName: '确定', type: 'primary' },
          { id: 2, btnName: '重置', type: 'primary' },
          { id: 3, btnName: '取消' }
        ]
      }
    },
  },
  mounted() {
  },
  // 把默认属性和传入属性合并
  computed: {
    cCompArr() {
      let cloneCompArr = cloneDeep(this.compArr)
      console.log(this.$slots);
      // cloneCompArr.forEach(item => {
      //   for (const key in this.$slots) {
      //     if (key === item.attr.prop) {
      //       // item['slotName'] = this.$slots[key]
      //       item['slotName'] = key
      //     }
      //   }
      // })
      console.log('cloneCompArr', cloneCompArr);
      // 对象默认有去重
      return cloneCompArr
    },
    cFormAttr() {
      let defaultForm = {
        labelPosition: 'left',
        inline: true,
        labelWidth: "100px",
        class: "demo-form-inline",
      }
      // 对象默认有去重
      return { ...defaultForm, ...this.formAttr }
    },
  },
  data() {
    return {

    }
  }
};
</script>
<style scoped lang="scss">
// 利用的百分比和el-col配合，实现自适应
::v-deep .el-form-item__content {
  width: calc(100% - 150px);
}
</style>