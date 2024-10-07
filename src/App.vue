<template>
  <div id="app"
    class="w-full px-4 py-2 mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
    <Navbar class="mb-5"></Navbar>
    <Main></Main>
  </div>
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Main from '@/layouts/Main.vue';
</script>

<style lang="scss">
#app {
  /* 可以在这里添加其他样式 */
}
</style>
