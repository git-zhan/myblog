<template>
  <div class="container">
    <el-menu router
             :default-active="this.$route.path"
             active-text-color="#ffd04b"
             background-color="#545c64"
             text-color="#fff"
             unique-opened>
      <div v-for="route in routes" :key="route.path">
        <template v-if='isHasOneChild(route)'>
          <el-menu-item :index="route.path">{{$t(menu + route.children[0].name)}}</el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="route.path">
            <template slot="title">
              {{$t(menu+route.name)}}
            </template>
            <el-menu-item v-for="routeChild in route.children" :key="routeChild.path" :index="routeChild.path">
              {{$t(menu+routeChild.name)}}
            </el-menu-item>
          </el-submenu>
        </template>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      menu: 'menu.',
      routes: this.$router.options.routes
    }
  },
  methods: {
    isHasOneChild (route) {
      return Array.isArray(route.children) && route.children.length === 1
    }
  }
}

</script>
<style scoped>
  .container {
    background-color: #545c64;
  }
  .el-menu {
    border: none
  }

</style>
