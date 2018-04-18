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
let vm = new Vue({
  el: '#app',
  router,
  store, //挂载全局
  template: '<App/>',
  components: {
    App
  }
});
router.beforeEach((to, from, next) => {
  let routes = router.options.routes;
  //递归判断是否跳转路由
  let jump = (arr, to, from, next) => {
    for (let v of arr) {
      if (v.path === to.path) {
        next();
        continue;
      } else {
        if (v.children instanceof Array && v.children.length > 0) {
          jump(v.children, to, from, next);
        }
        next(false);
      }
    }
  };
  jump(routes, to, from, next);
});
vm.$watch('$route', (now) => {
  window.history.pushState(null, null, window.location.origin);
});
window.addEventListener('resize', function() {
  store.dispatch('Default/resizeWindow');
}, false);