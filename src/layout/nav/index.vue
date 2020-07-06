<template>
  <div class="container">
    <div class="breadcrumb_container">
      <div class="direction_container">
        <svg-icon icon-class="direction" style="margin-right:16px"/>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
            <el-breadcrumb-item :to="{path:'/'}"><span>{{$t('menu.home')}}</span></el-breadcrumb-item>
            <template v-if="this.$route.path != '/'">
              <el-breadcrumb-item v-for="route in this.$route.matched" :key="route.name" :to="{path:route.path}">
                <span>{{$t('menu.'+route.name)}}</span>
              </el-breadcrumb-item>
            </template>
          </el-breadcrumb>
      </div>
      <div class="function_container">
        <div>
        <svg-icon icon-class="translate"></svg-icon>
        </div>
        <div>
          <svg-icon icon-class="authority"></svg-icon>
        </div>
        <div style="text-align:center">
          admin
        </div>
        <div class="drop_menu" style="display:inline-block">
          <el-dropdown @command="commandHandle()">
            <i class="el-icon-arrow-down"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="drop in navDropInfo" :key="drop.command" :command="drop.command" :divided="drop.divided" :icon="drop.icon">
                  {{drop.label}}
                </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <nav-tabs></nav-tabs>
  </div>
</template>
<script>
import { NAV_DROPDOWN_MENU as navDropInfo } from '../layout'
import NavTabs from './tabs'
export default {
  name: 'Nav',
  components: {
    NavTabs
  },
  data () {
    return {
      navDropInfo: navDropInfo,
      route: this.$route,
      routeList: []
    }
  },
  watch: {
    // $route (to, from) {
    //   this.routeList = this.$route.matched
    // }
  },
  methods: {
    commandHandle (command) {

    }
  }
}
</script>
<style lang="scss" scoped>
  .breadcrumb_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:solid 1px #e0e0e0;
    border-top:none;
    box-shadow: 0 2px 2px #F2F6FC;
    height:48px;
    margin: 4px 0;
    .direction_container{
      margin-left:12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #e0e0e0;
      span{
        font-weight: normal;
      }
    }

    .function_container{
      div {
        width:40px;
        text-align:center;
        font-size: 12px;
      }
      display: flex;
      justify-content: right;
      align-items: center;
    }
  }
</style>
