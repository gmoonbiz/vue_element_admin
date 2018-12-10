<template>
  <el-container style="height:100%;">
    <el-header height="60px">
      <el-row>
        <el-col :span="4">
          VUEADMIN
        </el-col>
        <el-col :span="16">
          bb
        </el-col>
        <el-col :span="4">
          cc
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="240px">
        <el-menu 
          :default-openeds="['1', '2', '3']" 
          text-color="#48576a"
          router="true"
        >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>房源本</template>
            <el-menu-item index="1-1" route="/a/login">选项1-1</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>客户本</template>
            <el-menu-item index="2-1" route="/a/hello">选项2-1</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>管理中心</template>
            <el-menu-item index="3-1">小区</el-menu-item>
            <el-menu-item index="3-2">用户</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main :style="mainStyle">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import * as gui from 'nw.gui'
console.log(gui)
var win = gui.Window.get()
// win.leaveKioskMode()
win.maximize()

export default {
  name: 'home',
  data () {
    return {
      msg: '欢迎登录2eeesee'
    }
  },
  computed: {
    mainStyle () {
      var height = document.body.clientHeight - 60
      return 'height:' + height + 'px'
    }
  },
  methods: {
    full: function (e) {
      win.maximize()
    },
    exit_full: function (e) {
      win.unmaximize()
    },
    tro: function (e) {
      win.minimize()
    }
  }
}
</script>
<style lang="scss">
html, body{
  height:100%;
}
body{
  margin:0; padding:0;
}
.el-header {
  background-color: #20a0ff;
  color: #ffffff;
  text-align: center;
}
.el-aside {
  background-color: #eef1f6;
  text-align: left;
}
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
.el-main {
  background-color: #fff;
  text-align: center;
  line-height: 160px;
}
.el-col{
  border:1px solid #000
}
</style>
