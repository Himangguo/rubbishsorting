import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false,
    loginOrRegister: true,
  },
  mutations: {
    goSignIn() {
      this.state.showLogin = true
      this.state.loginOrRegister = true
    },
    goSignUp() {
      this.state.showLogin = true
      this.state.loginOrRegister = false
    },
    cancelSign() {
      this.state.showLogin = false
    },
  },
  actions: {
  },
  modules: {
  }
})
