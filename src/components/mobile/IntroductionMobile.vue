<template>
    <div id="IntroductionMobile">
        <div class="bg-white rounded-lg shadow-lg mb-4" v-for="(item, index) in receiveCard" :key="index"
            @touchstart="addTouchEffect($event)" @touchend="removeTouchEffect($event)">
            <div class="image-container">
                <img class="w-full h-40 object-cover rounded-t-lg" :src="item.image" alt="Card Image" />
            </div>
            <div class="p-2 text-[#515151]">
                <h2 class="text-xl font-bold mb-2">{{ item.title_mobile }}</h2>
                <p class="text-base mb-0">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, watchEffect } from 'vue';

const receiveCard = ref([])
// 定义 props
const props = defineProps({
    cards: {
        type: Array,
        required: true,
    },
});

// 添加触摸特效的类
const addTouchEffect = (event) => {
    const card = event.currentTarget.querySelector('img');
    card.classList.add('touch-effect');
}

// 移除触摸特效的类
const removeTouchEffect = (event) => {
    const card = event.currentTarget.querySelector('img');
    setTimeout(() => {
        card.classList.remove('touch-effect');
    }, 500*2)
}

// 使用 watchEffect 自动响应 props.cards 的变化
watchEffect(() => {
    receiveCard.value = props.cards
});
</script>

<style scoped lang="scss">
#IntroductionMobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 10px;
    padding: 0 5px 5px;
    /* 控制网格项的间距 */
}

.image-container {
    overflow: hidden;
    /* 确保放大时图片不溢出 */
    border-radius: inherit;
}

img {
    transition: transform 0.3s ease;
    /* 平滑的过渡效果 */
}

/* 触摸时的放大效果 */
.touch-effect {
    transform: scale(1.15);
    /* 轻微放大 */
}
</style>
