import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
//import Dialog from "../components/dialog.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
      /*children:[{
      	path:"",
      	name:"Dialog",
      	component:Dialog
      }]*/
    }
  ]
})
