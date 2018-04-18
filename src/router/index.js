import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/view/login';
import Dialog from '@/view/dialog.vue';
Vue.use(Router);
export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login,
      props: (route) => ({ query: route }),
      meta: { requiresAuth: true }
      // children: [{
      //   path: '/login',
      //   name: 'Dialog',
      //   component: Dialog
      // }]
    },
    {
      path: '/login',
      name: 'Dialog',
      component: Dialog
    }
  ]
});