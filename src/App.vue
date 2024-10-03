<template>
  <div id="App">
    <fvHeader></fvHeader>
    <fvMain></fvMain>
    <fvFooter></fvFooter>
  </div>
</template>

<script setup>
import fvHeader from '@/layout/header.vue'
import fvFooter from '@/layout/footer.vue'
import fvMain from '@/layout/main.vue'
</script>

<style scoped lang="scss">
#App {
  /* 根据设计比例，16:9 是常用的宽高比 */
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  background: #fff;
}
</style>