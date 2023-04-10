import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import appHeader from "@/components/Shared/appHeader.vue";
import appBookmarkList from "@/components/Shared/appBookmarkList/index.vue"

import appAxios from '@/utils/appAxios.js';


import "@/assets/style.css"
import store from './store';

const app = createApp(App)
app.component("AppHeader",appHeader);
app.component("AppBookmarkList",appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
