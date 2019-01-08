<template>
  <div v-loading="pageLoading" style="padding-left:40px;padding-right:20px">
    <el-row style="border-bottom:1px solid #efefef">
      <el-col :span="24">
        <span style="font-size:18px;color:#409EFF">{{info.customer_name}}</span>
        <span style="margin-left:10px">{{info.gender}}</span>
        <span style="margin-left:20px">{{info.common_telephone}}</span>
      </el-col>  
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="24"><span class="label">编号：</span>{{info.document_id}}</el-col>  
      <el-col :span="12"><span class="label">需求区域：</span>{{info.prefer_region}}</el-col>  
      <el-col :span="12"><span class="label">需求面积：</span>{{info.area_min}}-{{info.area_max}}平米</el-col>  
      <el-col :span="12"><span class="label">需求总价：</span>{{info.pay_min}}-{{info.pay_max}}万</el-col>  
      <el-col :span="12"><span class="label">需求楼层：</span>{{info.floor_min}}-{{info.floor_max}}层</el-col>  
      <el-col :span="24"><span class="label">备注：</span>{{info.remark}}</el-col> 
    </el-row>
  </div>
</template>
<script>
  import {getClientDetail} from '@/api/client'

  export default {
    props: ['document_id'],
    data () {
      return {
        pageLoading: true,
        info: {}
      }
    },
    created () {
      var that = this

      getClientDetail({document_id: this.document_id}).then((res) => {
        that.info = res.data
        that.pageLoading = false
      })
    }
  }
</script>
<style scoped lang="scss">
.el-col{
  margin-bottom:14px
}
</style>
