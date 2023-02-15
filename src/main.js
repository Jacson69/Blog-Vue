import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './main.scss';
// // 全局注册markdown语法
// import mavonEditor from 'mavon-editor';
// import 'mavon-editor/dist/css/index.css';

const app = createApp(App);

// app.use(VMdEditor);
app.use(createPinia());
app.use(router);

app.mount('#app');
