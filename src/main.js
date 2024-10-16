// 引入 Normalize.css 重置浏览器默认样式
import 'normalize.css';

// 引入 TailwindCSS 样式
import './assets/styles/tailwind/index.css';

// 引入 Bootstrap 样式
import './assets/styles/bootstrap/index.scss';

// 引入 Bootstrap
import 'bootstrap';

// 引入 Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createPinia } from 'pinia'

const pinia = createPinia()

// 引入 Vue 和其他依赖
import { createApp } from 'vue';
import App from './App.vue';
import Vconsole from "vconsole";

// 开启调试工具
new Vconsole();

// 创建 Vue 应用实例
const app = createApp(App);


app.use(pinia)
// 挂载应用
app.mount('#app');
