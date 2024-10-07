<template>
    <div id="app">

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube } from 'swiper/modules'; // 引入不同的效果模块
import 'swiper/css';
import 'swiper/css/effect-cube';
import { getCategoryList } from '@/api/index.js'



// 使用 useDeviceDetect 钩子获取设备信息
const { isMobile } = useDeviceDetect();

const cardBox = ref();

const useCategoryList = async () => {
    let res = await getCategoryList()
    cardBox.value = res.data

}
useCategoryList()

const getModules = ref([EffectCube])

</script>

<style scoped lang="scss">
.card-box {
    display: flex;
    justify-content: space-between;
}
</style>