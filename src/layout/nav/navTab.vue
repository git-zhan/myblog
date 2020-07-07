<template>
  <div class="container" @click="jumpTab()">
    <!-- <div class="tab__link">
      {{title}}
    </div> -->
    <router-link :to="{path:path}" class="tab__link">
      {{title}}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'NavTab',
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    jumpTab () {
      console.log(1)
    }
  }
}
</script>
<style lang="scss" scoped>
  // .tab__link{
  //   cursor: pointer;
  // }
  .container{
    cursor: pointer;
     display: inline-block;
    .tab__link{
      border:solid 1px #d8dce5;
      line-height: 26px;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;
      height:26px
    }
  }
  // .container {
  //   display: inline-block;
  //   margin: 4px 0 4px 12px;
  //   cursor: pointer;
  //   .tab_conatiner{
  //     cursor: pointer;
  //   }
  //   .tab_link{
  //     text-decoration: none;
  //     border:solid 1px #e0e0e0;
  //     font-size: 14px;
  //     display: flex;
  //     align-items: center;
  //     padding:1px 4px;
  //     color:#606266;
  //     span{
  //       cursor: pointer;
  //     }
  //   }
  //   .el-icon-close {
  //     margin-left:4px;
  //     cursor: pointer;
  //   }
  // }
</style>
