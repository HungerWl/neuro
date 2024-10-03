<template>
    <div id="container">
        <div class="flex items-center justify-between flex-nowrap">
            <div v-for="(cardItem, index) in cards" :key="index" class="card-wrap"
                @mousemove="(e) => handleMouseMove(e, index)" @mouseenter="handleMouseEnter"
                @mouseleave="() => handleMouseLeave(index)" ref="cardsRef"
                style="flex-basis: 23%; margin: 1%; max-width: 23%;">
                <div class="card" :style="getCardStyle(index)">
                    <div class="card-bg" :style="[getCardBgTransform(index), cardBgImage(cardItem.image)]"></div>
                    <div class="card-info">
                        <h1>{{ cardItem.title }}</h1>
                        <p class="card-text">{{ cardItem.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, watchEffect } from 'vue';

const props = defineProps({
    cards: {
        type: Array,
        required: true
    }
});

let mouseLeaveDelay = ref(null);
const cardsRef = ref([]);
const cardDimensions = reactive([]);
const mousePositions = reactive([]);

// 处理鼠标移动
const handleMouseMove = (e, index) => {
    const cardElement = cardsRef.value[index];
    if (!cardElement || !cardDimensions[index]) return;
    const rect = cardElement.getBoundingClientRect();
    mousePositions[index].mouseX = e.clientX - rect.left - cardDimensions[index].width / 3;
    mousePositions[index].mouseY = e.clientY - rect.top - cardDimensions[index].height / 3;
};

// 处理鼠标进入
const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay.value);
};

// 处理鼠标离开
const handleMouseLeave = (index) => {
    clearTimeout(mouseLeaveDelay.value);
    mouseLeaveDelay.value = setTimeout(() => {
        mousePositions.forEach((position) => {
            position.mouseX = 0;
            position.mouseY = 0;
        });
    }, 1000);
};

// 计算卡片样式
const getCardStyle = (index) => {
    if (!mousePositions[index] || !cardDimensions[index]) return {};
    const rX = (mousePositions[index]?.mouseX || 0) / cardDimensions[index]?.width * 30;
    const rY = (mousePositions[index]?.mouseY || 0) / cardDimensions[index]?.height * -30;
    return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        transition: 'transform 0.3s ease-out',
    };
};

// 计算卡片背景样式
const getCardBgTransform = (index) => {
    if (!mousePositions[index] || !cardDimensions[index]) return {};
    const tX = (mousePositions[index]?.mouseX || 0) / cardDimensions[index]?.width * -40;
    const tY = (mousePositions[index]?.mouseY || 0) / cardDimensions[index]?.height * -40;
    return {
        transform: `translateX(${tX}px) translateY(${tY}px) scale(1.3)`,
        transition: 'transform 0.3s ease-out',
    };
};

// 卡片背景图
const cardBgImage = (image) => {
    return {
        backgroundImage: `url(${image})`,
    };
};

// 初始化卡片尺寸和鼠标位置
const initializeCardDimensions = async () => {
    await nextTick();
    cardsRef.value.forEach((cardElement, index) => {
        if (cardElement) {
            const rect = cardElement.getBoundingClientRect();
            cardDimensions[index] = {
                width: rect.width,
                height: rect.height,
            };
            mousePositions[index] = {
                mouseX: 0,
                mouseY: 0,
            };
        }
    });
};

// 使用 watchEffect 自动响应 props.cards 的变化并初始化卡片尺寸
watchEffect(() => {
    if (props.cards.length > 0) {
        initializeCardDimensions();
    }
});
</script>

<style scoped lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.container {
    width: 100%;
}

.card {
    position: relative;
    flex: 0 0 90%;
    min-height: 260px;
    max-height: 500px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow:
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset rgba(white, 0.5) 0 0 0 6px;
    transition: 1s $returnEasing;
}

.card-bg {
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition:
        1s $returnEasing,
        opacity 5s 1s $returnEasing;
    pointer-events: none;
}

.card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    transform: translateY(40%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

    p {
        opacity: 0;
        text-shadow: rgba(black, 1) 0 2px 3px;
        transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    * {
        position: relative;
        z-index: 1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
        background-blend-mode: overlay;
        opacity: 0;
        transform: translateY(100%);
        transition: 5s 1s $returnEasing;

    }
}

.card-info h1 {
    font-family: "Playfair Display";
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(black, 0.5) 0 10px 10px;
}

.card-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;

    &:hover {
        .card-info {
            transform: translateY(0);
        }

        .card-info p {
            opacity: 1;
        }

        .card-info,
        .card-info p {
            transition: 0.6s $hoverEasing;
        }

        .card-info:after {
            transition: 5s $hoverEasing;
            opacity: 1;
            transform: translateY(0);
        }

        .card-bg {
            transition:
                0.6s $hoverEasing,
                opacity 5s $hoverEasing;
            opacity: 0.8;
        }

        .card {
            transform: scale(1.04);
            transition: 1s $hoverEasing;
        }
    }
}
</style>
