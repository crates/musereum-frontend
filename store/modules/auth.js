import { Wallet } from 'ethers'

const state = {
  auth: null,
}

const mutations = {
  authenticate (state, data) {
    state.auth = { ...data }
  },
}

const actions = {
  async authenticate ({ commit }, { email, password }) {
    const wallet = await Wallet.fromBrainWallet(email, password)
    const data = {
      status: true,
      privateKey: wallet.privateKey,
      address: wallet.address
    }
    commit('authenticate', data)

    return data
  }
}

const getters = {
  isAuthenticated: state => state.auth !== null,
}

export default {
  state,
  mutations,
  actions,
  getters,
}