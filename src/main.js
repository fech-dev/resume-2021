import Vue from "vue";
import "@/plugins/bootstrap-vue";
import "@/components";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
