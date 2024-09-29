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