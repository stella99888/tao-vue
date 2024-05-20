<template>
  <div class="random">
    random
    <div>{{ value }}</div>
    <el-button @click="getRandom">更新</el-button>
    <el-button @click="getDomClass">改变classList</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '1',
      arr: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    getDomClass() {
      let dom = document.querySelector('div')
      dom.classList.add('active')
    },
    getRandom() {
      if (this.arr.length === 0) throw Error('数组已清空')
      const random = Math.floor(Math.random() * this.arr.length)
      this.value = this.arr[random]
      this.arr.splice(random, 1)
    }
  }
};
</script>
<style>
.active {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>