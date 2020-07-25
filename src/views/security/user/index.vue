<template>
  <div class="container">
    <div class="controller_container">
      <div class="query_form">
      <el-form ref="user_form" :model="user" inline size="mini">
        <el-form-item label='用户名'>
          <el-input v-model="user.userName" placeholder="请输入用户名" autofocus/>
        </el-form-item>
        <el-form-item label='用户组名'>
          <el-select placeholder="请选择用户组" v-model="user.usergroupId">
            <el-option  v-for="usergroup in usergroupList"
                        :key="usergroup.objectId"
                        :label="usergroup.usergroupName"
                        :value="usergroup.objectId"/>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="controller_btn_container">
      <el-button type="primary" size="mini" @click="saveHandle()">新增</el-button>
      <el-button type="primary" size="mini">查询</el-button>
      <el-button type="primary" size="mini">重置</el-button>
    </div>
    </div>

    <div class="entity_view_container">
      <el-table :data="userList" stripe border size="mini">
        <el-table-column label="用户名" prop="userName" align="center"/>
        <el-table-column label="用户组名" prop="usergroupId" align="center"/>
        <el-table-column label="手机号" prop="phone" align="center"/>
        <el-table-column label="性别" prop="sex" align="center"/>
        <el-table-column label="生日" prop="birth" align="center"/>
        <el-table-column label="地址" prop="address" align="center"/>
        <el-table-column label="描述" prop="description" align="center"/>
        <el-table-column label="操作" fixed="right" width="160px" align="center">
          <template slot-scope="scope">
            <!-- <el-button type="primary" size="mini" @click="rowHandle(scope.row)">查看</el-button> -->
            <!-- <el-button type="primary" size="mini" @click="rowHandle(scope.row)">新增</el-button> -->
            <el-button type="primary" size="mini" @click="rowHandle(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="rowHandle(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog  :visible.sync="detailVisible"
                :title="detailTitle"
                :from-model="detail"
                center
                >
      <user-detail v-if="detailVisible"/>
    </el-dialog>
  </div>
</template>
<script>
// import { getUserListByForm } from '@/api/security/user'
import UserDetail from './detail'
export default {
  name: 'UserManage',
  components: {
    UserDetail
  },
  data () {
    return {
      userList: [{}],
      usergroupList: [],
      detailVisible: false,
      detailTitle: '',
      detail: {},
      user: {
        userName: '',
        usergroupId: ''
      }
    }
  },
  methods: {
    saveHandle (row) {
      this.detailVisible = true
      this.detailTitle = '添加用户'
      this.detail = row || {}
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    .controller_container{
      display: flex;
    }
  }
</style>
