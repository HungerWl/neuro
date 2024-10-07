<template>
    <!-- pc -->
    <nav v-if="!isMobile" id="nav-bar" class="navbar w-full flex items-center justify-between py-4 text-xl font-bold"
        :style="{ color: themeStyle.textColor, backgroundColor: themeStyle.backgroundColor }">
        <a href="#" class="logo font-bold text-2xl">摄影工作室</a>
        <ul class="nav-links flex space-x-4">
            <div class="cursor-pointer py-2 px-4 rounded" :class="{ 'underline': selectedTab === tab.name }"
                v-for="tab in tabPage" :key="tab.name" @click="selectTab(tab)">
                {{ tab.name }}
            </div>
        </ul>
        <div class="nav-actions flex items-center">
            <a href="#" class="login px-4 py-2">登录</a>
            <a href="#" class="contact px-4 py-2 rounded-full border-2 border-current">
                联系我们
            </a>
        </div>
    </nav>
    <!-- 移动 -->
    <nav v-else>
        111
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme'
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

// 使用 useDeviceDetect 钩子获取设备信息
const { isMobile } = useDeviceDetect();

// 使用 useThemeStore 获取主题样式和设置主题的方法
const themeStore = useThemeStore();
const { themeStyle, setTheme } = themeStore;

// 定义 tab 页面数组
const tabPage = ref([
    {
        name: '个性服务',
        bgColor: '#f4f1e0',
        txtColor: '#eb5027'
    },
    {
        name: '优秀作品',
        bgColor: '#eb5027',
        txtColor: '#f4f1e0'
    },
    {
        name: '品牌介绍',
        bgColor: '#3077b5',
        txtColor: '#fff'
    }
]);

// 定义当前选中的 tab 页面
const selectedTab = ref(tabPage.value[0].name);

// 初始化时设置默认主题
onMounted(() => {
    const firstTab = tabPage.value[0];

    setTheme(firstTab.bgColor, firstTab.txtColor, firstTab.name);
    setCSSVariables(firstTab.bgColor, firstTab.txtColor, firstTab.name);
});

// 当用户选择不同的 tab 时，更新主题颜色和 CSS 变量
const selectTab = (tab) => {
    selectedTab.value = tab.name;
    setTheme(tab.bgColor, tab.txtColor, tab.name);
    setCSSVariables(tab.bgColor, tab.txtColor);
};

// 设置 CSS 变量，用于动态控制 hover 的颜色变化
const setCSSVariables = (bgColor, txtColor) => {
    document.documentElement.style.setProperty('--color-theme-text', txtColor);
    document.documentElement.style.setProperty('--color-theme-bg', bgColor);
};
</script>

<style scoped>
.underline {
    text-decoration: underline;
    text-underline-offset: 10px;
}

/* 使用 CSS 变量控制 hover 效果 */
.contact {
    background-color: var(--color-theme-bg);
    color: var(--color-theme-text);
}

.contact:hover {
    background-color: var(--color-theme-text);
    color: var(--color-theme-bg);
}
</style>
