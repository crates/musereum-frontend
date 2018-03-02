import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    auth: null
  },
  actions: {
  	async authenticate ({ commit }, { email, password }) {
  		const authData = await (new Promise(resolve => {
  			setTimeout(() => resolve({
  				status: true,
  				privateKey: '0x111fffff',
  				address: '0xffff1111'
  			}), 1000)
  		}))

  		commit('authenticate', authData)

  		return authData
  	}
  },

  mutations: {
  	authenticate (state, authData) {
  		state.auth = { ...authData }
  	}
  }
})

export default store