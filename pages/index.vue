<template lang="pug">
  el-row(type="flex" justify="center" align="middle")
    el-col(:span="6")

      el-card.box-card
        el-row(type="flex" justify="center" align="middle" style="margin: 0 auto 30px auto")
          el-col(:span="12")
            el-select(v-model="value" placeholder="Select")
              el-option(
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value")

        el-row(type="flex" class="row-bg" justify="space-between")
          nuxt-link(to="/signup")
            el-button(type="primary") Create

          nuxt-link(to="/login")
            el-button(type="primary") Login
</template>

<script>
  export default {
    layout: 'auth',
  }
</script>