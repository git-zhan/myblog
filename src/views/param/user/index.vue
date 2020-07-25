<template>
  <div class="container">
    <!-- <div class="query_form">
      <el-form ref="param_user_form" :model="userParam" inline size="mini">
        <el-form-item label=''>
          <el-input v-model="user.userName" placeholder="请输入用户名" autofocus/>
        </el-form-item>
        <el-form-item label='用户组名'>
          <el-select placeholder="请选择用户组">
            <el-option></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div> -->
     <el-button @click="test()">Test</el-button>
    <!-- <div class="entity_view_container"> -->
      <!-- <el-table :data="userList"> -->
        <!-- <el-table-column></el-table-column> -->
      <!-- </el-table> -->

    <!-- </div> -->

  </div>
</template>
<script>
export default {
  name: 'UserManage',
  data () {
    return {
      userList: [],
      user: {

      }
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
