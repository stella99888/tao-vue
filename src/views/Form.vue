<!-- form表单组件 爷爷组件 2024.05.25 -->
<template>
  <div class="form">
    <!-- 每个孙组件都会抛出的事件，顶层使用ev去接受所有事件 -->
    <my-form :compArr="compArr" :form="form" :rules="rules" @ev="ev">
      <i slot="age&prefix" class="el-input__icon el-icon-platform-eleme"></i>
      <i slot="age&suffix" class="el-input__icon el-icon-eleme"></i>
      <i slot="address&prefix" class="el-input__icon el-icon-user-solid"></i>
      <i slot="address&suffix" class="el-input__icon el-icon-user-solid"></i>
      <i slot="food&prefix" class="el-input__icon el-icon-user-solid"></i>
    </my-form>
  </div>
</template>

<script>
import MyForm from "@/views/components/myForm";
import { getOptions, getOptionsCity, getOptionsAndDeepOptions } from '@/auth/api'
export default {
  name: "Form",
  components: { MyForm },
  data() {
    return {
      // 现在的方式叫JSON配置化
      // 传递给el-form用，通过v-bind
      form: {},
      // 通过数据去确定渲染哪些表单
      compArr: [
        {
          id: 1,
          isShow: true,
          name: '年龄',
          type: 'MyInput',
          span: 8,
          attr: {
            prop: 'age',
            placeholder: '请输入',
          },
        },
        {
          id: 2,
          isShow: true,
          name: '日期选择框',
          type: 'MyDataPicker',
          span: 16,
          attr: {
            prop: 'data',
            vModel: "dataVal",
            type: "date",
            placeholder: "选择日期",
          },
        },
        {
          id: 4,
          isShow: true,
          name: '赏心悦目',
          type: 'MySelect',
          span: 18,
          attr: {
            prop: 'anima',
            placeholder: '请选择',
          },
          optionArr: {
            back: {
              // 传递给子组件进行请求数据
              // api: 'http://localhost:9999/getOptions',
              // 方法传递标准的写法,这里其实也可以传obj，arr，规则自己定❤
              api: getOptions,
              // 考虑到后端请求回来的数据，value和label值不是这一套，这里提供可设置的
              value: 'va',
              label: 'la',
            },
            // joiner: '-'
          },
        },
        {
          id: 3,
          isShow: true,
          name: '吃点什么',
          type: 'MySelect',
          span: 6,
          attr: {
            prop: 'food',
            placeholder: '请选择',
          },
          optionArr: {
            font: [
              {
                value: 'milk',
                label: '旺仔牛奶'
              }, {
                value: 'watermelon',
                label: '芋圆西瓜冰粉'
              }
            ]
          },
        },
        {
          id: 5,
          isShow: true,
          name: '修仙世界',
          type: 'MySelect',
          span: 8,
          attr: {
            prop: 'sea',
            placeholder: '请选择',
          },
          optionArr: {
            font: [
              {
                value: '1',
                label: '斗罗大佬'
              }, {
                value: '1-1',
                label: '御剑飞升'
              }
            ],
            // joiner: '()'
          },
        },
        {
          id: 7,
          isShow: true,
          name: '城市',
          type: 'MySelect',
          span: 12,
          attr: {
            prop: 'city',
            placeholder: '请选择',
          },
          optionArr: {
            back: {
              // 传递给子组件进行请求数据
              // api: 'http://localhost:9999/getOptions',
              // 方法传递标准的写法,这里其实也可以传obj，arr，规则自己定❤
              api: getOptionsCity,
              // 考虑到后端请求回来的数据，value和label值不是这一套，这里提供可设置的
              value: 'va',
              label: 'la',
            },
            // 可以单独拎出来方法加不同分隔符
            cbJoiner: this.cbJoiner,
            // joiner: 'and'
          },
        },
        {
          id: 8,
          isShow: true,
          name: '区县',
          type: 'MySelect',
          span: 12,
          attr: {
            prop: 'qu',
            placeholder: '请选择',
          },
          optionArr: {
            back: {
              // 如果是级联的情况下，需要A输入框选择数据后，传参给B输入框
              // B输入框再调用接口
              ap: null,
              value: 'va',
              label: 'la',
            },
          },
        },
        {
          id: 9,
          isShow: true,
          name: '家庭住址',
          type: 'MyInput',
          span: 8,
          attr: {
            prop: 'address',
            placeholder: '请输入',
            // type: "textarea"
          },
        },
      ],
      rules: {
        age: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    cbJoiner(conf, val) {
      return val.map(item => {
        return {
          value: `111${item[conf.back?.value]}`,
          label: `😂${item[conf.back?.label]}😂`
        }
      })
    },
    // 通过$listener，爷组件接收孙组件的参数
    ev(val) {
      console.log('val', val);
      this.setBorder(val)
      this.controlCity(val)
      this.controlAdd(val)
    },
    // 控制age，聚焦则边框变红
    setBorder(val) {
      let dom = document.querySelector('.el-input__inner')
      let border = dom.style.border
      if (val.eventName === "focus" && val.propName === 'age') border = '1px solid red'
      if (val.eventName === "blur" && val.propName === 'age') border = 'none'
    },
    // 控制city，级联选择
    controlCity(val) {
      if (val.propName === 'city') {
        // 这里使用$set,添加属性，才能是双向绑定的
        this.$set(this.form, 'qu', '')
        this.compArr.find(item => {
          if (item.attr.prop === 'qu') {
            /**
             * 高阶函数，传递额外参数的用法
             * let fnn = (extraParam) => (...args) => getOptionsAndDeepOptions.apply(this, [extraParam, ...args]);
             * B输入框的接口，需要传参，需要在孙组件调用的情况，所以需要匿名函数自调用的方式
             * 这也是高阶函数的调用方法
             */
            item.optionArr.back.ap = (
              function (params) {
                return function () {
                  return getOptionsAndDeepOptions(params)
                }
              }
            )({ cityVal: val.propValue })
          }
        });
      }
    },
    // 控制address，不允许输入连写sb
    controlAdd(val) {
      if (val.propName === 'address') {
        if (val.propValue.includes('sb')) {
          this.$set(this.form, 'address', '')
        }
      }
    }
  },
  watch: {
    form: {
      handler(nval, oval) {
        // console.log(nval, oval);
      },
      deep: true,
      immediate: true
    },

  }
};
</script>
<style scoped lang="scss"></style>