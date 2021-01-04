<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <Navbar />
    <div class="main-container">
      <AppMain />
      <scroll-top></scroll-top>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AppMain, Navbar, Sidebar } from './components'
import ScrollTop from '@/components/ScrollTop'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    ScrollTop
  },
  computed: {
    ...mapGetters(['sidebar']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
