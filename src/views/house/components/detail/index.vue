<template>
  <!-- <div style="position:absolute;top:30px;"> -->
  <div>
    <el-dialog 
      title="详情" 
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
        tab-position="top" 
        type="border-card"
        :stretch="false"
      >
        <el-tab-pane label="房源详情" name="detail">
          <detailInfo />
        </el-tab-pane>
        <el-tab-pane label="房源图片" name="image">
          <imageInfo />
        </el-tab-pane>
        <el-tab-pane label="跟进记录" name="follow">
          <followInfo />
        </el-tab-pane>
      </el-tabs>

      <div slot="footer">
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import detailInfo from './detailInfo'
  import imageInfo from './imageInfo'
  import followInfo from './followInfo'
  export default {
    props: ['house_id'],
    components: { detailInfo, imageInfo, followInfo },
    methods: {
      close () {
        this.$emit('close')
      }
    },
    data () {
      return {
        activeName: 'follow'
      }
    }
  }
</script>
<style lang="scss">

</style>
