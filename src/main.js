import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import axios from 'axios';
// import Vue from 'vue';

// Vue.prototype.$axios = axios

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
axios.defaults.baseURL="/api";
appInstance.config.globalProperties.$axios = axios;

