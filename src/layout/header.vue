<template>
    <div id='header' class="sticky-top bg-[#fff5ed]">
        <header class="one md:px-[15px] md:py-[10px] px-[15px] py-[5px]">
            <div class="text-[#000] text-2xl flex items-center">
                <LottieAnimation :animationData="cameraLottie" :loop="true" :autoplay="true" width="50px" height="50px"
                    class="mr-2" />
                <span class="font-serif uppercase tracking-widest md:text-[25px] text-[14px]">Photography_Studio</span>
            </div>
            <nav class="md:flex hidden space-x-4">
                <a v-for="item in aLinkOpitons" :key="item" class="text-[#000]  text-lg" @click="link(item)">
                    <i :class="item.icon"></i><span>{{ item.text }}</span>
                </a>
            </nav>
            <i class="bi text-[21px] bi-sliders text-[#000] md:hidden block" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
                style="background: #fff5ed;padding-left: 20px;padding-right: 20px;">
                <div class="offcanvas-header border-b-[1px] border-[#e0e0e0]" style="padding-left: 0;padding-right: 0;">
                    <h5 class="offcanvas-title font-serif uppercase tracking-widest text-[15px]"
                        id="offcanvasRightLabel">
                        Photography_Studio
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" style="padding-left: 0; padding-right: 0;">
                    <div
                        class="grid grid-cols-2 gap-3 font-serif uppercase tracking-widest pb-3 border-b-[1px] border-[#e0e0e0]">
                        <span><i class="bi bi-whatsapp mr-2"></i>在线咨询</span>
                        <span><i class="bi bi-wechat mr-2"></i>联系我们</span>
                        <span><i class="bi bi-heart-pulse mr-2"></i>加入我们</span>
                    </div>
                    <div class="grid grid-cols-2 font-serif uppercase tracking-widest p-3">

                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LottieAnimation from '@/components/LottieAnimation.vue';
import cameraLottie from '@/assets/lottie/camera.json';

const aLinkOpitons = ref([
    { icon: "bi bi-whatsapp mr-2", text: "电话" },
    { icon: "bi bi-wechat mr-2", text: "微信" },
    { icon: "bi bi-heart-pulse mr-2", text: "合作" },
]);

function link(item) {
    // 处理链接跳转逻辑
}


</script>

<style scoped lang="scss">
.one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
}
</style>
