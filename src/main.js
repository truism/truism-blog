import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import router from "@/router/index";
import store from "@/store/index"
import highLightCode from "highlight.js";
import highLightCss from "highlight.js/styles/monokai-sublime.css";


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(highLightCode);

Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block) => {
    highLightCode.highlightBlock(block);
  });
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
