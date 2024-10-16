<template>
    <div id="slide-box">
        <div class="title">
            <i class="bi bi-chat-heart"></i>
            <span>{{ slideObj.title }}</span>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDeviceDetect } from '@/hooks/useDeviceDetect.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const props = defineProps({
    slideObj: {
        type: Object,
        default: () => ({})
    }
});

const { isMobile } = useDeviceDetect();

const modules = ref([Pagination]);

const videoRef = ref(null);

onMounted(() => {
    if (videoRef.value) {
        videoRef.value.play().catch(error => {
            console.error("自动播放失败:", error);
        });
    }
});
</script>


<style scoped lang="scss">
#slide-box {
    @apply flex flex-col justify-center items-center
}

.title {
    background: url('@/assets/images/jpg/3.jpg') no-repeat;
    background-size: cover;
    height: 100px;
    @apply w-full flex flex-col items-center justify-center mb-2 text-white font-bold transition-all;
    @apply md:h-[130px];

    >i {
        @apply text-xl mb-2 animate-bounce text-[yellow];
        @apply md:text-3xl;
    }

    span {
        @apply text-xl uppercase tracking-wide;
        @apply md:text-[28px];
    }
}
</style>
