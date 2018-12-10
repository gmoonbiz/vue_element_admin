<template>
  <div>
    ddddddddddddddddl等等
    <div><router-link to="/">Hello</router-link></div>
    <div>
      <a @click="full">最大化</a>
      <a @click="exit_full">退出最大化</a>
      <a @click="tro">最小化</a>
    </div>
  </div>
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
      msg: '欢迎登录2eeeee'
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
