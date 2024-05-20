<!-- 试题锚点定位子组件 -->
<template>
  <div>
    <div class="title">
      {{ anserObj.subjectNum }}
      <!-- 输入框只能输入A-D的大写字母 -->
      <el-input style="width: 60px;" size="small" @change="sendVal" v-model="value"
        oninput="value=value.replace(/[^A-D]/g,'');"></el-input>
    </div>
    <ul>
      <li class="liStyle" v-for="ite in anserObj.anserList" :key="ite.num" @click="selectFn(ite)">
        {{ `${ite.num}.${ite.cont} ` }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "testRes",
  props: {
    subjectNum: {
      type: String,
      default: '22'
    },
    anserObj: {
      type: Object,
      default: () => {
        return {
          key: '',
          subjectNum: '',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
          ]
        }
      }
    }
  },
  data() {
    return {
      // 输入框显示值
      value: '',
    };
  },
  methods: {
    // 点击选项触发
    selectFn(val) {
      this.value = val.num
      this.$emit('sendVal', val.num)
    },
    // 输入框输入答案触发
    sendVal(val) {
      this.$emit('sendVal', val)
    }
  },
};
</script>
<style>
.title {
  margin: 10px 0;
}

.liStyle {
  width: 120px;
  border: 1px solid #eee;
  margin-top: 5px;
}
</style>