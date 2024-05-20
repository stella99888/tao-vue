<template>
  <div>
    <!--  v-if="s1" -->
    <h2>{{ s1 }}</h2>
  </div>
</template>

<script>
export default {
  name: 'GetData',
  props: {
    s1: {
      type: String,
      default: ''
    }
  },

  // props变化有的时候要加watch
  // watch: {
  //   s1(oldVal, newVal) {
  //     console.log(oldVal, newVal);
  //   }
  // },
  // created() {
  //   console.log('created钩子中接收', this.s1);
  // },
  mounted() {
    console.log('mounted钩子中接收', this.s1);
    // setTimeout(() => {
    // }, 1000);
  },
}
</script>
