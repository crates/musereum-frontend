import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'en',
    messages: {
      'en': Object.assign({}, require('~/locales/en.json'), enLocale),
      'ru': Object.assign({}, require('~/locales/ru.json'), ruLocale),
    }
  })

  Vue.use(ElementUI, {
    i18n: (key, value) => app.i18n.t(key, value)
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}