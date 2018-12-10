<template>
  <div>
    <el-col span="14">
      <span class="page_title">列表</span>
    </el-col>
    <el-col span="10">
      <el-breadcrumb separator="/" style="float:right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    
  </div>
</template>
<style scoped lang="scss">
.page_title{
  color:#475669;
  font-weight:bold;
}
</style>
