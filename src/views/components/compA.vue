<template>
  <div class="aa">
    AAA
    {{data}}
  </div>
</template>

<script>
export default {
  name: "compA",
  props:['data'],
  methods:{
    catch1(){
      console.log(2222);
    }
  }
};
</script>
<style>
.aa{
  position: fixed;
  right: 0;
  z-index: 10;
  background-color: antiquewhite;
  width: 100px;height: 100px;
}
</style>