<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div style="padding-top:16px;font-size:26px">VUEADMIN</div>
      </el-col>
      <el-col :span="16">&nbsp;</el-col>
      <el-col :span="4">
        <div style="padding-top:20px;text-align:right;font-size:14px">
          <span>您好，张晓明！</span>
          <span class="logout" @click="logout" style="margin-left:20px;cursor:pointer">退出</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      logout () {
        this.$confirm('确定要退出系统吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.replace('/login/index')
        }).catch(() => {
          console.log('取消退出')
        })
      }
    }
  }
</script>
<style scoped lang="scss">
.logout{
  text-decoration:none;
}
.logout:hover{
  text-decoration:underline;
}
</style>
