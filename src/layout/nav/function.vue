<template>
  <div class="container">
    <div class="translate">
      <svg-icon icon-class="translate"/>
    </div>
    <div class="acvator">
      <svg-icon icon-class="acvator"/>
    </div>
    <div class="authority_text">
      <span>admin</span>
      <el-dropdown @command="commandHandle()">
        <i class="el-icon-arrow-down"></i>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="drop in navDropInfo" :key="drop.command" :command="drop.command" :divided="drop.divided" :icon="drop.icon">
              {{drop.label}}
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="drop_menu">

    </div>
  </div>
</template>
<script>
import { NAV_DROPDOWN_MENU as navDropInfo } from '../layout'
export default {
  name: 'NavFunction',
  data () {
    return {
      navDropInfo: navDropInfo
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 40px;
    div{
      margin-left:20px;
      cursor: pointer;
    }
    .authority_text{
      display: flex;
      align-items: center;
    }
  }
</style>
