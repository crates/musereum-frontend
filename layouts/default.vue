<template lang="pug">
  div.mu-app
    el-header.mu-header(style='height: 64px')

      el-menu.mu-header-nav(mode='horizontal' active-text-color='transparent')
        el-menu-item(index='1')
          el-badge.mu-header-badge(:value='100', :max='10')
            el-button(icon='el-icon-news' size='small')

        el-submenu(index='2')
          template(slot='title') example@example.com
          el-menu-item(index='2-1') item one
          el-menu-item(index='2-2') item two
          el-menu-item(index='2-3') item three

        el-menu-item(index='3')
          el-tooltip(:content="accountLock ? 'Unlock account' : 'Lock account'" placement='top')
            el-switch(v-model='accountLock' active-color='#ff4949' inactive-color='#13ce66' :active-value='true' :inactive-value='false')


    el-container
      el-aside(width="250px")
        el-menu.mu-aside-menu
          el-submenu.mu-sidebar-submenu(index='1')
            template(slot='title')
              .mu-sidebar-submenu__account example@example.com
              .mu-sidebar-submenu__etm-count 0 ETM

            el-menu-item-group
              el-menu-item(index='1-1') Option 1
              el-menu-item(index='1-2') Option 2

          el-submenu.mu-sidebar-submenu(index='2')
            template(slot='title')
              .mu-sidebar-submenu__account example1@example.com
              .mu-sidebar-submenu__etm-count 0 ETM

            el-menu-item-group
              el-menu-item(index='2-1') Option 1
              el-menu-item(index='2-2') Option 2

          el-submenu.mu-sidebar-submenu(index='3')
            template(slot='title')
              .mu-sidebar-submenu__account example2@example.com
              .mu-sidebar-submenu__etm-count 0 ETM

            el-menu-item-group
              el-menu-item(index='3-1') Option 1
              el-menu-item(index='3-2') Option 2
            el-menu-item-group(title='Group 2')
              el-menu-item(index='3-3') Option 3


      el-main
        nuxt
</template>

<script>
  export default {
    middleware: 'auth',
    data() {
      return {
        accountLock: false
      }
    }
  };
</script>

<style>
  html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .mu-app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .mu-header {
    border-bottom: solid 1px #e6e6e6;
  }

  .mu-header-nav {
    float: right;
    border: 0;
  }

  .mu-header-badge {
    line-height: 1;
    z-index: 1;
  }

  .mu-aside-menu {
    height: 100%;
  }

  .mu-sidebar-submenu .el-submenu__title {
    justify-content: center;
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .mu-sidebar-submenu__account {
    line-height: 1.5;
  }

  .mu-sidebar-submenu__etm-count {
    line-height: 1.5;
    color: #999;
  }
</style>
