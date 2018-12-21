<template>
  <el-container style="height:100%;">
    <el-header height="60px">
      <Header/>
    </el-header>
    <el-container>
      <el-aside width="240px">
        <LeftMenu/>
      </el-aside>
      <el-container>
        <el-main>
          <el-col :span="24" style="height:30px">
            <Breadcrumb/>
          </el-col>
          <el-col :span="24">
            <transition name="fade" mode="out-in">
              <router-view :view-height="viewHeight"></router-view>
            </transition>
          </el-col>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import { Header, LeftMenu, Breadcrumb } from './components'
import * as gui from 'nw.gui'

var win = gui.Window.get()
// win.leaveKioskMode()
win.maximize()

export default {
  name: 'layout',
  components: {
    Header,
    LeftMenu,
    Breadcrumb
  },
  data () {
    return {
      msg: '欢迎登录2eeesee'
    }
  },
  computed: {
    viewHeight () {
      return document.body.clientHeight - 90
      // return 500
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
<style scoped lang="scss">
.el-header {
  background-color: #20a0ff;
  color: #ffffff;
}
.el-aside {
  background-color: #eef1f6;
  text-align: left;
}

.el-main {
  background-color: #fff;
  padding:10px;
  padding-right:0;
  padding-bottom:0;
}
.el-col{
  // border:1px solid #000
}
</style>
