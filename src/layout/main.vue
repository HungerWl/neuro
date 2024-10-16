<template>
    <div id='main' class="font-[21px]">
        <!-- 轮播图 -->
        <PersonalWorks></PersonalWorks>
        <!-- 引言 -->
        <Introduction class="md:mb-[20px]"></Introduction>
        <!-- 定义各个内容区域 -->
            <section v-for="(slide) in bannerStore.bannerList" :key="slide.id" class="content-section mb-3">
                <!-- 动态组件，根据 title 动态渲染不同的组件 -->
                <component :is="getComponent(slide.component)" :slideObj="slide" />
            </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PersonalWorks from '@/components/personalWorks.vue';
import Introduction from '@/components/Introduction.vue';
import SlideYouxiu from '@/view/SlideYouxiu.vue';
import Personalization from '@/view/Personalization.vue';
import MakeUpStyling from '@/view/MakeUpStyling.vue';
import FashionPosition from '@/view/FashionPosition.vue';
import BusinessCooperation from '@/view/BusinessCooperation.vue';
import BrandIntroduction from '@/view/BrandIntroduction.vue';
import { useBannerStore } from '@/stores/banner'
//获取轮播图数据
const bannerStore = useBannerStore();


// 动态组件
const getComponent = (componentName) => {
    switch (componentName) {
        case 'SlideYouxiu':
            return SlideYouxiu;
        case 'Personalization':
            return Personalization;
        case 'MakeUpStyling':
            return MakeUpStyling;
        // case 'FashionPosition':
        //     return FashionPosition;
        // case 'BrandIntroduction':
        //     return BrandIntroduction;
        // case 'BusinessCooperation':
        //     return BusinessCooperation;
        default:
            return null;
    }
}
</script>

<style scoped lang="scss">
.content-section {
    // background-color: #f0f0f0;
}
</style>