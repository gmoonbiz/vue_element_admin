<template>
  <div>
    <el-menu 
      :default-openeds="['house', 'client', 'backend']" 
      text-color="#48576a"
      default-active="/house/add"
      :router="true"
    >
      <template v-for="(item, index) in menuList">
        <el-submenu v-if="!item.hidden && item.children" :index="item.name">
          <template slot="title"><i class="el-icon-message"></i>{{item.meta.title}}</template>
          <template v-for="(child, index_child) in item.children">
            <el-menu-item v-if="!child.hidden" :index="index + '-' + index_child" :route="item.path + '/' + child.path">{{child.meta.title}}</el-menu-item>  
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { constantRouterMap } from '@/router'

export default {
  data () {
    return {
      menuList: constantRouterMap
    }
  },
  computed: {
  }
}
</script>
<style scoped lang="scss">
  .el-menu{
  background-color: #eef1f6;
  color: #48576a;
  .el-menu-item{
    background-color:#e4e8f1;
  }
  .el-submenu__title:hover,
  .el-menu-item:hover{
    background-color:#d1dbe5;
  }
}
</style>
