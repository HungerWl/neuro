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
  min-height: 100vh;
  background-color: var(--tkww-union-color-additional-04extra-100, #fff5ed);
}
</style>