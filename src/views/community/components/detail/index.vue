<template>
  <!-- <div style="position:absolute;top:30px;"> -->
  <div>
    <el-dialog 
      title="小区详情" 
      width="900px" 
      :visible="true" 
      top="10vh"
      @close="close"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      custom-class="mydialog"
    >
      <el-tabs 
        v-model="activeName" 
        tab-position="left" 
        :stretch="false"
        style="height:450px"
      >
        <el-tab-pane label="详情" name="detail">
          <detailInfo :document_id="document_id"/>
        </el-tab-pane>
        <el-tab-pane label="小区图库" name="image">
          <imageInfo :document_id="document_id"/>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
  import detailInfo from './detailInfo'
  import imageInfo from './imageInfo'
  export default {
    props: ['document_id'],
    components: { detailInfo, imageInfo },
    methods: {
      close () {
        this.$emit('close')
      }
    },
    data () {
      return {
        activeName: 'detail'
      }
    }
  }
</script>
<style scoped lang="scss">
.el-tab-pane{
  height:450px;
  overflow:auto
}
</style>
