export default {
  namespaced: true,
  state: {
    mimi: "咪咪"
  },
  actions:{
    plugin(state){
      console.log("state",state)
    }
  }
}
