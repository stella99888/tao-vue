<!-- 试题锚点父组件 -->
<template>
  <div ref="toTopRef" class="box">
    <!-- 题目序号部分 -->
    <div class="anchorsWrap">
      <h3>题目序号</h3>
      <div>
        <h3 v-for="item in subjectList" :class="`${item.classStyle}` === '2' ? 'red' : ''"
          @click="anchorJump(`${item.type}`)">
          {{ item.type }}
        </h3>
      </div>
    </div>
    <!-- 试题部分 -->
    <div class="contentWrap">
      <h3>试题</h3>
      <div v-for="(item, index) in anserObj" :key="index">
        <testRes ref="t" :id="item.key" :anserObj="item" @sendVal="sendVal"></testRes>
      </div>
    </div>
  </div>
</template>

<script>
import testRes from './components/testRes.vue'
export default {
  name: 'testAnchorPoint',
  components: { testRes },
  data() {
    return {
      subjectList: [
        {
          type: "1",
          classStyle: '1',
        },
        {
          type: "2",
          classStyle: '1',
        },
        {
          type: "3",
          classStyle: '1',
        }, {
          type: "4",
          classStyle: '1',
        },
        {
          type: "5",
          classStyle: '1',
        },
        {
          type: "6",
          classStyle: '1',
        }
      ],
      anserObj: [
        {
          key: 'as1',
          subjectNum: '题目1: 你是什么蛋？',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
            { num: 'B', cont: '我是大坏蛋' },
            { num: 'C', cont: '我是大傻蛋' },
            { num: 'D', cont: '我是大笨瓜' },
          ],
        },
        {
          key: 'as2',
          subjectNum: '题目2: 你是什么蛋？',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
            { num: 'B', cont: '我是大坏蛋' },
            { num: 'C', cont: '我是大傻蛋' },
            { num: 'D', cont: '我是大笨瓜' },
          ]
        },
        {
          key: 'as3',
          subjectNum: '题目3: 你是什么蛋？',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
            { num: 'B', cont: '我是大坏蛋' },
            { num: 'C', cont: '我是大傻蛋' },
            { num: 'D', cont: '我是大笨瓜' },
          ]
        },
        {
          key: 'as4',
          subjectNum: '题目4: 你是什么蛋？',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
            { num: 'B', cont: '我是大坏蛋' },
            { num: 'C', cont: '我是大傻蛋' },
            { num: 'D', cont: '我是大笨瓜' },
          ],
        },
        {
          key: 'as5',
          subjectNum: '题目5: 你是什么蛋？',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
            { num: 'B', cont: '我是大坏蛋' },
            { num: 'C', cont: '我是大傻蛋' },
            { num: 'D', cont: '我是大笨瓜' },
          ]
        },
        {
          key: 'as6',
          subjectNum: '题目6: 你是什么蛋？',
          getVal: false,
          anserList: [
            { num: 'A', cont: '我是大笨蛋' },
            { num: 'B', cont: '我是大坏蛋' },
            { num: 'C', cont: '我是大傻蛋' },
            { num: 'D', cont: '我是大笨瓜' },
          ]
        },
      ],
    };
  },
  methods: {
    // 接收子组件传回来的方法
    sendVal(val) {
      this.subjectList.map((item, index) => {
        // 绑定ref获取当前ref有值时，题目序号为已答题状态，反之为未答题状态
        if (this.$refs.t[index].value) {
          this.subjectList[index].classStyle = '2'
        } else {
          this.subjectList[index].classStyle = '1'
        }
      })
    },
    // 根据每道题的id，点击题目序号跳到对应题目位置
    anchorJump(which) {
      let num = "#as" + which; // 给id加上井号
      // 给对应dom滚动到对应锚点，使之出现在视图中
      document.querySelector(num).scrollIntoView({
        behavior: "smooth", // 定义过渡动画 instant立刻跳过去 smooth平滑过渡过去
        block: "start", // 定义垂直滚动方向的对齐 start顶部（尽可能）  center中间（尽可能）  end（底部）
        inline: "center", // 定义水平滚动方向的对齐
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;

  .contentWrap {
    width: 80%;
  }

  .anchorsWrap {
    right: 380px;
    position: fixed;
    width: 100px;
    text-align: center;

    .toTop {
      width: 100px;
      height: 100px;
      border: 1px solid gray;
      line-height: 100px;
    }

    div {
      width: 120px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;

      h3 {
        width: 20px;
        height: 20px;
        border: 1px solid gray;
        border-radius: 20px;
        line-height: 20px;
        margin: 5px;
      }
    }
  }
}

.red {
  color: red
}
</style>