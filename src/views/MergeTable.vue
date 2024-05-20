<!-- zhoutao表格表体合并 -->
<template>
  <div>
    <mergeTableOne></mergeTableOne>
    <mergeTableTwo></mergeTableTwo>
    <mergeTableThr></mergeTableThr>
  </div>
</template>

<script>
import mergeTableOne from '@/views/components/mergeTableOne'
import mergeTableTwo from '@/views/components/mergeTableTwo'
import mergeTableThr from '@/views/components/mergeTableThr'
export default {
  name: "MergeTable",
  components: { mergeTableOne, mergeTableTwo, mergeTableThr },
}
</script>

<style lang="scss" scoped></style>