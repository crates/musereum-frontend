<template lang="pug">
  el-card.box-card
    el-row(type="flex" justify="center" align="middle" style="margin: 0 auto 30px auto")
      el-col(:span="12")
        el-select(@change="setLanguage" v-model="locale" placeholder="Select")
          el-option(
            v-for="item in locales"
            :key="item.value"
            :label="item.label"
            :value="item.value")

    el-row(type="flex" class="row-bg" justify="space-between")
      nuxt-link(to="/signup")
        el-button(type="primary") {{ $t('auth.create') }}

      nuxt-link(to="/login")
        el-button(type="primary") {{ $t('auth.login') }}
</template>

<script>
  export default {
    layout: 'auth',
    data () {
      return {
        locales: [
          { value: 'en', label: 'English'},
          { value: 'ru', label: 'Русский'},
        ],
        locale: this.$store.state.i18n.locale
      }
    },
    methods: {
      setLanguage (locale) {
        this.$store.dispatch('setLanguage', locale)
      }
    }
  }
</script>