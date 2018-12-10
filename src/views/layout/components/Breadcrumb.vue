<template>
  <div style="padding-top:5px">
    <el-col :span="14">
      <el-breadcrumb separator="/" style="">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <template v-for="item in currPath">
            <el-breadcrumb-item :to="{path:item.path}">{{item.title}}</el-breadcrumb-item>
          </template>
      </el-breadcrumb>
    </el-col>
    <el-col :span="10">
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currPath: []
    }
  },
  watch: {
    $route () {
      this.setBreadcrumb()
    }
  },
  created () {
    this.setBreadcrumb()
  },
  methods: {
    setBreadcrumb () {
      var routerPath = this.$route.matched
      var currPath = []
      for (var i in routerPath) {
        currPath.push({
          title: routerPath[i].meta.title,
          path: routerPath[i].path
        })
      }

      this.currPath = currPath
    }
  }
}
</script>

<style scoped lang="scss">
.page_title{
  color:#475669;
  font-weight:bold;
}
</style>
