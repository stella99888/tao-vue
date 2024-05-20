<!-- zhoutao公共动态路由 -->
<template>
  <div>
    <el-button :class="currentTab === Dict[item] ? 'active' : ''" v-for="item in Object.keys(Dict)" :key="item"
      @click="changeBtn(item)">{{ item }}</el-button>
    <div>
      <component :is="currentTab" :data="data" ref="comp"></component>
      <!-- <compA :data="data" ref="comp"></compA> -->
    </div>
    <button @click="getCatch">子组件方法执行
    </button>
  </div>
</template>

<script>
import compA from './components/compA.vue'
import compB from './components/compB.vue'
import compC from './components/compC.vue'
export default {
  name: "myTabsName",
  components: { compA, compB, compC },
  data() {
    return {
      Dict: {
        '西游记': 'compA',
        '水浒传': 'compB',
        '三国': 'compC',
      },
      currentTab: 'compA',
      data: '西游记'
    };
  },
  methods: {
    getCatch() {
      console.log(this.$refs.comp);
    },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>