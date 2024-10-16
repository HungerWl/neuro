<template>
    <!-- 轮播图 -->
    <div id="PersonalWorks">
        <div>
            <!-- 仅在小屏幕（移动端）上显示 -->
            <div v-show="isMobile">
                <swiper :grabCursor="true" :effect="'creative'" :creativeEffect="{
                    prev: {
                        shadow: true,
                        origin: 'left center',
                        translate: ['-5%', 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: 'right center',
                        translate: ['5%', 0, -200],
                        rotate: [0, -100, 0],
                    },
                }" :modules="modules" @slideChange="updataChange">
                    <swiper-slide v-for="item in bannerStore.bannerList" :key="item.id" class="relative">
                        <img :src="item.image_url" :alt="item.title" class="w-full h-[200px] object-cover"
                            loading="lazy">
                        <span
                            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold"
                            @click="goToSection(bannerIndex)">
                            {{ item.title }}
                        </span>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 仅在大屏幕（PC 端）上显示 -->
            <div v-show="!isMobile" class="relative">
                <swiper :navigation="true" :pagination="{ clickable: true, }" :modules="modules" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }" @slideChange="updataChange" :effect="'fade'">
                    <swiper-slide v-for="item in bannerStore.bannerList" :key="item.id">
                        <img :src="item.image_url" :alt="item.title" class="w-full md:h-[540px] h-[700px] object-cover"
                            loading="lazy">
                    </swiper-slide>
                </swiper>
                <div class="absolute top-[40%] left-[10%] z-[99] text-3xl text-white font-bold">
                    <div class="mb-[30px]">让美好触手可及!</div>
                    <span
                        class="hover:bg-gray-300 bg-[#fff]  text-[#000] text-sm px-[25px] py-[10px] text-center rounded-full hover:cursor-pointer   transition-all duration-300"
                        @click="goToSection(bannerIndex)">
                        点击了解更多
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Keyboard, Navigation, Pagination, EffectCreative, Autoplay } from "swiper/modules";
import { useBannerStore } from '@/stores/banner'

const { isMobile } = useDeviceDetect();

// 获取轮播图数据
const bannerStore = useBannerStore();
// 在组件挂载时调用获取数据的方法
onMounted(() => {
    bannerStore.getBannerList()
})

// 导入PC端轮播图module
const modules = [EffectFade, Navigation, Pagination, EffectCreative, Keyboard, Autoplay];

// bannerIndex
const bannerIndex = ref(0);

// 轮播图切换时触发
const updataChange = (swiper) => {
    bannerIndex.value = swiper.activeIndex;
};


const goToSection = (index) => {
    // 实现你的导航逻辑
}
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
}

.swiper-slide img {
    display: block;
    width: 100%;
}
</style>
