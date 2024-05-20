<!-- 右键菜单功能 -->
<template>
  <div id="rightMenu">
    <ul class="table-right-menu">
      <li @click="item.fn(item)" v-for="(item) in textList">
        <i :class="item.icon"></i>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RightMenu',
  props: {
    textList: {
      type: Array,
      default: () => []
    },
    clickXY: {
      type: Object,
      default: () => { }
    }
  },
  mounted() {

  },
  methods: {
    hide(e) {
      if (e.button === 0) {
        let positionXY = document.getElementById('rightMenu')
        positionXY.style.display = 'none'
        // 接触监听事件
        document.removeEventListener("mouseup", this.hide)
      }
    }
  },
  watch: {
    "clickXY"(val) {
      let x = val.x; // 获取x轴坐标
      let y = val.y; // 获取y轴坐标
      let innerWidth = window.innerWidth; // 获取页面可是区域宽度，即页面的宽度
      let innerHeight = window.innerHeight; // 获取可视区域高度，即页面的高度
      let menuHeight = this.textList.length * 30 // 弹窗高
      let menuWidth = 100 // 弹窗宽

      let positionXY = document.getElementById('rightMenu')
      positionXY.style.display = 'block'
      // 如果点击点 在视口最右方或者最下方 保证弹窗显示在视口内
      positionXY.style.top = (y + menuHeight > innerHeight ? innerHeight - menuHeight - 10 : val.y) + 'px'
      positionXY.style.left = (x + menuWidth > innerWidth ? innerWidth - menuWidth - 10 : val.x) + 'px'
      // false 表示 this.hide 这个事件处理函数将在鼠标点击（mouseup）事件的冒泡阶段被调用。
      // 如果为true，表示捕获阶段调用
      document.addEventListener("mouseup", this.hide, false);
    },

  }
}
</script>
<style scoped>
#rightMenu {
  width: 108px;
  position: fixed;
  z-index: 999;
  display: none;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  border: 1px solid red;

  .table-right-menu {
    line-height: 30px;
    text-align: center;
    font-size: 12px;

    li {
      height: 30px;
      display: flex;
      justify-content: space-evenly;
      padding: 0 15px;
      align-items: center;
    }
  }
}
</style>