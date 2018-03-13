const state = {
  locales: ['en', 'ru'],
  locale: 'en',
}

const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      this.app.i18n.locale = locale
      state.locale = locale
    }
  },
}

const actions = {
  setLanguage: ({ commit }, locale) => commit('SET_LANG', locale),
}

export default {
  state,
  mutations,  
  actions,
}