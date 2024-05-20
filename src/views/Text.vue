<template>
  <div class="about">
    <!-- 单个class的写法 -->
    <!-- <p :class="{ 'pink': classPink }">周小姐</p>
    <p :class="getPink(true)">周小姐</p>
    <p :class="colorPink(true)">周小姐</p> -->
    <!-- 多个class的写法 -->
    <!-- <div :class="[{ 'red': isActive, 'yellow': !isActive }, 'pink']">周小姐</div> -->

    <!-- html模版上的写法 -->
    <p :style="{ color: redColor }" class="pink">周小姐:style</p>
    <!-- backgroundColor的写法，也记录一笔 -->
    <p :style="{ backgroundColor: (0 ? 'rgba(0, 0, 0, 0)' : 'rgba(0,0,0,0.5)') }" class="pink">周小姐:style</p>

    <!-- 函数写法，可以返回多个css属性 -->
    <p :style="getRed(true)" class="pink">周小姐:style</p>
    <p :style="getRed2(true)" class="pink">周小姐:style</p>
    <!-- <h1 v-taohtml="str1">This is an about page</h1>
    <button @click="getBtn">更改</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // str1: '11',
      // classPink: true,
      // isActive: true,
      redColor: 'red',
    };
  },
  // computed: {
  //   colorPink() {
  //     return (val) => {
  //       if (val) return 'pink'
  //     }
  //   }
  // },
  methods: {
    // getPink(val) {
    //   if (val) return 'pink blue'
    // },
    getRed(val) {
      if (val) return 'color:white;background:pink;'
    },
    getRed2(val) {
      if (val) return { color: 'blueviolet', 'background': 'pink', }
    },
    // getBtn() {
    //   this.str1 = '77'
    // }
  }
};
</script>
<style>
.pink {
  background-color: pink;
  margin-top: 10px;
  width: 50%;
  height: 100%;
}

.red {
  color: red;
}

.yellow {
  color: yellow;
}

.blue {
  border: 2px solid blueviolet;
}
</style>