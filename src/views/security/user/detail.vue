<template>
  <div class="container">
    <el-form ref="user_detail_form" :model="formModel" inline size="mini">
      <el-row>
        <el-col :md="8" :sm="12">
          <el-form-item label="用户名">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="密码">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="用户组名">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="手机号">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="性别">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="生日">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="地址">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12">
          <el-form-item label="描述">
            <el-input v-model="formModel.userName"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'UserDetail',
  props: {
    formModel: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
