<template>
  <div class="layload">
    <!-- <div class="trim">
      layload
    </div>
    <img v-layload="url"></img> -->
    <get-data :s1="s1"></get-data>
    <el-button @click="getPersonMsg">发送请求</el-button>

  </div>
</template>
<script>
import { getPersonMsg } from "@/auth/api";
import GetData from './components/GetData.vue'
export default {
  components: { GetData },
  data() {
    return {
      s1: 'true',
      url: 'https://p26-passport.byteacctimg.com/img/user-avatar/b3a54e6d144b67aea1ed54a840bfbde1~180x180.awebp',
    };
  },
  created() {
    // 用定时器模拟发请求异步获取后端接口的数据
    setTimeout(() => {
      this.s1 = "666";
    }, 200);
  },
  methods: {
    async getPersonMsg() {
      let res = await getPersonMsg(1)
      console.log(res);
    }
  },
};
</script>
<style>
.trim {
  height: 1000px;
}

img {
  width: 200px;
  height: 200px;
}
</style>