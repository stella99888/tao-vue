<!-- zhouTao 2024-03-27-->
<template>
  <div>
    <!-- 不嵌到body里面，多个select时才可以使用到el啊  :popper-append-to-body="false"-->
    <el-select v-moreload="loadmore" size="small" v-model="value" placeholder="请选择">
      <el-option v-for="item in personList" :key="item.name" :label="item.home" :value="item.home">
        <span>{{ item.home }}</span>
      </el-option>
    </el-select>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "MoreLoad",
  data() {
    return {
      personList: [
        // {
        //   name: '1孙孙',
        //   age: 500,
        //   home: `1花果山`
        // }, {
        //   name: '2孙孙',
        //   age: 500,
        //   home: `2花果山`
        // }, {
        //   name: '3孙孙',
        //   age: 500,
        //   home: `3花果山`
        // }
      ],
      value: '',
      pageSize: 10,
      pageIndex: 1,
    };
  },
  mounted() {
    this.msgInit()
  },
  methods: {
    async msgInit() {
      let URL=`http://localhost:9999/getPersonMsg?pageSize=${this.pageSize}&pageIndex=${this.pageIndex}`
      axios.get(URL).then(res => {
        let data = res.data
        //  这里判断是== 不是=0也不是<0
        if(data.length==0) return this.$message('没数据了')
        // 一个是顺序的放置
        this.personList = [...this.personList,...data]
      })
    },
    loadmore(){
      this.pageIndex++
      this.msgInit()
    }
  },

};
</script>
<style scoped lang="scss"></style>