import Vue from "vue"
import Vuex from "vuex"
import Default from "./modules/default"
import Global from "./modules/globalState"
import Test from "./modules/test"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    //分割子主件的状态(解决store臃肿问题)
    Global,
    Default,
    Test
  }
})
