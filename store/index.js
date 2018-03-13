import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
// import * as localforage from 'localforage'

import * as modules from './modules'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
	key: 'vuex',
	// asyncStorage: true,
	// storage: localforage,
	storage: window.localStorage,
	modules: ['i18n', 'auth']
})

const store = () => new Vuex.Store({
	plugins: [vuexLocalStorage.plugin],
  modules,
})

export default store