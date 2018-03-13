<template lang="pug">
  div.mu-app-auth
    el-row.mu-card-vertical(type="flex" justify="center" align="middle")
      el-col(:span="6")
        nuxt
</template>

<script type="text/javascript">
  export default {
    middleware: 'unauth',
  }
</script>

<style>
  html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .mu-card-vertical {
    height: 100vh;
  }
</style>
