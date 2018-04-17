// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './Vuex/store';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import bind from './directive/drag';
import point from './plugin/Math';
import formatDate from './plugin/date';
import 'element-ui/lib/theme-default/index.css';
//关闭生产模式下的提示
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.formatDate = formatDate;
Vue.prototype.point = point;
/* eslint-disable no-new */
Vue.directive('drag', {
  bind
});
new Vue({
  el: '#app',
  router,
  store, //挂载全局
  template: '<App/>',
  components: {
    App
  }
});
window.addEventListener('resize', function() {
  store.dispatch('Default/resizeWindow');
}, false);