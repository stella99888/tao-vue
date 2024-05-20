<template>
  <div>
    {{data}}
    CCCC
  </div>
</template>

<script>
export default {
  name: "compC",
  props:['data'],
  methods:{
    catch3(){
      console.log(2222);
    }
  }
};
</script>