<template>
    <nav v-if="!isMobile" id="nav-bar" class="w-full navbar border-2"
        :style="{ color: theme.textColor, backgroundColor: theme.backgroundColor }">
        <a href="#" class="logo">PhotoStudio</a>
        <ul class="nav-links">
            <li v-for="tab in tabPage" :key="tab.name" @click="setTheme(tab.bgColor, tab.txtColor)">{{ tab.name }}</li>
        </ul>
        <div class="nav-actions">
            <a href="#" class="login">登录</a>
            <a href="#" class="contact">联系 我们</a>
        </div>
    </nav>
    <nav v-else>
        111
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme'
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

const { isMobile } = useDeviceDetect();

// 获取主题 store
const themeStore = useThemeStore()
const { theme, setTheme } = themeStore

const tabPage = ref([
    {
        name: '个性服务',
        bgColor: '#f4f1e0',
        txtColor: '#eb5027'
    },
    {
        name: '优秀作品',
        bgColor: '#eb5027',
        txtColor: '#fff'
    },
    {
        name: '品牌介绍',
        bgColor: '#3077b5',
        txtColor: '#fff'
    }
])

// 在组件加载时，初始化默认主题为第一个 tab 的颜色
onMounted(() => {
    const firstTab = tabPage.value[0]
    setTheme(firstTab.bgColor, firstTab.txtColor)
})
</script>

<style scoped>
</style>
