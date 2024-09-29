<template>
    <div id='slide-content'>
        <div class="md:h-[300px] w-full h-[100px] flex items-center justify-center" :style="setSlideStyle(slideObj)">
            
            <h1 class="text-white md:text-6xl text-3xl font-bold tracking-widest">
                {{ slideObj.title }}
            </h1>
        </div>
    </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    slideObj: {
        type: Object,
        default: Object
    }
})

// 设置标题样式
const setSlideStyle = (slideObj) => {
    return {
        backgroundImage: `url(${slideObj['title_image']})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
}
onMounted(() => {
});
</script>

<style scoped></style>