// src/stores/theme.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    // 使用 reactive 定义初始主题样式
    const theme = ref({
        backgroundColor: '#f4f1e0',
        textColor: '#eb5027'
    })

    // 切换主题的方法
    function setTheme(bgColor, txtColor) {
        document.body.style.backgroundColor = bgColor

        theme.value.backgroundColor = bgColor
        theme.value.textColor = txtColor
    }

    return { theme, setTheme }
})
