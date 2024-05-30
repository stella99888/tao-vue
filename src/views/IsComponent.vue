<!-- 公共动态组件 isComponent.vue -->
<template>
  <div>
    <el-button :class="currentClass(item)" v-for="item in Object.keys(Dict)" :key="item" @click="changeBtn(item)">
      {{ item }}
    </el-button>
    <div>
      <keep-alive>
        <!-- 根据component搭配is内容进行动态切换显示内容 -->
        <component :is="currentTab" :data="data" ref="comp"></component>
      </keep-alive>
    </div>
    <!-- <button @click="getCatch">子组件方法，数据获取</button> -->
  </div>
</template>

<script>
// 引入动态显示的组件
import compA from './components/dynamicComponents/compA.vue'
import compB from './components/dynamicComponents/compB.vue'
import compC from './components/dynamicComponents/compC.vue'
import compD from './components/dynamicComponents/compD.vue'

export default {
  name: "myTabsName",
  components: { compA, compB, compC, compD },
  data() {
    return {
      currentTab: 'compA',
      data: '西游记',
      // 自定义字典
      Dict: {
        '西游记': 'compA',
        '水浒传': 'compB',
        '三国': 'compC',
        '红楼梦': 'compD',
      }
    };
  },
  computed: {
    // 通过计算属性添加class类
    currentClass() {
      return (item) => {
        if (this.currentTab === this.Dict[item]) { return 'active' }
      }
    }
  },
  methods: {
    // 可通过this.$refs获取到子组件的方法和数据
    getCatch() {
      console.log(this.$refs.comp);
    },
    // 切换tab事件
    changeBtn(val) {
      this.currentTab = this.Dict[val]
      this.data = val
    }
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: red;
  color: white;
}
</style>