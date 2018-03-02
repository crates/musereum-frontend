<template lang="pug">
  div.app
    el-container(v-if='showHeader')
      el-header
        span logo
    el-container
      el-aside(v-if='showSidebar')
        span Private Wallet data
      el-main
        el-button(@click='toggleAuthTest') Auth Mock
        nuxt
</template>

<script type="text/javascript">
  import { mapState } from 'vuex'
  export default {
    computed: {
      showHeader () {
        return !!this.auth
      },
      showSidebar () {
        return !!this.auth
      },
      auth () {
        return this.$store.state.auth
      },
      ...mapState([ 'auth' ])
    },
    methods: {
      toggleAuthTest () {
        this.$store.dispatch('authenticate', { email: 'some@mail.com', password: 'qwerty' })
      }
    }
  }
</script>

<style>
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
