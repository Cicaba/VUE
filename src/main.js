// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex"
import store from "./Vuex/store"
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//关闭生产模式下的提示
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.directive('test', {
  // 当绑定元素插入到 DOM 中。
  bind: function (el, binding, vnode) {
    el.childNodes[0].addEventListener("click",()=>{

    })
  },
    inserted: function (...el) {
    // 聚焦元素
  }
})
new Vue({
  el: '#app',
  router,
  store,			//挂载全局
  template: '<App/>',
  components: { App }
})

window.addEventListener("resize",function(){
    store.commit("MENU_SET_CONTENTHEIGHT");
},false)
