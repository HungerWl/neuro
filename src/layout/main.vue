<template>
    <div id='main' class="font-[21px]">
        <!-- 个人作品 -->
        <PersonalWorks></PersonalWorks>
        <!-- 引言 -->
        <Introduction class="mb-8"></Introduction>
        <!-- 定义各个内容区域 -->
        <section v-for="(slide, index) in slides" :key="'section-' + index" :id="'section-' + index"
            class="content-section mb-8`        ">
            <!-- 动态组件，根据 title 动态渲染不同的组件 -->
            <component :is="getComponent(slide.title)" :slideObj="slide" />
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import PersonalWorks from '@/components/personalWorks.vue';
import Introduction from '@/components/Introduction.vue';
import { getBanner } from '@/api/index.js'
import SlideYouxiu from '@/components/slide/SlideYouxiu.vue';
import SlidePinpai from '@/components/slide/SlidePinpai.vue';

// 定义幻灯片内容
const slides = ref([]);

// 定义锚点定位方法
const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// 获取轮播图数据
async function useBanner() {
    let res = await getBanner()
    slides.value = res
}

// 动态组件
const getComponent = (title) => {
    switch (title) {
        case '优秀作品':
            return SlideYouxiu;
        case '品牌介绍':
            return SlidePinpai;
        default:
            return null;
    }
}

onMounted(() => {
    useBanner()
})

// 提供全局方法
provide('scrollToSection', scrollToSection);
provide('slides', slides);

</script>

<style scoped lang="scss">
.content-section {
    background-color: #f0f0f0;
}
</style>