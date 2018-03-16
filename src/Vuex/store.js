
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{							//默认状态
    clientHeight:document.querySelector('body').clientHeight
  },
  mutations:{						//改变状态的方法(同步,调用store.commit("方法"))
    resizeWindow(state){
      state.clientHeight = document.querySelector('body').clientHeight;
      console.log(state.clientHeight)
    }
  },
  getters:{							//使用gettors调用
  	height(state){
  		return state.clientHeight+"px";
  	}
  },
  Modules:{
  	//分割子主件的状态(解决store臃肿问题)
  },
  actions:{
    //类似mutations//可以执行异步操作(使用dispatch()调用返回一个promise)
    async resizeWindow({commit}){
      await setTimeout(()=>{
        commit('resizeWindow')
      },1000);
      await setTimeout(()=>{
        commit('resizeWindow')
      },2000);
    }
  }
})