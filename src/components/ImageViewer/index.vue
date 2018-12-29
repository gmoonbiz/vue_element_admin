<template>
  <el-dialog 
    title="图片预览" 
    width="900px" 
    :visible="true" 
    top="10vh"
    @close="close"
    :close-on-click-modal="false"
    :close-on-press-escape="true"
    append-to-body
    :fullscreen="fullscreen"
  >
    <div style="text-align:right;border-bottom:1px solid #EBEEF5;padding-bottom:4px">
      <el-button v-if="!fullscreen" size="mini" type="primary" @click="fullscreen = true">全屏</el-button>
      <el-button v-if="fullscreen" size="mini" type="primary" @click="fullscreen = false">退出全屏</el-button>
    </div>
    <el-carousel 
      trigger="click" 
      arrow="always"
      indicator-position="inside"
      :initial-index="initialIndex"
      :height="carouselHeight"
    >
      <el-carousel-item v-for="(item, index) in list" :key="item.url" :name="item.url" :label="item.name">
        <div style="text-align:center;height:100%;">
          <img :src="item.url" style="max-height:100%;max-width:100%"/>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-dialog>
</template>
<script>
  export default {
    props: ['current', 'list'],
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
        this.$emit('changePage', val)
      },
      close () {
        this.$emit('close')
      }
    },
    data () {
      return {
        initialIndex: 0,
        fullscreen: false
      }
    },
    created () {
      if (this.current) {
        for (var i in this.list) {
          if (this.current === this.list[i].url) {
            this.initialIndex = parseInt(i)
          }
        }
      }
    },
    computed: {
      carouselHeight () {
        return this.fullscreen ? '550px' : '430px'
      }
    }
  }
</script>
