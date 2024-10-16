import { get, post } from '@/utils/axios'

// 获取轮播图
export async function getBanner(data) {
    try {
        const response = await get({}, 'banner', data)
        if (response.code !== 200) return response.errMsg
        return response.data
    }
    catch (error) {
        console.log(error, "error");
    }
}

// 获取引言
export async function getIntroduction(data) {
    try {
        const response = await get({}, 'introductionList', data)
        if (response.code !== 200) return response.errMsg
        return response.data
    }
    catch (error) {
        console.log(error, "error");
    }
}

// 获取优秀作品
export async function getArtWorkList(data) {
    try {
        const response = await get({}, 'artWorkList', data)
        return response
    }
    catch (error) {
        console.log(error, "error");
    }
}

// 获取优秀作品-轮播图介绍
export async function getBannerIntroductionList(data) {
    try {
        const response = await get({}, 'bannerIntroductionList', data)
        return response
    }
    catch (error) {
        console.log(error, "error");
    }
}

// 个性定制分类
export async function getCustomizeList(data) {
    try {
        const response = await get({}, 'customizedCategoryList', data)
        return response
    }
    catch (error) {
        console.log(error, "error");
    }
}