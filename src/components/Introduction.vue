<template>
    <div id='introduction'>
        <h2 class="md:text-4xl md:my-[40px] my-[20px] font-bold text-lg">是什么让我们与众不同</h2>
        <div class="w-full">
            <div class="block md:hidden">
                <IntroductuibMobile :cards="cards"></IntroductuibMobile>
            </div>
            <div class="hidden md:block">
                <IntroductuibPc :cards="cards"></IntroductuibPc>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import IntroductuibPc from '@/components/pc/IntroductionPc.vue'
import IntroductuibMobile from '@/components/mobile/IntroductionMobile.vue'
import { getIntroduction } from '@/api/index.js';

const cards = ref([]);

const useIntriduction = async () => {
    const res = await getIntroduction();
    cards.value = res;
}
useIntriduction();

</script>

<style scoped lang="scss">
#introduction {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
