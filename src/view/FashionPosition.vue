<template>
    <div id="slide-box">
        <div
            class="title flex items-center justify-center md:text-3xl text-2xl font-bold md:h-[150px] h-[100px] text-white">
            <span>{{ slideObj.title }}</span>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    slideObj: {
        type: Object,
        default: () => ({})
    }
});

</script>


<style scoped lang="scss">
.title {
    background: url('@/assets/images/jpg/5.jpg') no-repeat;
    background-size: cover;
}
</style>
