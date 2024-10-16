<template>
    <div id="slide-box">
        <div class="title">
            <i class="bi bi-star-fill"></i>
            <span>{{ slideObj.title }}</span>
        </div>
        <!-- 瀑布流布局 -->
        <div v-show="isMobile" class="mySwiper1 isMobile">
            <div v-for="artWork in artWorkList" :key="artWork.id" class="listBox">
                <div class="image-container">
                    <img :src="artWork.image_front" alt="No Image" class="listImg" loading="lazy">
                    <div>
                        <div>{{ artWork.title }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!isMobile" class="mySwiper1 isPC">
            <div v-for="artWork in artWorkList" :key="artWork.id" class="listBox">
                <div class="image-container">
                    <img :src="artWork.image_front" alt="No Image" class="listImg" loading="lazy">
                    <div class="overlay">
                        <div class="t">{{ artWork.title }}</div>
                        <div class="listDesc">{{ artWork.content }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 轮播图 -->
        <swiper :slidesPerView="3" :spaceBetween="10" :autoplay="{
            delay: 500 * 6,
            disableOnInteraction: false,
        }" :pagination="{
            clickable: true,
        }" :modules="modules" class="w-full md:h-[350px] h-[200px]" loop>
            <swiper-slide v-for="(item) in banner" :key="item.id">
                <div class="md:w-full w-[100%] md:h-[200px] h-[100px] bg-red-500 mb-3">
                    <img :src="item.image" alt="" class="w-full h-full object-cover" loading="lazy">
                </div>
                <div class="w-full hover:text-[red]">
                    <div class="md:text-xl text-[16px] font-bold mb-2 truncate">{{ item.title }}</div>
                    <span class="md:block hidden">{{ item.content }}</span>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getArtWorkList, getBannerIntroductionList } from '@/api/index.js';
import { useDeviceDetect } from '@/hooks/useDeviceDetect.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';

const { isMobile } = useDeviceDetect();

const props = defineProps({
    slideObj: {
        type: Object,
        default: () => ({}),
    },
});

// 获取作品列表
const artWorkList = ref([]);

const useArtWorkList = async () => {
    const res = await getArtWorkList({
        page: 1,
        page_size: 10,
    });
    artWorkList.value = res.results.data;
};

// 轮播图插件
const modules = [Pagination, Autoplay];

// 获取轮播图介绍
const banner = ref([])
const useBanner = async () => {
    const res = await getBannerIntroductionList();
    console.log(res);
    banner.value = res.data
}

useArtWorkList();
useBanner()
</script>

<style scoped lang="scss">
$my-padding: 1rem;
$bg-color: rgba(0, 0, 0, 0.8); // 提取背景色变量
$transition-speed: 0.3s; // 统一的过渡时间

#slide-box {
    @apply flex flex-col justify-center items-center
}

.title {
    background: url('@/assets/images/jpg/1.jpg') no-repeat;
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

.isMobile {
    @apply grid gap-[5px] grid-cols-2 py-1 px-1;

    .image-container {
        @apply w-full h-[160px] relative;

        >div {
            @apply absolute left-0 w-full bottom-0 bg-black/80 text-white py-2 pl-2 text-[0.9em] font-bold
        }
    }
}

.isPC {
    @apply w-full grid gap-[15px] grid-cols-4 py-3 px-[40px];
    @apply md-lg:px-[15px];

    .image-container {
        @apply w-full;
        @apply sm:h-[120px];
        @apply md-lg:h-[150px];
        @apply 2xl:h-[300px]
    }

    .t {
        @apply md-lg:text-[17px] font-bold;
    }

    .listDesc {
        @apply md-lg:text-[12px];
    }
}

.mySwiper1 {
    .image-container {
        position: relative;
        overflow: hidden;
    }

    .listImg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 10px;
        opacity: 0;
        transform: translateY(100%);
        transition: transform 0.5s ease, opacity 0.5s ease;
        max-height: 100%;
    }

    .image-container:hover .overlay {
        opacity: 1;
        transform: translateY(0);
    }

    .image-container:hover .listImg {
        transform: scale(1.1);
    }

}
</style>
