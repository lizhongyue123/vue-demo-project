<template>
  <div class="navbar">
    <div class="left-module">
      <logo :collapse="false" />
      <hamburger :title="sidebar.opened? '收起': '展开'" id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <span>管理员</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="el-icon-user"></i>用户中心
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span style="display:block;">
              <i class="el-icon-right"></i>退出登录
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Logo from './Sidebar/Logo'
export default {
  components: {
    Hamburger,
    Logo
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  background: linear-gradient(90deg, #2f54eb, #2173dc, #1e93ff);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  width: calc(100% - 0px);
  .left-module {
    display: flex;
    justify-content: space-between;
  }
  .hamburger-container {
    height: 60px;
    line-height: 60px;
    height: 100%;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .right-menu {
    height: 100%;
    line-height: 60px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 14px;
      color: #fff;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .avatar-container {
      margin-right: 10px;
      .avatar-wrapper {
        position: relative;
        .el-icon-caret-bottom {
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
</style>