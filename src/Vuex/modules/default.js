export default{
  namespaced: true,
    state: { //默认状态
      clientHeight: document.querySelector('body').clientHeight
    },
    mutations: { //改变状态的方法(同步,调用store.commit("方法"))
      resizeWindow(state) {
        state.clientHeight = document.querySelector('body').clientHeight;
      }
    },
    getters: { //使用gettors调用
      height(state, getters, rootState, rootGetters) {
        return state.clientHeight + "px";
      }
    },
    actions: {
      //类似mutations//可以执行异步操作(使用dispatch()调用返回一个promise)
      async resizeWindow({commit}) {
        await setTimeout(() => {
          commit('Default/resizeWindow',{},{root:true});
        }, 1000);
        await setTimeout(() => {
          commit('Default/resizeWindow',{},{root:true});
        }, 2000);
      }
    }
}