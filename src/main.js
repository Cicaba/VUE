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
Vue.directive('drag', {
  // 当绑定元素插入到 DOM 中。
  bind: function (el, binding, vnode) {
    // console.log(binding, vnode)
    let X,Y;
    el.childNodes[0].childNodes[0].addEventListener("mousedown",mousedown,false);
    function mousedown(e){
      X = e.clientX;
      Y = e.clientY; 
      mouse(e.path[1])
    };
    function mousemove(e){
      let oldOffsetX = (document.querySelector('body').clientWidth-el.childNodes[0].clientWidth);
      let oldOffsetY = (document.querySelector('body').clientHeight)*0.15;
      let offsetX = oldOffsetX+(e.clientX - X);
      let offsetY = oldOffsetY+(e.clientY - Y);
      el.childNodes[0].style.left = offsetX+'px';
      el.childNodes[0].style.top = offsetY+'px';
    };
    let mouse = function(el){
      el.childNodes[0].addEventListener("mousemove",mousemove,false)
    };
    el.childNodes[0].childNodes[0].addEventListener('mouseup',e=>{
      el.childNodes[0].childNodes[0].removeEventListener('mousemove',mousemove,false);
      // el.childNodes[0].childNodes[0].removeEventListener('mousedown',mousedown,false);
    })
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
