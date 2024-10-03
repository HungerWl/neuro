// 引入 Normalize.css 重置浏览器默认样式
import 'normalize.css';

// tailwindcss
import '@/assets/styles/tailwind/index.css';

// 引入 Vue 和其他依赖
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import Vconsole from "vconsole";

// 开启调试工具
new Vconsole();

// 创建 Vue 应用实例
const app = createApp(App);

app.use(createPinia())
// 挂载应用
app.mount('#app');
