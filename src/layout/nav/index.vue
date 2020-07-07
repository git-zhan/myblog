<template>
  <div class="container">
    <div class="nav_header_function_container">
      <div class="nav_dir_bread">
        <div class="direction">
          <svg-icon icon-class="direction"/>
        </div>
        <div class="breadcrumb">
          <nav-breadcrumb/>
        </div>
      </div>
      <div class="function">
        <nav-function/>
      </div>
    </div>
    <div class="nav_tabs_container">
      <nav-tabs/>
    </div>
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
      justify-content: space-between;
      .nav_dir_bread{
        display: flex;
        align-items: center;
        div {
          display: inline-block;
          margin-left:12px;
          cursor: pointer;
        }
      }
    }
    .nav_tabs_container{
      border:solid 1px #EBEEF5;
    }
  }
  // .breadcrumb_container {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   border:solid 1px #e0e0e0;
  //   border-top:none;
  //   box-shadow: 0 2px 2px #F2F6FC;
  //   height:48px;
  //   // margin: 0px 0;
  //   .direction_container{
  //     margin-left:12px;
  //     display: flex;
  //     align-items: center;
  //     cursor: pointer;
  //     color: #e0e0e0;
  //     span{
  //       font-weight: normal;
  //     }
  //   }

  //   .function_container{
  //     div {
  //       width:40px;
  //       text-align:center;
  //       font-size: 12px;
  //     }
  //     display: flex;
  //     justify-content: right;
  //     align-items: center;
  //   }
  // }
</style>
