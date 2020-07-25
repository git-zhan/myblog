<template>
  <div class="container">
    <div class="function_item_container">
      <svg-icon icon-class="translate" class="svg_item"/>
    </div>
    <div class="function_item_container">
      <svg-icon icon-class="acvator" class="svg_item"/>
    </div>
    <div class="function_item_container">
      <span>admin</span>
    </div>
    <div class="function_item_container">
      <el-dropdown @command="commandHandle()">
        <i class="el-icon-arrow-down"></i>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="drop in navDropInfo" :key="drop.command" :command="drop.command" :divided="drop.divided" :icon="drop.icon">
              {{drop.label}}
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <div class="translate">

    </div>
    <div class="acvator">

    </div>
    <div class="authority_text">

    </div> -->
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
    justify-content: flex-end;
    .function_item_container{
      height:100%;
      cursor: pointer;
      margin-left:12px;
      padding:14px 0px;
      &:last-child{
        margin-right:12px
      }
    }
  }
</style>
