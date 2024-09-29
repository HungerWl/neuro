<template>
    <div ref="container" class="lottie-container" :style="{ width: width, height: height }"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, toRefs } from 'vue';
import lottie from 'lottie-web';

export default {
    name: 'LottieAnimation',
    props: {
        animationData: {
            type: Object,
            required: true,
        },
        loop: {
            type: Boolean,
            default: true,
        },
        autoplay: {
            type: Boolean,
            default: true,
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        }

    },

    setup(props) {
        const container = ref(null);
        const { width, height } = toRefs(props); // 解构 props
        let animationInstance = null;

        onMounted(() => {
            animationInstance = lottie.loadAnimation({
                container: container.value,
                renderer: 'svg',
                loop: props.loop,
                autoplay: props.autoplay,
                animationData: props.animationData,
            });
        });

        onBeforeUnmount(() => {
            if (animationInstance) {
                animationInstance.destroy();
            }
        });

        return {
            container,
            width,
            height,
        };
    },
};
</script>

<style scoped>
.lottie-container {
    width: 100%;
    height: 100%;
}
</style>