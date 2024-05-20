<!-- 表头表体合并 -->
<template>
  <el-table :data="tableData" border style="width: 600" :header-cell-style="headerCellStyle">
    <el-table-column label="基本信息竖向占两行" align="center">
      <el-table-column label="" align="center">
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" align="center">
        </el-table-column>
        <el-table-column prop="home" label="家乡" align="center">
        </el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column prop="kind" label="所属种族" align="center">
    </el-table-column>
    <el-table-column label="重要信息" align="center">
      <el-table-column label="公开重要信息" align="center">
        <el-table-column prop="nickname" label="法号" align="center">
        </el-table-column>
        <el-table-column prop="hobby" label="爱好&性格" align="center">
        </el-table-column>
        <el-table-column prop="personality" label="性格" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column label="保密重要信息" align="center">
        <el-table-column prop="bornBackground" label="出身背景" align="center">
        </el-table-column>
        <el-table-column prop="skill" label="技能" align="center">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "mergeTableThr",
  data() {
    return {
      tableData: [
        {
          name: "孙悟空",
          age: 500,
          home: "花果山水帘洞",
          kind: "monkey",
          nickname: "斗战胜佛",
          hobby: "大闹天宫",
          personality: "勇敢坚韧、疾恶如仇",
          bornBackground: "仙石孕育而生",
          skill: "72变、筋斗云",
        },
        {
          name: "猪八戒",
          age: 88,
          home: "高老庄",
          kind: "pig",
          nickname: "净坛使者",
          hobby: "吃包子",
          personality: "好吃懒做、贪图女色",
          bornBackground: "天蓬元帅错投猪胎",
          skill: "36变",
        },
        {
          name: "沙和尚",
          age: 1000,
          home: "通天河",
          kind: "human",
          nickname: "金身罗汉",
          hobby: "游泳",
          personality: "憨厚老实、任劳任怨",
          bornBackground: "卷帘大将被贬下界",
          skill: "18变",
        },
      ],
    };
  },
  methods: {
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0) {
        if (rowIndex == 1) {
          return { display: "none" };
        }
        if (rowIndex == 0) {
          this.$nextTick(() => {
            document
              .querySelector(`.${column.id}`)
              .setAttribute("rowspan", "2");
          });
        }
      }
    },
  },
};
</script>

<style lang="scss">
.el-table {
  th {
    font-weight: bold;
    color: #333;
  }
}
</style>
