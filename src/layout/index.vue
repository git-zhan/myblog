<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <menu-aside></menu-aside>
      </el-aside>
      <el-container>
        <el-header style="padding:0;height:60px;border-top:none">
          <nav-header></nav-header>
          <!-- <nav-tabs></nav-tabs> -->
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MenuAside from './menu'
import NavHeader from './nav'
export default {
  name: 'Layout',
  components: {
    MenuAside,
    NavHeader
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
  .container {
    height: 100%;
  }
  .el-container {
    height: 100%;
  }
</style>
