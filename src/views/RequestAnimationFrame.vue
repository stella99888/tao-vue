<template>
  <div class="requestAnimationFrame">
    <div class="box"></div>
    <br>
    <div class="a-box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.setTime()
  },
  methods: {
    getBox() {
      let timer
      let box = document.querySelector('.box')
      box.style.left = '100px'
      timer = setInterval(() => {
        let leftNum = parseInt(box.style.left)
        if (leftNum > 800) {
          clearInterval(timer)
        } else {
          box.style.left = leftNum + 10 + 'px'
        }
      }, 16);
    },
    getABox() {
      let aBox = document.querySelector('.a-box')
      aBox.style.left = '100px'
      const callBack = () => {
        let leftNum = parseInt(aBox.style.left)
        if (leftNum > 800) {
        } else {
          aBox.style.left = leftNum + 10 + 'px'
          window.requestAnimationFrame(callBack)
        }
      }
      window.requestAnimationFrame(callBack)
    },
    setTime() {
      setTimeout(() => {
        this.getBox()
        this.getABox()
      }, 16);
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  position: absolute;
  left: 200px
}

.a-box {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
  position: absolute;
  left: 200px
}
</style>