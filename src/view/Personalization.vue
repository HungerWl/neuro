<template>
    <!-- 个性定制 -->
    <div id="slide-box">
        <div class="title">
            <i class="bi bi-arrow-through-heart-fill"></i>
            <span>{{ slideObj.title }}</span>
        </div>

        <div class="dividing-line">
            <hr>
            <span>生活需要仪式感</span>
            <hr>
        </div>

        <div class="dynamic-box">
            <!-- 动态生成网格项 -->
            <div class="dynamic-item" :class="{ 'col-span-2': index >= 4 }" v-for="(item, index) in customizeList"
                :key="item.id">
                <div class="dynamic-item-box">
                    <img :src="item.image" :alt="item.name" loading="lazy">
                </div>

                <div class="describe">
                    <div class="one">{{ item.name }}</div>
                    <div class="two">{{ item.description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getCustomizeList } from '@/api/index'

const props = defineProps({
    slideObj: {
        type: Object,
        default: () => ({})
    }
});

// 获取个性定制列表
const customizeList = ref([])
const useCustomizeList = async () => {
    const res = await getCustomizeList()
    if (res.code === 200) {
        customizeList.value = res.data
    }
}
useCustomizeList()
</script>


<style scoped lang="scss">
#slide-box {
    @apply flex flex-col justify-center items-center
}

.title {
    background: url('@/assets/images/jpg/2.jpg') no-repeat;
    background-size: cover;
    height: 100px;
    @apply w-full flex flex-col items-center justify-center mb-2 text-white font-bold transition-all;
    @apply md:h-[130px];

    >i {
        @apply text-xl mb-2 animate-bounce text-[red];
        @apply md:text-3xl;
    }

    span {
        @apply text-xl uppercase tracking-wide;
        @apply md:text-[28px];
    }
}

.dividing-line {
    @apply w-[80%] flex items-center py-[20px];
    @apply md-lg:w-[90%];
    @apply 3xl:w-[70%];

    hr {
        flex: 1
    }

    span {
        @apply mx-3 text-[#000] text-lg font-bold tracking-wide;
        @apply md:text-[21px]
    }
}

.dynamic-box {
    @apply w-full grid grid-cols-2 px-2 gap-4;
    @apply md:w-[95%] md:grid-cols-4;
    @apply lg:w-[90%];
    @apply 3xl:w-[70%];

    .dynamic-item {
        @apply relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-center items-center overflow-hidden border border-gray-300 shadow-md;
    }

    .dynamic-item-box {
        @apply w-full h-[230px] overflow-hidden;
        @apply md:h-[200px];
        @apply md-lg:h-[250px];
        @apply lg:h-[450px];

        img {
            @apply w-full h-full object-cover transition-transform duration-300 hover:scale-110;
        }
    }

    .describe {
        @apply w-full p-2;
    }

    .describe .one {
        @apply font-bold pb-1;
        @apply md-lg:text-xl;
    }

    .describe .two {
        @apply text-[12px] text-gray-500;
        @apply md:text-sm;
    }
}
</style>
