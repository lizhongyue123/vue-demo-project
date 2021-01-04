<template>
  <section class="app-main">
    <!--在keep-alive中的在跳转到指定的路由时刷新对应的路由，其余不刷新。  -->
    <keep-alive>
      <!-- 通过keepAlive来达到是否缓存组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不缓存的页面 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  data() {
    return {}
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.app-main {
  width: 100%;
  padding-top: 60px !important;
  min-height: calc(100vh - 60px);
  background-color: rgb(240, 242, 245);
  padding: 0 24px;
  box-sizing: border-box;
}
</style>
