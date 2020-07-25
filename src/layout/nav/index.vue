<template>
  <div class="container">
    <div class="nav_header_function_container">
      <div class="direction">
        <svg-icon icon-class="direction" class="svg_direction"/>
      </div>
      <div class="breadcrumb">
        <nav-breadcrumb/>
      </div>
      <div class="function">
        <nav-function/>
      </div>
    </div>
    <!-- <div class="nav_tabs_container">
      <nav-tabs/>
    </div> -->
  </div>
</template>
<script>
import NavTabs from './navTabs'
import NavBreadcrumb from './breadcrumb'
import NavFunction from './function'
export default {
  name: 'Nav',
  components: {
    NavTabs,
    NavBreadcrumb,
    NavFunction
  }
}
</script>
<style lang="scss" scoped>
  .container{
    .nav_header_function_container{
      height:48px;
      display: flex;
      align-items: center;
      box-shadow: 0px 1px 3px #e0e0e0;
      .direction{
        width:48px;
        height:100%;
        cursor: pointer;
        .svg_direction{
          margin:14px 14px;
        }
        &:hover{
          background-color: #e0e0e0;
        }
      }
      .breadcrumb{
        height:100%;
      }
      .function{
        height:100%;
        flex-grow:1
      }
    }
    .nav_tabs_container{
      border:solid 1px #EBEEF5;
    }
  }
</style>
