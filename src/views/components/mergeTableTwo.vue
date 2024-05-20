<!-- 表头表体合并 -->
<template>
  <div id="kkk">
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 80%">
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column prop="type" label="设备类别" align="center">
      </el-table-column>
      <el-table-column prop="mcName" label="设备名称" align="center">
      </el-table-column>
      <el-table-column prop="price" label="价格" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "mergeTableTwo",
  data() {
    return {
      tableData: [
        {
          type: "螺丝刀",
          mcName: "一号螺丝刀",
          price: "10",
        },
        {
          type: "螺丝刀",
          mcName: "二号螺丝刀",
          price: "20",
        },
        {
          type: "螺丝刀",
          mcName: "三号螺丝刀",
          price: "30",
        },
        {
          type: "扳手",
          mcName: "大号扳手",
          price: "88",
        },
        {
          type: "扳手",
          mcName: "中号扳手",
          price: "44",
        },
        {
          type: "老虎钳子",
          mcName: "火星专供",
          price: "999",
        },
        {
          type: "老虎钳子",
          mcName: "土星专供",
          price: "1001",
        },
      ],
    };
  },
  methods: {
    /**
     * 1. 若是objectSpanMethod不返回任何东西，表格不会变化
     * 2. 最外层的判断一般是，先从第几列开始合并
     * 3. 这次从第0行合并2个，下次就要从第3行开始合并（0行加俩，就到3行了）
     * 4. 这种方式是有多少条数据，合并多少条数据，比如本案例中有7条数据（从第0条合并到第7条）
     * 5. return { rowspan: 0, colspan: 0 } // 表示不合并
     * */
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log("row, column, rowIndex, columnIndex", row, column, rowIndex, columnIndex);
      // 准备在第二列进行合并操作
      if (columnIndex == 1) {
        // 从第0行进行合并
        if (rowIndex == 0) {
          return {
            rowspan: 3, // 合并3行
            colspan: 1, // 合并1列（当前列）
          };
        }
        if (rowIndex == 3) {
          return {
            rowspan: 2, // 合并2行
            colspan: 1, // 合并1列
          };
        }
        if (rowIndex == 5) {
          return {
            rowspan: 2, // 合并1行
            colspan: 1, // 合并1列
          };
        }
      }
    },
  },
};
</script>