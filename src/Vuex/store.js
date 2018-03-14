
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{							//默认状态
    ScreenHeight:window.innerHeight
  },
  mutations:{						//改变状态的方法(同步,调用store.commit("方法"))
  	changeHeight(state){
  		state.ScreenHeight=state.ScreenHeight+10+"px"
  	}
  },
  getters:{							//使用gettors调用
  	height(state){
  		return state.ScreenHeight+"px"
  	}
  },
  Modules:{
  	//分割子主件的状态(解决store臃肿问题)
  },
  Aciton:{
  	//类似mutations//可以执行异步操作(使用dispatch()调用返回一个promise)
  }
})


