<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/'}">
        <span  class="breadcrumb_text">{{$t(MENU+"home")}}</span>
      </el-breadcrumb-item>
      <template v-if="this.$route.name !== 'home'">
        <el-breadcrumb-item v-for="breadcrumb in this.$route.matched" :key="breadcrumb.name" :to="{path:breadcrumb.path}">
          <span class="breadcrumb_text">{{$t(MENU+breadcrumb.name)}}</span>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'NavBreadcrumb',
  data () {
    return {
      MENU: 'menu.'
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    margin:17px 0px;
    .breadcrumb_text{
      font-weight: normal;
    }
  }
</style>
