<template>
  <div>
    {{data}}
    bbbbb
  </div>
</template>

<script>
export default {
  name: "compB",
  props:['data'],
  methods:{
    catch2(){
      console.log(2222);
    }
  }
};
</script>