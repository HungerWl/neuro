<template>
    <div id='main-box' :style="{ color: themeStyle.textColor }">
        <!-- 动态组件 -->
        <component :is="getComponent(themeStyle.title)" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme'
import PersonalizedService from "@/components/PersonalizedService.vue"
import ExcellentWork from "@/components/ExcellentWork.vue"

// 使用 useThemeStore 获取主题样式和设置主题的方法
const themeStore = useThemeStore();
const { themeStyle } = themeStore;


// 动态组件
const getComponent = (title) => {
    switch (title) {
        case '个性服务':
            return PersonalizedService;
        case '优秀作品':
            return ExcellentWork;
        default:
            return null;
    }
}

onMounted(() => {
});
</script>

<style scoped lang="scss"></style>