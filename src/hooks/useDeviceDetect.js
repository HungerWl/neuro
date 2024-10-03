// src/hooks/useDeviceDetect.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useDeviceDetect() {
    const isMobile = ref(window.innerWidth < 768);

    const checkDeviceType = () => {
        isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
        window.addEventListener('resize', checkDeviceType);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkDeviceType);
    });

    return {
        isMobile,
    };
}
