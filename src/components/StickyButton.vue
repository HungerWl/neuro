<template>
    <div id='stick-button' ref="stickRef">
 
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// const isStickyVisible = ref(false);
// const stickRef = ref(null);

// const handleScroll = () => {
//     if (stickRef.value) {
//         const headerRect = stickRef.value.getBoundingClientRect();
//         console.log(headerRect, headerRect);
//         // 当 header 消失时显示粘性标签
//         isStickyVisible.value = headerRect.top < 0;
//     }
// };

// onMounted(() => {
//     window.addEventListener('scroll', handleScroll);
// });

// onBeforeUnmount(() => {
//     window.removeEventListener('scroll', handleScroll);
// });
</script>

<style scoped lang="scss">
.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
}
</style>
