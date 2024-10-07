// src/stores/theme.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getArtWorkList } from '@/api/index.js'

export const useThemeStore = defineStore('theme', () => {
    // 使用 ref 定义初始主题样式
    const themeStyle = ref({
        backgroundColor: '',
        textColor: '',
        title: ''
    })

    const themeData = ref({})

    // 切换主题的方法
    async function setTheme(bgColor, txtColor, title) {
        document.body.style.backgroundColor = bgColor
        
        themeStyle.value.backgroundColor = bgColor
        themeStyle.value.textColor = txtColor
        themeStyle.value.title = title
    }

    return { themeStyle, setTheme, themeData }
})
