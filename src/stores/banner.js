// src/stores/banner.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBanner } from '@/api/index.js'

export const useBannerStore = defineStore('Banner', () => {
    const bannerList = ref([])

    const getBannerList = async () => {
        const res = await getBanner()
        bannerList.value = res
    }
    return {
        bannerList,
        getBannerList
    }
})