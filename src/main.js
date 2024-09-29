import 'normalize.css';  // 1. 首先引入 Normalize.css 重置浏览器默认样式

import './assets/styles/tailwind/index.css';

import './assets/styles/bootstrap/index.scss';

import 'bootstrap';

import 'bootstrap-icons/font/bootstrap-icons.css';


import { createApp } from 'vue';
import App from './App.vue';
import Vconsole from "vconsole";

new Vconsole();  // 开启调试工具

createApp(App).mount('#app');
