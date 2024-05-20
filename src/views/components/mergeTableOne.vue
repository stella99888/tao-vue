<!-- 表格合并 -->
<template>
  <div class="vueWrap">
    <el-table :span-method="objectSpanMethod" :data="tableBody" style="width: 80%">
      <el-table-column type="index" label="序号" width="58" align="center"></el-table-column>
      <el-table-column prop="toolsKinds" label="设备类别" align="center"></el-table-column>
      <el-table-column prop="toolsName" label="设备名称" align="center"></el-table-column>
      <el-table-column prop="price" label="价格（元）" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "mergeTableOne",
  data() {
    return {
      // 表体数据
      tableBody: [
        {
          toolsKinds: "螺丝刀",
          toolsName: "一号螺丝刀",
          price: 10,
          remark: "",
        },
        {
          toolsKinds: "螺丝刀",
          toolsName: "二号螺丝刀",
          price: 20,
          remark: "",
        },
        {
          toolsKinds: "螺丝刀",
          toolsName: "三号螺丝刀",
          price: 30,
          remark: "",
        },
        {
          toolsKinds: "扳手",
          toolsName: "大号扳手",
          price: 88,
          remark: "",
        },
        {
          toolsKinds: "扳手",
          toolsName: "中号扳手",
          price: 44,
          remark: "",
        },
        {
          toolsKinds: "老虎钳子",
          toolsName: "火星专供老虎钳",
          price: 999,
          remark: "",
        },
        {
          toolsKinds: "老虎钳子",
          toolsName: "土星专供老虎钳",
          price: 1001,
          remark: "",
        },
      ],
      cellList: [], // 单元格数组
      count: null, // 计数
    };
  },
  mounted() {
    // 第1步，根据表体信息，计算合并单元格的信息
    this.computeCell(this.tableBody);
  },
  methods: {
    computeCell(tableBody) {
      // 循环遍历表体数据
      for (let i = 0; i < tableBody.length; i++) {
        if (i == 0) {
          // 先设置第一项
          this.cellList.push(1); // 初为1，若下一项和此项相同，就往cellList数组中追加0
          this.count = 0; // 初始计数为0
          console.log("索引--0", 0, Array.isArray(this.cellList), this.cellList);
        } else {
          // 判断当前项与上项的设备类别是否相同，因为是合并这一列的单元格（螺丝刀）
          if (tableBody[i].toolsKinds == tableBody[i - 1].toolsKinds) {
            // 如果相等
            this.cellList[this.count] += 1; // 增加计数
            this.cellList.push(0); // 相等就往cellList数组中追加0
            console.log("索引--i--1", i, this.count);
          } else {
            this.cellList.push(1); // 不等就往cellList数组中追加1
            this.count = i; // 将索引赋值为计数
            console.log("索引--i--2", i, this.count);
          }
        }
      }
    },
    // 第2步，将计算好的结果返回给el-table，这样的话表格就会根据这个结果做对应合并列渲染
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // 给第二列做单元格合并。0是第一列，1是第二列。
      if (columnIndex === 1) {
        console.log("单元格数组，若下一项为0，则代表合并上一项", this.cellList);
        const rowCell = this.cellList[rowIndex];
        if (rowCell > 0) {
          const colCell = 1;
          // console.log(`动态竖向合并单元格, 第${colCell}列，竖向合并${rowCell}个单元格 `);
          return {
            rowspan: rowCell, // 合并行的数量
            colspan: colCell, // 合并列的数量
          };
        } else {
          // 清除原有的单元格，必须要加，否则就会出现单元格会被横着挤到后面了！！！
          // 本例中数据是写死的不会出现，数据若是动态后端获取的，就会出现了！！！
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>
