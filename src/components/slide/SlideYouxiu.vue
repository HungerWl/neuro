<template>
    <div id="slide-content">

    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { getArtWorkList } from '@/api/index.js';

const props = defineProps({
    slideObj: {
        type: Object,
        default: () => ({})
    }
});

// 设置标题样式
const setSlideStyle = (slideObj) => {
    return {
        backgroundImage: `url(${slideObj['title_image']})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
};

// 获取数据
const artWorkList = ref([]);

const useArtWorkList = async () => {
    const res = await getArtWorkList({
        page: 1,
        page_size: 100
    });
    artWorkList.value = res.results.data;
}

onMounted(() => {
    useArtWorkList();
});


</script>


<style scoped lang="scss"></style>
